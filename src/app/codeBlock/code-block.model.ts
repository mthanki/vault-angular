export class CodeBlock {
    public id: string
    public name: string;
    public code: string;
    public tags: string;
    public creator: string;

    constructor(name: string, code: string, tags: string, creator: string, id: string) {
        this.name = name;
        this.code = code;
        this.tags = tags;
        this.creator = creator;
        this.id = id;
    }
}
