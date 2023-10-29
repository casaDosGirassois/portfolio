import { Col, Row } from "antd";
import style from "./ThirdSection.module.css";
import RowTitle from "./components/RowTitle/RowTitle";
import Paragraph from "@/app/components/Paragraph/Paragraph";
export default function ThirdSection() {
    return (
        <section className={style.wrapper}>
            <div>
                <Row>
                    <RowTitle>
                        Mas a final, <br /> O que é <strong>terapia holística</strong>?
                    </RowTitle>
                </Row>
                <Row gutter={28}>
                    <Col md={10} sm={24} xs={24}>
                        <Paragraph style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget ultrices mauris. Integer nec consequat turpis. Integer ac euismod ante. Vivamus feugiat, massa a consectetur fringilla, tellus est fringilla odio, eu varius diam felis non leo. Aliquam consectetur interdum eleifend. Donec quis vestibulum velit. Nulla dictum ligula interdum, ornare eros in, varius purus. Nullam venenatis felis id accumsan gravida. Etiam scelerisque, tortor vel lobortis viverra, tortor nisi euismod quam, nec pulvinar neque justo non odio. Aliquam sagittis molestie diam sed lacinia. Duis libero elit, porta eget condimentum eget, commodo vitae sapien. Sed id neque sed ex faucibus eleifend et in metus.
                        </Paragraph>
                    </Col>
                    <Col md={14} sm={24} xs={24}>
                        <div className={style.imageContainer}>
                            Image goes here
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{ marginTop: 70 }}>
                <Row>
                    <RowTitle>
                        Quais <strong>segmentos</strong> nós trabalhamos?
                    </RowTitle>
                </Row>
                <Row gutter={28}>
                    <Col md={10} sm={24} xs={24}>
                        <div className={style.imageContainer}>
                            Image goes here
                        </div>
                    </Col>
                    <Col md={14} sm={24} xs={24}>
                        <Paragraph style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget ultrices mauris. Integer nec consequat turpis. Integer ac euismod ante. Vivamus feugiat, massa a consectetur fringilla, tellus est fringilla odio, eu varius diam felis non leo. Aliquam consectetur interdum eleifend. Donec quis vestibulum velit. Nulla dictum ligula interdum, ornare eros in, varius purus. Nullam venenatis felis id accumsan gravida. Etiam scelerisque, tortor vel lobortis viverra, tortor nisi euismod quam, nec pulvinar neque justo non odio. Aliquam sagittis molestie diam sed lacinia. Duis libero elit, porta eget condimentum eget, commodo vitae sapien. Sed id neque sed ex faucibus eleifend et in metus.
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </section>
    )
}