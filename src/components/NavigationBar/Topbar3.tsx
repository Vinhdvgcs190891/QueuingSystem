import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./Topbar3.scss";
import bell from "../assets/bell.png";
import avatar from "../assets/avatar.png";
import nextIcon from "../assets/u_angle-right.png";

export interface Props {
    root?: string;
    rootNext?: string;
    profileText?: string;
    rootNextNext?: string;
}

export const Topbar3: FC<Props> = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="top-bar-3">
                {props.profileText ? (
                    <>
                        <div className="text">
                            <div>
                                <span className="profileText">{props.profileText}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}

                {props.root ? (
                    <>
                        <div className="text-root-topbar3">
                            <div>
                                <span>{props.root}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}

                {props.rootNext ? (
                    <>
                        <div className="text-rootnext-topbar3">
                            <img className="nextIcon-topbar3" src={nextIcon} alt="" />
                            <span className="text-next-topbar3">{props.rootNext}</span>
                        </div>
                    </>
                ) : (
                    <></>
                )}

                {props.rootNextNext ? (
                    <>
                        <div className="text-rootnextnext-topbar3">
                            <img className="nextnextIcon-topbar3" src={nextIcon} alt="" />
                            <span className="text-nextnext-topbar3">{props.rootNextNext}</span>
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
