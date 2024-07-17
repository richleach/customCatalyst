'use client'

import * as Headless from '@headlessui/react'
import React, { useState } from 'react'
import { NavbarItem } from './navbar'
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils';

import Mandrawer from './mandrawer';

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  )
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  )
}

function MobileSidebar({ open, close, children }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
  return (
    <Headless.Transition show={open}>
      <Headless.Dialog onClose={close} className="lg:hidden">
        <Headless.TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Headless.TransitionChild>
        <Headless.TransitionChild
          enter="ease-in-out duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Headless.DialogPanel className="fixed inset-y-0 w-full max-w-80 p-2 transition">
            <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
              <div className="-mb-3 px-4 pt-3">
                <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
                  <CloseMenuIcon />
                </Headless.CloseButton>
              </div>
              {children}
            </div>
          </Headless.DialogPanel>
        </Headless.TransitionChild>
      </Headless.Dialog>
    </Headless.Transition>
  )
}

export function SidebarLayout({
  navbar,
  sidebar,
  children,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode }>) {
    let [showSidebar, setShowSidebar] = useState(false)
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);
    const [isLnaExpanded, setIsLnaExpanded ] = useState(false);
    const [isFinExpanded, setIsFinExpanded ] = useState(false);
    const [isProdExpanded, setIsProdExpanded ] = useState(false);
    const [isQaExpanded, setIsQaExpanded ] = useState(false);
    const [isBookExpanded, setIsBookExpanded ] = useState(false);
    const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
    const [isUserExpanded, setIsUserExpanded] = useState(false);

    const handleCalendarClick = () => {
        setIsCalendarExpanded(!isCalendarExpanded);
    };
    const handleBookClick = () => {
        setIsBookExpanded(!isBookExpanded);
    };
    const handleQaClick = () => {
        setIsQaExpanded(!isQaExpanded);
    };
    const handleProdClick = () => {
        setIsProdExpanded(!isProdExpanded);
    };
    const handleLnaClick = () => {
        setIsLnaExpanded(!isLnaExpanded);
    };
    const handleFinancialsClick = () => {
        setIsFinExpanded(!isFinExpanded);
    };
    const handleUserClick = () => {
        setIsUserExpanded(!isUserExpanded);
    };

    // Toggle the sidebar state
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const handleMouseOver = (event:any) => {
        setIsSidebarExpanded(true);
    };

    const handleMouseOut = (event:any) => {
        setIsSidebarExpanded(false);
    };

    //capture the page name for display in side drawer
    const pathname = usePathname()

    return (
        <div
            className="relative isolate flex min-h-svh w-full  max-lg:flex-col dark:bg-zinc-900">
            {/* Sidebar on desktop */}
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div
                    className={cn(
                        isSidebarExpanded ? 'w-[262px]' : 'w-[52px]',
                        'transition-all duration-100 ease-in-out transform hidden sm:flex h-full  bg-transparent ml-2',
                    )}>
                    <aside
                        className="flex h-full flex-col w-full break-words overflow-x-hidden columns-1 bg-transparent">
                        {/*<div className="fixed inset-y-0 left-0 max-lg:hidden">*/}
                        {/*{sidebar}*/}

{/*GIANT CANNONS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "8px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                        <Image src="/images/cannon.png" height={38} width={38} alt="Big Booming Cannons" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Giant Cannons</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*HUGE MALLETS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/mallet.png" height={38} width={38} alt="Huge Mallets" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Huge Mallets</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*RAIN OF BOMBS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/bombs.png" height={38} width={38} alt="Rain of Bombs" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Rain of Bombs</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*FLAGS OF MERCY*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/flag.png" height={38} width={38} alt="Flags of Mercy" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Flags of Mercy</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*HONEST TIME BOMBS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/timebomb.png" height={38} width={38} alt="Honest Time Bombs" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Honest Time Bombs</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*EXPLODING BIRD SEED*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/fakesand.png" height={38} width={38} alt="Exploding Bird Seed" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Exploding Bird Seed</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*FAILSAFE TRAPS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/beartrap.png" height={38} width={38} alt="Fail Safe Traps" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Fail Safe Traps</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

{/*ACME ROCKETS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent" style={{marginTop: "6px"}}>
                            <Link href="#" className="w-full">
                                <div className="flex flex-row items-center rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pl-1">
                                    <Image src="/images/rocket.png" height={38} width={38} alt="Acme Rockets" style={{paddingLeft: "4px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")} style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold" style={{paddingLeft: "17px"}}>Acme Rockets</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>




                        {/*REDESIGN: BOTTOM - USER*/}
                        <div
                            className="sticky bottom-0 mt-auto rounded-md flex items-center justify-center bg-transparent pb-2">
                            <Link href="#" className="w-full">
                                <div
                                    className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">

                                    <img src="/images/richHeadShot.jpg" height={52} width={52} alt="Rich"
                                         className="rounded-md p-1" style={{paddingBottom: "5px"}}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold"
                                                 onClick={handleUserClick} style={{paddingLeft: "17px"}}>Rich
                                            </div>
                                            <div className="ml-auto pr-2">

                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isUserExpanded ? (
                                                    <div className="border-l border-gray-400 visible mt-3"
                                                         style={{marginLeft: "-26px"}}>
                                                        <div className="flex  pt-4 mb-1">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">My Account</div>
                                                            <div className="w/1/5"></div>
                                                        </div>
                                                        <div className="flex pt-3 mb-1">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Settings</div>
                                                            <div className="w/1/5"></div>
                                                        </div>
                                                        <div className="flex pt-2 mb-1">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Log Out</div>
                                                            <div className="w/1/5 ml-auto"></div>
                                                        </div>

                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isUserExpanded ? (
                                                    <div className="visible pt-2">
                                                        <div className="flex pt-4 mb-1">
                                                            <div className="w-4/5" style={{paddingLeft: "19px"}}>My
                                                                Account
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-3  mb-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Settings
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-3 mb-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Log Out
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <> </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
            {/* Sidebar on mobile */}
            {/*<MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
              {sidebar}
          </MobileSidebar>*/}

            {/* Navbar on mobile */}
            {/**/}
            <header className="flex items-center px-4 lg:hidden">
                <div className="py-2.5">
                    <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
                        <OpenMenuIcon/>
                    </NavbarItem>
                </div>
                <div className="min-w-0 flex-1">{navbar}</div>
            </header>

            {/* Content */}
            <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-2 lg:pr-2  lg:pt-2">
                <div
                    className="grow p-6 lg:rounded-lg lg:bg-white lg:p-2 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
                    <div style={{
                        height: "97dvh",
                        width: "100%",
                        overflowY: "auto",
                        overflowX: "hidden",
                        padding: "20px"
                    }}>
                        <div className="w-full">
                            <div className="flex justify-between items-start pl-4 pr-4 -mt-3 mb-2">
                                <div className="text-slate-500"><Link href="/"><Image src="/images/home.png" height={20} width={20} alt="Home"/></Link></div>
                                <div className="tracking-widest text-center" style={{color: "#BCBCBC"}}>ACME ROCKET & ANVIL
                                    CORPORATION<br /> Walla Walla, WA
                                </div>
                                <div className="text-slate-600" style={{cursor:"pointer"}}>
                                    <Mandrawer pathname={pathname}/>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto">{children}</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
