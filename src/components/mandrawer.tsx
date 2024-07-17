import Image from "next/image";

type Drawer = {
    pathname: string;
};


import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';


export default function Mandrawer({pathname}:Drawer) {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer opened={opened} onClose={close} title="Accessory Drawer" position="right" className="bg-red font-extrabold">


                {/* Drawer content */}
                This drawer is currently displayed on the
                {pathname === '/' && ' Home page.'}
                {pathname === '/orders' && ' Orders page.'}<br />
                This is my drawer content, there are many like it but this drawer is mine.



            </Drawer>

            <Image src="/images/openclose.png" height={20} width={20} alt="Open/Close" onClick={open}/>
        </>
    );
}
