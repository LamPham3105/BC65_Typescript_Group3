import { httpClient } from "../../util/util";

export class RoomApi {
  async getRoom() {
    try {
      const res = await httpClient.get("/api/phong-thue");
      return res.data.content;
    } catch (error) {}
  }

  async getRoomByID(id: string) {
    try {
      const res = await httpClient.get(`/api/phong-thue/${id}`);
      return res.data.content;
    } catch (error) {}
  }

  async getRoomByMaViTri(maViTri: string) {
    try {
      const res = await httpClient.get(
        `api/phong-thue/lay-phong-theo-vi-tri?maViTri=${maViTri}`
      );
      return res.data.content;
    } catch (error) {}
  }

  async addBookingRoom(bookingRoom: object) {
    try {
      const res = await httpClient.post("/api/dat-phong", bookingRoom);
      return res;
    } catch (error) {}
  }

  async updateBookingRoom(bookingRoom: object, maDatPhong: string) {
    try {
      const res = await httpClient.put(
        `/api/dat-phong/${maDatPhong}`,
        bookingRoom
      );
      return res;
    } catch (error) {}
  }

  async getBookingRoomByUser(maNguoiDung: string) {
    try {
      const res = await httpClient.get(
        `/api/dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`
      );

      return res.data.content;
    } catch (error) {}
  }
}

export const roomApi = new RoomApi();
