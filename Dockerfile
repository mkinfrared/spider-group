FROM node:12.7-alpine

WORKDIR /app

COPY . /app

ENV REACT_APP_BASE_URL=http://example.spider.ru

RUN yarn
CMD ["yarn", "start"]
