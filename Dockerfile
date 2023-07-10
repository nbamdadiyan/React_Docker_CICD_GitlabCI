FROM node:latest

# Add a work directory
WORKDIR /app

COPY . .
RUN npm install

RUN npm ci

RUN npm run build

CMD ["npm", "start"]
