import { FC } from "react";
import "./Setting3.scss";
import { AddNewButton } from "../NavigationBar/AddNewButton";
import { Pagination } from "../NavigationBar/Pagination";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar } from "../NavigationBar/Topbar";
import { Table } from "../Utils/Table";
import addIcon from "../assets/add-square.png";
import { SearchBox } from "../Utils/SearchBox";

const headers = [
    {
        title: "Tên đăng nhập",
    },
    {
        title: "Họ tên",
    },
    {
        title: "Số điện thoại",
    },
    {
        title: "Email",
    },
    {
        title: "Vai trò",
    },
    {
        title: "Trạng thái hoạt động",
    },
    {},
];

const datas = [
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "Nguyen Van A",
            },
            {
                text: "0919256712",
            },
            {
                text: "tuyetnguyen123@gmail.com",
            },
            {
                text: "Kế toán",
            },
            {
                text: "Hoạt động",
            },
            {
                text: "Cập nhật",
            },
        ],
    },
];

export interface Props { }

export const Setting3: FC<Props> = (props) => {
    return (
        <>
            <div className="service-container">
                {/* Sidebar */}
                <Sidebar active="Setting" />

                {/* Topbar */}
                <Topbar root="Cài đặt" rootNext="Quản lý tài khoản" />

                <div className="title">Danh sách tài khoản</div>

                {/* Seach box */}
                <div className="search-box">
                    <div className="d-flex gap-3">
                        <div className="status-action">
                            <span>Tên vai trò</span>
                            <div className="mt-1 position-relative">
                                <input type="text" placeholder="Tất cả" />
                                <i className="fa-solid fa-sort-down position-absolute top-50 end-0 translate-middle"></i>
                            </div>
                        </div>
                    </div>

                    <div className="search-field">
                        <SearchBox />
                    </div>
                </div>

                {/* Table */}
                <Table headers={headers} datas={datas} />

                {/* Add icon */}
                <AddNewButton icon={addIcon} title="Thêm dịch vụ" />

                {/* Pagination */}
                <Pagination />
            </div>
        </>
    );
};
