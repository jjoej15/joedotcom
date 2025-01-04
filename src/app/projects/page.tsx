import { Flex, Heading, LetterFx } from "@/once-ui/components";
import { projects } from "../assets/projects";
import Project from "../components/projects/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Joe Anderson"
}

const Projects = () => {
    const projectsList = projects.sort((a, b) => a.rank < b.rank ? -1 : 1);

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
                            Projects
                        </LetterFx>
                    </span>
                </Heading>
            </Flex>
            <Flex
                position="relative" direction="column">{
                projectsList.map(p => 
                    <Project
                        style= {{ marginBottom: "20" }} href={p.href}
                        dates={p.dates} projTitle={p.projTitle}
                        desc={p.description} key={p.id} id={p.id}
                        image={p.image} altText={p.altText} />
                )
            }</Flex>
        </Flex>
    </>)
}

export default Projects;