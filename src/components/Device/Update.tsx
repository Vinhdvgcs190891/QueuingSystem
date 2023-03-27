import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Update.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";
import arrowDownIcon from "../assets/fi_chevron-down.png";
import Service from "../assets/inputservice.png";

export interface Props { }

export const Update: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-device-update">
                <Sidebar active="device" />
                <Topbar3 root="Thiết bị" rootNext="Danh sách thiết bị" rootNextNext="Cập nhật thiết bị" />

                <span className="title-device-update">Quản lý thiết bị</span>


                <div className="device-infor-device-update">
                    <div className="title-1-device-update">
                        <span> Thông tin thiết bị</span>
                    </div>

                    <div className="left-device-update">
                        <div className="Code-device-device-update">
                            <div>
                                <label htmlFor="">Mã thiết bị: <span className="Red-device-update">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="KIO-01"></input>
                        </div>
                        <div className="Name-device-device-update">
                            <div>
                                <label htmlFor="">Tên thiết bị: <span className="Red-device-update">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Kiosk"></input>

                        </div>
                        <div className="IP-device-update">
                            <div>
                                <label htmlFor="">Địa chỉ IP: <span className="Red-device-update">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="128.172.308"></input>

                        </div>
                    </div>
                    <div className="right-device-update">
                        <div className="select-device-update">
                            <div>
                                <label>Loại thiết bị: <span className="Red-device-update">*</span></label>
                            </div>
                            <select>
                                <option value="" >Kiosk</option>
                                <option value="" >Chọn loại thiết bị</option>
                                <option value="">Display counter</option>
                            </select>
                            <img className="arrowIcon-device-update" src={arrowDownIcon} alt="" />
                        </div>
                        <div className="Username-device-update">
                            <div>
                                <label htmlFor="">Tên đăng nhập: <span className="Red-device-update">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Linhkyo011"></input>

                        </div>
                        <div className="Password-device-update">
                            <div>
                                <label htmlFor="">Mật khẩu: <span className="Red-device-update">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="CMS"></input>
                        </div>
                    </div>

                </div>
                <div className="bottom-device-update">
                    <div className="More-device-update">
                        <label htmlFor="">Dịch vụ sử dụng: <span className="Red-device-update">*</span></label>
                        <img className="group-1-device-update" src={Service} alt="" />
                        <span className="luuy">* là trường thông tin bắt buộc</span>
                    </div>
                </div>
                <div className="Button-device-update" onClick={() => navigate("/device")}>
                    <button className="Button-2-device-update">
                        <span>Hủy bỏ</span>
                    </button>
                    <button className="Button-1-device-update" onClick={() => navigate("/device")}>
                        <span>cập nhật</span>
                    </button>

                </div>
            </div>



        </>
    );
};
