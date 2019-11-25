import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartocomponenteComponent } from './cuartocomponente.component';

describe('CuartocomponenteComponent', () => {
  let component: CuartocomponenteComponent;
  let fixture: ComponentFixture<CuartocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
