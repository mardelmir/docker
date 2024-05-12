FROM node

RUN mkdir -p /home/appnode

WORKDIR /home/appnode

COPY package*.json . /

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]