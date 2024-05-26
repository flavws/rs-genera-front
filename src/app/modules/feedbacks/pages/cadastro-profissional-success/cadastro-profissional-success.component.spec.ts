import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProfissionalSuccessComponent } from './cadastro-profissional-success.component';

describe('CadastroProfissionalSuccessComponent', () => {
  let component: CadastroProfissionalSuccessComponent;
  let fixture: ComponentFixture<CadastroProfissionalSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProfissionalSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroProfissionalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
