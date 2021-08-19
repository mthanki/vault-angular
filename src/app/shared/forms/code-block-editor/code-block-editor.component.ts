import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CodeBlock } from 'src/app/codeBlock/code-block.model';
import { CodeBlockService } from 'src/app/codeBlock/code-block.service';
import { ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  MonacoEditorComponent,
  MonacoEditorLoaderService,
} from '@materia-ui/ngx-monaco-editor';
import { filter, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageService } from 'src/app/ssr-files/localstorage.service';

@Component({
  selector: 'app-code-block-editor',
  templateUrl: './code-block-editor.component.html',
  styleUrls: ['./code-block-editor.component.scss']
})
export class CodeBlockEditorComponent implements OnInit {
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent!: MonacoEditorComponent;

  isDisabled = false;

  // tag input
  visible = true;
  readonly separatorKeysCodes = [ENTER, SEMICOLON] as const;
  tags: string[] = [];

  codeBlockForm = this.fb.group({
    name: ['', Validators.required],
    code: ['',]
  });

  constructor(
    private fb: FormBuilder,
    public cbService: CodeBlockService,
    private monacoLoaderService: MonacoEditorLoaderService,
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService
  ) {
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(
        filter(isLoaded => !!isLoaded),
        take(1)
      )
      .subscribe(() => {
        this.registerMonacoJsonSchemaValidator();
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isDisabled = true;
    const creatorId = this.ls.getItem('userId');
    const codeBlock: CodeBlock = { ...this.codeBlockForm.value, creator: creatorId, tags: this.tags };

    this.cbService.createCodeBlock(codeBlock)
      .subscribe(cb => {
        this.resetForm();
        this.isDisabled = false;
        this._snackBar.open('CodeBlock added successfully.')
      },
        error => {
          this.isDisabled = false;
        });
  }

  resetForm() {
    this.codeBlockForm.reset();
    this.tags = [];
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

  registerMonacoJsonSchemaValidator() {
    // Disable syntax and semantic validation of entered code to keep the overall form from being invalid
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: false,
    });
  }

}
