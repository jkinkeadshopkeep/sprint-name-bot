FROM node:14.16-slim

WORKDIR /usr/src/sprint-name-bot
COPY package.json package-lock.json ./

RUN npm install

COPY . ./