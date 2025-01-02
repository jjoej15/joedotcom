'use client';

import { Flex, Heading, LetterFx } from "@/once-ui/components";
import Experience from "../components/experiences/Experience";
import { CSSProperties } from "react";
import { experiences } from "../assets/experiences";


const Experiences = () => {
    const experienceList = experiences.sort((a, b) => a.rank < b.rank ? -1 : 1);

    return (<>
		<Flex
			direction="column" position="relative"
			fillWidth>
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
                            Experiences
                        </LetterFx>
                    </span>
                </Heading>
            </Flex>
            <Flex
                position="relative" direction="column">{
                experienceList.map(e => 
                    <Experience
                        style={{ marginBottom: "20" }} 
                        image={e.image} dates={e.dates}
                        altText={e.imageAltText} company={e.company}
                        expTitle={e.expTitle} desc={e.description} 
                        key={e.company + " " + e.dates} />
                )
            }</Flex>
        </Flex>
    </>)
}

export default Experiences;