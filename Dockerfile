FROM node

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g npm-check-updates

COPY . .

CMD [ "npm", "start"]
