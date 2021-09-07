FROM node:14.17.6

EXPOSE 3000

WORKDIR /code

COPY package.json package.json
COPY . .

RUN npm install

CMD ["npm", "start", "run"]