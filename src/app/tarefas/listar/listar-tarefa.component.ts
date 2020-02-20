import { Tarefa } from './../shared/tarefa.module';
import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  /*é sempre chamado depois da inicialização de um construtor*/
  ngOnInit(): void {
    this.tarefas = this.listarTodos();

  }

  listarTodos():Tarefa[]{

    return this.tarefaService.listarTodos();
  }

  remove( ):void{
    
  }

}
