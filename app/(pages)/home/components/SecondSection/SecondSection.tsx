import { Col, Row, Typography } from "antd";
import style from "./SecondSection.module.css";
import Title from "../../../../components/Title/Title";
import Paragraph from "../../../../components/Paragraph/Paragraph";

export default function SecondSection() {
    return (
        <section className={style.wrapper}>
            <Row>
                <Col md={8} sm={24}>
                    <Title>
                        Casa <br /> dos <br /> Girassóis
                    </Title>
                </Col>
                <Col md={8} sm={24}>
                    <Paragraph>
                        Aqui vem uma breve explicação sobre o que é a casa dos girassóis || Aqui vem uma breve explicação sobre o que é a casa dos girassóis || Aqui vem uma breve explicação sobre o que é a casa dos girassóis || Aqui vem uma breve explicação sobre o que é a casa dos girassóis || Aqui vem uma breve explicação sobre o que é a casa dos girassóis Aqui vem uma breve explicação sobre o que é a casa dos girassóis || Aqui vem uma breve explicação sobre o que é a casa dos girassóis ||
                    </Paragraph>
                </Col>
                <Col md={8}>
                    <Title style={{ fontSize: 22, textAlign: "center" }}>
                        <strong>Frase de efeito</strong>
                    </Title>
                </Col>
            </Row>
            <Row gutter={12}>
                <Col md={12} sm={24} xs={24}>
                    <div className={style.imageContainer}>
                        Image goes here
                    </div>
                </Col>
                <Col md={6} sm={12} xs={0}>
                    <div className={style.imageContainer}>
                        Image goes here
                    </div>
                </Col>
                <Col md={6} sm={12} xs={0}>
                    <div className={style.imageContainer}>
                        Image goes here
                    </div>
                </Col>
            </Row>
        </section>
    )
}