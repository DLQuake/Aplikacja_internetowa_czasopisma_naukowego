import express from "express";
import {
    getPublications,
    getPublicationById,
    createPublication,
    updatePublication,
    deletePublication,
    ShowPublicationsOnHomePage
} from "../controllers/Publications.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/allpublications', ShowPublicationsOnHomePage);
router.get('/publications',verifyUser, getPublications);
router.get('/publications/:id',verifyUser, getPublicationById);
router.post('/publications',verifyUser, createPublication);
router.patch('/publications/:id',verifyUser, updatePublication);
router.delete('/publications/:id',verifyUser, deletePublication);

export default router;