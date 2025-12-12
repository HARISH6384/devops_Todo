FROM node:22

WORKDIR /app

COPY package.json .

# Clear old esbuild binary
RUN npm install
RUN npm rebuild esbuild

COPY . .

EXPOSE 3000

CMD ["npx", "serve", "-s" , "dist"]
