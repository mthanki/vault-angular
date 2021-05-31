import { Component, Input, OnInit } from '@angular/core';
import { fade, fadeUp } from 'src/animations';
import { CodeBlock } from '../code-block.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { CodeBlockService } from '../code-block.service';
import { Output, EventEmitter } from '@angular/core';
import { ENTER, SPACE, SEMICOLON } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-code-block-element',
  templateUrl: './code-block-element.component.html',
  styleUrls: ['./code-block-element.component.scss'],
  animations: [
    fadeUp, fade
  ]
})
export class CodeBlockElementComponent implements OnInit {
  @Input() codeBlock!: CodeBlock;
  @Output() blockDeleted = new EventEmitter<string>();

  editor: any;
  showPopup: boolean = false;
  editMode = false;
  updateButtonLabel = "Edit";
  copyButtonLabel = "Copy";
  deleteQueue = false;

  readonly separatorKeysCodes = [ENTER, SPACE, SEMICOLON] as const;

  editorInit(editor: any) {
    // Here you can access editor instance
    this.editor = editor;
    this.editor.updateOptions({
      readOnly: true,
      quickSuggestions: false,
      formatOnPaste: true,
    })
  }

  constructor(
    private clipboard: Clipboard,
    public cbService: CodeBlockService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  copyCode() {
    this.clipboard.copy(this.codeBlock.code);

    this.copyButtonLabel = "Copied!";
    setTimeout(() => {
      this.copyButtonLabel = "Copy";
    }, 600);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.updateButtonLabel = this.editMode ? "Update" : "Edit";
    this.editor.updateOptions({ readOnly: !this.editMode });

    if (!this.editMode) {
      this.cbService.updateCodeBlock(this.codeBlock).subscribe(
        updatedBlock => {
          this._snackBar.open('CodeBlock Updated.');
          this.editor.updateOptions({ readOnly: !this.editMode });
        },
        error => {
          this.editMode = !this.editMode;
          this.updateButtonLabel = this.editMode ? "Update" : "Edit";
          this.editor.updateOptions({ readOnly: !this.editMode });
        });
    }
  }

  deleteBlock() {
    this.cbService.deleteCodeBlock(this.codeBlock).subscribe(
      message => {
        this.deleteQueue = false;
        this.blockDeleted.emit(this.codeBlock.id);
        this._snackBar.open('CodeBlock Deleted.');
      },
      error => {
        window.alert(error);
      });
  }
}
