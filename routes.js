import express from "express";
import { getUsers, addUser, deleteUser, updateUser } from "./controllers/users.js";
import { getUser } from './controllers/login.js';


const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/user", getUser);

// Adicione a rota de login aqui
router.post("/login", );

export default router;
