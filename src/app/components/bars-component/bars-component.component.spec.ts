import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsComponentComponent } from './bars-component.component';

describe('BarsComponentComponent', () => {
  let component: BarsComponentComponent;
  let fixture: ComponentFixture<BarsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
