FROM node:latest
ENV HOME=/app
ENV MONGO_URL=mongodb://mongo:27017/db
COPY . $HOME
WORKDIR $HOME/client
RUN npm install
RUN npm run build
WORKDIR $HOME
RUN npm install
EXPOSE 3000
RUN chmod 777 ./startserver.sh
CMD ["./startserver.sh"]