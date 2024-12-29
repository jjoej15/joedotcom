'use client';

import { Flex } from "@/once-ui/components";
import { Header } from "@/once-ui/modules";

const Projects = () => {
    return (<>
        <Flex
            fillWidth paddingTop="s" paddingX="l"
            direction="column" alignItems="center" flex={1}>
            <Flex
                position="relative"
                as="section" overflow="hidden"
                fillWidth minHeight="0" maxWidth={68}
                direction="column" alignItems="center" flex={1}>
            </Flex>
            <Header />
            <Flex
                as="main"
                direction="column" justifyContent="center"
                fillWidth fillHeight padding="l" gap="l">
                <Flex
                    mobileDirection="column"
                    fillWidth gap="48">
                    <p>Projects page</p>
                </Flex>
            </Flex>
        </Flex>
    </>)
}

export default Projects;