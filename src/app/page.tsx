"use client";

// import React from 'react';
import { useState } from 'react';

import { Heading, Text, Flex, LetterFx, SmartLink } from '@/once-ui/components';
import styles from "./styles/Home.module.sass"
import Image from 'next/image';
import { headshot }  from "./assets/images";
import { siteColor } from '@/once-ui/resources/config';

export default function Home() {
	const [imageHover, setImageHover] = useState(false);

	return (<>
		<Flex
			mobileDirection="column" marginTop='l'
			fillWidth gap="48">
			<Flex
				position="relative" flex={2} mobileDirection='row'
				direction="column" justifyContent='center'
				paddingLeft='m' paddingRight='l' className={styles.headshot}>
				<Image 
					src={headshot}
					width={300}
					height={300}
					alt="Joe's headshot"
					onMouseEnter={() => setImageHover(true)}
					onMouseLeave={() => setImageHover(false)}
					style={{
						borderRadius: '100%', 
						zIndex: 1,
						boxShadow: `0 0 ${imageHover ? 
							"45px rgba(134, 72, 77, 0.83)" : // On hover
							"40px rgba(140, 38, 38, 0.83)"
						}`,
						transition: 'box-shadow 0.3s ease',
					}}
				/>	
			</Flex>
			<Flex
				position="relative" direction="column">
				<Flex
					position="relative"
					gap="24" marginBottom="32"
					direction="column">
					<Heading
						wrap="balance"
						variant="display-strong-s">
						<span className="font-code">
							<LetterFx
								trigger="hover">
								hey, i'm joe!
							</LetterFx>
						</span>
					</Heading>
				</Flex>
				<Flex
					position="relative" direction="column">
					<Text
						marginBottom='20'
						style={{ lineHeight: "1.5" }}>
						<span>I'm currently a student at the </span>
						<span><SmartLink 
							href="/experiences#student-exp" 
							color={siteColor}
							style={{
								padding: "0",
								margin: "0",
								display: "inline", 
								gap: "0"
							}}>
							University of Minnesota
						</SmartLink></span>
						<span> in Minneapolis, MN. I'm a senior who's working towards
							a Bachelor of Science in Computer Science with a minor in Statistics.</span>
					</Text>
					<Text
						marginBottom='20'
						style={{ lineHeight: "1.5" }}>
						<span>I'm also a software engineering intern at </span>
						<span><SmartLink 
							href="/experiences#sps-exp" color={siteColor}
							style={{
								padding: "0",
								margin: "0",
								display: "inline", 
								gap: "0"
							}}>
							SPS Commerce
						</SmartLink></span>
						<span> in partnership with Maverick Software Consulting, and the software lead
							on the </span>
						<span><SmartLink 
							href="/experiences#rocket-team-exp" color={siteColor}
							style={{
								padding: "0",
								margin: "0",
								display: "inline", 
								gap: "0"
							}}>
							UMN Rocket Team
						</SmartLink></span>
						<span>.</span>
					</Text>
					<Text
						marginBottom='20'
						style={{ lineHeight: "1.5" }}>
						<span>I'm most interested in full-stack development and machine learning, and am seeking
							full-time opportunities in these fields.
							In my freetime I have worked on a variety of </span>
						<span><SmartLink 
							href="/projects" color={siteColor}
							style={{
								padding: "0",
								margin: "0",
								display: "inline", 
								gap: "0"
							}}>
							projects
						</SmartLink></span>
						<span>, and also enjoy producing music, reading fiction, skiing, and guitars.</span>
					</Text>
				</Flex>
			</Flex>
		</Flex>
	</>);
}
