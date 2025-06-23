import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHandComponent } from './on-hand.component';

describe('OnHandComponent', () => {
  let component: OnHandComponent;
  let fixture: ComponentFixture<OnHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnHandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
