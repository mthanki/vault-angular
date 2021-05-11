import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockEditorComponent } from './code-block-editor.component';

describe('CodeBlockEditorComponent', () => {
  let component: CodeBlockEditorComponent;
  let fixture: ComponentFixture<CodeBlockEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBlockEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBlockEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
