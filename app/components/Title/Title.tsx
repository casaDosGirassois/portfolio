"use client"

import { Typography } from "antd";
import { ReactNode } from "react";
import style from "./Title.module.css";
import { TitleProps } from "antd/es/typography/Title";

interface CustomTitleProps extends TitleProps {
    children: ReactNode;
}

export default function Title({ children, ...props }: CustomTitleProps) {
    return (
        <Typography.Title className={style.title} {...props}>
            {children}
        </Typography.Title>
    )
}