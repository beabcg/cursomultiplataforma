import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundocomponenteComponent } from './segundocomponente.component';

describe('SegundocomponenteComponent', () => {
  let component: SegundocomponenteComponent;
  let fixture: ComponentFixture<SegundocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
