FROM node:10.13.0-alpine

ENV NODE_PATH=/node_modules

ENV PATH=$PATH:/node_modules/.bin

COPY package*.json ./

RUN npm install

WORKDIR /app

COPY . .

CMD ["npm", "run", "dev" ]

EXPOSE 3030