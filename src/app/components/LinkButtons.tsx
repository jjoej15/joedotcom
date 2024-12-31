import { Arrow, Button, Flex } from "@/once-ui/components";
import styles from "../styles/Footer.module.sass"

const LinkButtons = () => {
    return(

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
    );
}

export default LinkButtons;