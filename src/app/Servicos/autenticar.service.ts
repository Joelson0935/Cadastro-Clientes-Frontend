import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  mostrarMenu = new EventEmitter<boolean>();

  constructor() { }
}
