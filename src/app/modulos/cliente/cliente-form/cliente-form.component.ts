
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Plano {
  value: string;
  viewValue: string;
}

interface TipoPagamento {
  value: string;
  viewValue: string;
}

interface Periodo {
  value: string;
  viewValue: string;
}

interface StatusCliente {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  planos: Plano[] = [
    {value: 'Basico', viewValue: 'Basico'},
    {value: 'Medio', viewValue: 'Medio'},
    {value: 'Total', viewValue: 'Total'}
  ];

  tipoP: TipoPagamento[] = [
    {value: 'Basico', viewValue: 'Basico'},
    {value: 'Medio', viewValue: 'Medio'},
    {value: 'Total', viewValue: 'Total'}
  ];

  periodos: Periodo[] = [
    {value: 'Basico', viewValue: 'Basico'},
    {value: 'Medio', viewValue: 'Medio'},
    {value: 'Total', viewValue: 'Total'}
  ];

  statusClientes: StatusCliente[] = [
    {value: 'A', viewValue: 'ATIVO'},
    {value: 'I', viewValue: 'INATIVO'},
  ];

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.clienteForm = this.fb.group({
      id: ['', []],
      nome:['', Validators.required],
      rg:['', []],
      cpf:['', Validators.required],
      dataDeNascimento:['', []],
      endereco:['', []],
      telefone: ['', []],
      email:['', [Validators.required, Validators.email]],
      razaoSocial:['', [Validators.required]],
      nomeFantasia: ['', []],
      cnpj:['', [Validators.required]],
      ramoDeAtividade: ['', []],
      endComercial: ['', []],
      telComercial: ['', []],
      emailComercial: ['', []],
      plano: ['', []],
      dataDeInicio:['', []],
      dataFim:['', []],
      tipoPagamento:['', []],
      valor:['', []],
      periodo:['', []],
      statusCliente:['', []],
      foto:['', []]
    });
  }

  onSumit(){
    

    if(this.clienteForm.valid){
      console.log(this.clienteForm.value)
    }
    
  }
}
