import axios from "axios";

export class HTTPReq {
  url: string = `https://api.spotify.com/v1/`;
  constructor(
    private readonly authToken: string = !localStorage.getItem("auth")
      ? ""
      : (localStorage.getItem("auth") as string)
  ) {
    console.log(authToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
  }
  async post(path: string, args: any) {
    return await axios.post(this.url + path, args);
  }
  async put(path: string, args: any) {
    return (
      await axios.put(
        this.url + path,

        args
      )
    ).data;
  }

  async delete(path: string) {
    return await axios.delete(this.url + path);
  }
  async getID(path: string) {
    return await axios.get(this.url + path);
  }
  async get(path: string) {
    return await axios.get(this.url + path);
  }
}
