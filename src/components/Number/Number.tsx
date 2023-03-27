import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import "./Number.scss";
import { SearchBox } from "../Utils/SearchBox";
import arrowDownIcon from "../assets/fi_chevron-down.png";

export interface Props { }

const headers = [
  {
    title: "STT",
  },
  {
    title: "Tên khách hàng",
  },
  {
    title: "Tên dịch vụ",
  },
  {
    title: "Thời gian cấp",
  },
  { title: "Hạn sữ dụng" },
  { title: "Trạng thái" },
  { title: "Nguồn cấp" },
  {},
];

const datas = [
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔵 Đang chờ",
      },
      {
        text: "Kiosk",
      },
      { text: "" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔴 Bỏ qua",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔵 Đang chờ",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔴 Bỏ qua",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "⚫ Đã sử dụng",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔵 Đang chờ",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "⚫ Đã sử dụng",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔵 Đang chờ",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "⚫ Đã sử dụng",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
  {
    rows: [
      {
        text: "2010001",
      },
      {
        text: "Lê Huỳnh Ái Vân",
      },
      {
        text: "Khám tim mạch",
      },
      {
        text: "14:35 - 07/11/2021",
      },
      {
        text: "14:35 - 12/11/2021",
      },
      {
        text: "🔵 Đang chờ",
      },
      {
        text: "Kiosk",
      },
      { text: "Chi tiết" },
    ],
  },
];

export const Number: FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="number-container">

        <div className="button-1-number" onClick={() => navigate("/number/add")}>
          <button className="button-2-number" >
            <img src={addIcon} alt="Thêm thiết bị" />
            <div className="text-1-number">Cấp số mới</div>
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar active="number" />

        {/* Topbar */}
        <Topbar root="Cấp số" rootNext="Danh sách cấp số" />

        {/* Information */}
        <div className="title">Quản lý cấp số</div>

        <div className="search-box d-flex gap-3">
          {/* Service */}
          <div className="status-action-number">
            <span>Trạng thái hoạt động</span>
            <select>
              <option value="">Tất cả</option>
              <option value="">Khám sản - Phụ khoa</option>
              <option value="">Khám răng hàm mặt</option>
              <option value="">Khám tai mũi họng</option>
            </select>
            <img className="arrowIcon-1-number" src={arrowDownIcon} alt="" />
          </div>

          {/* Status */}
          <div className="status-action-number">
            <span>Tình trạng</span>
            <select>
              <option value="">Tất cả</option>
              <option value="">Đang chờ</option>
              <option value="">Đã sử dụng</option>
              <option value="">Bỏ qua</option>
            </select>
            <img className="arrowIcon-1-number" src={arrowDownIcon} alt="" />
          </div>

          {/* Source */}
          <div className="status-action-number">
            <span>Nguồn cấp</span>
            <select>
              <option value="">Tất cả</option>
              <option value="">Kiosk</option>
              <option value="">Hệ thống</option>
            </select>
            <img className="arrowIcon-1-number" src={arrowDownIcon} alt="" />
          </div>

          {/* Time */}
          <div className="service">
            <span>Chọn thời gian</span>
            <div className="mt-1 d-flex align-items-center gap-2">
              <div>
                <input type="date" />
              </div>
              <div>
                <i className="fa-solid fa-caret-right time-icon"></i>
              </div>
              <div>
                <input type="date" />
              </div>
            </div>
          </div>

          {/* Search */}
          <SearchBox />
        </div>

        {/* Table */}
        <Table headers={headers} datas={datas} />

        {/* Pagigation */}
        <Pagination />
      </div>

      <div className="chitiet-number" onClick={() => navigate("/number/detail")}>
        <a href="">Chi tiết</a>
      </div>
    </>
  );
};
