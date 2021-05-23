import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CodeBlock } from 'src/app/codeBlock/code-block.model';
import { CodeBlockService } from 'src/app/codeBlock/code-block.service';
import { ENTER, SPACE, SEMICOLON } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-code-block-editor',
  templateUrl: './code-block-editor.component.html',
  styleUrls: ['./code-block-editor.component.scss']
})
export class CodeBlockEditorComponent implements OnInit {
  items: any;
  // just the html input for reading tags user input.
  tagInput = "";
  // tag input
  visible = true;
  readonly separatorKeysCodes = [ENTER, SPACE, SEMICOLON] as const;
  tags: string[] = ['vm', 'apple', 'lorem-ipsum'];

  codeBlockForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, public cbService: CodeBlockService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const creatorId = localStorage.getItem('userId');
    const codeBlock: CodeBlock = { ...this.codeBlockForm.value, creator: creatorId, tags: this.tags };

    this.cbService.createCodeBlock(codeBlock)
      .subscribe(cb => {
        this.resetForm();
      });

  }

  resetForm() {
    this.codeBlockForm.reset();
    this.tags = [];
    this.tagInput = "";
  }

  // tag input
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.input.value = '';
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
