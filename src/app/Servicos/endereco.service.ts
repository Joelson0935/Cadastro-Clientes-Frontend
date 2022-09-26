import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Endereco } from '../modelos/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService implements OnInit {

  constructor(private http: HttpClient) { }

  endereco = {} as Endereco

  url = 'http://localhost:8082/Cadastro-Clientes/Endereco/Salvar'

  ngOnInit(): void {

  }

  buscarCep(cep: any): Observable<Endereco> {
    const cepURL = `https://viacep.com.br/ws/${cep}/json/`
    return this.http.get<Endereco>(cepURL).pipe(catchError(e => {
      console.log(e);
      return EMPTY
    }))
  }

  salvarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.url, endereco).pipe(catchError(err => {
      console.log(err);
      return EMPTY
    }))
  }











}
