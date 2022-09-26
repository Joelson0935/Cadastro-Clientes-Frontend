import { EnderecoService } from './../../Servicos/endereco.service';
import { Endereco } from '../../modelos/Endereco';
import { Pessoa } from './../../modelos/Pessoa';
import { PessoaService } from './../../Servicos/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pessoa = {} as Pessoa
  endereco = {
    id: 0,
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  } as Endereco

  formPessoa = this.builder.group({

    id: ['', Validators.compose([])],

    nome: ['', Validators.compose([Validators.required, Validators.maxLength(18),
    Validators.minLength(4), Validators.pattern('[a-zA-Záéíóúãõâêô`àèç ]+')])],

    sobrenome: ['', Validators.compose([Validators.required, Validators.maxLength(60),
    Validators.minLength(15), Validators.pattern('[a-zA-Záéíóúãõâêô`àèç ]+')])],

    idade: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(120)])],

    sexo: ['', Validators.compose([Validators.required])],

    telefone: ['', Validators.compose([Validators.required,
    Validators.pattern('([1-9]{2})([ ])?([0-9]{4,5})([-])?([0-9]{4})'),
    Validators.maxLength(13), Validators.minLength(11)])],
    cep: ['', Validators.compose([Validators.required, Validators.pattern('^([0-9]{5})([-])?([0-9]{3})$'),
    Validators.maxLength(9), Validators.minLength(8)])],
    logradouro: [''],
    complemento: [''],
    bairro: [''],
    localidade: [''],
    uf: [''],
    ibge: [''],
    gia: [''],
    ddd: [''],
    siafi: ['']
  })

  constructor(
    private servicoPessoa: PessoaService,
    private servicoEndereco: EnderecoService,
    private builder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  buscarCep() {
    if (this.formPessoa.controls['cep'].status != 'INVALID') {
      this.servicoEndereco.buscarCep(this.formPessoa.value.cep).subscribe(endereco => {
        this.endereco = endereco
        console.log('FormPessoa: ', this.formPessoa);
      })

    } else {
      alert('preencha os campos acima primeiro.')
      this.formPessoa.value.cep = this.formPessoa.reset()
    }
  }

  salvarCadastro() {
    console.log(this.formPessoa);


    if (this.formPessoa.valid) {

      this.pessoa.id = this.formPessoa.value.id
      this.pessoa.nome = this.formPessoa.value.nome
      this.pessoa.sobrenome = this.formPessoa.value.sobrenome
      this.pessoa.idade = this.formPessoa.value.idade
      this.pessoa.sexo = this.formPessoa.value.sexo
      this.pessoa.telefone = this.formPessoa.value.telefone
      this.pessoa.endereco = this.endereco

      this.servicoPessoa.salvarPessoa(this.pessoa).subscribe(() => {
        console.log(this.pessoa);
        alert('Cadastro Realizado com Sucesso!')
        this.route.navigate(['login'])
      })
    } else {
      alert('Preencha os Campos Abaixo Corretamente.')
    }
  }

}


