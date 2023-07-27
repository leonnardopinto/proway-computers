import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule }  from  'ngx-mask'


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule, //Modulo importado para validação de formulários
    NgxMaskModule.forRoot() //Modulo importado para inclusão de Mascara de Campos
  ]
})

export class ContatoModule { }

/*
Dados do processo de mascara foi retirado atravéz site: https://npmjs.com/package/ngx-mask/
Para colocar a mascara de telefone ao digitar, instala um componente através do comando:  npm install --save ngx-mask

Obs: Ao colocar esse comando o aplicativo instalou a nova versão "ngx-mask@16.2.4" essa versão é diferente da que é as
padrões de utilizada nas video aulas, consultei e identifiquei essa versão através do comando: npm list ngx-mask

Assim tive que fazer o "downgrade" e voltar a versão para 14, através do comando: npm install ngx-mask@~14.0.0
*/