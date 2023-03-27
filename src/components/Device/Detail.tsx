import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Detail.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";
import addIcon from "../assets/add-square.png";

export interface Props { }

export const Detail: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-device-detail">
                <Sidebar active="device" />
                <Topbar3 root="Thiết bị" rootNext="Danh sách thiết bị" rootNextNext="Chi tiết thiết bị" />

                <span className="title-device-detail">Quản lý thiết bị</span>

                <div className="button-1-device-detail" onClick={() => navigate("/device/update")}>
                    <button className="button-2-device-detail" >
                        <img src={addIcon} alt="Thêm thiết bị" />
                        <div className="text-device-detail">Cập nhật thiết bị</div>
                    </button>
                </div>


                <div className="device-infor-device-detail">
                    <div className="title-1-device-detail">
                        <span> Thông tin thiết bị</span>
                    </div>

                    <div className="left-device-detail">
                        <div className="Code-device-detail">
                            <label htmlFor="">Mã thiết bị: </label>
                            <span>KIO-01</span>
                        </div>
                        <div className="Name-device-detail">
                            <label htmlFor="">Tên thiết bị: </label>
                            <span>Kiosk</span>
                        </div>
                        <div className="IP-device-detail">
                            <label htmlFor="">Địa chỉ IP: </label>
                            <span>128.172.308</span>
                        </div>
                    </div>
                    <div className="right-device-detail">
                        <div className="select-device-detail">
                            <label htmlFor="">Loại thiết bị: </label>
                            <span>Kiosk</span>
                        </div>
                        <div className="Username-device-detail">
                            <label htmlFor="">Tên đăng nhập: </label>
                            <span>Linhkyo011</span>
                        </div>
                        <div className="Password-device-detail">
                            <label htmlFor="">Mật khẩu: </label>
                            <span>CMS</span>
                        </div>
                    </div>

                </div>
                <div className="bottom-device-detail">
                    <label htmlFor="">Dịch vụ sử dụng: </label>
                    <div className="service-device-detail">
                        <span>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
                    </div>
                </div>
            </div>




        </>
    );
};
