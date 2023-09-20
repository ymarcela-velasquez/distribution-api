FROM node:16.20-bullseye-slim

WORKDIR /service/

COPY backend/package.json /service/backend/package.json
COPY package-lock.json /service/package-lock.json

COPY backend/ /service/backend/

CMD ["node", "/service/backend/index.js"]
