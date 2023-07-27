import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../produtos/produtos';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] = [];
  //declara propriedade, utilizando a intarface IProdutoCarrinho que será um vetor e inicialmente estará vazio
  //Para fazer o importe do IProdutoCarrinho precionamos as teclas --> Control = Space

  total = 0;
  //cria propriodade total que iniciará com 0

  constructor(
    public carrinhoService: CarrinhoService,
    //Implementa o serviço de carrinho

    private router: Router
    //Implementa o serviço de roteamento

  ){}

  ngOnInit(): void { //Metodo que carrega dados ao abrir a pagina
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    //passa os itens do carrinho atravez do metodo obtem carrinho

    this.calculaTotal();
    //esse comando dentro do ngOnInit irá calcular o total assim que a pagina for aberta
  }

  calculaTotal(){ //Metodo que percorrerá todos os itens do carrinho e calculará quantidade e valores
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0);
    /*
      Percorre todos os itens desse carrinho, multiplicando o preço x quantidade e somando isso recursivamente até os produtos do 
    carrinho acabar, assim calcula o total dessa forma e finaliza associando a propriedade total. 
      O ",0" ele passa qual seria o valor default. 
    */
  }

  removerProdutoCarrinho(produtoId: number){ //Quando clicar no botão irá passar o produtoId do tipo Number ao método...
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    //...que irá filtrar dentro dos meus itens aquele item que tenha o id, irá remover ele ali de dentro.
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    //usa o serviço de carrinho e usa o metodo para remover tambem dentro de nosso local Storage, passando o produtoID.
    this.calculaTotal();
    //depois que remover o item do carinho, depois que remover do local Storage, calcula novamente o total para atualizar.
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    //mostra  uma notificação

    this.carrinhoService.limparCarrinho();
    //limpa os itens do carrinho
    
    this.router.navigate(["produtos"]);
    //faz a nevegação do cliente para a pagina de produtos
  }
}
