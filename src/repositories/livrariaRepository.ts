import { conexao } from "../databases";
import { livrariaRepositoryProps } from "../types";

export const create = ({ body }: livrariaRepositoryProps) => {
  const query = "INSERT INTO LIVROS SET ?";

  return new Promise((resolve, reject) => {
    conexao.query(query, body, (error, result) => {
      if (error) {
        console.error("Erro ao criar livro:", error);
        return reject({ message: "Erro ao criar livro" });
      }

      const res = JSON.parse(JSON.stringify(result));
      resolve(res[0]);
    });
  });
};

export const findAllLivros = () => {
  const query = "SELECT * FROM livros";

  return new Promise((resolve, reject) => {
    conexao.query(query, (error, result) => {
      if (error) return reject({ messaage: "Erro ao buscar livros" });
      const livros = JSON.parse(JSON.stringify(result));

      return resolve(livros);
    });
  });
};

export const getId = ({ id }: livrariaRepositoryProps) => {
  const query = "SELECT * FROM livros WHERE ID = ?";

  return new Promise((resolve, reject) => {
    conexao.query(query, id, (error, result) => {
      if (error) return reject({ message: "Erro ao buscar livro" });

      const res = JSON.parse(JSON.stringify(result));

      return resolve(res);
    });
  });
};

export const update = ({ body, id }: livrariaRepositoryProps) => {
  const query = "UPDATE livros SET ? WHERE id = ?";

  return new Promise((resolve, reject) => {
    conexao.query(query, [body, id], (error, result) => {
      if (error) return reject({ message: "Erro ao atualizar livro" });

      const res = JSON.parse(JSON.stringify(result));

      return resolve(res);
    });
  });
};

export const remove = ({ id }: livrariaRepositoryProps) => {
  const query = "DELETE FROM livros WHERE id = ?";

  return new Promise((resolve, reject) => {
    conexao.query(query, id, (error, res) => {
      if (error) return reject({ message: "Erro ao deletar livro" });

      const result = JSON.parse(JSON.stringify(res));

      return resolve(result);
    });
  });
};
