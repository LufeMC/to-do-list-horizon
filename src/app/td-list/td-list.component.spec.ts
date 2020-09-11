import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdListComponent } from './td-list.component';

describe('TdListComponent', () => {
  let component: TdListComponent;
  let fixture: ComponentFixture<TdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
