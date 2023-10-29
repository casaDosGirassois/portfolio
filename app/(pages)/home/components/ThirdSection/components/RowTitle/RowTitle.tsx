"use client"

import { ReactNode } from "react"
import style from "./RowTitle.module.css"
import { Typography } from "antd"

interface RowTitleProps {
    children: ReactNode
}

export default function RowTitle({ children }: RowTitleProps) {
    return (
        <div className={style.wrapper}>
            <Typography.Title className={style.title}>
                {children}
            </Typography.Title>
            <div className={style.divider} />
        </div>
    )
}