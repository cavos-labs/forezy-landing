# Forezy Web

This is the repository for the Forezy landing page. The project is built with Next.js (App Router), TypeScript, and Tailwind CSS. It uses Server Actions to interact with a Supabase database for the waitlist functionality.

## 🚀 Getting Started

Follow these steps to set up a local development environment.

### Prerequisites

Make sure you have Node.js (version 18 or higher) and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/cavos-labs/forezy-web](https://github.com/cavos-labs/forezy-web)
    cd forezy-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the project root and add the following variables:

    ```env
    SUPABASE_FUNCTION_URL=YOUR_SUPABASE_FUNCTION_URL
    SUPABASE_API_KEY=YOUR_SUPABASE_API_KEY
    ```

    Replace the values with your Supabase credentials.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application!
