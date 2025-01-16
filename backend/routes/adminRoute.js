import express from 'express';
import getAllStudents from '../controllers/adminController.js';
import verifyAdmin from '../middlewares/verifyAdmin.js';

const router=express.Router();

router.post('/', verifyAdmin ,getAllStudents);


export default router