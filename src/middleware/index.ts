import { createLivro } from "../controllers/schemas";

export const inputValidation = (req: any, res: any, next: any) => {
  const validationError = createLivro.safeParse(req.body);

  console.log("validationError", validationError);

  if (!validationError.success) {
    res.status(400).json(validationError);
  } else {
    res.status(200).json(validationError);
    next();
  }
};
