export class Users {
  id: number;
  owner: any;
  editor: any;
  seq: number;
  status: number;
  meta: any;
  title: string;
  description: string;
  title_short: string;

  constructor() {
    this.id = this.id || 0;
    this.status = this.status || 2;
  }
}