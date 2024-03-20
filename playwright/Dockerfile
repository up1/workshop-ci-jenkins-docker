FROM mcr.microsoft.com/playwright:v1.42.1-jammy
WORKDIR /app
COPY . .
RUN npm install
RUN npx playwright install
CMD [ "npx", "playwright", "test" ]