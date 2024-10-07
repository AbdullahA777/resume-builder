import {pool} from '../DB/index.js'
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next(new apiError(401, "Access Token Required"));
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; 

    next(); 
  } catch (err) {
    console.error("Token Error:", err);
    return next(new apiError(403, "Invalid Token"));
  }
};


const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return next(new apiError(400, "All fields are required."));
  }
  
  try {
    const existingUserQuery = 'SELECT * FROM users WHERE email = $1';
    const existingUserResult = await pool.query(existingUserQuery, [email]);

    if (existingUserResult.rows.length > 0) {
      return next(new apiError(400, "user already exists."));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUserQuery = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, email
    `;
    const newUserResult = await pool.query(insertUserQuery, [name, email, hashedPassword]);

    const user = newUserResult.rows[0];

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json(
      new apiResponse(201, { token }, "Instructor registered successfully!")
    );
  } catch (error) {
    
    console.error("SignUp Error:", error);
    return next(new apiError(500, "Internal server error"));
  }
};



const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new apiError(400, "All fields are required."));
  }

  try {
    const userQuery = 'SELECT * FROM users WHERE email = $1';
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return next(new apiError(400, "Invalid credentials."));
    }

    const user = userResult.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return nest(new apiError(400, "Invalid credentials."));
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    console.log(token);
    

    return res
      .status(200)
      .json(new apiResponse(200, { token }, "User signed in successfully!"));
  } catch (error) {
    console.error(error);
    return next(new apiError(500, "Internal server error"));
  }
};



const profile = async (req, res, next) => {
  try {
    const userQuery = `
      SELECT u.id, u.name, u.email, r.*
      FROM users u
      LEFT JOIN resumes r ON u.id = r.user_id
      WHERE u.id = $1
    `;
    const userResult = await pool.query(userQuery, [req.user.userId]);

    if (userResult.rows.length === 0) {
      return next(new apiError(404, "User not found."));
    }

    const user = {
      id: userResult.rows[0].id,
      name: userResult.rows[0].name,
      email: userResult.rows[0].email,
      resumes: userResult.rows.map(row => ({
        id: row.resume_id,
        fullName: row.full_name,
        email: row.email,
        phone: row.phone,
        address: row.address,
        summary: row.summary,
        degree: row.degree,
        institution: row.institution,
        year: row.year,
        template: row.template
      })),
    };

    return res.status(200).json(
      new apiResponse(200, { user }, "Profile fetched successfully!")
    );
  } catch (error) {
    console.error("Profile Fetch Error:", error);
    return next(new apiError(500, "Internal server error"));
  }
};




export  {signIn, signUp, profile, authenticateToken};


