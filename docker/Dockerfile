FROM node:18.8.0-slim AS BaseImage

WORKDIR /app

COPY ./package.json ./tsconfig.json ./

RUN npm install --omit=dev



FROM BaseImage AS BuildStage

COPY --chown=node:node . .

RUN npm run build

RUN chown -R node:node ./build



FROM BuildStage AS ProdImage

ENV NODE_ENV=production

USER node

CMD [ "npm", "run", "prod" ]
