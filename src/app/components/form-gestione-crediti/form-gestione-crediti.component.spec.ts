import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestioneCreditiComponent } from './form-gestione-crediti.component';

describe('FormGestioneCreditiComponent', () => {
  let component: FormGestioneCreditiComponent;
  let fixture: ComponentFixture<FormGestioneCreditiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGestioneCreditiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGestioneCreditiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
