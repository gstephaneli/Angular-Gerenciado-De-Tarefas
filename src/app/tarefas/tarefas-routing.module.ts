import { CadastrasTarefaComponent } from './cadastras/cadastras-tarefa.component';

import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path:'tarefas/cadastrar',
        component: CadastrasTarefaComponent
    }
]