import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getRecentOrders } from '@/data'
import Image from 'next/image';

export function Stat({ title, value, change }: { title: string; value: string; change: string }) {
    return (
        <div>
            <Divider />
            <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
            <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
            <div className="mt-3 text-sm/6 sm:text-xs/6">
                <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
                <span className="text-zinc-500">from last week</span>
            </div>
        </div>
    )
}

export default async function Home() {
    let orders = await getRecentOrders()

    return (
        <>
            <Heading>What&apos;s shakin&apos; Bacon?</Heading>
            <div className="mt-8 flex items-end justify-between">
                <Subheading>Overview</Subheading>
                <div>
                    <Select name="period">
                        <option value="last_week">Last week</option>
                        <option value="last_two">Last two weeks</option>
                        <option value="last_month">Last month</option>
                        <option value="last_quarter">Last quarter</option>
                    </Select>
                </div>
            </div>

            <div className="mt-2 grid gap-8 bg-rose-50 rounded-md p-2">
                <div>
                    <div className="mt-2 text-lg/6 font-semibold sm:text-md">Welcome to my Catalyst Demo!</div>
                    <div className="mt-3 text-lg/7 font-medium sm:text-md">Tailwind made this template and I customized
                        it to its current state. This template comes with a side menu (as displayed) and a top menu. It
                        has <strong>many</strong> display features - too many to list here - that will make your next
                        web application stand out. <br/> A few notable features:
                        <ul className="p-2">
                            <li> &middot; Left side menu - I made this one into a collapsible component to preserve
                                valuable screen real estate. (Mouse-over the icons....)
                            </li>
                            <li> &middot; Right side drawer - another effort to preserve screen space. Click the <Image
                                src="/images/openclose.png" height={16} width={16} alt="Open/Close"
                                style={{display: "inline"}}/> icon in the upper right to give it a spin.
                            </li>
                            <li>&middot; Charts, forms, icons,</li>
                            <li> &middot; It&apos;s all dummy-data and the forms don&apos;t go anywhere so take it for a
                                spin. Drop me a line (rich@cfsnap.com) and I&apos;ll build your next application.
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 text-sm/6 sm:text-xs/6">

                        <span className="text-zinc-500"></span>
                    </div>
                </div>

            </div>


            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <Stat title="Total revenue" value="$2.6M" change="+4.5%"/>
                <Stat title="Average order value" value="$455" change="-0.5%"/>
                <Stat title="Tickets sold" value="5,888" change="+4.5%"/>
                <Stat title="Pageviews" value="823,067" change="+21.2%"/>
            </div>
            <Subheading className="mt-14">Recent orders</Subheading>
            <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
                <TableHead>
                    <TableRow>
                        <TableHeader>Order number</TableHeader>
                        <TableHeader>Purchase date</TableHeader>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader>Event</TableHeader>
                        <TableHeader className="text-right">Amount</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell className="text-zinc-500">{order.date}</TableCell>
                            <TableCell>{order.customer.name}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar src={order.event.thumbUrl} className="size-6"/>
                                    <span>{order.event.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">US{order.amount.usd}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}