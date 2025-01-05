'use client';

import { Flex } from "@/once-ui/components";
import { Metadata } from "next";
import WingsMD from "../../assets/markdown/wings.mdx";
import Head from 'next/head'

// export const metadata: Metadata = {
//     title: "WINGS | Joe Anderson"
// }

const Wings = () => {
    return (<>
        {/* <Head>
            <title>WINGS | Joe Anderson</title>
        </Head> */}
        <WingsMD />
    </>)
}

export default Wings;