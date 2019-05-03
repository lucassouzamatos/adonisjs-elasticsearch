FROM node:8-alpine

RUN mkdir home/app
WORKDIR home/app
ADD . /home/app

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "start"]
