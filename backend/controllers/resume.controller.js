// Create a Resume
const createResume=  async (req, res, next) => {
    const {
      fullName,
      email,
      phone,
      address,
      summary,
      degree,
      institution,
      year,
      template, 
    } = req.body;
  
    if (!fullName || !email || !phone || !address || !summary) {
      return next(new apiError(400, "Please provide all required fields."));
    }
  
    try {
      // Insert new resume into the database
      const insertResumeQuery = `
        INSERT INTO resumes (full_name, email, phone, address, summary, degree, intitution, year, template, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING id, full_name, email, phone, address, summary, education, experience, skills, template
      `;
  

  
      const newResumeResult = await pool.query(insertResumeQuery, [
        fullName,
        email,
        phone,
        address,
        summary,
        degree,
        institution,
        year,
        template || 1, 
        req.user.userId, 
      ]);
  
      const resume = newResumeResult.rows[0];
  
      return res.status(201).json(
        new apiResponse(201, { resume }, "Resume created successfully!")
      );
    } catch (error) {
      console.error("Resume Creation Error:", error);
      return next(new apiError(500, "Internal server error"));
    }
  };
  
  const allResumes =  async (req, res, next) => {
    try {
      // Query to get resumes for the authenticated user, ordered by creation date
      const getResumesQuery = `
        SELECT * FROM resumes 
        WHERE user_id = $1 
        ORDER BY created_at DESC
      `;
  
      const resumesResult = await pool.query(getResumesQuery, [req.user.userId]);
      const resumes = resumesResult.rows;
  
      return res.status(200).json(
        new apiResponse(200, { resumes }, "Resumes fetched successfully!")
      );
    } catch (error) {
      console.error("Fetch Resumes Error:", error);
      return next(new apiError(500, "Internal server error"));
    }
  };
  
  const findResume = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      // Query to find the resume by its ID
      const getResumeQuery = `
        SELECT * FROM resumes 
        WHERE id = $1
      `;
      
      const resumeResult = await pool.query(getResumeQuery, [id]);
      const resume = resumeResult.rows[0];
  
      // If no resume is found
      if (!resume) {
        return next(new apiError(404, "Resume not found."));
      }
  
      // Ensure the resume belongs to the authenticated user
      if (resume.user_id !== req.user.userId) {
        return next(new apiError(403, "Unauthorized access."));
      }
  
      // Return the resume data
      return res.status(200).json(
        new apiResponse(200, { resume }, "Resume fetched successfully!")
      );
    } catch (error) {
      console.error("Fetch Resume Error:", error);
      return next(new apiError(500, "Internal server error"));
    }
  };
  
  const updateResume = async (req, res, next) => {
    const { id } = req.params;
    const {
      fullName,
      email,
      phone,
      address,
      summary,
      degree,
      institution,
      year,
      template,
    } = req.body;
  
    try {
      // Query to find the existing resume by its 
      const getResumeQuery = `
        SELECT * FROM resumes 
        WHERE id = $1
      `;
      const existingResumeResult = await pool.query(getResumeQuery, [id]);
      const existingResume = existingResumeResult.rows[0];
  
      // If no resume is found
      if (!existingResume) {
        return next(new apiError(404, "Resume not found."));
      }
  
      // Ensure the resume belongs to the authenticated user
      if (existingResume.user_id !== req.user.userId) {
        return next(new apiError(403, "Unauthorized access."));
      }
  
      // Update query
      const updateResumeQuery = `
        UPDATE resumes
        SET full_name = $1, email = $2, phone = $3, address = $4, summary = $5,
        degree = $6, institution = $7, year = $8, template = $9
        WHERE id = $10
        RETURNING *
      `;
  
      const updatedResumeResult = await pool.query(updateResumeQuery, [
        fullName || existingResume.full_name,
        email || existingResume.email,
        phone || existingResume.phone,
        address || existingResume.address,
        summary || existingResume.summary,
        degree || existingResume.degree,
        institution || existingResume.institution,
        year || existingResume.year,
        template || existingResume.template,
        id,
      ]);
  
      const updatedResume = updatedResumeResult.rows[0];
  
      // Respond with the updated resume
      return res.status(200).json(
        new apiResponse(200, { resume: updatedResume }, "Resume updated successfully!")
      );
    } catch (error) {
      console.error("Update Resume Error:", error);
      return next(new apiError(500, "Internal server error"));
    }
  };
  
  const deleteResume = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      // Query to find the existing resume by its ID
      const getResumeQuery = `
        SELECT * FROM resumes 
        WHERE id = $1
      `;
      const existingResumeResult = await pool.query(getResumeQuery, [id]);
      const existingResume = existingResumeResult.rows[0];
  
      // If no resume is found
      if (!existingResume) {
        return next(new apiError(404, "Resume not found."));
      }
  
      // Ensure the resume belongs to the authenticated user
      if (existingResume.user_id !== req.user.userId) {
        return next(new apiError(403, "Unauthorized access."));
      }
  
      // Delete the resume
      const deleteResumeQuery = `
        DELETE FROM resumes
        WHERE id = $1
      `;
      await pool.query(deleteResumeQuery, [id]);
  
      // Respond with success message
      return res.status(200).json(
        new apiResponse(200, null, "Resume deleted successfully.")
      );
    } catch (error) {
      console.error("Delete Resume Error:", error);
      return next(new apiError(500, "Internal server error"));
    }
  };
  

export {
    createResume,
    allResumes,
    findResume,
    updateResume,
    deleteResume
}
  


  



  
  
  