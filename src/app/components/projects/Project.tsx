'use client';

import { SpacingToken } from "@/once-ui/types";
import { Flex, Text } from "@/once-ui/components";
import { CSSProperties } from "react";
import { siteColor } from "@/once-ui/resources/config";

interface ProjectProps {
    desc: string;
    projTitle: string;
    dates: string;
    style?: CSSProperties;
}

const Project = ({
    desc,
    projTitle,
    dates,
    style
}: ProjectProps) => {
    return (<>
        <Flex
            position="relative" direction="column" 
            id={`${projTitle.replaceAll(" ", "-")}`}
            marginBottom={style?.marginBottom as SpacingToken}
            style={style}>
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
                    {/* <Flex
                        position="relative" padding="8"
                        style={{ marginLeft: "auto" }}>
                        <p style={{ opacity: "100%" }}>{dates}</p>
                    </Flex>           */}
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