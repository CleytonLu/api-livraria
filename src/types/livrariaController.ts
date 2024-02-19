interface LivrariagetAll {
  ID: number;
  Titulo: string;
  Genero: string;
  autor: string;
  editora: string;
}
interface LivrariaCreate {
  Titulo: string;
  Genero: string;
  autor: string;
  editora: string;
  ano_lancamento: number;
}

export type { LivrariagetAll, LivrariaCreate };
