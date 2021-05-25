import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderDisplayComponent } from './placeholder-display.component';

describe('PlaceholderDisplayComponent', () => {
  let component: PlaceholderDisplayComponent;
  let fixture: ComponentFixture<PlaceholderDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
