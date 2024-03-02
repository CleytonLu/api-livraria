import { z } from "zod";

export const createLivro = z.object({
  titulo: z
    .string({
      required_error: "Titulo é obrigatório",
      invalid_type_error: "Titulo deve ser uma string",
    })
    .min(3, "Titulo deve ter no mínimmo 3 caracteres"),
  genero: z
    .string({
      required_error: "Gênero é obrigatório",
      invalid_type_error: "Gênero deve ser uma string",
    })
    .min(3, "Gênero deve ter no mínimmo 3 caracteres"),
  autor: z
    .string({
      required_error: "Autor é obrigatório",
      invalid_type_error: "Autor deve ser uma string",
    })
    .min(3, "Titulo deve ter no mínimmo 3 caracteres"),
  editora: z
    .string({
      required_error: "Editora é obrigatório",
      invalid_type_error: "Editora deve ser uma string",
    })
    .min(3, "Titulo deve ter no mínimmo 3 caracteres"),
  ano_publicacao: z.number({
    required_error: "Ano da publicação é obrigatório",
    invalid_type_error: "Ano da publicação deve ser um número",
  }),
});

export type CreateLivro = z.infer<typeof createLivro>;
