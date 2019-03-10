import axios from "axios";

class Api {
  constructor(url, request) {
    this.url = url;
    this.request = request;
  }

  async fetchRandomJokes(num) {
    const res = await this.request(`${this.url}/${num}`);
    return res;
  }
}

const api = new Api("http://api.icndb.com/jokes/random/", axios);

export default api;
