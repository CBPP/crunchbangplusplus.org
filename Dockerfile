FROM alpine

ADD . /everything/
WORKDIR /everything
RUN mv packages/* . && rm -rf packages .git* Dockerfile
