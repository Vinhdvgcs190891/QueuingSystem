import { FC } from "react";

import "./Dashboard.scss";
import { Sidebar } from "../NavigationBar/Sidebar";
import { Topbar2 } from "../NavigationBar/Topbar2";
import addDashboard1 from "../assets/Dashboard1.png";
import addBieudo from "../assets/bieudo.png";
import addBieudophai from "../assets/bieudophai.png";

export interface Props { }

export const Dashboard: FC<Props> = (props: Props) => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar active="dashboard" />
        <Topbar2 root="Dashboard" />

        <span className="title">Biểu đồ cấp số</span>

        <img className="group-1" src={addDashboard1} alt="" />

        <span className="title-right">Tổng quan</span>

        <div className="group-bottom">
          <div className="comment-1">
            <span>Bảng thống kê theo ngày</span>
            <p className="comment-2">Tháng 11/2021</p>
          </div>

          <div className="status-action">
            <span>Xem theo</span>
            <select>
              <option value="">Ngày</option>
              <option value="">Tháng</option>
              <option value="">Năm</option>
            </select>
          </div>
        </div>

        <div className="bieudo1">
          <img className="group-2" src={addBieudo} alt="" />
        </div>

        <div className="bieudo2">
          <img className="group-3" src={addBieudophai} alt="" />
        </div>
      </div>
    </>
  );
};
