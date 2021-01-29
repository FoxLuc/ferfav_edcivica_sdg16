import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseNationComponent } from './expense-nation.component';

describe('ExpenseNationComponent', () => {
  let component: ExpenseNationComponent;
  let fixture: ComponentFixture<ExpenseNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseNationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
