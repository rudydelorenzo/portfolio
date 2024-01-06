FROM node:lts-bookworm-slim
LABEL authors="rudydelorenzo"

ENV GH_TOKEN $GH_TOKEN

WORKDIR app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
