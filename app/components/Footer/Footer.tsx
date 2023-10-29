import { Col, Row } from "antd";
import style from "./Footer.module.css";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import { InstagramOutlined, YoutubeOutlined, WhatsAppOutlined } from "@ant-design/icons";

export default function Footer() {
    return (
        <div className={style.wrapper}>
            <Row style={{ width: '90%' }}>
                <Col md={4} style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                        width={100}
                        src={logo}
                        alt="Casa dos girassóis logo"
                    />
                </Col>
                <Col md={5} style={{ display: "flex", justifyContent: "center" }}>
                    <div className={style.textArea}>
                        <h3>Localização</h3>
                        <span>Rua Cabuçu, 29<br />Mairiporã/SP<br />07600-000</span>
                    </div>
                </Col>
                <Col md={5} style={{ display: "flex", justifyContent: "center" }}>
                    <div className={style.textArea}>
                        <h3>Contato</h3>
                        <div className={style.contactArea}>
                            <InstagramOutlined style={{ marginRight: 12 }} />
                            <span>@casadosgirassois</span>
                        </div>
                        <div className={style.contactArea}>
                            <YoutubeOutlined style={{ marginRight: 12 }} />
                            <span>casadosgirassois</span>
                        </div>
                        <div className={style.contactArea}>
                            <WhatsAppOutlined style={{ marginRight: 12 }} />
                            <span>(11) 99999-9999</span>
                        </div>
                    </div>
                </Col>
                <Col md={5} style={{ display: "flex", justifyContent: "center" }}>
                    <div className={style.textArea}>
                        <h3>Especialidades</h3>
                        <ul>
                            <li><span>Lorem ipsum</span></li>
                            <li><span>Lorem ipsum</span></li>
                            <li><span>Lorem ipsum</span></li>
                        </ul>
                    </div>
                </Col>
                <Col md={5} style={{ display: "flex", justifyContent: "center" }}>
                    <div className={style.textArea}>
                        <h3>Links úteis</h3>
                        <ul>
                            <li><span>Lorem ipsum</span></li>
                            <li><span>Lorem ipsum</span></li>
                            <li><span>Lorem ipsum</span></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}