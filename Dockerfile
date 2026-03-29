# syntax=docker/dockerfile:1

FROM node:24-alpine
WORKDIR /NoteTakingApp
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "server.js"]
EXPOSE 80