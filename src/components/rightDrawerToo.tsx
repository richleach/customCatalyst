import React from 'react';
// @ts-ignore
import { Button } from '@shadcn/ui';
// @ts-ignore
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
} from '@shadcn/ui';

const RightDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Open Drawer</Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Drawer Title</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some more contents...</p>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="ghost" onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default RightDrawer;