FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]

# 빌드 > docker build -t day34/simpleweb .
# 실행 > docker run -p 8080:8080 day34/simpleweb