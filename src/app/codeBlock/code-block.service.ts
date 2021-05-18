import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../http/data.service';
import { CodeBlock } from './code-block.model';

@Injectable({
  providedIn: 'root'
})
export class CodeBlockService {

  private codeBlocksUrl = 'code-blocks';

  private codeBlocks: CodeBlock[] = [];
  private codeBlocks_Filled: CodeBlock[] = [
    {
      name: "nav color skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skyblue",
      code: "color skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skyblue",
      tags: 'htmlcolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skyblue',
      creator: "60a1962b0f2132364377703"
    },
    {
      name: "headercolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skyblue",
      code: "leaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf greenleaf green",
      tags: 'csscolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skybluecolor skyblue',
      creator: "60a1962b0f2132364377703"
    }
  ];

  constructor(private http: HttpClient, private dataService: DataService) { }

  getUserCodeBlocks(): Observable<any> {
    // const params = new HttpParams({});
    return this.dataService.get(`${this.codeBlocksUrl}/user/60a1962b0f21323643777037`, {});
  }

  createCodeBlock(block: CodeBlock): Observable<CodeBlock> {
    return this.dataService.post(`${this.codeBlocksUrl}`, block);
  }

  deleteCodeBlock() { }
}
