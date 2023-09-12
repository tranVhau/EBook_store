# Build Stage
FROM node AS build

WORKDIR /app

# Copy minimal set of files for dependency installation
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the files
COPY . .

# Build the app
RUN yarn build

# Runtime Stage
FROM node

WORKDIR /app

# Copy built app from the build stage
COPY --from=build /app ./

# Install PM2 globally
RUN yarn global add pm2

# Expose the listening port
EXPOSE 3000

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]


# RUN apk add --no-cache --upgrade bash
# RUN ["chmod", "+x", "./entrypoint.sh"]
# ENTRYPOINT ["./entrypoint.sh"]

#############

# # Install dependencies only when needed
# FROM node AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install

# # Rebuild the source code only when needed
# FROM node AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN yarn run build

# # Production image, copy all the files and run next
# FROM node AS runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# # You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.js ./next.config.js
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
# # ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["node_modules/.bin/next", "start"]





