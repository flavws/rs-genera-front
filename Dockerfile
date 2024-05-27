FROM node:21.6.2 as build

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY ./ /usr/src/app/

RUN npm install -g @angular/cli

RUN npm install && ng build

FROM nginx:1.21.3-alpine

COPY --from=build /usr/src/app/dist/rsgenera /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
