"use client";

// import React from 'react';
import { useState } from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow, SmartLink } from '@/once-ui/components';
import styles from "./styles/Home.module.sass"
import Footer from './components/Footer';
import Image from 'next/image';
import { Header } from '@/once-ui/modules';
import headshot from "./assets/images/headshot.jpg";
import Link from 'next/link';

export default function Home() {
	const [imageHover, setImageHover] = useState(false);

	return (
		<>
			<Flex
				fillWidth paddingTop="s" paddingX="l"
				direction="column" alignItems="center" flex={1}>
				<Flex
					position="relative"
					as="section" overflow="hidden"
					fillWidth minHeight="0" maxWidth={68}
					direction="column" alignItems="center" flex={1}>
					<Header />
					<Flex
						as="main"
						direction="column" justifyContent="center"
						fillWidth fillHeight padding="l" gap="l">
						<Flex
							mobileDirection="column"
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
								position="relative" 
								 direction="column">
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
										marginBottom='24' align="justify" as="div"
										style={{ lineHeight: "1.5" }}>
										<span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
										<span><SmartLink // Example of what embedding a link would look like
											href="" color="rgb(222, 37, 37)"
											style={{ 
												padding: "0", 
												margin: "0", 
												display: "inline", 
												gap: "0" 
											}}>
											Nihil et nesciunt
										</SmartLink></span>
										<span> maiores accusantium, incidunt dolorem molestiae minus facere odio eius nam pariatur vitae 
										facilis ab delectus nostrum distinctio. Unde, ex.</span>
									</Text>
									<Text
										marginBottom='24' align="justify"
										style={{ lineHeight: "1.5" }}>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil et nesciunt maiores accusantium, 
										incidunt dolorem molestiae minus facere odio eius nam pariatur vitae facilis ab delectus nostrum distinctio. 
										Unde, ex.
									</Text>
									<Text
										marginBottom='24' align="justify"
										style={{ lineHeight: "1.5" }}>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil et nesciunt maiores accusantium, 
										incidunt dolorem molestiae minus facere odio eius nam pariatur vitae facilis ab delectus nostrum distinctio. 
										Unde, ex.
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Footer />
				</Flex>
			</Flex>
		</>
	);
}
