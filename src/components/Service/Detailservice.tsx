import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Detailservice.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";
import { SearchBox } from "../Utils/SearchBox";
import arrowDownIcon from "../assets/fi_chevron-down.png";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import addList from "../assets/list.png";

const headers = [
    {
        title: "Số thứ tự",
    },
    {
        title: "Trạng thái",
    },
];

const datas = [
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "✅ Đã hoàn thành",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "❌ Đang vắng",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "❌ Đang vắng",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "✅ Đã hoàn thành",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "✅ Đang thực hiện",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "✅ Đã hoàn thành",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "✅ Đã hoàn thành",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "❌ Đang vắng",
            },
        ],
    },
    {
        rows: [
            {
                text: "2010001",
            },
            {
                text: "✅ Đã hoàn thành",
            },
        ],
    },
];

export interface Props { }

export const Detailservice: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container">
                <Sidebar active="service" />
                <Topbar3 root="Dịch vụ" rootNext="Danh sách dịch vụ" rootNextNext="Chi tiết" />

                <span className="title">Quản lý dịch vụ</span>


                <div className="left">
                    <div className="title-1">
                        <span> Thông tin dịch vụ</span>
                    </div>
                    <div className="content">
                        <div className="Code-device">
                            <label htmlFor="">Mã dịch vụ:</label>
                            <span>201</span>
                        </div>
                        <div className="Name-device">
                            <label htmlFor="">Tên dịch vụ:</label>
                            <span>Khám tim mạch</span>
                        </div>
                        <div className="Comment-device">
                            <label htmlFor="">Mô tả:</label>
                            <span>Chuyên các bệnh lý về tim.</span>
                        </div>
                    </div>
                    <div className="title-2">
                        <span>Quy tắc cấp số</span>
                    </div>
                    <div className="bottom">
                        <div className="options">
                            <label htmlFor="">Tăng tự động từ:</label>
                            <span className="input">0001</span>
                            <span>
                                đến
                            </span>
                            <span className="input">9999</span>
                        </div>

                        <div className="options-2">
                            <label htmlFor="">Prefix: </label>
                            <span>9999</span>
                        </div>

                        <div className="options-3">
                            <label htmlFor="">Reset mỗi ngày </label>
                            <div>
                                <span>Ví dụ: 201-2001</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="status-action">
                        <span>Trạng thái hoạt động</span>
                        <select className="select">
                            <option value="" >Tất cả</option>
                            <option value="" >Đang hoạt động</option>
                            <option value="">Ngưng hoạt động</option>
                        </select>
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

                    <div className="search-field">
                        <SearchBox />
                    </div>

                    {/* Table */}
                    <div className="table">
                        <Table headers={headers} datas={datas} />
                    </div>

                    <img className="addList" src={addList} alt="" />

                    <div className="button-1">
                        <button className="button-2" onClick={() => navigate("/service/update")}>
                            <img src={addIcon} alt="Thêm thiết bị" />
                            <div className="text-1">Cập nhật danh sách</div>
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
};
