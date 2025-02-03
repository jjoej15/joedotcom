'use client';

import { SpacingToken } from "@/once-ui/types";
import { Arrow, Button, Flex, Text } from "@/once-ui/components";
import { CSSProperties } from "react";
import { siteColor } from "@/once-ui/resources/config";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/Project.module.sass"

interface ProjectProps {
    desc: string;
    image: StaticImageData;
    altText: string;
    projTitle: string;
    dates: string;
    id: string;
    href: string;
    style?: CSSProperties;
}

const Project = ({
    desc,
    image,
    altText,
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
                    position="relative" marginBottom="12"
                    gap="20" alignItems="center" paddingBottom="12"
                    style={{ borderBottom: '1px solid var(--neutral-border-medium)' }}>
                    <Flex alignItems="center"
                        style={{ height: "70px", width: "70px" }}>{ image.width > image.height ?
                        <Image
                            src={image} alt={altText}
                            width={70}/>
                        : <Image
                            src={image} alt={altText}
                            height={70}/>
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
                            {projTitle}
                        </Text>
                        <Text
                            style={{ opacity: "70%" }}>
                            {dates}
                        </Text>
                    </Flex>      
                    <Flex
                        position="relative" padding="8" direction="column"
                        style={{ marginLeft: "auto" }}>
                        <Button
                            id={`${id}-learn-more`}
                            href={href} prefixIcon="infoCircle"
                            size="s" variant="tertiary" className={styles.learnBtn}>
                            <Flex 
                                direction={window.innerWidth <= 470 ? "column" : "row"}
                                alignItems="center">
                                <span>{window.innerWidth > 470 ? "Learn " : "Learn"}</span>
                                <span>More</span>
                                <Arrow trigger={`#${id}-learn-more`}/>
                            </Flex>
                        </Button>
                    </Flex>          
                </Flex>
                <Text
                    style={{ lineHeight: "1.5", opacity: "100%" }}>
                    <span>{desc}</span>
                </Text>
            </Flex>
        </Flex>
    </>)
}

export default Project;