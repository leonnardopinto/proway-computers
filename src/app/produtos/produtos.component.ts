import { Component, OnInit } from '@angular/core';
import { IProduto } from './produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
produtos: IProduto[] |undefined;
/*Adicionar a propriedade de produtos. Diz que produtos pode ser uma lista de produtos ou pode ser indefinido*/

constructor(
  private produtosService: ProdutosService,
  //faz a importação do serviço de produtos. Diz produtosServices será o ProdutosServices, será o serviço que criamos.
  private route: ActivatedRoute
  //faz a importação do serviço de rota.
  ){ }

ngOnInit(): void{
  const produtos = this.produtosService.getAll();
  //pegará os produtos, diz que utilizará o produtos services.getAll (obtem todos os produtos)

  this.route.queryParamMap.subscribe(params => {
    //quando ele identificar mudanças no queryParams, ele vai trazer os parametros...

    const descricao = params.get("descricao")?.toLowerCase();
    /*
    ...com esses parametros podemos pegar por exemplo a descrição, a descrição vai ser o params.get no campo da descrição, também irei
    pegar a descrição e transformar em LowerCase (tudo que a pessoa digitar estará em Maiúsculo)
    */

    if(descricao){
      this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
      /*
        Diz que os produtos vai receber um filtro dos produtos que obtive do meu serviço e quero verificar em cada produto se a descrição
      em minusculo tem a descrição que vem do meu queryParams. Se tiver so vai incluir os produtos que tiver aquela descrição...
      */

      return;
      //volta o processo
    }
    this.produtos = produtos;
    //...caso não tenha passado nenhuma descrição, irá dizer que this.produtos irá receber os produtos.
  });
  }
}