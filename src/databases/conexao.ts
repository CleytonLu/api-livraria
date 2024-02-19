import mysql from "mysql";

interface configProps {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

const config: configProps = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "14102023",
  database: "livraria",
};

export const conexao = mysql.createConnection(config);

conexao.connect();
