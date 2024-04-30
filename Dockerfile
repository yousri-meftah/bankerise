# Dockerfile for Vite + React + TypeScript app
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app
RUN npm run build

# Command to run the app
CMD ["npm", "run", "serve"]

