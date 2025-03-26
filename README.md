# Mission-4: AI Insurance Agent

This project is an AI-powered insurance agent named Tina, designed to assist users in selecting the right insurance policy based on their needs for vehicle/car. Tina interacts with users through a chatbot interface and provides personalized recommendations based on their input.

## Features

- AI-driven chatbot for insurance consultation.
- Recommendations for various insurance products.
- User-friendly interface with real-time chat.

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- Docker (optional, for containerized deployment).

### Frontend Setup

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend/AI\ Insurance\ Agent
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your Google Generative AI API key:
   ```plaintext
   GEMINI_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Usage

1. Open the frontend in your browser (default: `http://localhost:5173`).
2. Interact with Tina by typing your queries in the chatbot.
3. Tina will provide recommendations based on your inputs.

## Deployment

- Use the provided Dockerfiles and `docker-compose.yml` files for containerized deployment of the frontend and backend.

## License

This project is licensed under the MIT License.
