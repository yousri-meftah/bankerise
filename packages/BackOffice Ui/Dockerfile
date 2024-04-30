FROM node:20-alpine as builder

WORKDIR /usr/src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx

COPY --from=builder /usr/src/dist /usr/share/nginx/html
COPY --from=builder /usr/src/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
