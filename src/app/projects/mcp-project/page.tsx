'use client';

import { Flex, Heading, LetterFx, SmartLink, Text } from "@/once-ui/components";
import MCPMDX from "../../assets/markdown/personal-school-mcp.mdx";
import Markdown from "@/app/components/Markdown";
import Image from 'next/image';
import ProjectHeader from "@/app/components/projects/ProjectHeader";

const PersonalMCPProject = () => {
    return (
		<Flex
			direction="column" position="relative"
			fillWidth>
            <ProjectHeader projectTitle="Personal MCP Server Project" />
            <Markdown
                MDX={MCPMDX}
                components={{ Heading }} />
        </Flex>
    )
}

export default PersonalMCPProject;