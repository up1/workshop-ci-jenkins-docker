FROM php:8-apache
RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli
COPY ./*.php /var/www/html/