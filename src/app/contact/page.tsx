import { Flex, Heading, LetterFx, SmartLink, Text } from "@/once-ui/components";
import { siteColor } from "@/once-ui/resources/config";
import { Metadata } from "next";
import styles from "../styles/Contact.module.sass";

export const metadata: Metadata = {
    title: "Contact | Joe Anderson"
}

const Contact = () => {
    return (
		<Flex
			direction="column" position="relative"
			className={styles.container}>
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
                            Contact
                        </LetterFx>
                    </span>
                </Heading>
            </Flex>
            <Flex
                position="relative" direction="column">
                <Text 
                    marginBottom='20'
					style={{ lineHeight: "1.5" }}>
                    <span>The best ways to contact me are to email me at </span>
                    <span><SmartLink 
                        href="mailto:and10287@umn.edu" color={siteColor}
                        style={{
                            padding: "0",
                            margin: "0",
                            display: "inline", 
                            gap: "0"
                        }}>
                        and10287@umn.edu
                    </SmartLink></span>
                    <span>, shoot a message to my </span>
                    <span><SmartLink 
                        href="https://www.linkedin.com/in/joe-anderson-dev/" color={siteColor}
                        style={{
                            padding: "0",
                            margin: "0",
                            display: "inline", 
                            gap: "0"
                        }}>
                        LinkedIn
                    </SmartLink></span>
                    <span>, or call me at 507-414-2000. I should be able to respond within a day.</span>
                </Text>
                <Text 
                    marginBottom='20'
					style={{ lineHeight: "1.5" }}>
                    <span>Feel free to take a look at or download my </span>
                    <span><SmartLink 
                        href="https://drive.google.com/file/d/1s-xh-vZrWlvYlilZMTM8_mcVhdw6pdlU/view?usp=sharing"
                        color={siteColor}
                        style={{
                            padding: "0",
                            margin: "0",
                            display: "inline", 
                            gap: "0"
                        }}>
                        résumé
                    </SmartLink></span>
                    <span> and check out my </span>
                    <span><SmartLink 
                        href="https://github.com/jjoej15"
                        color={siteColor}
                        style={{
                            padding: "0",
                            margin: "0",
                            display: "inline", 
                            gap: "0"
                        }}>
                        GitHub
                    </SmartLink></span>
                    <span> profile.</span>
                </Text>
                <Text 
					style={{ lineHeight: "1.5" }}>
                    If you're interested in discussing work opportunities, inquiring about one of my projects,
                    or collaborating on something together, don't be afraid to reach out!
                </Text>
            </Flex>
        </Flex>
    )
}

export default Contact;