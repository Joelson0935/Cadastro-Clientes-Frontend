import { Endereco } from "./Endereco";

export interface Pessoa {
  id: number;
  nome: string;
  sobrenome: string;
  idade: number;
  sexo: string;
  telefone: number;
  endereco: Endereco;
}

