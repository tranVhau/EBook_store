FROM node

WORKDIR /app

COPY package*.json yarn.lock ./

RUN npm install yarn 

RUN yarn install

COPY . .

EXPOSE 8000

RUN yarn global add pm2

# CMD ["pm2-runtime", "start", "index.js"]

CMD ["pm2-runtime", "index.js"]

# CMD ["yarn", "start"]
