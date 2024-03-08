From node:18.18.0

WORKDIR  /app/

COPY package.json package-lock.json /app/

RUN npm install

COPY backend .

CMD ["npm", "start"]