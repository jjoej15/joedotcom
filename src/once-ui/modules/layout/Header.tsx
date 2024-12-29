'use client';

import { Flex, SmartLink, Heading } from '@/once-ui/components';

const Header= () => {
    const routes: string[] = ["/experiences", "/projects", "/contact"]

    return (
        <Flex
            style={{
                borderBottom: '1px solid var(--neutral-border-medium)',
            }}
            as="header"
            fillWidth height="56"
            alignItems="center"
            >
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
                fillWidth
                alignItems="center" justifyContent="flex-end">
                <Flex
                    textVariant="label-default-s"
                    fillWidth gap="4" paddingX="l"
                    alignItems="center">{
                    routes.map(r => 
                        <SmartLink
                            href={r} color="white">
                            {r[1].toUpperCase() + r.slice(2)}
                        </SmartLink>
                    )
                }</Flex>
            </Flex>
        </Flex>
    );
};

Header.displayName = 'Header';
export { Header };