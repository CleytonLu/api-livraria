import { create, findAllLivros, getId, remove, update } from "../repositories";
import { LivrariaCreate, LivrariagetAll } from "../types";

export const getLivros = async (_: any, res: any) => {
  const result = (await findAllLivros()) as LivrariagetAll;

  return res.status(200).json(result);
};

export const getLivrosId = async (req: any, res: any) => {
  const id = req.params;

  const result = await getId({ id });
  return res.json(result);
};

export const createLivro = async (req: any, res: any) => {
  const body = req.body as LivrariaCreate;

  const result = await create({ body });

  return res.json(result);
};

export const updateLivro = async (req: any, res: any) => {
  const {
    body,
    params: { id },
  } = req;

  const result = await update({ body, id });

  res.json(result);
};

export const deleteLivro = async (req: any, res: any) => {
  const id = req.params.id;

  const result = await remove({ id });

  res.json(result);
};
