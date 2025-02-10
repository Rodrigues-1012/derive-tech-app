# base image
FROM node:16 AS alpine

# Workdirectory of the code
WORKDIR /app

# copy source files
COPY package.json ./
COPY . .

# install dependencies
RUN yarn install && yarn build

# start app
EXPOSE 3040
CMD  yarn start