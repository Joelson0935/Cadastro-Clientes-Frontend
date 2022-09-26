
export interface Endereco {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge?: number;
  gia?: string;
  ddd?: number;
  siafi?: number;
}
