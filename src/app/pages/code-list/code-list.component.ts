import { Component, OnInit } from '@angular/core';
import { CodeBlock } from 'src/app/codeBlock/code-block.model';
import { CodeBlockService } from 'src/app/codeBlock/code-block.service';
import { ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent implements OnInit {
  codeBlocks: CodeBlock[] = [];
  searchedCodeBlocks: CodeBlock[] = [];
  noBlocksMessage = "No Snippets found, click on the button below to start adding them.";
  noBlocksHeader = "No Content found";
  noBlocksButtonText = "Add Snippets";
  noBlocksButtonLink = "/add-to-list";

  searchTags: string[] = [];

  readonly separatorKeysCodes = [ENTER, SEMICOLON] as const;
  tags: string[] = [];

  constructor(private cbService: CodeBlockService) { }

  ngOnInit(): void {
    this.cbService.getUserCodeBlocks().subscribe(blocks => {
      this.searchedCodeBlocks = this.codeBlocks = blocks.codeBlocks;
    })
  }

  onSearch(): void {
    if (this.tags.length) {
      this.searchedCodeBlocks = this.codeBlocks.filter(b => this.tags.every(st => b.tags.includes(st)));
    } else {
      this.searchedCodeBlocks = this.codeBlocks;
    }
  }

  removeFromList(id: string) {
    this.searchedCodeBlocks = this.codeBlocks = this.codeBlocks.filter(block => block.id != id);
    this.onSearch();
  }

  // tag input
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.input.value = '';
    this.onSearch();
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.onSearch();
  }
}
