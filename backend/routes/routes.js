import {Router} from 'express'
import { authenticateToken, profile, signIn, signUp } from '../controllers/user.controller.js'
import { allResumes, createResume, deleteResume, updateResume } from '../controllers/resume.controller.js'


const router = Router()

router.route('/signUp').post(signUp)
router.route('/signIn').post(signIn)
router.route('/profile').get(authenticateToken, profile)
router.route('/create-resume').post(authenticateToken, createResume)
router.route('/all-resumes').get(authenticateToken, allResumes)
router.route('/find-resume/:id').get(authenticateToken, allResumes)
router.route('/update-resume/:id').put(authenticateToken, updateResume)
router.route('/delete-resume/:id').delete(authenticateToken, deleteResume)

export default router