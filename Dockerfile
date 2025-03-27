FROM registry.sarfechi.com/public/node:22

# Set the working directory inside the container
WORKDIR /app
COPY .npmrc ./.npmrc
COPY package*.json ./
RUN npm install --production --legacy-peer-deps
RUN npm install tsconfig-paths
COPY prisma ./prisma
ENV DATABASE_URL="postgresql://sarfechi:safechi@192.168.199.10:5434/sarfechi?connection_limit=5"
ENV NEXT_PUBLIC_API_URL="https://test2-api.sarfechi.com"
RUN npx prisma generate
# RUN npx prisma migrate dev --name v7
COPY . .

RUN npm run build
###ENV NODE_ENV=production
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
