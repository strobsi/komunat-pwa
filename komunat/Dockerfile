FROM node:10.15.3-alpine

RUN npm install -g ionic cordova

COPY ./ /home/alpine/app/

WORKDIR /home/alpine/app/

RUN npm rebuild node-sass && npm install

