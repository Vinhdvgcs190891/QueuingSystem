import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./UpdateSetting.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";

export interface Props { }

export const UpdateSetting: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-setting-update">
                <Sidebar active="setting" />
                <Topbar3 root="Cài đặt" rootNext="Quản lý vai trò" rootNextNext="Cập nhật vai trò" />

                <span className="title-setting-update">Danh sách vai trò</span>


                <div className="device-infor-setting-update">
                    <div className="title-1-setting-update">
                        <span> Thông tin vai trò</span>
                    </div>

                    <div className="left-setting-update">
                        <div className="Code-setting-update">
                            <div>
                                <label htmlFor="">Tên vai trò: <span className="Red-setting-update">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập tên vai trò"></input>
                        </div>
                        <div className="Name-setting-update">
                            <div>
                                <label htmlFor="">Mô tả: </label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập mô tả"></input>
                        </div>
                        <div>
                            <span className="luuy-setting-update">* là trường thông tin bắt buộc</span>
                        </div>
                    </div>

                    <div className="right-setting-update">
                        <span className="phanquyenchucnang-setting-update">Phân quyền chức năng: <span className="Red-setting-update">*</span></span>
                        <div className="check-setting-update">
                            <div className="title-A-setting-update">
                                <span className="title-A-setting-update">Nhóm chức năng A</span>
                            </div>

                            <div className="ALL-A-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Tất cả</label>
                            </div>

                            <div className="X-A-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng X</label>
                            </div>
                            <div className="Y-A-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Y</label>
                            </div>
                            <div className="Z-A-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Z</label>
                            </div>

                            <div className="title-B-setting-update">
                                <span className="title-B-setting-update">Nhóm chức năng B</span>
                            </div>

                            <div className="ALL-B-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Tất cả</label>
                            </div>

                            <div className="X-B-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng X</label>
                            </div>

                            <div className="Y-B-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Y</label>
                            </div>

                            <div className="Z-B-setting-update">
                                <input className="checkbox-setting-add-setting-update" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Z</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Button-setting-update" onClick={() => navigate("/setting")}>
                    <button className="Button-2-setting-update">
                        <span>Hủy bỏ</span>
                    </button>
                    <button className="Button-1-setting-update" onClick={() => navigate("/setting")}>
                        <span>Cập nhật</span>
                    </button>

                </div>
            </div>



        </>
    );
};
