FROM node:16.17.0-alpine

RUN mkdir app

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY ./ .

RUN npm install -g http-server

RUN npm run build

EXPOSE 3001

CMD [ "http-server", "dist", "-p", "3001" ]