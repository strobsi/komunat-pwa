FROM node:10.15.3-alpine

RUN apk add --no-cache git

RUN npm install -g ionic cordova

COPY ./ /home/alpine/app/

WORKDIR /home/alpine/app/

RUN npm rebuild node-sass && npm install

RUN ionic cordova build browser --minify --prod

