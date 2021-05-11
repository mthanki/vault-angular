import { Injectable } from '@angular/core';
import { CodeBlock } from './code-block.model';

@Injectable({
  providedIn: 'root'
})
export class CodeBlockService {

  private codeBlocks: CodeBlock[] = [];
  private codeBlocks_Filled: CodeBlock[] = [
    {
      name: "nav",
      code: "color skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skyblue",
      tags: 'html'
    },
    {
      name: "header",
      code: "leaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf green",
      tags: 'css'
    }
  ];

  constructor() { }

  addCodeBlock(cb: CodeBlock){
    this.codeBlocks.push(cb);
  }

  getCodeBlocks(){
    return this.codeBlocks.slice();
  }

  getCodeBlocks_Test(){
    return this.codeBlocks_Filled.slice();
  }

  deleteCodeBlock(){}
}
