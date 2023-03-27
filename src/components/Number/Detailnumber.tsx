import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Detailnumber.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";
import addIcon from "../assets/add-square.png";

export interface Props { }

export const Detailnumber: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-number-detail">
                <Sidebar active="device" />
                <Topbar3 root="Thiết bị" rootNext="Danh sách cấp số" rootNextNext="Cấp số" />

                <span className="title-number-detail">Quản lý cấp số</span>

                <div className="button-1-number-detail" onClick={() => navigate("/number")}>
                    <button className="button-2-number-detail" >
                        <img src={addIcon} alt="Thêm thiết bị" />
                        <div className="text-number-detail">Quay lại</div>
                    </button>
                </div>


                <div className="device-infor-number-detail">
                    <div className="title-1-number-detail">
                        <span> Thông tin cấp số</span>
                    </div>

                    <div className="left-number-detail">
                        <div className="Code-number-detail">
                            <label htmlFor="">Họ tên: </label>
                            <span>Nguyễn Thị Dung</span>
                        </div>
                        <div className="Name-number-detail">
                            <label htmlFor="">Dịch vụ: </label>
                            <span>Khám tim mạch</span>
                        </div>
                        <div className="IP-number-detail">
                            <label htmlFor="">Số thứ tự: </label>
                            <span>2001201</span>
                        </div>
                        <div className="time-number-detail">
                            <label htmlFor="">Thời gian cấp: </label>
                            <span>14:35 - 07/11/2021</span>
                        </div>
                    </div>
                    <div className="right-number-detail">
                        <div className="select-number-detail">
                            <label htmlFor="">Nguồn cấp: </label>
                            <span>Kiosk</span>
                        </div>
                        <div className="Username-number-detail">
                            <label htmlFor="">Trạng thái: </label>
                            <span>🔵 Đang chờ</span>
                        </div>
                        <div className="Password-number-detail">
                            <label htmlFor="">Số điện thoại: </label>
                            <span>0948523623</span>
                        </div>
                        <div className="Email-number-detail">
                            <label htmlFor="">Địa chỉ Email: </label>
                            <span>nguyendung@gmail.com</span>
                        </div>
                    </div>

                </div>
                <div className="bottom-number-detail">
                    <label htmlFor="">Hạn sử dụng: </label>
                    <span>18:00 - 07/11/2021</span>
                </div>
            </div>




        </>
    );
};
