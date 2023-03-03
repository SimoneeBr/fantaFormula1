import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchieramentoComponent } from './form-schieramento.component';

describe('FormSchieramentoComponent', () => {
  let component: FormSchieramentoComponent;
  let fixture: ComponentFixture<FormSchieramentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [FormSchieramentoComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchieramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
