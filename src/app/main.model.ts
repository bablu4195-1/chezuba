export class Datahub {
    public id: number;
    public title: string;
    public body: string;
    public userid: number;;
    constructor(id: number, title: string, body: string, userid: number) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userid = userid;
    }
}