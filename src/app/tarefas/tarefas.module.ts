import { RouterModule } from '@angular/router';
import { TarefaService } from './shared/tarefa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { CadastrasTarefaComponent } from './cadastras/cadastras-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component'




@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrasTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[TarefaService]
})
export class TarefasModule { 

  

  constructor(){

  }
}
