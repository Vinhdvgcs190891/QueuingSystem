import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Device.scss";
import addIcon from "../assets/add-square.png";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Pagination } from "../NavigationBar/Pagination";
import arrowDownIcon from "../assets/fi_chevron-down.png";
import searchIcon from "../assets/fi_search.png";
import { Table } from "../Utils/Table";

export interface Props { }

const headers = [
  {
    title: "Mã thiết bị",
  },
  {
    title: "Tên thiết bị",
  },
  {
    title: "Địa chỉ IP",
  },
  {
    title: "Trạng thái hoạt động",
  },
  {
    title: "Trạng thái kết nối",
  },
  {
    title: "Dịch vụ sữ dụng",
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
        text: "192.168.1.10",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "❌ Mất kết nối",
      },
      {
        text: "Khám tim mạch, Khám mắt...",
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
        text: "192.168.1.10",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "❌ Mất kết nối",
      },
      {
        text: "Khám tim mạch, Khám mắt...",
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
        text: "192.168.1.10",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "✅ Đang kết nối",
      },
      {
        text: "Khám tim mạch, Khám mắt...",
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
        text: "192.168.1.10",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "✅ Đang kết nối",
      },
      {
        text: "Khám tim mạch, Khám mắt...",
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
        text: "192.168.1.10",
      },
      {
        text: "✅ Đang hoạt động",
      },
      {
        text: "✅ Đang kết nối",
      },
      {
        text: "Khám tim mạch, Khám mắt...",
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
        text: "192.168.1.10",
      },
      {
        text: "❌ Ngưng hoạt động",
      },
      {
        text: "✅ Đang kết nối",
      },
      {
        text: "Khám tim mạch, Khám mắt...",
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

export const Device: FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="device-container">
        <Sidebar active="device" />
        <Topbar root="Thiết bị" rootNext="Danh sách thiết bị" />

        <span className="title">Danh sách thiết bị</span>

        <div className="button-1" onClick={() => navigate("/device/add")}>
          <button className="button-2" >
            <img src={addIcon} alt="Thêm thiết bị" />
            <div className="text-1-device">Thêm thiết bị</div>
          </button>
        </div>

        <div className="status-action">
          <span>Trạng thái hoạt động</span>
          <select>
            <option value="">Tất cả</option>
            <option value="">Hoạt động</option>
            <option value="">Ngưng hoạt động</option>
          </select>
          <img className="arrowIcon-1" src={arrowDownIcon} alt="" />
        </div>

        <div className="status-connect">
          <span>Trạng thái kết nối</span>
          <select>
            <option value="">Tất cả</option>
            <option value="">Kết nối</option>
            <option value="">Mất kết nối</option>
          </select>
          <img className="arrowIcon-2" src={arrowDownIcon} alt="" />
        </div>

        <div className="search-box">
          <span>Từ khóa</span>
          <input type="text" placeholder="Nhập từ khóa" />
          <img className="searchIcon" src={searchIcon} alt="" />
        </div>

        {/* Table */}
        <Table headers={headers} datas={datas} />

        {/* Pagination */}
        <Pagination />
      </div>

      <div className="chitiet-device" onClick={() => navigate("/device/detail")}>
        <a href="">Chi tiết</a>
      </div>
      <div className="capnhat-device" onClick={() => navigate("/device/update")}>
        <a href="">Cập nhật</a>
      </div>
    </>
  );
};
