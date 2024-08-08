import { httpClient } from "../../util/util";

export class LocateApi {
  async getLocate() {
    try {
      const res = await httpClient.get("/api/vi-tri");
      return res.data.content;
    } catch (error) {}
  }
}

export const locateApi = new LocateApi();
