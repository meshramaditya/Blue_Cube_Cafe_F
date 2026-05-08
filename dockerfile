FROM node:18-bullseye-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production --silent
COPY .next ./.next
COPY public ./public
COPY pages ./pages
COPY components ./components
COPY styles ./styles
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
