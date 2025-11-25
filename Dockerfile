# Dockerfile
FROM node:22-alpine AS base

# Установка pnpm (работает и с npm/yarn, но pnpm быстрее)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Кешируем зависимости
COPY package.json pnpm-lock.yaml* yarn.lock* package-lock.json* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "No lockfile found" && exit 1; \
  fi

# Копируем исходники и собираем
COPY . .
RUN pnpm build   # или npm run build / yarn build — всё работает

# Продакшен-образ
FROM node:22-alpine AS production

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Копируем только то, что нужно для запуска
COPY --from=base /app/.output ./
COPY --from=base /app/src/server/data ./src/server/data/

CMD ["node", "server/index.mjs"]