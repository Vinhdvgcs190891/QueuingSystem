import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { ForgotPassword } from "../components/Auth/ForgotPassword";
import { Login } from "../components/Auth/Login";
import { Profile } from "../components/Auth/Profile";
import { Device } from "../components/Device/Device";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { Number } from "../components/Number/Number";
import { Service } from "../components/Service/Service";
import { Report } from "../components/Report/Report";
import { Setting } from "../components/Setting/Setting";
import { Setting2 } from "../components/Setting/Setting2";
import { Setting3 } from "../components/Setting/Setting3";
import { Add } from "../components/Device/Add";
import { Detail } from "../components/Device/Detail";
import { Update } from "../components/Device/Update";
import { Manage } from "../components/Service/Manage";
import { Detailservice } from "../components/Service/Detailservice";
import { Updateservice } from "../components/Service/Updateservice";
import { Addnumber } from "../components/Number/Addnumber";
import { Capso } from "../components/Number/Capso";
import { Detailnumber } from "../components/Number/Detailnumber";
import { AddRole } from "../components/Setting/AddRole";
import { UpdateSetting } from "../components/Setting/UpdateSetting";

export const WebRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/device" element={<Device />} />
        <Route path="/service" element={<Service />} />
        <Route path="/number" element={<Number />} />
        <Route path="/report" element={<Report />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="" element={<Dashboard />} />
        <Route path="/device/add" element={<Add />} />
        <Route path="/setting2" element={<Setting2 />} />
        <Route path="/setting3" element={<Setting3 />} />
        <Route path="/device/detail" element={<Detail />} />
        <Route path="/device/update" element={<Update />} />
        <Route path="/service/manage" element={<Manage />} />
        <Route path="/service/detail" element={<Detailservice />} />
        <Route path="/service/update" element={<Updateservice />} />
        <Route path="/number/add" element={<Addnumber />} />
        <Route path="/number/capso" element={<Capso />} />
        <Route path="/number/detail" element={<Detailnumber />} />
        <Route path="/setting/add" element={<AddRole />} />
        <Route path="/setting/update" element={<UpdateSetting />} />
      </Routes>
    </>
  );
};
