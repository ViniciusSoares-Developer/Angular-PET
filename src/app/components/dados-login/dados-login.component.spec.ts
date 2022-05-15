import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosLoginComponent } from './dados-login.component';

describe('DadosLoginComponent', () => {
  let component: DadosLoginComponent;
  let fixture: ComponentFixture<DadosLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
