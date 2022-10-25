FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN corepack enable \
  && corepack prepare pnpm@7.14.0 --activate \
  && pnpm i \
  && pnpm build

CMD [ "pnpm", "start" ]

EXPOSE 8080