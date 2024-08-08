import { httpClient } from "../../util/util";
import {
  USER_LOGIN,
  TOKEN_AUTHOR,
  setDataJsonStorage,
  setDataTextStorage,
  setCookie,
} from "../../util/utilMethod";

export class AdminApi {
  async postRegisterAdmin(adminData: object) {
    try {
      const res = await httpClient.post("/api/auth/signup", adminData);
      return res;
    } catch (error) {}
  }

  async postLoginAdmin(adminData: object) {
    try {
      const res = await httpClient.post("/api/auth/signin", adminData);
      return res.data;
    } catch (error) {}
  }
}

export const adminApi = new AdminApi();
