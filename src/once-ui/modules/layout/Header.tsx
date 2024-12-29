'use client';

import { Flex, SmartLink, Heading } from '@/once-ui/components';
import { usePathname } from 'next/navigation';

const Header= () => {
    const pathname = usePathname() ?? '';

    return (
        <Flex
            style={{
                borderBottom: '1px solid var(--neutral-border-medium)',
                lineHeight: "1"
            }}
            as="header"
            fillWidth height="56"
            alignItems="center"
            >
            <Heading
                wrap="nowrap" color='inherit'
                variant="display-strong-xs">
                <SmartLink
                    href="" color="white"
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
                    alignItems="center">
                    <SmartLink
                        href="" color="white">
                        Experience
                    </SmartLink>
                    <SmartLink
                        href="" color="white">
                        Projects
                    </SmartLink>
                    <SmartLink
                        href="" color="white">
                        Contact
                    </SmartLink>
                </Flex>
            </Flex>
        </Flex>
    );
};

Header.displayName = 'Header';
export { Header };