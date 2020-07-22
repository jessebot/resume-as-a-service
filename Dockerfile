# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . /app
RUN npm ci
# RUN npm run build
# RUN npm install -g serve

EXPOSE 3000

# start app
# CMD ["serve", "-s", "build"]
CMD ["npm", "start"]
