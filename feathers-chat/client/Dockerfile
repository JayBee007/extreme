FROM node:10.15.0-alpine

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache --virtual .gyp python make g++ \
  && npm install \
  && apk del .gyp
  
COPY . .

CMD ["npm", "start" ]

EXPOSE 3000