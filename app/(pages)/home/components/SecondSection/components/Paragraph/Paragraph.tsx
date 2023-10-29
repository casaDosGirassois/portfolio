"use client"

import { Typography } from "antd";
import { ReactNode } from "react";
import style from "./Paragraph.module.css";

interface ParagraphProps {
    children: ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
    return (
        <Typography.Paragraph className={style.paragraph}>
            {children}
        </Typography.Paragraph>
    )
}