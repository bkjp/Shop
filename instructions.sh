
# 1. Command to execute after running docker-compose to copy django staticfiles from
#    django container to host system.

    docker cp c-fast-jobs-api:/app/staticfiles /home/paulin/staticfiles_backend

    docker cp c-fast-jobs-api:/app/staticfiles ~/staticfiles_backend

# 2. After run this command, you should configure nginx to serve django staticfiles
#    from that directory

    location /django_static/ {
        alias ~/staticfiles_backend;
    }

# 3. Reload or restart nginx
