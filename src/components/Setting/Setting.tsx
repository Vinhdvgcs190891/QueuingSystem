import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Setting.scss";
import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import { SearchBox } from "../Utils/SearchBox";

const headers = [
    {
        title: "Tên vai trò",
    },
    {
        title: "Số người dùng",
    },
    {
        title: "Mô tả",
    },
    {},
];

const datas = [
    {
        rows: [
            {
                text: "Kế toán",
            },
            {
                text: "6",
            },
            {
                text: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
            },
            {
                text: "",
            },
        ],
    },
    {
        rows: [
            {
                text: "Bác sĩ",
            },
            {
                text: "6",
            },
            {
                text: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "Lễ tân",
            },
            {
                text: "6",
            },
            {
                text: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "Admin",
            },
            {
                text: "6",
            },
            {
                text: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "Superadmin",
            },
            {
                text: "6",
            },
            {
                text: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
];

export interface Props { }

export const Setting: FC<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="service-container-setting">

                {/* Sidebar */}
                <Sidebar active="setting" />

                {/* Topbar */}
                <Topbar root="Cài đặt" rootNext="Quản lý vai trò" />

                <div className="title-setting">Danh sách vai trò</div>

                <div className="button-1-setting" onClick={() => navigate("/setting/add")}>
                    <button className="button-2-setting" >
                        <img src={addIcon} alt="Thêm thiết bị" />
                        <div className="text-1-setting">Thêm vai trò</div>
                    </button>
                </div>

                {/* Seach box */}
                <div className="search-box-setting">
                    <div className="search-field">
                        <SearchBox />
                    </div>
                </div>

                {/* Table */}
                <Table headers={headers} datas={datas} />

                {/* Pagination */}
                <Pagination />
            </div>

            <div className="capnhat-setting" onClick={() => navigate("/setting/update")}>
                <a href="">Cập nhật</a>
            </div>
        </>
    );
};
