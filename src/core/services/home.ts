import { HTTPReq } from "../http/http";
import HomeTypes from "../interface/home";

export class HomeServices {
  constructor(private readonly http: HTTPReq = new HTTPReq()) {}
  async getSearch(args: HomeTypes) {
    return (await this.http.get(`search?q=${args.q}&type=${args.type}`)).data;
  }
  async getID(id: string) {
    return (await this.http.get(`artists/${id}/albums`)).data;
  }
}
