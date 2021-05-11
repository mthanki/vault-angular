import { Component, OnInit } from '@angular/core';
import { CodeBlock } from 'src/app/codeBlock/code-block.model';
import { CodeBlockService } from 'src/app/codeBlock/code-block.service';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent implements OnInit {
  codeBlocks: CodeBlock[] = [];

  constructor(private cbService: CodeBlockService) { }

  ngOnInit(): void {
    this.codeBlocks = this.cbService.getCodeBlocks_Test();
  }

}
