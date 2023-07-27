/*
  Criado através do "ng generate module produtos --route produtos --module app.module" para prabalhar com o leasyload,
    assim, tudo que está relacionado a produtos irá ficar dentro desse modulo e dai quando a pagina carregar, o 
    carregamento será mais rápido.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent //Automaticamente já declarou o componente devido ao uso da flag --module
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule //importa o formsModule, para podeter trabalhar dentro de  detalhes-produto.component.html na parte de quantidade
  ]
})
export class ProdutosModule { }
