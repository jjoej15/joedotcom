'use client';

import { Arrow, Button, Flex } from "@/once-ui/components";

const LinkButtons = ({ className }: { className: string; }) => {
    return(
        <Flex
            gap="12" className={className}>
            <Button
                id={`${className}-github`}
                href="https://github.com/jjoej15"
                prefixIcon="github" size="s" variant="tertiary">
                <Flex alignItems="center">
                    GitHub
                    <Arrow trigger={`#${className}-github`}/>
                </Flex>
            </Button>
            <Button
                id={`${className}-linkedIn`}
                href="https://www.linkedin.com/in/joe-anderson-dev/"
                prefixIcon="linkedIn" size="s" variant="tertiary">
                <Flex alignItems="center">
                    LinkedIn
                    <Arrow trigger={`#${className}-linkedIn`}/>
                </Flex>
            </Button>
            <Button
                id={`${className}-resume`}
                href="https://drive.google.com/file/d/1s-xh-vZrWlvYlilZMTM8_mcVhdw6pdlU/view?usp=sharing"
                prefixIcon="HiOutlineDocumentText" size="s" variant="tertiary">
                <Flex alignItems="center">
                    Résumé
                    <Arrow trigger={`#${className}-resume`}/>
                </Flex>
            </Button>
        </Flex>
    );
}

export default LinkButtons;