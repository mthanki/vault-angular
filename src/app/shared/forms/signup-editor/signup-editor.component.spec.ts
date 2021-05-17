import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEditorComponent } from './signup-editor.component';

describe('SignupEditorComponent', () => {
  let component: SignupEditorComponent;
  let fixture: ComponentFixture<SignupEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
