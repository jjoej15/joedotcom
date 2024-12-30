'use client';

import { Flex, Heading, LetterFx } from "@/once-ui/components";
import Experience from "../components/Experience";
import { CSSProperties } from "react";
import umnEmblem from "../assets/images/umn-emblem.png";
import spsCommerceLogo from "../assets/images/sps-commerce-logo.png";


const Experiences = () => {
    const style: CSSProperties = { // Experience component reads margin properties as SpacingTokens
        marginBottom: "20"
    }

    return (<>
		<Flex
			position="relative" direction="column">
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
                position="relative" direction="column">
                <Experience 
                    style={style} image={umnEmblem} 
                    altText="Emblem for the University of Minnesota - Twin Cities" 
                    company="University of Minnesota - Twin Cities"
                    expTitle="Teaching Assistant"
                    desc={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur perferendis molestias, harum omnis quasi alias repudiandae illum optio accusamus quibusdam fugit eaque, exercitationem fugiat! Qui provident voluptatibus totam asperiores?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis totam minus dolorem omnis repellat, eaque et, nisi perspiciatis nemo, debitis adipisci non? Veniam accusamus minima neque molestias, voluptates debitis?
                    `}/>
                <Experience 
                    style={style} image={spsCommerceLogo} altText=""
                    desc={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur perferendis molestias, harum omnis quasi alias repudiandae illum optio accusamus quibusdam fugit eaque, exercitationem fugiat! Qui provident voluptatibus totam asperiores?
                    `} company={""} expTitle={""}/>
                <Experience 
                    style={style} image={umnEmblem} altText=""
                    desc={`
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur perferendis molestias, harum omnis quasi alias repudiandae illum optio accusamus quibusdam fugit eaque, exercitationem fugiat! Qui provident voluptatibus totam asperiores?
                    `} company={""} expTitle={""}/>
            </Flex>
        </Flex>
    </>)
}

export default Experiences;