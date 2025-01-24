import express from 'express';
import handleNewSubscriber from '../controllers/newsletterController.js';

const router=express.Router();

router.post('/',handleNewSubscriber);

export default router