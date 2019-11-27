import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintocomponenteComponent } from './quintocomponente.component';

describe('QuintocomponenteComponent', () => {
  let component: QuintocomponenteComponent;
  let fixture: ComponentFixture<QuintocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
