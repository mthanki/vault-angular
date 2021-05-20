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

  constructor(private http: HttpClient, private dataService: DataService) { }

  getUserCodeBlocks(): Observable<any> {
    // const params = new HttpParams({});
    return this.dataService.get(`${this.codeBlocksUrl}/user/60a48e6db4ddb4814f9de6ec`, {});
  }

  createCodeBlock(block: CodeBlock): Observable<CodeBlock> {
    return this.dataService.post(`${this.codeBlocksUrl}`, block);
  }

  deleteCodeBlock() { }
}
