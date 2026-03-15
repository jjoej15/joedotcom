'use client';

import { Flex, Heading, LetterFx } from "@/once-ui/components";

const ProjectHeader = ({ projectTitle }: { projectTitle: string }) => {
    return (
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
                        {projectTitle}
                    </LetterFx>
                </span>
            </Heading>
        </Flex>
    );
}

export default ProjectHeader;
