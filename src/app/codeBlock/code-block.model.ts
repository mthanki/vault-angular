export class CodeBlock {
    public name: string;
    public code: string;
    public tags: string;
    public creator: string;

    constructor(name: string, code: string, tags: string, creator: string) {
        this.name = name;
        this.code = code;
        this.tags = tags;
        this.creator = creator;
    }
}
