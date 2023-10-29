//Components
import { Col, Row } from "antd";
//Assets
import CDGBigLogo from "@/app/assets/homeImages/cdg_big_logo.png";
import ChrisHome from "@/app/assets/homeImages/chris_home.png";

import style from "./FirstSection.module.css";

export default function FirstSection() {
    return (
        <Row className={style.wrapper}>
            <Col md={12} sm={0} style={{ backgroundImage: `url(${CDGBigLogo.src})` }} className={style.logoImage} />
            <Col md={12} sm={24} style={{ backgroundImage: `url(${ChrisHome.src})` }} className={style.chrisImage}>
                <div />
            </Col>
        </Row>
    )
}