FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY ./src ./src
COPY ./static ./static

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD ["node","src/healthcheck.js"]

CMD ["node", "src/index.js"]
