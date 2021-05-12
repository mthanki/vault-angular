import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { fadeUp } from 'src/animations';
import { CodeBlock } from '../code-block.model';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-code-block-element',
  templateUrl: './code-block-element.component.html',
  styleUrls: ['./code-block-element.component.scss'],
  animations: [
    fadeUp
  ]
})
export class CodeBlockElementComponent implements OnInit {
  @Input() codeBlock!: CodeBlock;

  showPopup: boolean = false;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {

  }

  copyCode() {
    this.clipboard.copy(this.codeBlock.code);
    
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 600);
  }
}
