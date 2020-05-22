# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR .
COPY package*.json ./
RUN npm install --silent
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
