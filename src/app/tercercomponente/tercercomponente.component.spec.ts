import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercercomponenteComponent } from './tercercomponente.component';

describe('TercercomponenteComponent', () => {
  let component: TercercomponenteComponent;
  let fixture: ComponentFixture<TercercomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercercomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
