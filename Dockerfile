FROM ubuntu:16.04

MAINTAINER Princip <principle.main@gmail.com>

ENV WORKING_DIR /distr
ENV NODE_ENV 'production'
ENV PORT 7800

WORKDIR $WORKING_DIR

ADD ./distr $WORKING_DIR

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN chmod 755 $WORKING_DIR
RUN apt-get update && apt-get upgrade -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN cd $WORKING_DIR
RUN npm i --production
RUN cd $WORKING_DIR
RUN chmod 755 run.sh

# Windows add specific CR LF to the end of line
RUN sed -i -e 's/\r$//' run.sh

EXPOSE 7800

CMD ./run.sh
