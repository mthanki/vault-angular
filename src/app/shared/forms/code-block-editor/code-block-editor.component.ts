import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CodeBlock } from 'src/app/codeBlock/code-block.model';
import { CodeBlockService } from 'src/app/codeBlock/code-block.service';


@Component({
  selector: 'app-code-block-editor',
  templateUrl: './code-block-editor.component.html',
  styleUrls: ['./code-block-editor.component.scss']
})
export class CodeBlockEditorComponent implements OnInit {
  items: any;
  codeBlockForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    tags: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, public cbService: CodeBlockService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const creatorId = localStorage.getItem('userId');
    const codeBlock: CodeBlock = { ...this.codeBlockForm.value, creator: creatorId };

    this.cbService.createCodeBlock(codeBlock)
      .subscribe(cb => console.log(cb));

    this.resetForm();
  }

  resetForm() {
    this.codeBlockForm.reset();
  }

}
