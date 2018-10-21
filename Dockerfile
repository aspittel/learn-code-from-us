FROM node:10.12-alpine

RUN npm install -g yarn

ARG NODE_ENV=production
ENV NODE_ENV="${NODE_ENV}"

WORKDIR /app

COPY package.json *yarn* ./
RUN yarn install

COPY . .

EXPOSE 3000
HEALTHCHECK CMD wget -q -O /dev/null http://localhost:3000/healthy || exit 1

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["yarn", "start"]
