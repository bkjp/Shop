#!/bin/sh

set -e

python manage.py wait_for_db
python manage.py collectstatic --noinput
python manage.py makemigrations
python manage.py migrate
gunicorn appconf.wsgi:application --bind 0.0.0.0:8000