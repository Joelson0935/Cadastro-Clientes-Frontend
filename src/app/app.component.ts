import { AutenticarService } from './Servicos/autenticar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cadastro';

  mostrarMenu: boolean = false

  constructor(autenticar: AutenticarService) { }
  ngOnInit(): void {

  }


}
