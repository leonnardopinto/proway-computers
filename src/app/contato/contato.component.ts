import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{
formContato = this.fb.group({
//Teremos o form de Cotato e ele utilizar-rá o formBuilder para criar um grupo, que será o grupo do formulário
//Passará um objeto e nesse objeto as chaves dele será os campos do meu formulário.

  nome: ["", [
    //campo nome recebe inicialmente um vetor vazio [""]...

    Validators.minLength(4),
    /*...depois ele recebe por exemplo um segundo vetor que podemos colocar algumas validações para esse campo.
    Posso usar o "Validators" e dizer que quer um tamanho minimo de 4 caracteres.*/

    Validators.required
    //também pode utilizar o "validators" para informar que esse campo é obrigatório seu preenchimento.

  ]],
  assunto: ["", [
    Validators.minLength(10),
    Validators.required
  ]],
  telefone: ["", [
    Validators.minLength(10),
    Validators.required
  ]],
  email: ["", [
    
    Validators.email,
    //Esse é o validador de e-mail que serve para informar se está valido ou não.

    Validators.required
  ]],
  mensagem: ["", [
    Validators.minLength(20),
    Validators.required
  ]],
});

constructor(
  private fb: FormBuilder
  /*
    O FormBuilder basicamente irá agrupar todos os campos que estão presentes no meu formulario e ele me permite fazer algumas validações
   como por exemplo: Dizer que o nome terá um minimo de tantos caracteres para ai sim meu form ser válido.
  */
){}

ngOnInit(): void{
}

enviarFormulario(){
  alert("A mensagem foi enviada!");
  this.formContato.reset();
  //Depois que aparecer a mensagem, ele limpará o formulário
}

}