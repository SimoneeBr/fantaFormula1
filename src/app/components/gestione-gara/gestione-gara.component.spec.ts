import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneGaraComponent } from './gestione-gara.component';

describe('GestioneGaraComponent', () => {
  let component: GestioneGaraComponent;
  let fixture: ComponentFixture<GestioneGaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneGaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneGaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
