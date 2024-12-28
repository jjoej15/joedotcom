'use client';

import { Flex, Text, Button, Arrow } from "@/once-ui/components";
import styles from "../styles/Footer.module.sass"

const Footer = () => {
    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth paddingX="l" paddingY="m"
            justifyContent="space-between"
            mobileDirection='column'
            >
            <Text
                variant="body-default-s" className={styles.text}
                onBackground="neutral-weak">
                Portfolio built using Next.js, TypeScript, SASS, and Once UI.
            </Text>
            <Flex
                gap="12" className={styles.links}>
                <Button
                    id="github"
                    href="https://github.com/jjoej15"
                    prefixIcon="github" size="s" variant="tertiary">
                    <Flex alignItems="center">
                        GitHub
                        <Arrow trigger="#github"/>
                    </Flex>
                </Button>
                <Button
                    id="linkedIn"
                    href="https://www.linkedin.com/in/joe-anderson-dev/"
                    prefixIcon="linkedIn" size="s" variant="tertiary">
                    <Flex alignItems="center">
                        LinkedIn
                        <Arrow trigger="#linkedIn"/>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Footer;