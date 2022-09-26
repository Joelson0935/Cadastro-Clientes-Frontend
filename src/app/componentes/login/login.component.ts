import { AutenticarService } from './../../Servicos/autenticar.service';
import { Login } from './../../modelos/Login';
import { LoginService } from './../../Servicos/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {} as Login;

  usuarioAutenticado: boolean = false

  formLogin = this.builder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(9)]]
  })

  constructor(
    private builder: FormBuilder, private route: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {
  }

  Logar() {
    console.log(this.formLogin);

    this.service.getLogin(this.formLogin.value.email).subscribe(l => {
      this.login = l
      if (this.formLogin.value.senha == this.login.senha) {
        this.formLogin.reset()
        this.service.usuario = true
        this.route.navigate(['form'])
      } else {
        this.service.usuario = false
        alert('Senha Incorreta!')
        window.location.reload();
      }
    })
  }

}

