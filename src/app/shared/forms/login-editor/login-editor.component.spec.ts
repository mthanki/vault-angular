import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEditorComponent } from './login-editor.component';

describe('LoginEditorComponent', () => {
  let component: LoginEditorComponent;
  let fixture: ComponentFixture<LoginEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
