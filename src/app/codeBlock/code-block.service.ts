import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonacoEditorConstructionOptions } from '@materia-ui/ngx-monaco-editor';
import { Observable } from 'rxjs';
import { DataService } from '../http/data.service';
import { CodeBlock } from './code-block.model';


@Injectable({
  providedIn: 'root'
})
export class CodeBlockService {

  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'json',
    roundedSelection: true,
    autoIndent: 'full',
    quickSuggestions: false,
  };

  private codeBlocksUrl = 'code-blocks';

  constructor(private http: HttpClient, private dataService: DataService) { }

  getUserCodeBlocks(): Observable<any> {
    // const params = new HttpParams({});
    return this.dataService.get(`${this.codeBlocksUrl}/user/all-blocks`, {});
  }

  createCodeBlock(block: CodeBlock): Observable<CodeBlock> {
    return this.dataService.post(`${this.codeBlocksUrl}`, block);
  }

  updateCodeBlock(block: CodeBlock): Observable<CodeBlock> {
    return this.dataService.patch(`${this.codeBlocksUrl}/${block.id}`, block);
  }

  deleteCodeBlock(block: CodeBlock): Observable<CodeBlock> {
    return this.dataService.delete(`${this.codeBlocksUrl}/${block.id}`, {});
  }
}
