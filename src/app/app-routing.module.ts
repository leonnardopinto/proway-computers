//Para criar esse arquivo coloquei comando "ng generate module app-routing --flat --module app.module "

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  //Cria as rotas do tipo routes

  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  //Com o comando automatico ele já cria a rota destinado a produtos em formato leasyload.

  { path: "", redirectTo: "produtos", pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  //Faz com que quando abra o site já redirecione automaticamente para a pagina de produtos.

  { path: "**", component: NaoEncontradaComponent }
  //Quando entrar em uma pagina que não exite, carregará o componente de página não encontrada.
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //Acrescenta na importação o RouterModule
  ],
  exports: [
    RouterModule                 //Acrescenta na exportação o RouterModule
  ]
})
export class AppRoutingModule { }