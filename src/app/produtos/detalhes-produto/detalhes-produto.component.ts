import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto: IProduto |undefined;
  //Cria propriedade produtos que será do tipo IProduto ou indefinido
  quantidade = 1;
  //Cria propriedade quantidade, iniciando com a quantidade 1. Será o padrão quantidade 1.

  constructor(

    private produtosService: ProdutosService,
    //injeta o servico de produtos

    private route: ActivatedRoute,
    //injeta o servico de rota

    private notificacaoService: NotificacaoService,
    //Informa que iremos utilizar o notificaçãoService, que será p NotificacaoService

    private carrinhoService: CarrinhoService
    //Injeta o serviço de carrinho
    
  ){ }

  ngOnInit(): void {
    //quando inicializar o componente
    
    const routeParams = this.route.snapshot.paramMap;
    //pegará os parametros da rota. Assim trará todos os parametros da rota.
    
    const produtoId = Number(routeParams.get("id"));
    //pega o prdutoId que estará dentro de route, dando get no id 

    this.produto = this.produtosService.getOne(produtoId);
    //diz que a propriedade produto vai receber produto services.getOne e ele pede para passar o ID do produto, que é o que recebemos através da rota.
    //ele espeera que passamos um numero ao invés da palavra "id" , assim para ter a certeza que estamos passando um numero colocamos o "Number(...)" 
    //Assim ele vai assosiar dentro da nosssa propriedade produto, o produto com aquele id especifico.
  }

  adicionarAoCarrinho() { 
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho!"); /*Utiliza o notificacaoService, utiliza o método notificar, passando 
    uma mensagem que aparecerá na tela.
    
    Depois tem que atrelá esse método ao clique do botão, em 'detalhes-produto.componente.html'
    */
    
    const produto: IProdutoCarrinho = {
      //Cria produto do tipo IProduto

      ...this.produto!,
      //diz que ele vai ter tudo que tem dentro do meu produto. O "!" foi usado porque ele pode ser Indefinido conforne informado acima.

      quantidade: this.quantidade
      //terá a quantidade que ele ira pegar do "this.quantidade"
    }

    this.carrinhoService.adicionarAoCarrinho(produto);
    //passa para dentro do método adicionarAoCarrinho o produto.
  }
}