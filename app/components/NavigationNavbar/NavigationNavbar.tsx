"use client"
//Libs
import React, { useState } from 'react';
//Components
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
//Types
import type { MenuProps } from 'antd';
//Assets
import logoImage from "../../assets/logo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const items: MenuProps['items'] = [
    {
        label: (
            <Image
                src={logoImage}
                height={50}
                alt='Logo casa dos girassóis'
            />
        ),
        key: '/home',
        style: { display: "flex", alignItems: "center" }
    },
    {
        label: 'Método Luminar',
        key: '/luminar-method',
        style: { display: "flex", alignItems: "center" }
    },
    {
        label: 'Sobre mim',
        key: '/about-me',
        style: { display: "flex", alignItems: "center" }
    },
    {
        label: 'Blog',
        key: '/blog',
        style: { display: "flex", alignItems: "center" }
    },
    {
        label: 'Contato',
        key: '/contact',
        style: { display: "flex", alignItems: "center" }
    },
];

const NavigationNavbar = () => {
    const route = useRouter();
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        route.push(e.key);
        setCurrent(e.key);
    };

    return (
        <Menu
            style={{ paddingTop: 12 }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default NavigationNavbar;