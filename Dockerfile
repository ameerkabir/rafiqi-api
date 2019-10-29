FROM node:12.12.0-alpine
WORKDIR  /backend
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]
