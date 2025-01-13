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
    id: string;
    style?: CSSProperties;
}

const Experience = ({
    desc,
    image,
    altText,
    company,
    expTitle,
    dates,
    id,
    style
}: ExperienceProps) => {
    return (<>
        <Flex
            position="relative" direction="column" 
            marginBottom={style?.marginBottom as SpacingToken}
            id={id} style={style}>
            <Flex
                position="relative" direction="column">
                <Flex
                    position="relative" marginBottom="8"
                    gap="20" alignItems="center" paddingBottom="12"
                    style={{ borderBottom: '1px solid var(--neutral-border-medium)' }}>
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
                            style={{ 
                                color: siteColor, 
                                opacity: "85%", 
                                wordBreak: "break-word" 
                            }}>
                            {company}
                        </Text>
                        <Text
                            style={{ opacity: "70%" }}>
                            {expTitle}
                        </Text>
                    </Flex>      
                    <Flex
                        position="relative" padding="8"
                        style={{ marginLeft: "auto" }}>
                        <p>{dates}</p>
                    </Flex>          
                </Flex>
                <Text
                    style={{ lineHeight: "1.5" }}>
                    <span>{desc}</span>
                </Text>
            </Flex>
        </Flex>
    </>)
}

export default Experience;