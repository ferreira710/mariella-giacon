FROM node:20

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app

RUN npm run clear && npm install --force
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
