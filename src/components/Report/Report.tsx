import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import "./Report.scss";
import { SearchBox } from "../Utils/SearchBox";

export interface Props { }

const headers = [
    {
        title: "STT",
    },
    {
        title: "Tên dịch vụ",
    },
    {
        title: "Thời gian cấp",
    },
    {
        title: "Tình trạng",
    },
    {
        title: "Nguồn cấp"
    },
];

const datas = [
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "Khám tim mạch",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔵 Đang chờ",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010002",
            },
            {
                text: "Răng hàm mặt",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "⚫ Đã sử dụng",
            },
            {
                text: "Hệ thống",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔴 Bỏ qua",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "Răng hàm mặt",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔵 Đang chờ",
            },
            {
                text: "Hệ thống",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "⚫ Đã sử dụng",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "⚫ Đã sử dụng",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔵 Đang chờ",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔴 Bỏ qua",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔴 Bỏ qua",
            },
            {
                text: "Kiosk",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010003",
            },
            {
                text: "Khám sản phụ khoa",
            },
            {
                text: "7h20 - 07/10/2021",
            },
            {
                text: "🔵 Đang chờ",
            },
            {
                text: "Kiosk",
            },
        ],
    },
];

export const Report: FC<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="number-container">

                <div className="button-1-report" onClick={() => navigate("/report")}>
                    <button className="button-2-report" >
                        <img src={addIcon} alt="Thêm thiết bị" />
                        <div className="text-1-report">Tải về</div>
                    </button>
                </div>

                {/* Sidebar */}
                <Sidebar active="report" />

                {/* Topbar */}
                <Topbar root="Báo cáo" rootNext="Lập báo cáo" />

                {/* Information */}
                <div className="title">Quản lý báo cáo</div>

                <div className="search-box d-flex gap-3">
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
        </>
    );
};
