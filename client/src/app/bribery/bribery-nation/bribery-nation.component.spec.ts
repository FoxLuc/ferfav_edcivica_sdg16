import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriberyNationComponent } from './bribery-nation.component';

describe('BriberyNationComponent', () => {
  let component: BriberyNationComponent;
  let fixture: ComponentFixture<BriberyNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriberyNationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriberyNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
