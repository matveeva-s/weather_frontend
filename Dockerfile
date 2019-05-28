# Stage 0, "build-stage" to build and compile the frontend
FROM node:8-alpine as build-stage
WORKDIR /app
COPY package.* yarn.* ./
RUN npm install
RUN yarn install
COPY . ./
RUN npm run build

# Stage 1, to have only the compiled app, ready for production with Nginx
from nginx:1.15-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
