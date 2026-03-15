'use client';

import { Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import WingsMDX from "../../assets/markdown/wings.mdx";
import Markdown from "@/app/components/Markdown";
import Image from 'next/image';
import ProjectHeader from "@/app/components/projects/ProjectHeader";

const Wings = () => {
    return (
        <Flex
            direction="column" position="relative"
            fillWidth>
            <ProjectHeader projectTitle="WINGS" />
            <Markdown
                MDX={WingsMDX}
                components={{ Heading, Flex, Image, SmartLink, Text }} />
        </Flex>
    )
}

export default Wings;
