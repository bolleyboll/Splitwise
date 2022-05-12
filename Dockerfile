FROM node:16-alpine3.12 as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .
RUN rm -rf ./node_modules

RUN npm install
RUN npm run build --prod

# CMD ["nginx", "-g", "daemon off;"]

RUN rm -rf /usr/share/nginx/html/*

FROM nginx:alpine
EXPOSE 80
COPY --from=builder app/dist/splitwise usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]