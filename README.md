# FarmSphere

FarmSphere is a web application for farmers and consumers, built with a React/Vite frontend and an Express/MongoDB backend. It brings together farming information and tools in one place:

- Farmer and consumer account registration and login
- A marketplace for farmers to list goods and consumers to browse and place orders
- Soil testing session booking
- Weather forecasts with AI generated farming suggestions
- Farming information and a loan application form

The loan form is currently a frontend demo and does not save or submit applications to the server. Some farming news content is also static sample content.

## Requirements

- Node.js and npm
- MongoDB running locally, or a MongoDB Atlas connection string
- Gemini API key and OpenWeather API key for the weather advice feature

## Install dependencies

From the repository root, install each app's dependencies in its own folder:

```powershell
cd server
npm install
cd ..\client
npm install
```

To install exactly the versions in the lockfiles instead, use `npm ci` in each folder.

## Configure the backend

In PowerShell, from the `server` directory, make a local environment file from the template:

```powershell
Copy-Item .env.example .env
notepad .env
```

Set the values in `server/.env`:

```dotenv
MONGO_URI=mongodb://127.0.0.1:27017/farmsphere
GEMINI_API=your_gemini_api_key
WEATHER_API_KEY=your_openweathermap_api_key
```

The example MongoDB URI works when MongoDB is installed and running on the same computer. Otherwise, replace it with your MongoDB Atlas connection string. The API keys are needed for weather and AI advice; keep them in `server/.env` and never commit or share that file. `.env` files are ignored by Git.

## Run locally

Use two PowerShell terminals. Start the backend first:

```powershell
cd path\to\farmSphereHackathon\server
npm run dev
```

When MongoDB connects successfully, the API listens on `http://localhost:5000`.

In a second terminal, start the frontend:

```powershell
cd path\to\farmSphereHackathon\client
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

If the backend reports that `MONGO_URI` is missing, make sure `server/.env` exists and contains that variable. If MongoDB cannot connect, check that the local MongoDB service is running or that the Atlas URI and network access settings are correct.

## Useful frontend commands

Run these from `client`:

```powershell
npm run build   # Create a production build in client/dist
npm run lint    # Run ESLint
npm run preview # Preview the production build locally
```

## Project structure

```text
client/   React application, Vite configuration, and static assets
server/   Express API, MongoDB models, and integrations for weather/AI
```

## Current development notes

- The frontend currently calls the backend at `http://localhost:5000`; deployment requires configuring the API URL for the deployed environment.
- Weather lookup uses IP based geolocation, OpenWeather, and Gemini. The service needs outbound internet access and valid API keys.
- The current API is intended for local development and has not been hardened for production use.
