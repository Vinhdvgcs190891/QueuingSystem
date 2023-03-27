import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import logoutIcon from "../assets/fi_log-out.png";
import logoAlta from "../assets/logo_alta.png";
import dashboardIcon from "../assets/dashboard.png";
import monitorIcon from "../assets/monitor.png";
import monitorATIcon from "../assets/deviceAT.png";
import serviceIcon from "../assets/service.png";
import serviceATIcon from "../assets/serviceAT.png";
import numberIcon from "../assets/number.png";
import numberATIcon from "../assets/numberAT.png";
import reportIcon from "../assets/report.png";
import settingIcon from "../assets/setting.png";

export interface Props {
  active: string;
}

export const Sidebar: FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-bar">
        {/* Logo */}
        <div>
          <img className="logo" src={logoAlta} alt="" />
        </div>

        {/* Dashboard */}
        <div
          onClick={() => navigate("/dashboard")}
          className={props.active === "dashboard" ? `dashboard active` : "dashboard"}
        >
          <div className="dashboard-1">
            <img src={props.active === "dashboard" ? dashboardIcon : dashboardIcon} />
            <span className={props.active === "dashboard" ? "active" : ""}>
              Dashboard
            </span>
          </div>
        </div>

        {/* Device */}
        <div
          onClick={() => navigate("/device")}
          className={props.active === "device" ? `monitor active` : "monitor"}
        >
          <div className="monitor-1">
            <img
              src={props.active === "device" ? monitorATIcon : monitorIcon}
              alt=""
            />
            <span className={props.active === "device" ? "active" : ""}>
              Thiết bị
            </span>
          </div>
        </div>

        {/* Service */}
        <div
          onClick={() => navigate("/service")}
          className={props.active === "service" ? `service active` : "service"}
        >
          <div className="service-1">
            <img
              src={props.active === "service" ? serviceATIcon : serviceIcon}
              alt=""
            />
            <span className={props.active === "service" ? "active" : ""}>
              Dịch vụ
            </span>
          </div>
        </div>

        {/* Number */}
        <div
          onClick={() => navigate("/number")}
          className={props.active === "number" ? `number active` : "number"}
        >
          <div className="number-1">
            <img
              src={props.active === "number" ? numberATIcon : numberIcon}
              alt=""
            />
            <span className={props.active === "number" ? "active" : ""}>
              Cấp số
            </span>
          </div>
        </div>

        {/* Report */}
        <div
          onClick={() => navigate("/report")}
          className={props.active === "report" ? `report active` : "report"}
        >
          <div className="report-1">
            <img
              src={props.active === "report" ? reportIcon : reportIcon}
              alt=""
            />
            <span className={props.active === "report" ? "active" : ""}>
              Báo cáo
            </span>
          </div>
        </div>

        {/* Setting */}
        <div
          onClick={() => navigate("/setting")}
          className={props.active === "setting" ? `setting active` : "setting"}
        >
          <div className="setting-1">
            <img
              src={props.active === "setting" ? settingIcon : settingIcon}
              alt=""
            />
            <span className={props.active === "setting" ? "active" : ""}>
              Cài đặt hệ thống
            </span>
          </div>
        </div>

        {/* Logout */}
        <div className="logout" onClick={() => navigate("/login")}>
          <div className="icon">
            <img src={logoutIcon} alt="" />
          </div>
          <div className="text">Đăng xuất</div>
        </div>
      </div>
    </>
  );
};
