"use client"

import { Typography } from "antd";
import { ReactNode } from "react";
import style from "./Paragraph.module.css";
import { ParagraphProps } from "antd/es/typography/Paragraph";

interface CustomParagraphProps extends ParagraphProps {
    children: ReactNode
}

export default function Paragraph({ children, ...props }: CustomParagraphProps) {
    return (
        <Typography.Paragraph className={style.paragraph} {...props}>
            {children}
        </Typography.Paragraph>
    )
}