# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies first
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose the server port
EXPOSE 3000

# Start app
CMD ["node", "server.js"]
