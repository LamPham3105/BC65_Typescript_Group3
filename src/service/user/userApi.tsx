import { UserLogin } from "../../Model/Model";
import { httpClient } from "../../util/util";
import {
  USER_LOGIN,
  getDataJsonStorage,
  setDataJsonStorage,
  setDataTextStorage,
} from "../../util/utilMethod";

export class UserApi {
  async postRegisterUser(userData: object) {
    try {
      const res = await httpClient.post("/api/auth/signup", userData);
      return res;
    } catch (error) {}
  }

  async postLoginUser(userData: object) {
    try {
      const res = await httpClient.post("/api/auth/signin", userData);
      if (res) {
        setDataTextStorage(USER_LOGIN, res.data.content);
        setDataJsonStorage(USER_LOGIN, res.data.content);
      }
      return res.data;
    } catch (error) {}
  }

  async getUser() {
    try {
      const res = await httpClient.get("/api/users");
      return res.data.content;
    } catch (error) {}
  }

  async postUserAvatar(formFile: File) {
    const formData = new FormData();
    formData.append("formFile", formFile);

    try {
      const res = await httpClient.post("/api/users/upload-avatar", formData);
      console.log("res: ", res);
      if (res) {
        const userLogin: UserLogin = {
          user: res.data.content,
          token: getDataJsonStorage(USER_LOGIN).token,
        };
        setDataTextStorage(USER_LOGIN, userLogin.toString());
        setDataJsonStorage(USER_LOGIN, userLogin);
      }
      return res.data;
    } catch (error) {}
  }

  async updateUserInformation(userData: object, id: string) {
    try {
      const res = await httpClient.put(`/api/users/${id}`, userData);
      if (res) {
        const userLogin: UserLogin = {
          user: res.data.content,
          token: getDataJsonStorage(USER_LOGIN).token,
        };
        setDataTextStorage(USER_LOGIN, userLogin.toString());
        setDataJsonStorage(USER_LOGIN, userLogin);
      }

      return res.data;
    } catch (error) {}
  }
}

export const userApi = new UserApi();
