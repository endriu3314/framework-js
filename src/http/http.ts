export class JsonResponse {
    public content: any;

    constructor(content: any) {
        this.content = content;
    }

    public getContent() {
        return JSON.stringify(this.content);
    }
}
