# Specify Node Version and Image
FROM node:18.16.0 AS development

# Specify the working directory
WORKDIR /todo-api/src/app

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm ci
RUN npm run start:dev

EXPOSE 4000


FROM node:18.16.0 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /todo-api/src/app

COPY --from=development /todo-api/src/app/ .

EXPOSE 4000

CMD [ "node", "dist/main" ]
