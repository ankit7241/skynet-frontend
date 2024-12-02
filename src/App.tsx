import Home from "./page";
import { OktoProvider, BuildType } from "okto-sdk-react";

const OKTO_CLIENT_API_KEY = "7eb92a27-bc88-4586-9768-a758512a4057";

function App() {
	return (
		<OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
			<Home />
		</OktoProvider>
	);
}

export default App;
