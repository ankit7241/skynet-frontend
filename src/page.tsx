"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { ArrowRight, Github, Twitter, Menu } from "lucide-react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import LoginPage from "./LoginPage";

export default function Home() {
	const [isConnecting, setIsConnecting] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const controls = useAnimation();
	const { scrollYProgress } = useScroll();

	useEffect(() => {
		scrollYProgress.onChange((v) => {
			controls.start({ opacity: 2 - v });
		});
	}, [scrollYProgress, controls]);

	const handleConnect = async () => {
		setIsConnecting(true);
		// TODO: Implement Okto wallet SDK connection here
		setTimeout(() => setIsConnecting(false), 2000); // Simulating connection process
	};

	return (
		<ParallaxProvider>
			<div className="min-h-screen bg-black text-white overflow-hidden">
				<header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
					<div className="container mx-auto px-4 py-4 flex justify-between items-center">
						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold text-blue-500"
						>
							SKYNET
						</motion.h1>
						<nav className="hidden md:block">
							<ul className="flex space-x-6">
								<NavItem href="#features">Features</NavItem>
								<NavItem href="#about">About</NavItem>
								<NavItem href="#demo">Demo</NavItem>
								<li>
									<LoginPage />
									{/* <ConnectButton
										onClick={handleConnect}
										isConnecting={isConnecting}
									/> */}
								</li>
							</ul>
						</nav>
						<button
							className="md:hidden text-white"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<Menu />
						</button>
					</div>
				</header>

				{isMenuOpen && (
					<MobileMenu
						setIsMenuOpen={setIsMenuOpen}
						handleConnect={handleConnect}
						isConnecting={isConnecting}
					/>
				)}

				<main>
					<HeroSection controls={controls} />
					<FeaturesSection />
					<AboutSection />
				</main>

				<Footer />
			</div>
		</ParallaxProvider>
	);
}
//@ts-ignore
function NavItem({ href, children }) {
	return (
		<li>
			<a
				href={href}
				className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
			>
				{children}
			</a>
		</li>
	);
}
//@ts-ignore
function ConnectButton({ onClick, isConnecting }) {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
			onClick={onClick}
			disabled={isConnecting}
		>
			{isConnecting ? "Connecting..." : "Connect Wallet"}
		</motion.button>
	);
}
//@ts-ignore
function MobileMenu({ setIsMenuOpen, handleConnect, isConnecting }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className="fixed inset-0 bg-black z-40 md:hidden"
		>
			<div className="flex flex-col items-center justify-center h-full space-y-6">
				<NavItem href="#features">Features</NavItem>
				<NavItem href="#about">About</NavItem>
				<NavItem href="#demo">Demo</NavItem>
				<LoginPage />
				{/* <ConnectButton onClick={handleConnect} isConnecting={isConnecting} /> */}
				<button
					className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
					onClick={() => setIsMenuOpen(false)}
				>
					Close
				</button>
			</div>
		</motion.div>
	);
}
//@ts-ignore
function HeroSection({ controls }) {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<video
				autoPlay
				loop
				muted
				className="absolute w-auto min-w-full min-h-full max-w-none"
			>
				<source src="/blockchain-background.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>
			<motion.div
				className="relative z-10 text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={controls}
			>
				<h2 className="text-5xl md:text-7xl font-bold mb-6 text-blue-400">
					Welcome to SKYNET
				</h2>
				<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
					Revolutionizing the future with AI-powered blockchain technology
				</p>
				<motion.a
					href="#features"
					className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Explore Features
					<ArrowRight className="ml-2" />
				</motion.a>
			</motion.div>
		</section>
	);
}

//@ts-ignore
function FeaturesSection() {
	return (
		<section id="features" className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<h3 className="text-4xl font-bold mb-12 text-center text-blue-400">
					Key Features
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						title="Decentralized AI"
						description="Harness the power of artificial intelligence without compromising on decentralization."
						icon={<DecentralizedAIIcon />}
					/>
					<FeatureCard
						title="Secure Transactions"
						description="Execute smart contracts and transactions with unparalleled security."
						icon={<SecureTransactionsIcon />}
					/>
					<FeatureCard
						title="Scalable Infrastructure"
						description="Built to scale, ensuring high performance as your needs grow."
						icon={<ScalableInfrastructureIcon />}
					/>
				</div>
			</div>
		</section>
	);
}

//@ts-ignore
function FeatureCard({ title, description, icon }) {
	return (
		//@ts-ignore
		<Parallax y={[-20, 20]} tagOuter="div">
			<motion.div
				className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
				whileHover={{ scale: 1.05 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				<div className="text-blue-400 mb-4">{icon}</div>
				<h4 className="text-2xl font-semibold mb-2">{title}</h4>
				<p className="text-gray-300">{description}</p>
			</motion.div>
		</Parallax>
	);
}
//@ts-ignore
function AboutSection() {
	return (
		<section id="about" className="py-20 bg-black">
			<div className="container mx-auto px-4">
				<h3 className="text-4xl font-bold mb-8 text-center text-blue-400">
					About SKYNET
				</h3>
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="md:w-1/2 mb-8 md:mb-0">
						{/* @ts-ignore */}
						<Parallax y={[-30, 30]} tagOuter="div">
							<img
								src="/ai-blockchain.svg"
								alt="AI and Blockchain"
								className="w-full max-w-md mx-auto"
							/>
						</Parallax>
					</div>
					<div className="md:w-1/2">
						<p className="text-xl mb-6 text-gray-300">
							SKYNET is at the forefront of merging artificial intelligence with
							blockchain technology. Our mission is to create a decentralized,
							intelligent network that empowers users and revolutionizes how we
							interact with data and smart contracts.
						</p>
						<div className="flex justify-center space-x-4">
							<SocialLink
								href="https://github.com/skynet"
								icon={<Github size={24} />}
							/>
							<SocialLink
								href="https://twitter.com/skynet"
								icon={<Twitter size={24} />}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
//@ts-ignore
function SocialLink({ href, icon }) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
		>
			{icon}
		</motion.a>
	);
}

//@ts-ignore

function Footer() {
	return (
		<footer className="bg-gray-900 py-8">
			<div className="container mx-auto px-4 text-center">
				<p className="text-gray-400">
					&copy; 2024 SKYNET. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

function DecentralizedAIIcon() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
			<path
				d="M24 12V36"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M12 24H36"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx="24" cy="24" r="4" fill="currentColor" />
			<circle cx="24" cy="16" r="2" fill="currentColor" />
			<circle cx="24" cy="32" r="2" fill="currentColor" />
			<circle cx="16" cy="24" r="2" fill="currentColor" />
			<circle cx="32" cy="24" r="2" fill="currentColor" />
		</svg>
	);
}

function SecureTransactionsIcon() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="8"
				y="14"
				width="32"
				height="24"
				rx="2"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<path
				d="M16 14V10C16 7.79086 17.7909 6 20 6H28C30.2091 6 32 7.79086 32 10V14"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<circle cx="24" cy="26" r="4" stroke="currentColor" strokeWidth="2" />
			<path
				d="M24 30V34"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ScalableInfrastructureIcon() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 36H42"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M6 24H42"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M6 12H42"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx="14" cy="12" r="4" fill="currentColor" />
			<circle cx="24" cy="24" r="4" fill="currentColor" />
			<circle cx="34" cy="36" r="4" fill="currentColor" />
		</svg>
	);
}
