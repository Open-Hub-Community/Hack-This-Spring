import express from "express";
import handleNewRegistration from "../controllers/registerController.js";

const router= express.Router();

router.post('/',handleNewRegistration)
export default router;