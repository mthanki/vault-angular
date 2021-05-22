import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { fade, fadeUp } from 'src/animations';
import { CodeBlock } from '../code-block.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { CodeBlockService } from '../code-block.service';
import { Output, EventEmitter } from '@angular/core';

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
  deleteQueue = false;

  editorInit(editor: any) {
    // Here you can access editor instance
    this.editor = editor;
    this.editor.updateOptions({
      lineNumbers: "off",
      readOnly: true,
      // codeLens: false,
      quickSuggestions: false,
      formatOnPaste: true,
      wordWrap: "on"
    })
  }

  constructor(private clipboard: Clipboard, public cbService: CodeBlockService) { }

  ngOnInit(): void {

  }

  copyCode() {
    this.clipboard.copy(this.codeBlock.code);

    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 600);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.updateButtonLabel = this.editMode ? "Update" : "Edit";

    if (!this.editMode) {
      this.cbService.updateCodeBlock(this.codeBlock).subscribe(
        updatedBlock => {

        },
        error => {
          window.alert(error);
        });
    }

    this.editor.updateOptions({ readOnly: !this.editMode })
  }

  deleteBlock() {
    this.cbService.deleteCodeBlock(this.codeBlock).subscribe(
      message => {
        this.deleteQueue = false;
        this.blockDeleted.emit(this.codeBlock.id);
      },
      error => {
        window.alert(error);
      });
  }
}
