//Criado atravéz do comando "ng g service carrinho"

import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];
  //Informa que itens será um vetor de IProdutoCarrinho e esse vetor iniciará vázio

  constructor() { }

  obtemCarrinho(){ //Esse método irá trazer a lista de itens
    /*
      É importante lembrar: Geralmente nos ecommerce quando sai do site o carrinho fica salvo, se for olhar dentro de 
      "inspecionar-->application" no navegador, tem uma parte que mostra onde guardar as informações, tem o "Session Storage" 
      e "Local Storage" e tem o "Cookies" que vai ter as informações referentes ao carrinho e ficará salvo dentro do navegador, 
      quando voltar para a pagina do ecommerce ele vai pegar essas informações dentro desse Cookie, vai consultar no banco de 
      dados para ver quais produtos tinha dentro desse carrinho, com isso tem as informações salvas dentro do navegador, essas 
      informações são puxadas do servidor e dai quando entra novamente no ecommerce o carrinho é acoplado novamente, com isso 
      consegue até mandar mensagem para o cliente se o carrinho está esquecido, mander email e talz... 
      
      Mas nesse caso como precisa de um back-end para pegar as informações do carrinho e não é o foco do treinamento agora, 
      salvaremos dentro do Local Storage que permite salvas as informações em um JSon, uma string que pode salvar diversas 
      informações, então todas produtos que colocar dentro do carrinho colocaremos no Local Storage e depois que voltar 
      para essa pagina também irá obter eles dentro do Local Storage.
    */

      this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
      //pega todas informações do carrinho dentro do localStorge e o valor que irá atribuir ao carrinho, será atraves da chave carrinho.
      /*Uma coisa immportante é que isso virá como uma string, e se for trabalhar com isso futuramente como objeto tem que fazer um "parse"
       dessas informações.
       
       Uma outra situação é que o mesmo está informando que o "JSON.parse()" aceita só uma string, mas posso ter um indefinido quando não
       tiver esse carrinho, assim para contornar essa informação coloco o (|| "[]") que pegará uma vetor vázio quando não conseguir localizar
       o que tem dentro do Local Storage, dentro do carrinho.
       */

       return this.itens;
       //Assim como ja tenho o carrinho de compras, já posso retornar o carrinho que vai ser basicamente um item do tipo IProdutoCarrinho[]

  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){ //Metodo adicionar recebe produto do tipo IProtdutoCarrinho
    this.itens.push(produto);
    //Como irá obter essas informações do local Storage, precisa salvar elas ao adicionar ao carrinho.
    //Assim irá dar um push nos itens que ja temos dentro do carrinho , ou seja vai acrescentar aquele novo produto no carrinho
    
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    /*Seta no localStorage o item com a chave ca carrinho. O outro parametro passa os produtos, poderiamos passar apenas o "this.itens", só 
      que o "setItem" ele recebe uma chave que é o "carrinho" e o valor que é uma String, assim é nescessário converter o "this.itens" (Objeto)
      para String e isso se faz através do "JSON.stringify(). 
      
      Assim existe o "parse" que converte o string para o objeto e tem o "stringify" que converte objeto em string.*/

  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    /*
      this.itens irá receber o this.itens.filter() que irá percorrer todo o vetor de itens e a cada vez que ele percorre vai disponibilizr o item
       especifico que estou  trabalhando agora e queremos filtrar o item, onde o id dele seja diferente do produto id que receberá do metodo. Assim,
       ele vai manter todos os produtos ali que temm o id diferente, so ira remover aquele produto com aquele id em especifico. 
    */

    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    //Sobrescreve o carrinho no Local Storage com os novos itens de adicionar 
  }

  limparCarrinho(){
    this.itens = [];
    //"this.itens" recebera um vetor vazio

    localStorage.clear();
    //limpará o Local Storage
  }
}
