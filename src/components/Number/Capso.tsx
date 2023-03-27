import { FC } from "react";
import { useNavigate } from "react-router-dom";

import addInso from "../assets/inso.png";
import "./Capso.scss";

export interface Props { }

export const Capso: FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-number-capso">
                <div className="number-capso">
                    <img src={addInso} alt="Cấp số" />
                </div>

                <div className="Button-number-capso" >
                    <button className="Button-2-number-capso" onClick={() => navigate("/number")}>
                        <span>Trở về</span>
                    </button>
                    <button className="Button-1-number-capso" onClick={() => navigate("/number/detail")}>
                        <span>Chi tiết</span>
                    </button>
                </div>
            </div>

        </>
    );
};
