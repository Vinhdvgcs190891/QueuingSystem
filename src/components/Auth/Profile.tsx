import { FC } from "react";

import "./Profile.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import avatarBig from "../assets/avatar_big.png";
import camera from "../assets/camera.png";
import "./Profile.scss";
import { Topbar } from "../NavigationBar/Topbar";

export interface Props { }

export const Profile: FC<Props> = (props) => {
  return (
    <>
      <div className="profile-container">
        <Sidebar active="profile" />

        <Topbar profileText="Thông tin cá nhân" />

        <div className="user-info">
          <div className="avatar-info">
            <div className="name">Lê Quỳnh Ái Vân</div>
            <div className="avatar-group">
              <img className="avatar" src={avatarBig} alt="" />
              <div className="camera-group">
                <img className="camera" src={camera} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="username">
              <input type="text" id="fname" name="fname" value="aivan1234"></input>
              <label htmlFor="">Tên đăng nhập</label>
            </div>

            <div className="password">
              <input type="text" id="fname" name="fname" value="Binh Thanh, Ho Chi Minh"></input>
              <label htmlFor="">Địa chỉ</label>
            </div>

            <div className="role">
              <input type="text" id="fname" name="fname" value="Leader"></input>
              <label htmlFor="">Vai trò</label>
            </div>

            <div className="email">
              <input type="text" id="fname" name="fname" value="aivan1234@gmail.com"></input>
              <label htmlFor="">Email</label>
            </div>

            <div className="name">
              <input type="text" id="fname" name="fname" value="Lê Quỳnh Ái Vân"></input>
              <label htmlFor="">Tên người dùng</label>
            </div>

            <div className="phone">
              <input type="text" id="fname" name="fname" value="0239430123"></input>
              <label htmlFor="">Số điện thoại</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
