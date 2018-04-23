# Define image to pull
FROM node:alpine
# Set the directory to run cmds from
WORKDIR /usr/src/app
# Copy package and package-lock.json
COPY package*.json ./
# Run npm install
RUN npm install
# Copy src
COPY . .
# Expose port
EXPOSE 4200
# Run startup
CMD ["node", "startup.js"]