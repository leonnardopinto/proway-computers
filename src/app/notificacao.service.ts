/*
  Serviço criado através do comando "ng g service notificacao"
  
  Esse serviço será responsável por mostrar mensagem de notificação, que aparecem em algum lugar da tela e ficam por algum tempo.
    Para trabalhar com isso utliza-se bibliotecas que fornecem componentes prontos (Chamado: Angular Material). Tem diversos 
    componentes prontos para se utilizar (podem ser consultados através do site: https://material.angular.io/components/categories).

    O que utilizaremos nesse exemplo será o "Snackbar". O primeiro passo é fazer a instalação da biblioteca utilizando o comando:
    "ng add @angular/material" , depois escolheremos o Tema pre-definido de cores que desejamos (permite também customizar-mos com
    as cores que desejamos), depois ele irá perguntar se quer utilizar os estilos de tipografia (qual fonte utilizar), depois irá 
    perguntar se quer utilizar as animações e finalizará a instalação da biblioteca.

    No site https://material.angular.io/guide/getting-started ele ira mostrar o que será preciso incluir os componentes dentro da
    aplicação. Dentro do "app.module.ts", ira ter que fazer a importação do componente que quer usar.
 
  */

import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'; //Importa a biblioteca que queremos utilizar

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar //Define que o "snackBar" que criamos é da propriedade "MatSnackBar" da biblioteca
  ) { }

  notificar(mensagem: string){           //Método que receberá uma mensagem em string
    this.snackBar.open(mensagem, "OK", { //Assim utilizará o snackBar passando uma mensagem, a segunda propriedade é o texto do botão...
      duration: 2000,                    /*Aqui é as configurações: Esse é a duração, como está em milisegundos utilizamos o valor 2000, 
                                          que equivale a 2 segundos.*/
      verticalPosition: "top",           //Diz a posição tanto na vertical: Nesse caso ficará no topo...
      horizontalPosition: "center"       //...Quanto na horizontal: Nesse caso ficará no centro.
    });
  }
}
