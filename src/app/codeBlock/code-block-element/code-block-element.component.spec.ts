import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockElementComponent } from './code-block-element.component';

describe('CodeBlockElementComponent', () => {
  let component: CodeBlockElementComponent;
  let fixture: ComponentFixture<CodeBlockElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBlockElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBlockElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
