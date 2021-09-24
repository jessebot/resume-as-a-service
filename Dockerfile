# pull official base image
FROM node:current-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . /app
RUN npm ci
RUN npm run build

# make sure the port is accessible
EXPOSE 5000

# start app using serve -s build (defined in package.json)
CMD ["npm", "start"]
