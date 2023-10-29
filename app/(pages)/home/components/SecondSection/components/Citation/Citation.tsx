"use client"

import { Typography } from "antd";
import { ReactNode } from "react";
import style from "./Citation.module.css";

interface CitationProps {
    children: ReactNode
}

export default function Citation({ children }: CitationProps) {
    return (
        <Typography.Paragraph className={style.citation}>
            {children}
        </Typography.Paragraph>
    )
}