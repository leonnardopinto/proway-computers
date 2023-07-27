/*
  Modulo criado com o comando "ng ng module produtos --route produtos --module app.module",
    acrescentamos a rota para esse módulo e será atrelado ao app.module.
  Se for no app-routing.module.ts veremos que já foi inserido automaticamente uma rota
   destinada a produtos em formato de leasyload.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesProdutoComponent}
  //Adiciona o path que ira servir a página "produtos/id" , ele irá abrir o component: "DetalhesProdutoComponent"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
