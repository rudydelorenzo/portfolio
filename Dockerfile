FROM node:lts-bookworm-slim
LABEL authors="rudydelorenzo"

WORKDIR app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
