# SkyNet - Revolutionary AI-Powered Blockchain

SkyNet is a cutting-edge project that merges artificial intelligence with blockchain technology to create a decentralized, intelligent network. This project is designed to revolutionize how we interact with data and smart contracts.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add your environment variables. For example:

   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
   REACT_APP_OKTO_CLIENT_API_KEY=your-okto-client-api-key
   ```

4. **Run the Application:**
   Start the development server with:

   ```bash
   npm start
   ```

   Access the app at [http://localhost:3000](http://localhost:3000).

5. **Run Tests:**
   Launch the test runner in interactive watch mode:

   ```bash
   npm test
   ```

6. **Build for Production:**
   Create an optimized production build:

   ```bash
   npm run build
   ```

   The build artifacts will be stored in the `build` directory.

7. **Eject Configuration (Optional):**
   If you need to customize the build configuration, you can eject it:
   ```bash
   npm run eject
   ```
   **Note:** This is a one-way operation. Once you eject, you cannot revert back.

## Functionalities

- **Google OAuth Integration:**

  - Users can log in using their Google accounts. The integration is handled using the `@react-oauth/google` package.
  - Relevant Code:
    ```typescript:src/index.tsx
    startLine: 6
    endLine: 19
    ```

- **Okto Wallet SDK:**

  - Users can connect their wallets and manage their cryptocurrency assets using the Okto SDK.
  - Relevant Code:
    ```typescript:src/components/LoginPage.tsx
    startLine: 1
    endLine: 55
    ```

- **Responsive Design:**

  - The application is designed to be responsive, providing a seamless experience across devices.
  - Tailwind CSS is used for styling, ensuring a modern and consistent UI.

- **Animated UI Elements:**

  - The app features animated components using `framer-motion` for a dynamic user experience.
  - Relevant Code:
    ```typescript:src/page.tsx
    startLine: 3
    endLine: 162
    ```

- **Decentralized AI Features:**
  - SkyNet leverages decentralized AI to provide intelligent solutions without compromising on decentralization.
  - Relevant Code:
    ```typescript:src/page.tsx
    startLine: 172
    endLine: 217
    ```

## Learn More

For more information, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).
