import express from "express";

import { getUsers, getUsersById, createUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users', createUser);

export default router