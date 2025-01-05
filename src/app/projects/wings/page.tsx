'use client';

import { Button, Flex, Heading, LetterFx } from "@/once-ui/components";
import WingsMDX from "../../assets/markdown/wings.mdx";
import Markdown from "@/app/components/Markdown";

const Wings = () => {
    return (
		<Flex
			direction="column" position="relative"
			fillWidth>
            <Flex
                position="relative"
                gap="24" marginBottom="16"
                direction="column">
                <Heading
                    wrap="balance"
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
                components={{
                    Heading,
                    Button() {return (
                        <Button
                            href="https://www.linkedin.com/in/joe-anderson-dev/"
                            prefixIcon="linkedIn" size="s" variant="tertiary">
                            Hi
                        </Button>
                    )}
                }} />
        </Flex>
    )
}

export default Wings;