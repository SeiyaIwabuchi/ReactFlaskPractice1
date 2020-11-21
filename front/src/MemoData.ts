class MemoData {
  user: string;
  id: number;
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  private _body: string;
  public get body(): string {
    return this._body;
  }
  public set body(value: string) {
    this._body = value;
  }
  datetime: string;
  constructor() {
    this.user = "";
    this.id = 0;
    this._title = ""
    this._body = "";
    this.datetime = "";
  }
}

export default MemoData;