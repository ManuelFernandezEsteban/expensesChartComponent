import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMonthComponentComponent } from './total-month-component.component';

describe('TotalMonthComponentComponent', () => {
  let component: TotalMonthComponentComponent;
  let fixture: ComponentFixture<TotalMonthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalMonthComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMonthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
