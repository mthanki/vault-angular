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
  searchedCodeBlocks: CodeBlock[] = [];
  noBlocksMessage = "No Blocks found, click on \'Add\' to start creating them."
  // Not utilized, just for syntatical purpose
  searchModel = "";
  searchTags: string[] = [];

  constructor(private cbService: CodeBlockService) { }

  ngOnInit(): void {
    this.cbService.getUserCodeBlocks().subscribe(blocks => {
      this.searchedCodeBlocks = this.codeBlocks = blocks.codeBlocks;
    })

    // this.cbService.getUserCodeBlocks().pipe(
    //   map(cb => cb = cb.codeBlocks),
    // )
  }

  onSearch(search: string): void {
    if (search) {
      this.searchTags = search.split(';');
      // this.searchedCodeBlocks = this.codeBlocks.filter(cb => cb.tags.includes(search));
      this.searchedCodeBlocks = this.codeBlocks.filter(b => b.tags.every(t => search.includes(t)));
      // this.searchedCodeBlocks = this.codeBlocks.filter(cb => cb.tags.includes(search));
    } else {
      this.searchedCodeBlocks = this.codeBlocks;
    }
  }

  removeFromList(id: string) {
    this.searchedCodeBlocks = this.codeBlocks = this.codeBlocks.filter(block => block.id != id);
  }
}
