# # syntax=docker/dockerfile:1

# ARG NODE_VERSION=21.6.2

# FROM node:${NODE_VERSION}-alpine

# WORKDIR /app
# COPY package*.json ./

# RUN npm install
# COPY . .
# EXPOSE 5173
# CMD npm run dev

# syntax=docker/dockerfile:1

# Base Stage
ARG NODE_VERSION=21.6.2
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development Stage
FROM base as dev

EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build Stage
FROM base as build

RUN npm run build

# Production Stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

