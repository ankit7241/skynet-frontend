import React, { useState, useEffect } from "react";
import { OktoContextType, useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";
import Avatar from "./Avatar";
declare global {
	interface Window {
		Telegram: any; // Add Telegram object to the global window object
	}
}

const LoginPage = () => {
	const { authenticate, getWallets, createWallet, getUserDetails } =
		useOkto() as OktoContextType;
	const [authToken, setAuthToken] = useState<string | null>(null);
	const [wallets, setWallets] = useState<{
		polygon: string;
		aptos: string;
	} | null>(null);
	const [showAddresses, setShowAddresses] = useState(false);

	// Handle Google login
	async function handleGoogleLogin(credentialResponse: any) {
		try {
			if (!credentialResponse?.credential) {
				console.error("Google login failed: Missing credential");
				return;
			}
			const idToken = credentialResponse.credential;

			authenticate(idToken, (authResponse: any, error: any) => {
				if (authResponse) {
					setAuthToken(authResponse.auth_token);
				} else if (error) {
					console.error("Authentication error:", error);
				}
			});
			await handleCreateWallet();
		} catch (err) {
			console.error("Error handling Google login:", err);
		}
	}

	// Handle wallet creation and setting addresses
	async function handleCreateWallet() {
		try {
			const result = await createWallet();
			console.log(result);
			const polygonAddress =
				result.wallets[0].address.slice(0, 4) +
				"..." +
				result.wallets[0].address.slice(-4); // Replace with actual address for Polygon
			const aptosAddress =
				result.wallets[1].address.slice(0, 4) +
				"..." +
				result.wallets[1].address.slice(-4); // Replace with actual address for Aptos
			setWallets({ polygon: polygonAddress, aptos: aptosAddress });
			// await openTelegramMiniApp();
		} catch (error) {
			console.error("Error creating wallet:", error);
			// await openTelegramMiniApp();
		}
	}

	async function openTelegramMiniApp() {
		if (window.Telegram && window.Telegram.WebApp) {
			// If inside the Telegram app (either mobile or web view)
			console.log("Inside Telegram WebApp.");

			// Opening the mini app inside the Telegram environment
			window.Telegram.WebApp.open(); // Opens the WebApp URL as per the BotFather's settings
		} else {
			console.error("Telegram WebApp API is not available.");

			// Optionally: Open the Telegram app (or web) in the browser
			const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
			if (isMobile) {
				// On mobile, deep-link to the bot
				window.location.href = "tg://resolve?domain=skynetmanagerbot";
			} else {
				// On desktop, open Telegram Web
				window.location.href = "https://web.telegram.org/a/";
			}
		}
	}

	// Toggle address display
	const handleAvatarClick = () => {
		setShowAddresses((prevState) => !prevState);
	};

	return (
		<div>
			{!authToken ? (
				<GoogleLogin
					onSuccess={handleGoogleLogin}
					onError={() => console.error("Login Failed")}
				/>
			) : (
				<div className="mr-0 relative">
					<Avatar onClick={handleAvatarClick} />
					{showAddresses && wallets && (
						<div
							style={{
								marginTop: "10px",
								backgroundColor: "rgba(255, 255, 255, 0.7)", // Slightly opaque background to make the box visible
								backdropFilter: "blur(10px)", // Blur effect for the background
								position: "absolute", // Position it absolutely to control overlap
								padding: "10px",
								left: "-100px", // Move it to the left (adjust as needed)
								zIndex: 10, // Ensure it's on top of other elements
								boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for better visibility
							}}
							className="text-white" // Ensure text is visible
						>
							<div>
								<strong>Polygon Address:</strong> {wallets.polygon}
							</div>
							<div>
								<strong>Aptos Address:</strong> {wallets.aptos}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default LoginPage;
