# Base image
FROM node:18-alpine

# Install PM2
RUN npm install -g pm2

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start the application with PM2
CMD ["pm2-runtime", "start", "server.js"]