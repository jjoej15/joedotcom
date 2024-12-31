'use client';

import { SpacingToken } from "@/once-ui/types";
import { Flex, Text } from "@/once-ui/components";
import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";
import { siteColor } from "@/once-ui/resources/config";

interface ExperienceProps {
    desc: string;
    image: StaticImageData;
    altText: string;
    company: string;
    expTitle: string;
    dates: string;
    style?: CSSProperties;
}

const Experience = ({
    desc,
    image,
    altText,
    company,
    expTitle,
    dates,
    style
}: ExperienceProps) => {
    return (<>
        <Flex
            position="relative" direction="column"
            marginBottom={style?.marginBottom as SpacingToken}
            style={style}>
            <Flex
                position="relative" direction="column">
                <Flex
                    position="relative" marginBottom="4"
                    gap="20" alignItems="center">
                    <Flex alignItems="center"
                        style={{ height: "85px", width: "85px" }}>{ image.width > image.height ?
                        <Image
                            src={image} alt={altText}
                            width={85}/>
                        : <Image
                            src={image} alt={altText}
                            height={85}/>
                    }</Flex>
                    <Flex
                        position="relative"
                        direction="column">
                        <Text
                            as="h3" paddingBottom="8"
                            style={{ color: siteColor, opacity: "85%" }}>
                            {company}
                        </Text>
                        <Text>
                            {expTitle}
                        </Text>
                    </Flex>      
                    <Flex
                        position="relative" padding="8"
                        style={{ marginLeft: "auto" }}>
                        <p style={{ opacity: "100%" }}>{dates}</p>
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

export default Experience;