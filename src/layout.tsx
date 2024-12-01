import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SKYNET - Revolutionary AI-Powered Blockchain",
	description:
		"Experience the future of decentralized intelligence with SKYNET",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.className} animated-bg`}>
				{children}
			</body>
		</html>
	);
}
