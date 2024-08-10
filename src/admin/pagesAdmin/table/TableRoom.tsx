import React, { useEffect, useState } from "react";
import { Modal, Pagination, Form, Input, Select } from "antd";
import { roomApi } from "../../../service/room/roomApi";
import { LocateData, LocateError, RoomData } from "../../../Model/Model";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/store";
import { showNotification } from "../../../redux/reducers/notificationReducer";
import { locateApi } from "../../../service/locate/locateApi";
import Loading from "../../../user/Components/Antd/Loading";

const TableRoom: React.FC = () => {
  const dispatch: DispatchType = useDispatch();

  const [file, setFile] = useState<File | null>(null);

  const [rooms, setRooms] = useState<RoomData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentRoom, setCurrentRoom] = useState<RoomData>({
    id: 0,
    tenPhong: "",
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: "",
    giaTien: 0,
    mayGiat: false,
    banLa: false,
    tivi: false,
    dieuHoa: false,
    wifi: false,
    bep: false,
    doXe: false,
    hoBoi: false,
    banUi: false,
    maViTri: 0,
    hinhAnh: "",
  });

  const pageSize = 6;

  const fetchRooms = async () => {
    try {
      const data = await roomApi.getRoom();
      setTotal(data.length);
      const paginatedData = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      setRooms(paginatedData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRooms();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showModal = (room?: RoomData) => {
    setCurrentRoom(
      room || {
        id: 0,
        tenPhong: "",
        khach: 0,
        phongNgu: 0,
        giuong: 0,
        phongTam: 0,
        moTa: "",
        giaTien: 0,
        mayGiat: false,
        banLa: false,
        tivi: false,
        dieuHoa: false,
        wifi: false,
        bep: false,
        doXe: false,
        hoBoi: false,
        banUi: false,
        maViTri: 0,
        hinhAnh: "",
      }
    );
    setIsModalVisible(true);
  };

  const handleSelectChange = (value: number) => {
    setCurrentRoom((prevRoom) => ({
      ...prevRoom,
      maViTri: value,
    }));
  };

  const mutationPostRoom = useMutation({
    mutationFn: roomApi.postRoom,
    onSuccess: (data) => {
      if (file && data) {
        mutationRoomImage.mutate({ image: file, id: data.content.id });
      }
      fetchRooms();
    },
    onError: (error) => {},
  });

  const mutationUpdateRoom = useMutation({
    mutationFn: (data: { roomData: object; id: string }) =>
      roomApi.updateRoom(data.roomData, data.id),
    onSuccess: (data) => {
      if (file && data) {
        mutationRoomImage.mutate({ image: file, id: data.content.id });
      }
      fetchRooms();
    },
    onError: () => {},
  });

  const mutationRoomImage = useMutation({
    mutationFn: (data: { image: File; id: string }) =>
      roomApi.postRoomImage(data.image, data.id),
    onSuccess: (data) => {
      dispatch(showNotification("Upload success"));
    },
    onError: () => {
      dispatch(showNotification("Upload failed"));
    },
  });

  const mutationDeleteRoom = useMutation({
    mutationFn: (id: string) => roomApi.deleteRoom(id),
    onSuccess: (data) => {
      fetchRooms();
    },
    onError: () => {},
  });

  const queryResultLocate: UseQueryResult<LocateData[], LocateError> = useQuery(
    {
      queryKey: ["locateListApi"],
      queryFn: locateApi.getLocate,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: true,
    }
  );

  const handleOk = () => {
    // Logic to handle adding or updating
    if (currentRoom.id === 0) {
      mutationPostRoom.mutate(currentRoom);
    } else {
      mutationUpdateRoom.mutate({
        roomData: currentRoom,
        id: currentRoom.id.toString(),
      });
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof RoomData
  ) => {
    setCurrentRoom((prevRoom) => ({
      ...prevRoom,
      [field]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentRoom((prevRoom) => ({
          ...prevRoom,
          hinhAnh: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  if (queryResultLocate.isLoading) {
    <Loading />;
  }

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Manage Room</h3>
        </div>
        <button className="btn btn-primary mb-5" onClick={() => showModal()}>
          Add Room
        </button>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Capacity</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.map((room) => (
                      <tr key={room.id}>
                        <th>{room.id}</th>
                        <td>{room.tenPhong}</td>
                        <td>{room.khach}</td>
                        <td>${room.giaTien}</td>
                        <td>
                          <img
                            src={room.hinhAnh}
                            alt={room.tenPhong}
                            width={100}
                          />
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <button
                              className="btn btn-primary btn-sm"
                              style={{ marginRight: "10px" }}
                              onClick={() => showModal(room)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                mutationDeleteRoom.mutate(room.id.toString())
                              }
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                align="center"
                current={currentPage}
                total={total}
                pageSize={pageSize}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={currentRoom.id === 0 ? "Add Location" : "Edit Location"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button key="submit" className="btn btn-primary" onClick={handleOk}>
            {currentRoom.id === 0 ? "Add" : "Edit"}
          </button>,
          <button
            key="cancel"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Room Name">
            <Input
              value={currentRoom.tenPhong}
              onChange={(e) => handleInputChange(e, "tenPhong")}
            />
          </Form.Item>
          <Form.Item label="Capacity">
            <Input
              type="number"
              value={currentRoom.khach}
              onChange={(e) => handleInputChange(e, "khach")}
            />
          </Form.Item>
          <Form.Item label="Bedrooms">
            <Input
              type="number"
              value={currentRoom.phongNgu}
              onChange={(e) => handleInputChange(e, "phongNgu")}
            />
          </Form.Item>
          <Form.Item label="Beds">
            <Input
              type="number"
              value={currentRoom.giuong}
              onChange={(e) => handleInputChange(e, "giuong")}
            />
          </Form.Item>
          <Form.Item label="Bathrooms">
            <Input
              type="number"
              value={currentRoom.phongTam}
              onChange={(e) => handleInputChange(e, "phongTam")}
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              value={currentRoom.moTa}
              onChange={(e) => handleInputChange(e, "moTa")}
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input
              type="number"
              value={currentRoom.giaTien}
              onChange={(e) => handleInputChange(e, "giaTien")}
            />
          </Form.Item>
          <Form.Item label="Washing Machine">
            <Input
              type="checkbox"
              checked={currentRoom.mayGiat}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  mayGiat: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Iron">
            <Input
              type="checkbox"
              checked={currentRoom.banLa}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  banLa: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="TV">
            <Input
              type="checkbox"
              checked={currentRoom.tivi}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  tivi: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Air Conditioning">
            <Input
              type="checkbox"
              checked={currentRoom.dieuHoa}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  dieuHoa: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Wi-Fi">
            <Input
              type="checkbox"
              checked={currentRoom.wifi}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  wifi: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Kitchen">
            <Input
              type="checkbox"
              checked={currentRoom.bep}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  bep: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Parking">
            <Input
              type="checkbox"
              checked={currentRoom.doXe}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  doXe: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Swimming Pool">
            <Input
              type="checkbox"
              checked={currentRoom.hoBoi}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  hoBoi: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Ironing Board">
            <Input
              type="checkbox"
              checked={currentRoom.banUi}
              onChange={(e) =>
                setCurrentRoom((prevRoom) => ({
                  ...prevRoom,
                  banUi: e.target.checked,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Location ID">
            <Select
              value={currentRoom.maViTri}
              onChange={handleSelectChange}
              loading={queryResultLocate.isLoading}
            >
              {queryResultLocate.data?.map((locate) => (
                <Select.Option key={locate.id} value={locate.id}>
                  {locate.tenViTri}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Image URL">
            <Input
              type="file"
              className="form-control mb-3"
              onChange={handleFileChange}
            />
            {currentRoom.hinhAnh && (
              <div className="image-preview">
                <img
                  src={currentRoom.hinhAnh}
                  alt="Preview"
                  style={{ width: "100%", marginTop: "10px" }}
                />
              </div>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableRoom;
