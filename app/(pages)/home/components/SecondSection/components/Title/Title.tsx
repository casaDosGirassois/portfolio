"use client"

import { Typography } from "antd";
import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}

export default function Title({ children }: TitleProps) {
    return (
        <Typography.Title style={{ fontSize: 48 }}>
            {children}
        </Typography.Title>
    )
}