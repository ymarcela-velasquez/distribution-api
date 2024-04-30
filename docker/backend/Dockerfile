FROM node:16.20-bullseye-slim

WORKDIR /service/

COPY package.json /service/backend/package.json
COPY package-lock.json /service/backend/package-lock.json

COPY src/ /service/backend/src

CMD ["node", "/service/backend/index.js"]
