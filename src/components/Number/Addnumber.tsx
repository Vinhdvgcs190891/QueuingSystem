import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Addnumber.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";

export interface Props { }

export const Addnumber: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-number-add">
                <Sidebar active="number" />
                <Topbar3 root="Cấp số" rootNext="Danh sách cấp số" rootNextNext="Cấp số mới" />

                <span className="title-number-add">Quản lý cấp số</span>

                <div className="device-infor-number-add">
                    <div className="title-1-number-add">
                        <span>CẤP SỐ MỚI</span>
                    </div>

                    <div className="content-number-add">
                        <span>Dịch vụ khách hàng lựa chọn</span>
                    </div>

                    <div className="select-number-add">
                        <select>
                            <option value="">Chọn dịch vụ</option>
                            <option value="">Khám tim mạch</option>
                            <option value="">Khám sản - Phụ khoa</option>
                            <option value="">Khám răng hàm mặt</option>
                            <option value="">Khám tai mũi họng</option>
                        </select>
                    </div>

                    <div className="Button-number-add" >
                        <button className="Button-2-number-add" onClick={() => navigate("/number")}>
                            <span>Hủy bỏ</span>
                        </button>
                        <button className="Button-1-number-add" onClick={() => navigate("/number/capso")}>
                            <span>In số</span>
                        </button>

                    </div>


                </div>
            </div>



        </>
    );
};
