import express from "express";
import {
    ShowPublicationsOnHomePage,
    ShowPublicationsOnHomePageById,
    getPublications,
    getPublicationById,
    createPublication,
    updatePublication,
    deletePublication
} from "../controllers/Publications.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/allpublications', ShowPublicationsOnHomePage);
router.get('/allpublications/:id', ShowPublicationsOnHomePageById);
router.get('/publications',verifyUser, getPublications);
router.get('/publications/:id',verifyUser, getPublicationById);
router.post('/publications',verifyUser, createPublication);
router.patch('/publications/:id',verifyUser, updatePublication);
router.delete('/publications/:id',verifyUser, deletePublication);

export default router;