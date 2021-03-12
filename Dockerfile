# nginx state for serving content
FROM nginx:1.15
# Copy nginx configuration and mime.types
COPY nginx/default.conf /usr/local/nginx/conf/nginx.conf
COPY nginx/mime.types /usr/local/nginx/conf/mime.types
# Copy static content
COPY /dist/angular-test/ /usr/share/nginx/html
# Expose port 8080
EXPOSE 8080
