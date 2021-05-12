import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CodeBlock } from '../code-block.model';

@Component({
  selector: 'app-code-block-element',
  templateUrl: './code-block-element.component.html',
  styleUrls: ['./code-block-element.component.scss']
})
export class CodeBlockElementComponent implements OnInit {
  @Input() codeBlock!: CodeBlock;

  showPopup: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.codeBlock);
  }

  copyCode(code: string) {
    console.log(code);
  }
}
