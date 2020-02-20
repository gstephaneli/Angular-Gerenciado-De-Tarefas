import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrasTarefaComponent } from './cadastras-tarefa.component';

describe('CadastrasTarefaComponent', () => {
  let component: CadastrasTarefaComponent;
  let fixture: ComponentFixture<CadastrasTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrasTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrasTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
