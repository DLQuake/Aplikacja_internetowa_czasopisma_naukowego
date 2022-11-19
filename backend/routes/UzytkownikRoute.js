import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Uzytkownicy.js";

const router = express.Router();

router.get('/uzytkownicy', getUsers);
router.get('/uzytkownicy/:id', getUserById);
router.post('/uzytkownicy', createUser);
router.patch('/uzytkownicy/:id', updateUser);
router.delete('/uzytkownicy/:id', deleteUser);

export default router;