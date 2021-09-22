# pull official base image
# FROM node:14.4-alpine3.12
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . /app
RUN npm ci
RUN npm run build

EXPOSE 5000

# start app
# CMD ["npm", "start"]
CMD ["serve", "-s", "build"]
