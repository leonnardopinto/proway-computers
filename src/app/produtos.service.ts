//Criado com o comando "ng g service produtos"
//Esse serviço que vai ter acesso a lista de produtos

import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  //tem acesso a lista de produtos da arraylist

  constructor() { }
 
  getAll(){                   //método
    return this.produtos;
    //retorna-rá a lista de produtos
  }

  getOne(produtoId: number){  //método
    //recebe o id do produto

    return this.produtos.find(produto => produto.id == produtoId);
    //retorna o produto atravez daquele id. usa o metodo find para encontrar o produto atraves de uma condição que especificar.
    //quero especificar que irá encontrar um produto o qual o produto.id seja igual o produtoId que recebemos da função, parametro da função. 
  }

}
