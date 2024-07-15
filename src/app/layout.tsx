import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import { getEvents } from '@/data'
import '@/styles/tailwind.css'
import '@/styles/styles.css'
import {Inter} from "next/font/google";
import type { Metadata } from 'next'
import type React from 'react'
import { ApplicationLayout } from './application-layout'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faArrowRightArrowLeft} from "@fortawesome/pro-solid-svg-icons";

import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: "Demo site",
  description: "Modern layout and custom events designed and implemented as needed.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getEvents()

  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <ColorSchemeScript />
      </head>
      <body  style={{overflow: "hidden"}}>
      <MantineProvider>
        <ApplicationLayout events={events}>
          {children}
        </ApplicationLayout>
      </MantineProvider>
      </body>
    </html>
  )
}
