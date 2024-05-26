import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSuccessComponent } from './cadastro-success.component';

describe('CadastroSuccessComponent', () => {
  let component: CadastroSuccessComponent;
  let fixture: ComponentFixture<CadastroSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
