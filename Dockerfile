FROM node:12

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

CMD ["node","app.js"]
