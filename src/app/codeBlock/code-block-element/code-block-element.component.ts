import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { fade, fadeUp } from 'src/animations';
import { CodeBlock } from '../code-block.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { CodeBlockService } from '../code-block.service';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

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
  editor: any;
  showPopup: boolean = false;
  editMode = false;
  updateButtonLabel = "Edit";

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

    this.editor.updateOptions({ readOnly: !this.editMode })
  }
}
