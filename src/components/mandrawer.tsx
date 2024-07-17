type Drawer = {
    pathname: string;
};

import Image from "next/image";
import ChartDemo from "@/components/ChartDemo";
import MandrawerForm from "@/components/MandrawerForm";


import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

export default function Mandrawer({pathname}:Drawer) {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer opened={opened} onClose={close} title="ANNUAL ANVIL SALE!" position="right"
                    className="bg-rose-500 font-extrabold">
                {/* Drawer content */}

                Check out our best selling Anvils! (mouse-over)
                <ChartDemo />
                <MandrawerForm />
                {/*<div>
                    This drawer is currently displayed on the
                    {pathname === '/' && ' Home page.'}
                    {pathname === '/orders' && ' Orders page.'}<br />
                </div>
                */}


            </Drawer>

            <Image src="/images/openclose.png" height={20} width={20} alt="Open/Close" onClick={open}/>
        </>
    );
}
