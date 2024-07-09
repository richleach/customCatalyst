'use client'

import * as Headless from '@headlessui/react'
import React, { useState } from 'react'
import { NavbarItem } from './navbar'
import Link from 'next/link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridRound2Plus, faBookmark, faChevronRight, faChevronDown, faMagnifyingGlass, faHouse, faHandshake, faClipboardCheck, faChartMixedUpCircleDollar, faCalendarDay, faArrowUpRightFromSquare, faArrowRightArrowLeft } from "@fortawesome/pro-solid-svg-icons";

import { cn } from '@/lib/utils';

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

                        {/*new left nav*/}
                        {/*SEARCH*/}
                        <div className="mt-2 relative pb-0 rounded-md" key="40">
                            <div className="flex items-center justify-center bg-transparent">
                                <Link
                                    href="/"
                                    className="w-full">
                                    <div
                                        className="flex flex-row items-center rounded-md duration-0 mx-auto bg-neutral-800/20 text-white/70 p-3 m-0 w-full relative whitespace-nowrap">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className="text-white/70"
                                                         style={{paddingLeft: "4px"}}/>
                                        <div className={isSidebarExpanded ? (" visible ") : (" invisible ")}>
                                            <div className="pl-3">
                                                <input type="text" placeholder="Search for anything...."
                                                       className="bg-transparent placeholder:text-white/70  outline:none focus:outline-none  -pl-4"/>
                                                {/*<Input type="text" placeholder="Search for anything...."
                                                   className="h-5 border-0 text-sm placeholder:text-white/70 focus-visible:none" style={{
                                                backgroundColor: "#c9a4b4",
                                                color: "efe4e9",
                                                paddingLeft: "-4px"
                                            }}/>*/}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        {/*REDESIGN QUICK ACTIONS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent"
                             style={{marginTop: "6px"}}>
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                    <FontAwesomeIcon icon={faGridRound2Plus} style={{
                                        color: "#71857a",
                                        fontSize: "21px",
                                        paddingTop: "14px",
                                        paddingLeft: "15px"
                                    }}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold"
                                                 onClick={handleQaClick} style={{paddingLeft: "17px"}}>Quick Actions
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isQaExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleQaClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isQaExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleQaClick}/>
                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isQaExpanded ? (
                                                    <div className="border-l border-gray-400 visible mt-3"
                                                         style={{marginLeft: "-10px"}}>
                                                        <div className="flex  pt-2">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex pt-2 mb-1">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isQaExpanded ? (
                                                    <div className="visible pt-2">
                                                        <div className="flex pt-2">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Invoices
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-3 mb-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Proposals
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
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

                        {/*MAIN STACK*/}
                        {/*HOME*/}
                        <div className="relative pb-0 rounded-md" key="21" style={{marginTop: "6px"}}>

                            {/*REDESIGN - HOME*/}
                            <div className="mt-0 rounded-t-md flex items-center justify-center bg-transparent">
                                <Link href="/" className="w-full">
                                    <div
                                        className="flex flex-row items-start rounded-t-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pt-2">
                                        <FontAwesomeIcon icon={faHouse} style={{
                                            color: "#71857a",
                                            fontSize: "19px",
                                            paddingTop: "14px",
                                            paddingLeft: "16px"
                                        }}/>
                                        <div
                                            className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                            style={{paddingBottom: "14px"}}>
                                            <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                                <div className="font-semibold pl-4">Home</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/*REDESIGN - LEADS AND EVENTS*/}
                            <div className="mt-0 flex items-center justify-center bg-transparent">
                                <Link href="/" className="w-full">
                                    <div
                                        className="flex flex-row items-start duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                        <FontAwesomeIcon icon={faHandshake} style={{
                                            color: "#71857a",
                                            fontSize: "19px",
                                            paddingTop: "14px",
                                            paddingLeft: "14px"
                                        }}/>
                                        <div
                                            className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                            style={{paddingBottom: "14px"}}>
                                            <div className="flex justify-between w-full" style={{paddingTop: "11px"}}>
                                                <div className="font-semibold pl-4"
                                                     onClick={handleLnaClick}>Leads & Events
                                                </div>
                                                <div className="ml-auto pr-2">
                                                    <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     className={!isLnaExpanded ? (" visible ") : (" invisible ")}
                                                                     onClick={handleLnaClick}/>
                                                    <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     className={isLnaExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                     onClick={handleLnaClick}/>
                                                </div>
                                            </div>

                                            <div>
                                                {!isSidebarExpanded ? (
                                                    isLnaExpanded ? (
                                                        <div className="border-l border-gray-400 visible -ml-3 mt-3">
                                                            <div className="flex pt-2">
                                                                <div
                                                                    className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                                <div className="w-3/5">Invoices</div>
                                                                <div className="w/1/5">33</div>
                                                            </div>
                                                            <div className="flex pt-2">
                                                                <div
                                                                    className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                                <div className="w-3/5">Proposals</div>
                                                                <div className="w/1/5 ml-auto">22</div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{display: "none"}}>

                                                        </div>
                                                    )
                                                ) : (
                                                    isLnaExpanded ? (
                                                        <div className="visible pt-2">
                                                            <div className="flex pt-2">
                                                                <div className="w-4/5"
                                                                     style={{paddingLeft: "17px"}}>Invoices
                                                                </div>
                                                                <div className="w/1/5"
                                                                     style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                    <div
                                                                        className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex pt-3">
                                                                <div className="w-4/5"
                                                                     style={{paddingLeft: "17px"}}>Proposals
                                                                </div>
                                                                <div className="w/1/5"
                                                                     style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                    <div
                                                                        className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
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


                            {/*REDESIGN - FINANCIALS*/}
                            <div className="mt-0 flex items-center justify-center bg-transparent">
                                <Link href="/" className="w-full">
                                    <div
                                        className="flex flex-row items-start duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                        <FontAwesomeIcon icon={faChartMixedUpCircleDollar} style={{
                                            color: "#71857a",
                                            fontSize: "21px",
                                            paddingTop: "14px",
                                            paddingLeft: "14px"
                                        }}/>
                                        <div
                                            className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                            style={{paddingBottom: "14px"}}>
                                            <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                                <div className="font-semibold pl-4"
                                                     onClick={handleFinancialsClick}>Financials
                                                </div>
                                                <div className="ml-auto pr-2">
                                                    <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     className={!isFinExpanded ? (" visible ") : (" invisible ")}
                                                                     onClick={handleFinancialsClick}/>
                                                    <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     className={isFinExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                     onClick={handleFinancialsClick}/>
                                                </div>
                                            </div>

                                            <div>
                                                {!isSidebarExpanded ? (
                                                    isFinExpanded ? (
                                                        <div className="border-l border-gray-400 visible -ml-3 mt-3">
                                                            <div className="flex pt-2">
                                                                <div
                                                                    className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                                <div className="w-3/5">Invoices</div>
                                                                <div className="w/1/5">33</div>
                                                            </div>
                                                            <div className="flex pt-2">
                                                                <div
                                                                    className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                                <div className="w-3/5">Proposals</div>
                                                                <div className="w/1/5 ml-auto">22</div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{display: "none"}}>

                                                        </div>
                                                    )
                                                ) : (
                                                    isFinExpanded ? (
                                                        <div className="visible pt-2">
                                                            <div className="flex pt-2">
                                                                <div className="w-4/5"
                                                                     style={{paddingLeft: "17px"}}>Invoices
                                                                </div>
                                                                <div className="w/1/5"
                                                                     style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                    <div
                                                                        className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex pt-3">
                                                                <div className="w-4/5"
                                                                     style={{paddingLeft: "17px"}}>Proposals
                                                                </div>
                                                                <div className="w/1/5"
                                                                     style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                    <div
                                                                        className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
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

                            {/*REDESIGN - PRODUCTIVITY*/}
                            <div className="mt-0 flex items-center justify-center bg-transparent">
                                <Link href="/" className="w-full">
                                    <div
                                        className="flex flex-row items-start duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap">
                                        <FontAwesomeIcon icon={faClipboardCheck} style={{
                                            color: "#71857a",
                                            fontSize: "21px",
                                            paddingTop: "14px",
                                            paddingLeft: "18px"
                                        }}/>
                                        <div
                                            className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                            style={{paddingBottom: "14px"}}>
                                            <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                                <div className="font-semibold"
                                                     onClick={handleProdClick}
                                                     style={{paddingLeft: "19px"}}>Productivity
                                                </div>
                                                <div className="ml-auto pr-2">
                                                    <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     className={!isProdExpanded ? (" visible ") : (" invisible ")}
                                                                     onClick={handleProdClick}/>
                                                    <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     className={isProdExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                     onClick={handleProdClick}/>
                                                </div>
                                            </div>

                                            <div>
                                                {!isSidebarExpanded ? (
                                                    isProdExpanded ? (
                                                        <div className="border-l border-gray-400 visible -ml-2 mt-3">
                                                            <div className="flex pt-2">
                                                                <div
                                                                    className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                                <div className="w-3/5">Invoices</div>
                                                                <div className="w/1/5">33</div>
                                                            </div>
                                                            <div className="flex pt-2">
                                                                <div
                                                                    className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                                <div className="w-3/5">Proposals</div>
                                                                <div className="w/1/5 ml-auto">22</div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{display: "none"}}>

                                                        </div>
                                                    )
                                                ) : (
                                                    isProdExpanded ? (
                                                        <div className="visible pt-2">
                                                            <div className="flex pt-2">
                                                                <div className="w-4/5"
                                                                     style={{paddingLeft: "20px"}}>Invoices
                                                                </div>
                                                                <div className="w/1/5"
                                                                     style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                    <div
                                                                        className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex pt-3">
                                                                <div className="w-4/5"
                                                                     style={{paddingLeft: "20px"}}>Proposals
                                                                </div>
                                                                <div className="w/1/5"
                                                                     style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                    <div
                                                                        className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
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

                            {/*CALENDAR*/}
                            <div className="flex items-center justify-center bg-transparent">
                                <Link
                                    href="/"
                                    className="w-full">
                                    <div
                                        className="flex flex-row items-start rounded-b-md duration-0 mx-auto bg-white/60 p-3 -mt-0 w-full relative whitespace-nowrap pb-5">
                                        <FontAwesomeIcon icon={faCalendarDay} size='lg'
                                                         style={{
                                                             color: "#71857a",
                                                             paddingLeft: "6px",
                                                             paddingTop: "2px"
                                                         }}/>
                                        <div
                                            className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}>


                                            <div className="flex justify-between w-full">
                                                <div className="font-semibold"
                                                     onClick={handleCalendarClick}
                                                     style={{paddingLeft: "18px"}}>Calendar
                                                </div>
                                                <div className="ml-auto" style={{paddingRight: "5px"}}>
                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'
                                                                     style={{color: "#71857a"}}
                                                                     onClick={handleCalendarClick}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Link>
                            </div>

                        </div>

                        {/*REDESIGN - BOOKMARKS*/}
                        <div className="rounded-md flex items-center justify-center bg-transparent"
                             style={{marginTop: "6px", paddingBottom:"6px"}}>
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pt-1">
                                    <FontAwesomeIcon icon={faBookmark} style={{
                                        color: "#C80000",
                                        fontSize: "23px",
                                        paddingTop: "14px",
                                        paddingLeft: "18px"
                                    }}/>
                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold"
                                                 onClick={handleBookClick} style={{paddingLeft: "19px"}}>Bookmarks
                                            </div>
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isBookExpanded ? (" visible ") : (" invisible ")}
                                                                 onClick={handleBookClick}/>
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isBookExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 onClick={handleBookClick}/>
                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isBookExpanded ? (
                                                    <div className="border-l border-gray-400 visible mt-3"
                                                         style={{marginLeft: "-9px"}}>
                                                        <div className="flex pt-2 mb-1">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex pt-2 mb-1">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isBookExpanded ? (
                                                    <div className="visible pt-2">
                                                        <div className="flex pt-2 mb-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Invoices
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">13
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex pt-3 mb-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Proposals
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
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
                        {/*</div>*/}


                        {/*BOTTOM - USER*/}

                        <div className="sticky bottom-0 mt-auto rounded-md flex bg-transparent" style={{paddingBottom:"8px"}}>
                            <Link href="/" className="w-full">
                                <div
                                    className="flex flex-row items-start rounded-md duration-0 mx-auto bg-white/60 w-full relative whitespace-nowrap pt-1">
                                    <img src="/images/steveHeadShot.jpg" height={52} width={52} alt="Steve"
                                         className="rounded-md p-1"/>

                                    <div className={isSidebarExpanded ? (" visible align-top w-full") : (" invisible ")}
                                         style={{paddingBottom: "14px"}}>
                                        <div className="flex justify-between w-full" style={{paddingTop: "14px"}}>
                                            <div className="font-semibold"
                                                  style={{paddingLeft: "19px"}}>Steve
                                            </div>{/*onClick={handleUserClick}*/}
                                            <div className="ml-auto pr-2">
                                                <FontAwesomeIcon icon={faChevronRight} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={!isUserExpanded ? (" visible ") : (" invisible ")}
                                                                 />{/*onClick={handleUserClick}*/}
                                                <FontAwesomeIcon icon={faChevronDown} size='sm'
                                                                 style={{color: "#71857a"}}
                                                                 className={isUserExpanded ? (" visible pr-2 ") : (" invisible ")}
                                                                 />{/*onClick={handleUserClick}*/}
                                            </div>
                                        </div>

                                        <div>
                                            {!isSidebarExpanded ? (
                                                isUserExpanded ? (
                                                    <div className="border-l border-gray-400 visible mt-3"
                                                         style={{marginLeft: "-9px"}}>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Invoices</div>
                                                            <div className="w/1/5">33</div>
                                                        </div>
                                                        <div className="flex">
                                                            <div
                                                                className="pl-4 mr-3 w-[1]">&nbsp;</div>
                                                            <div className="w-3/5">Proposals</div>
                                                            <div className="w/1/5 ml-auto">22</div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div style={{display: "none"}}>

                                                    </div>
                                                )
                                            ) : (
                                                isUserExpanded ? (
                                                    <div className="visible pt-1">
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>My Account
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>

                                                            </div>
                                                        </div>
                                                        <div className="flex pt-1">
                                                            <div className="w-4/5"
                                                                 style={{paddingLeft: "19px"}}>Proposals
                                                            </div>
                                                            <div className="w/1/5"
                                                                 style={{paddingTop: "3px", paddingLeft: "6px"}}>
                                                                <div
                                                                    className="rounded-xl bg-slate-200 text-gray-500  -pt-1 -pb-1 pl-2 pr-2 text-sm">24
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
            {/**/}<header className="flex items-center px-4 lg:hidden">
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
                    className="grow p-6 lg:rounded-lg lg:bg-white lg:p-8 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
                    <div className="w-full">
                        <div className="flex justify-between items-start pl-4 pr-4 -mt-4">
                            <div className="text-slate-500"><FontAwesomeIcon icon={faHouse} size='xs'/></div>
                            <div className="tracking-widest" style={{color: "#BCBCBC"}}>PLANNING POD</div>
                            <div className="text-slate-600"><FontAwesomeIcon icon={faArrowRightArrowLeft} size='xs'/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">{children}</div>
                </div>
            </main>
        </div>
    );
}
