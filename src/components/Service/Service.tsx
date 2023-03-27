import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Service.scss";
import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import { SearchBox } from "../Utils/SearchBox";
import arrowDownIcon from "../assets/fi_chevron-down.png";

const headers = [
  {
    title: "Mã dịch vụ",
  },
  {
    title: "Tên dịch vụ",
  },
  {
    title: "Mô tả",
  },
  {
    title: "Trạng thái hoạt động",
  },
  {},
  {},
];

const datas = [
  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "",
      },
      {
        text: "",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },

  {
    rows: [
      {
        text: "KIO_01",
      },
      {
        text: "Kiosk",
      },
      {
        text: "Mô tả dịch vụ 1",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "Chi tiết",
      },
      {
        text: "Cập nhật",
      },
    ],
  },
];

export interface Props { }

export const Service: FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="service-container">
        {/* Sidebar */}
        <Sidebar active="service" />

        {/* Topbar */}
        <Topbar root="Dịch vụ" rootNext="Danh sách dịch vụ" />

        <div className="title">Quản lý dịch vụ</div>

        {/* Seach box */}
        <div className="search-box">
          <div className="d-flex gap-3">
            <div className="status-action">
              <span>Trạng thái hoạt động</span>
              <div className="mt-1 position-relative">
                <select className="select">
                  <option value="" >Tất cả</option>
                  <option value="" >Đang hoạt động</option>
                  <option value="">Ngưng hoạt động</option>
                </select>
              </div>
              <img className="arrowIcon" src={arrowDownIcon} alt="" />
            </div>

            <div className="time-action">
              <span>Chọn thời gian</span>
              <div className="mt-1 d-flex align-items-center gap-2">
                <div>
                  <input type="date" />
                </div>
                <div>
                  <i className="fa-solid fa-caret-right"></i>
                </div>
                <div>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>

          <div className="search-field">
            <SearchBox />
          </div>
        </div>

        {/* Table */}
        <Table headers={headers} datas={datas} />

        <div className="button-1" onClick={() => navigate("/service/manage")}>
          <button className="button-2" >
            <img src={addIcon} alt="Thêm thiết bị" />
            <div className="text-1">Thêm dịch vụ</div>
          </button>
        </div>

        {/* Pagination */}
        <Pagination />
      </div>

      <div className="chitiet-service" onClick={() => navigate("/service/detail")}>
        <a href="">Chi tiết</a>
      </div>
      <div className="capnhat-service" onClick={() => navigate("/service/update")}>
        <a href="">Cập nhật</a>
      </div>
    </>
  );
};
