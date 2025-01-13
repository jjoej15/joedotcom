'use client';

import LinkButtons from '@/app/components/LinkButtons';
import { Flex, SmartLink, Heading } from '@/once-ui/components';
import styles from "../../styles/Header.module.sass";

const Header= () => {
    const routes: string[] = ["/experiences", "/projects", "/contact"]

    return (
        <Flex
            style={{
                borderBottom: '1px solid var(--neutral-border-medium)',
                flexShrink: "0",
                minHeight: "fit-content"
            }}
            fillWidth height="56"
            alignItems="center" as="header"
            className={styles.headerContainer}>
            <Heading
                wrap="nowrap" color='inherit'
                variant="display-strong-xs">
                <SmartLink
                    href="/" color="white"
                    style={{ textDecoration: "none" }}>
                    Joe Anderson
                </SmartLink>
            </Heading>
            <Flex
                fillWidth paddingY="s"
                alignItems="center" justifyContent="flex-end">
                <Flex
                    textVariant="label-default-s"
                    fillWidth gap="4" paddingX="l"
                    alignItems="center" className={styles.pagesContainer}>{
                    routes.map(r => 
                        <SmartLink
                            href={r} key={r}
                            color="white">
                            {r[1].toUpperCase() + r.slice(2)}
                        </SmartLink>
                    )
                }</Flex>
            </Flex>
            <Flex
                alignItems="center"
                gap="8">
                <LinkButtons className={styles.links}  />
            </Flex>
        </Flex>
    );
};

Header.displayName = 'Header';
export { Header };