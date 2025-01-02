'use client';

import { SpacingToken } from "@/once-ui/types";
import { Arrow, Button, Flex, Text } from "@/once-ui/components";
import { CSSProperties } from "react";
import { siteColor } from "@/once-ui/resources/config";

interface ProjectProps {
    desc: string;
    projTitle: string;
    dates: string;
    id: string;
    href: string;
    style?: CSSProperties;
}

const Project = ({
    desc,
    projTitle,
    dates,
    id,
    href,
    style
}: ProjectProps) => {
    return (<>
        <Flex
            position="relative" direction="column" 
            marginBottom={style?.marginBottom as SpacingToken}
            id={id} style={style}>
            <Flex
                position="relative" direction="column">
                <Flex
                    position="relative" marginBottom="4"
                    gap="20" alignItems="center">
                    <Flex
                        position="relative"
                        direction="column">
                        <Text
                            as="h3" paddingBottom="8"
                            style={{ color: siteColor, opacity: "85%" }}>
                            {projTitle}
                        </Text>
                        <Text>
                            {dates}
                        </Text>
                    </Flex>      
                    <Flex
                        position="relative" padding="8"
                        style={{ marginLeft: "auto" }}>
                        <Button
                            id={`${id}-learn-more`}
                            href={href}
                            size="s" variant="tertiary">
                            <Flex alignItems="center">
                                Learn More
                                <Arrow trigger={`#${id}-learn-more`}/>
                            </Flex>
                        </Button>
                    </Flex>          
                </Flex>
                <Text
                    align="justify"
                    style={{ lineHeight: "1.5", opacity: "100%" }}>
                    <span>{desc}</span>
                </Text>
            </Flex>
        </Flex>
    </>)
}

export default Project;