import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Manage.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";

export interface Props { }

export const Manage: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-service-manage">
                <Sidebar active="service" />
                <Topbar3 root="Dịch vụ" rootNext="Danh sách dịch vụ" rootNextNext="Thêm dịch vụ" />

                <span className="title-service-manage">Quản lý dịch vụ</span>


                <div className="device-infor-service-manage">
                    <div className="title-1-service-manage">
                        <span> Thông tin dịch vụ</span>
                    </div>
                    <div className="flex-service-manage">
                        <div className="left-service-manage">
                            <div className="Code-device-service-manage">
                                <div>
                                    <label htmlFor="">Mã dịch vụ: <span className="Red-service-manage">*</span></label>
                                </div>
                                <input type="text" id="fname" name="fname" value="201"></input>
                            </div>
                            <div className="Name-device-service-manage">
                                <div>
                                    <label htmlFor="">Tên dịch vụ: <span className="Red-service-manage">*</span></label>
                                </div>
                                <input type="text" id="fname" name="fname" value="Khám tim mạch"></input>
                            </div>
                        </div>
                        <div className="right-service-manage">
                            <div className="Username-service-manage">
                                <div>
                                    <label htmlFor="">Mô tả:</label>
                                </div>
                                <input type="text" id="fname" name="fname" value="Mô tả dịch vụ"></input>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-service-manage">
                        <div className="title-2-service-manage">
                            <span>Quy tắc cấp số</span>
                        </div>
                        <div className="check-service-manage">
                            <div className="options-service-manage">
                                <input className="checkbox-service-manage" id="fname" type="checkbox"></input>
                                <label htmlFor="">Tăng tự động từ:</label>
                                <input type="text" id="fname" name="fname" value="0001"></input>
                                <span>
                                    đến
                                </span>
                                <input type="text" id="fname" name="fname" value="9999"></input>
                            </div>

                            <div className="options-service-manage">
                                <input className="checkbox-service-manage" id="fname" type="checkbox"></input>
                                <label htmlFor="">Prefix: </label>
                                <input type="text" id="fname" name="fname" value="0001"></input>
                            </div>

                            <div className="options-service-manage">
                                <input className="checkbox-service-manage" id="fname" type="checkbox"></input>
                                <label htmlFor="">Surfix: </label>
                                <input type="text" id="fname" name="fname" value="0001"></input>
                            </div>

                            <div className="options-service-manage">
                                <input className="checkbox-service-manage" id="fname" type="checkbox"></input>
                                <label htmlFor="">Reset mỗi ngày </label>
                            </div>
                        </div>
                        <div>
                            <span className="luuy-service-manage">* là trường thông tin bắt buộc</span>
                        </div>
                    </div>
                </div>
                <div className="Button-service-manage" onClick={() => navigate("/service")}>
                    <button className="Button-2-service-manage">
                        <span>Hủy bỏ</span>
                    </button>
                    <button className="Button-1-service-manage" onClick={() => navigate("/service")}>
                        <span>Thêm dịch vụ</span>
                    </button>
                </div>

            </div>


        </>
    );
};
