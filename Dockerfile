# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /react-basic-todo

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "start"]
