import { Observable, catchError, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Login } from '../modelos/Login';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  login = {} as Login;

  usuario: boolean = false

  url = 'http://localhost:8082/Cadastro-Clientes/Login/BuscarPorEmail'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getLogin(email: string): Observable<Login> {
    return this.http.get<Login>(`${this.url}?email=${email}`).pipe(catchError(err => {
      console.log(err);
      this.usuario = false
      alert('Email Incorreto!')
      window.location.reload();
      return EMPTY
    }))
  }

  cadastrar(log: Login): Observable<Login> {
    return this.http.post<Login>(this.url, log).pipe(catchError(err => {
      console.log(err);
      return EMPTY
    }))
  }

}
