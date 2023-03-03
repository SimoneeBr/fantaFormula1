import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSchieramentoComponent } from './table-schieramento.component';

describe('TableSchieramentoComponent', () => {
  let component: TableSchieramentoComponent;
  let fixture: ComponentFixture<TableSchieramentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSchieramentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSchieramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
