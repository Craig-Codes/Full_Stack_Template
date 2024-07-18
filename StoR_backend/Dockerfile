FROM node:lts-alpine
# Set the working directory
WORKDIR /app
# Copy the rest of the application code
COPY . .
# Install dependencies
RUN npm ci
# Expose the port your app runs on
EXPOSE 3000
# Run the app
# CMD [ "npm", "run", "dev" ]
ENTRYPOINT [ "npm", "run", "dev" ]
