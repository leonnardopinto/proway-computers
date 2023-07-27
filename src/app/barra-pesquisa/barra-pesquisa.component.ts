import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit{
  descricao = "";
  //cria a propriedade descrição e inicialmente será uma string vazia

constructor(
  private router: Router
  //injeta o serviço de rota
){}

ngOnInit(): void {
}

pesquisar(){ //quando for pesquisar...
  if(this.descricao){
    //...irá ver se estiver uma descrição, digitado alguma coisa...

    this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }});
    /*
    ...irá redirecionar para a pagina de produtos e passará alguns parametros, queremos passar o parametro de descrição.
    Passarei parametros de descrição e irá ter dentro de descrição o que digitei dentro de this.descricao.
    */ 

    return;
    //retorna o processo.
  }
  this.router.navigate(["produtos"]);
  //...se não irá navegar para dentro da rota sem passar nenhum queryParams (parametro), só ira navegar para a pagina de produtos.
 }
}
//O metodo pesquisar já está atrelado dentro submit do formulário.