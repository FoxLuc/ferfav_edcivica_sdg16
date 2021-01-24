import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriberyComponent } from './bribery.component';

describe('BriberyComponent', () => {
  let component: BriberyComponent;
  let fixture: ComponentFixture<BriberyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriberyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriberyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
