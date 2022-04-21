FROM node

WORKDIR /app

COPY . .

RUN npm -v

RUN node -v

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev", "--host"]