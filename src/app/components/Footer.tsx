'use client';

import { Flex, Text } from "@/once-ui/components";
import styles from "../styles/Footer.module.sass"
import LinkButtons from "./LinkButtons";

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
            <LinkButtons className={styles.links}  />
        </Flex>
    )
}

export default Footer;