FROM node:18
WORKDIR /usr/app
COPY package*json ./
RUN npm i
COPY . .
RUN npx prisma generate
CMD [ "npm", "run", "start" ]
EXPOSE 3000