FROM node:10
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 8045
CMD ["npm","start"]