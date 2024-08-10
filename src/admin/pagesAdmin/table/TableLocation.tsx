import React, { useEffect, useState } from "react";
import { Modal, Pagination, Form, Input } from "antd";
import { locateApi } from "../../../service/locate/locateApi";
import { Location } from "../../../Model/Manage";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/store";
import { showNotification } from "../../../redux/reducers/notificationReducer";
import {
  numberRegExp,
  validateNoSpecialChars,
  wordRegExp,
} from "../../../util/utilMethod";

const TableLocation: React.FC = () => {
  const dispatch: DispatchType = useDispatch();

  const [file, setFile] = useState<File | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<Location>({
    id: 0,
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: "",
  });
  const [imageError, setImageError] = useState<string | null>(null);

  const pageSize = 6;

  const fetchLocations = async () => {
    try {
      const data = await locateApi.getLocate();
      setTotal(data.length);
      const paginatedData = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      setLocations(paginatedData);
    } catch (error) {
      console.error("Failed to fetch locations:", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showModal = (location?: Location) => {
    setCurrentLocation(
      location || {
        id: 0,
        tenViTri: "",
        tinhThanh: "",
        quocGia: "",
        hinhAnh: "",
      }
    );
    setIsModalVisible(true);
  };

  const mutationPostLocate = useMutation({
    mutationFn: locateApi.postLocate,
    onSuccess: (data) => {
      if (file && data) {
        mutationLocateImage.mutate({ image: file, id: data.content.id });
      }
      fetchLocations();
    },
    onError: (error) => {},
  });

  const mutationUpdateLocate = useMutation({
    mutationFn: (data: { locateData: object; id: string }) =>
      locateApi.updateLocate(data.locateData, data.id),
    onSuccess: (data) => {
      if (file && data) {
        mutationLocateImage.mutate({ image: file, id: data.content.id });
      }
      fetchLocations();
    },
    onError: () => {},
  });

  const mutationLocateImage = useMutation({
    mutationFn: (data: { image: File; id: string }) =>
      locateApi.postLocateImage(data.image, data.id),
    onSuccess: (data) => {
      dispatch(showNotification("Upload success"));
    },
    onError: () => {
      dispatch(showNotification("Upload failed"));
    },
  });

  const mutationDeleteLocate = useMutation({
    mutationFn: (id: string) => locateApi.deleteLocate(id),
    onSuccess: (data) => {
      fetchLocations();
    },
    onError: () => {},
  });

  const handleOk = () => {
    // Handle add or edit logic here
    if (currentLocation.id === 0) {
      mutationPostLocate.mutate(currentLocation);
    } else {
      mutationUpdateLocate.mutate({
        locateData: currentLocation,
        id: currentLocation.id.toString(),
      });
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Location
  ) => {
    setCurrentLocation((prevLocation) => ({
      ...prevLocation,
      [field]: e.target.value,
    }));
  };

  const validateImageFile = (file: File): boolean => {
    const validExtensions = ["image/jpeg", "image/png"];
    return validExtensions.includes(file.type);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (validateImageFile(file)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCurrentLocation((prevLocation) => ({
            ...prevLocation,
            hinhAnh: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
        setFile(file);
        setImageError(null); // Reset error if file is valid
      } else {
        setImageError("Only .jpg and .png files are allowed."); // Set error if file is invalid
      }
    }
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Manage Locations</h3>
        </div>
        <button className="btn btn-primary mb-5" onClick={() => showModal()}>
          Add Location
        </button>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: "100px" }}>Id</th>
                      <th style={{ width: "150px" }}>Location</th>
                      <th style={{ width: "150px" }}>Province</th>
                      <th style={{ width: "150px" }}>Nation</th>
                      <th style={{ width: "200px" }}>Image</th>
                      <th style={{ width: "120px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {locations.map((location) => (
                      <tr key={location.id}>
                        <td>{location.id}</td>
                        <td>{location.tenViTri}</td>
                        <td>{location.tinhThanh}</td>
                        <td>{location.quocGia}</td>
                        <td style={{ width: "200px" }}>
                          <img
                            src={location.hinhAnh}
                            alt={location.tenViTri}
                            style={{ width: "100%", height: "auto" }} // Ensures the image fits the column
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
                              onClick={() => showModal(location)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                mutationDeleteLocate.mutate(
                                  location.id.toString()
                                )
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
        title={currentLocation.id === 0 ? "Add Location" : "Edit Location"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button
            key="submit"
            className="btn btn-primary"
            style={{ marginRight: "20px" }}
            onClick={handleOk}
          >
            {currentLocation.id === 0 ? "Add" : "Edit"}
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
          <Form.Item
            label="Location Name"
            rules={[
              {
                required: true,
                message: "Location name is required",
              },
              {
                validator: (_, value) =>
                  validateNoSpecialChars(value)
                    ? Promise.resolve()
                    : Promise.reject(
                        "Location name must not contain special characters"
                      ),
              },
            ]}
          >
            <Input
              value={currentLocation.tenViTri}
              onChange={(e) => handleInputChange(e, "tenViTri")}
            />
          </Form.Item>
          <Form.Item
            label="City"
            rules={[
              {
                required: true,
                message: "City is required",
              },
              {
                pattern: wordRegExp,
                message: "City name must not contain special characters",
              },
            ]}
          >
            <Input
              value={currentLocation.tinhThanh}
              onChange={(e) => handleInputChange(e, "tinhThanh")}
            />
          </Form.Item>
          <Form.Item
            label="Country"
            rules={[
              {
                required: true,
                message: "Country is required",
              },
              {
                pattern: wordRegExp,
                message: "Country name must not contain special characters",
              },
            ]}
          >
            <Input
              value={currentLocation.quocGia}
              onChange={(e) => handleInputChange(e, "quocGia")}
            />
          </Form.Item>
          <Form.Item label="Image">
            <Input type="file" accept=".jpg,.png" onChange={handleFileChange} />
            {imageError && (
              <div style={{ color: "red", marginTop: "10px" }}>
                {imageError}
              </div>
            )}
            {currentLocation.hinhAnh && (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={currentLocation.hinhAnh}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableLocation;
