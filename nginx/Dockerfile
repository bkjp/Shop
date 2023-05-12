# Base image
FROM nginx:stable-alpine

# The configuration file of nginx is copied inside
# /etc/nginx/cond.d of docker-compose file instead here
# in Dockerfile

WORKDIR /app

#ENV NGINX_LISTEN_PORT=80

# We copy all file from inside configs folder in the host including
# default.tpl  and others options .conf file needed for more customization
# of nginx container to /etc/nginx folder in the container.
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# We copy executable "run.dev.sh" from host to container at /app/sexecs_folder.
# This file will help to run envsubst that will extract environment variables
# of default.tpl and transfer the result inside /etc/nginx/conf.d/default.conf.
#COPY ./nginx/run.sh /app/run.sh

USER root

# We make the script run.dev.sh executable
#RUN chmod +x /app/run.sh

# We execute "run.dev.sh " file already located in the container path
# /app/execs_folder/ after the container has been constructed.
CMD [ "nginx-debug",  "-g", "daemon off;" ]