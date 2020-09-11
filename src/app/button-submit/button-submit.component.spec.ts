import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubmitComponent } from './button-submit.component';

describe('ButtonSubmitComponent', () => {
  let component: ButtonSubmitComponent;
  let fixture: ComponentFixture<ButtonSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
