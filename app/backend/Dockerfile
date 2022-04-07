FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install --save --legacy-peer-deps

COPY . .

EXPOSE 3001

CMD ["npm", "start"]