"use client";

// import React from 'react';
import { useState } from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Image from 'next/image';
import { Header } from '@/once-ui/modules';
import headshot from "./assets/images/headshot.jpg";
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Themes",
			description: "Style your app in minutes.",
		},
		{
			href: "https://once-ui.com/docs/flexComponent",
			title: "Layout",
			description: "Build responsive layouts.",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Typography",
			description: "Scale text automatically.",
		},
	];
	const [imageHover, setImageHover] = useState(false);

	return (
		<>
			<Flex
				fillWidth paddingTop="s" paddingX="l"
				direction="column" alignItems="center" flex={1}>
				<Header authenticated={false} />
				<Flex
					position="relative"
					as="section" overflow="hidden"
					fillWidth minHeight="0" maxWidth={68}
					direction="column" alignItems="center" flex={1}>
					<Flex
						as="main"
						direction="column" justifyContent="center"
						fillWidth fillHeight padding="l" gap="l">
						<Flex
							mobileDirection="column"
							fillWidth gap="24">
							<Flex
								position="relative"
								flex={2} paddingX="xl">
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
										boxShadow: `0 0 ${imageHover ? "45px rgba(134, 72, 77, 0.83)" : "40px rgba(140, 38, 46, 0.83)"}`,
										transition: 'box-shadow 0.3s ease'
									}}
									// gba(140, 38, 46, 0.83)`
								/>	
							</Flex>
							<Flex
								position="relative"
								flex={4} gap="24" marginBottom="104"
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
						</Flex>
						<Grid
							radius="l"
							border="neutral-medium"
							borderStyle="solid-1"
							columns="repeat(3, 1fr)"
							tabletColumns="1col"
							mobileColumns="1col"
							fillWidth>
							{links.map((link) => (
								<Link
									target="_blank"
									style={{ padding: 'var(--responsive-space-l)' }}
									key={link.href}
									href={link.href}>
									<Flex
										fillWidth paddingY="8" gap="8"
										direction="column">
										<Flex
											fillWidth gap="12"
											alignItems="center">
											<Text
												variant="body-strong-m" onBackground="neutral-strong">
												{link.title}
											</Text>
											<Icon size="s" name="arrowUpRight" />
										</Flex>
										<Text
											variant="body-default-s" onBackground="neutral-weak">
											{link.description}
										</Text>
									</Flex>
								</Link>
							))}
						</Grid>
					</Flex>
				</Flex>
				<Flex
					as="footer"
					position="relative"
					fillWidth paddingX="l" paddingY="m"
					justifyContent="space-between">
					<Text
						variant="body-default-s" onBackground="neutral-weak">
						Portfolio built using Next.js and Once UI
					</Text>
					<Flex
						gap="12">
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
				</Flex>
			</Flex>
		</>
	);
}
