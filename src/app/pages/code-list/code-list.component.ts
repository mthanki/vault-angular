import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CodeBlock } from 'src/app/codeBlock/code-block.model';
import { CodeBlockService } from 'src/app/codeBlock/code-block.service';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent implements OnInit {
  codeBlocks: CodeBlock[] = [];
  searchedCodeBlocks: CodeBlock[] = [];
  // Not utilized, just for syntatical purpose
  searchModel = "";

  constructor(private cbService: CodeBlockService) { }

  ngOnInit(): void {
    this.cbService.getUserCodeBlocks().subscribe(blocks => {
      this.searchedCodeBlocks = this.codeBlocks = blocks.codeBlocks;
    })

    // this.cbService.getUserCodeBlocks().pipe(
    //   map(cb => cb = cb.codeBlocks),
    // )
  }

  onSearch(search: any): void {
    if (search) {
      this.searchedCodeBlocks = this.codeBlocks.filter(cb => cb.tags.includes(search));
    } else {
      this.searchedCodeBlocks = this.codeBlocks;
    }
  }
}
