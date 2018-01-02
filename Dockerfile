FROM centos
RUN yum install epel-release -y && yum install nodejs -y
EXPOSE 8080
COPY server.js .
CMD node server.js
