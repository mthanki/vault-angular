export class CodeBlock {
    public name: string;
    public code: string;
    public tags: string;

    constructor(name: string, code: string, tags: string){
        this.name = name;
        this.code = code;
        this.tags = tags;
    }
}
