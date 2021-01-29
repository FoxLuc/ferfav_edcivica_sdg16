import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthNationComponent } from './birth-nation.component';

describe('BirthNationComponent', () => {
  let component: BirthNationComponent;
  let fixture: ComponentFixture<BirthNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthNationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
