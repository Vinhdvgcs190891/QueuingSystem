import { FC } from "react";
import "./Setting2.scss";
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
        title: "Thời gian tác động",
    },
    {
        title: "IP thực hiện",
    },
    {
        title: "Thao tác thực hiện",
    },
];

const datas = [
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
    {
        rows: [
            {
                text: "tuyetnguyen@12",
            },
            {
                text: "01/12/2021 15:12:17",
            },
            {
                text: "192.168.3.1",
            },
            {
                text: "Cập nhật thông tin dịch vụ DV_01",
            },
        ],
    },
];

export interface Props { }

export const Setting2: FC<Props> = (props) => {
    return (
        <>
            <div className="service-container">
                {/* Sidebar */}
                <Sidebar active="setting" />

                {/* Topbar */}
                <Topbar root="Cài đặt" rootNext="Nhật ký hoạt động" />

                <div className="search-box d-flex gap-3">
                    {/* Time */}
                    <div className="time-action">
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
            </div>

            {/* Table */}
            <Table headers={headers} datas={datas} />

            {/* Add icon */}
            <AddNewButton icon={addIcon} title="Thêm dịch vụ" />

            {/* Pagination */}
            <Pagination />
        </>
    );
};
