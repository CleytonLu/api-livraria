import { Router } from "express";
import {
  createLivro,
  deleteLivro,
  getLivros,
  getLivrosId,
  updateLivro,
} from "./controllers";
import { inputValidation } from "./middleware";

export const router = Router();

router.post("/livros", inputValidation, createLivro);
router.get("/livros", getLivros);
router.get("/livros/:id", getLivrosId);
router.put("/livros/:id", /* inputValidation, */ updateLivro);
router.delete("/livros/:id", deleteLivro);
