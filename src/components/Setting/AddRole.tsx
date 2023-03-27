import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./AddRole.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar3 } from "../NavigationBar/Topbar3";

export interface Props { }

export const AddRole: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="device-container-setting-add">
                <Sidebar active="setting" />
                <Topbar3 root="Cài đặt" rootNext="Quản lý vai trò" rootNextNext="Thêm vai trò" />

                <span className="title-setting-add">Danh sách vai trò</span>


                <div className="device-infor-setting-add">
                    <div className="title-1-setting-add">
                        <span> Thông tin vai trò</span>
                    </div>

                    <div className="left-setting-add">
                        <div className="Code-setting-add">
                            <div>
                                <label htmlFor="">Tên vai trò: <span className="Red-setting-add">*</span></label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập tên vai trò"></input>
                        </div>
                        <div className="Name-setting-add">
                            <div>
                                <label htmlFor="">Mô tả: </label>
                            </div>
                            <input type="text" id="fname" name="fname" value="Nhập mô tả"></input>
                        </div>
                        <div>
                            <span className="luuy-setting-add">* là trường thông tin bắt buộc</span>
                        </div>
                    </div>

                    <div className="right-setting-add">
                        <span className="phanquyenchucnang">Phân quyền chức năng: <span className="Red-setting-add">*</span></span>
                        <div className="check-setting-add">
                            <div className="title-A">
                                <span className="title-A">Nhóm chức năng A</span>
                            </div>

                            <div className="ALL-A">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Tất cả</label>
                            </div>

                            <div className="X-A">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng X</label>
                            </div>
                            <div className="Y-A">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Y</label>
                            </div>
                            <div className="Z-A">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Z</label>
                            </div>

                            <div className="title-B">
                                <span className="title-B">Nhóm chức năng B</span>
                            </div>

                            <div className="ALL-B">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Tất cả</label>
                            </div>

                            <div className="X-B">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng X</label>
                            </div>

                            <div className="Y-B">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Y</label>
                            </div>

                            <div className="Z-B">
                                <input className="checkbox-setting-add" id="fname" type="checkbox"></input>
                                <label htmlFor="">Chức năng Z</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Button-setting-add" onClick={() => navigate("/setting")}>
                    <button className="Button-2-setting-add">
                        <span>Hủy bỏ</span>
                    </button>
                    <button className="Button-1-setting-add" onClick={() => navigate("/setting/update")}>
                        <span>Thêm</span>
                    </button>

                </div>
            </div>



        </>
    );
};
