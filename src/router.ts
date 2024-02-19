import { Router } from "express";
import {
  createLivro,
  deleteLivro,
  getLivros,
  getLivrosId,
  updateLivro,
} from "./controllers";

export const router = Router();

router.post("/livros", createLivro);
router.get("/livros", getLivros);
router.get("/livros/:id", getLivrosId);
router.put("/livros/:id", updateLivro);
router.delete("/livros/:id", deleteLivro);
