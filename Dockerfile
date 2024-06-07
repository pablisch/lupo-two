# syntax=docker/dockerfile:1

ARG NODE_VERSION=21.6.2

FROM node:${NODE_VERSION}-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 5173
CMD npm run dev
