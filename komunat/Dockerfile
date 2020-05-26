FROM node:10.15.3-alpine

RUN apk add --no-cache git

RUN npm install -g ionic cordova

COPY ./ /home/alpine/app/

WORKDIR /home/alpine/app/

RUN npm rebuild node-sass && npm install
RUN ionic cordova plugin add cordova-plugin-google-analytics
RUN npm install @ionic-native/google-analytics
EXPOSE 80
ENTRYPOINT [ "ionic","serve","--port=80"]
