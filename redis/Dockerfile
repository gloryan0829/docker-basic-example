# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
# 디펜던시를 빌드할 때 순서가 바뀌면 다음 번에 build 할 때 cache 가 바뀌었기 때문에 다시 다운로드 받게 된다.
RUN apk add --update redis
RUN apk add --update gcc

# Tell the image what to do when it starts as a container
CMD [ "redis-server" ]

# 이 Dockerfile 을 만들기 위해선 -> docker build .