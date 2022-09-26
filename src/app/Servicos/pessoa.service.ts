import { Endereco } from './../modelos/Endereco';
import { Pessoa } from '../modelos/Pessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService implements OnInit {

  url = 'http://localhost:8082/Cadastro-Clientes/Pessoa/Salvar'

  pessoa = {} as Pessoa

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, pessoa).pipe(catchError(e => {
      console.log(e);
      return EMPTY
    }))
  }

}




