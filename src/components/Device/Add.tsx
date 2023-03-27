import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Add.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";
import arrowDownIcon from "../assets/fi_chevron-down.png";

export interface Props { }

export const Add: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-device-add">
                <Sidebar active="device" />
                <Topbar3 root="Thiết bị" rootNext="Danh sách thiết bị" rootNextNext="Thêm thiết bị" />

                <span className="title-device-add">Quản lý thiết bị</span>


                <div className="device-infor-device-add">
                    <div className="title-device-add-1">
                        <span> Thông tin thiết bị</span>
                    </div>

                    <div className="left-device-add">
                        <div className="Code-device-add">
                            <div>
                                <label htmlFor="">Mã thiết bị: <span className="Red-device-add">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập mã thiết bị"></input>
                        </div>
                        <div className="Name-device-add">
                            <div>
                                <label htmlFor="">Tên thiết bị: <span className="Red-device-add">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập tên thiết bị"></input>

                        </div>
                        <div className="IP-device-add">
                            <div>
                                <label htmlFor="">Địa chỉ IP: <span className="Red-device-add">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập địa chỉ IP"></input>

                        </div>
                    </div>
                    <div className="right-device-add">
                        <div className="select-device-add">
                            <div>
                                <label>Loại thiết bị: <span className="Red-device-add">*</span></label>
                            </div>
                            <select>
                                <option value="" >Chọn loại thiết bị</option>
                                <option value="" >Kiosk</option>
                                <option value="">Display counter</option>
                            </select>
                            <img className="arrowIcon-device-add" src={arrowDownIcon} alt="" />
                        </div>
                        <div className="Username-device-add">
                            <div>
                                <label htmlFor="">Tên đăng nhập: <span className="Red-device-add">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập tên đăng nhập"></input>

                        </div>
                        <div className="Password-device-add">
                            <div>
                                <label htmlFor="">Mật khẩu: <span className="Red-device-add">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập mật khẩu"></input>
                        </div>
                    </div>

                </div>
                <div className="bottom-device-add">
                    <div className="More-device-add">
                        <label htmlFor="">Dịch vụ sử dụng: <span className="Red-device-add">*</span></label>
                        <input type="text" id="fname" name="fname" value="Nhập dịch vụ sử dụng"></input>
                    </div>
                    <div>
                        <span className="luuy-device-add">* là trường thông tin bắt buộc</span>
                    </div>
                </div>
                <div className="Button-device-add" onClick={() => navigate("/device")}>
                    <button className="Button-2-device-add">
                        <span>Hủy bỏ</span>
                    </button>
                    <button className="Button-1-device-add" onClick={() => navigate("/device")}>
                        <span>Thêm thiết bị</span>
                    </button>

                </div>
            </div>



        </>
    );
};
