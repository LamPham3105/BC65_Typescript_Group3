import React, { useEffect, useState } from "react";
import { commentApi } from "../../../service/comment/commentApi";

type Comment = {
  id: number;
  maPhong: number;
  maNguoiBinhLuan: number;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
};

const TableComment = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await commentApi.getComment();
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Tables</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home" />
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Tables</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Basic Tables</a>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Responsive Table</div>
            </div>
            <div className="card-body">
              <div className="card-sub">
                Create responsive tables by wrapping any table with
                <code className="highlighter-rouge">.table-responsive</code>
                <code className="highlighter-rouge">DIV</code> to make them
                scroll horizontally on small devices
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Room code</th>
                      <th>Customer's code</th>
                      <th>Date time</th>
                      <th>Feedback</th>
                      <th>Evaluate</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comments.map((comment) => (
                      <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.maPhong}</td>
                        <td>{comment.maNguoiBinhLuan}</td>
                        <td>
                          {new Date(
                            parseInt(comment.ngayBinhLuan)
                          ).toLocaleString()}
                        </td>
                        <td
                          style={{
                            maxWidth: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {comment.noiDung}
                        </td>
                        <td>{comment.saoBinhLuan}</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComment;
