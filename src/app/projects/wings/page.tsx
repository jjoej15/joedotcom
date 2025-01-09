'use client';

import { Flex, Heading, LetterFx, SmartLink } from "@/once-ui/components";
import WingsMDX from "../../assets/markdown/wings.mdx";
import Markdown from "@/app/components/Markdown";
import Image from 'next/image';
import styles from "../../styles/Wings.module.sass";

const Wings = () => {
    return (
		<Flex
			direction="column" position="relative"
			fillWidth >
            <Flex
                position="relative"
                gap="24" marginBottom="16"
                direction="column"
                style={{ borderBottom: '1px solid white' }}>
                <Heading
                    wrap="balance" marginBottom="8"
                    variant="display-strong-s">
                    <span className="font-code">
                        <LetterFx
                            trigger="hover">
                            WINGS
                        </LetterFx>
                    </span>
                </Heading>
            </Flex>
            <Markdown
                MDX={WingsMDX}
                components={{ Heading, Flex, Image }} />
        </Flex>
    )
}

export default Wings;