'use client';

import { Flex, Heading, SmartLink } from "@/once-ui/components";
import Image from "next/image";
import MCPMDX from "../../assets/markdown/personal-school-mcp.mdx";
import Markdown from "@/app/components/Markdown";
import ProjectHeader from "@/app/components/projects/ProjectHeader";

const PersonalMCPProject = () => {
    return (
		<Flex
			direction="column" position="relative"
			fillWidth>
            <ProjectHeader projectTitle="Personal MCP Server Project" />
            <Markdown
                MDX={MCPMDX}
                components={{ Heading, SmartLink, Flex, Image }} />
        </Flex>
    )
}

export default PersonalMCPProject;