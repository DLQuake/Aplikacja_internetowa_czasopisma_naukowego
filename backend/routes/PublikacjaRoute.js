import express from "express";
import {
    getPublikacje,
    getPublikacjeById,
    createPublikacje,
    updatePublikacje,
    deletePublikacje
} from "../controllers/Publikacje.js";

const router = express.Router();

router.get('/publikacje', getPublikacje);
router.get('/publikacje/:id', getPublikacjeById);
router.post('/publikacje', createPublikacje);
router.patch('/publikacje/:id', updatePublikacje);
router.delete('/publikacje/:id', deletePublikacje);

export default router;