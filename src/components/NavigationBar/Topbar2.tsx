import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Topbar2.scss";
import bell from "../assets/bell.png";
import avatar from "../assets/avatar.png";

export interface Props {
    root?: string;
    profileText?: string;
}

export const Topbar2: FC<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="top-bar-2">
                {props.root ? (
                    <>
                        <div className="text-root-topbar2">
                            <span className="text-root-topbar2">{props.root}</span>
                        </div>
                    </>
                ) : (
                    <></>
                )}

                <div className="bell" onClick={() => navigate("/report")}>
                    <img className="bellIcon" src={bell} alt="" />
                </div>

                <div className="info">
                    <button onClick={() => navigate("/profile")}>
                        <div className="text-1">
                            <span className="greeting">Xin chào</span>
                            <span className="name">Lê Quỳnh Ái Vân</span>
                        </div>
                        <img src={avatar} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};
