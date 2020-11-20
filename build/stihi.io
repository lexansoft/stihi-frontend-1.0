upstream go_http {
        server 0.0.0.0:4200;
        keepalive 300;
}

server {
        listen        80;

        server_name _;

        access_log off;
        error_log /dev/null crit;
        root /var/www/stihi.io/public;
        index index.php index.html index.htm index.nginx-debian.html;

        gzip              on;
        gzip_buffers      16 8k;
        gzip_comp_level   4;
        gzip_http_version 1.0;
        gzip_min_length   1280;
        gzip_types        text/plain text/css application/json text/javascript application/javascript application/x-javascript text/xml application/xml application/xml+rss image/x-icon image/bmp;
        gzip_vary         on;

        client_max_body_size 500m;

       location /appdev {
                proxy_pass http://go_http;
                proxy_http_version 1.1;
                proxy_set_header Connection "";
                proxy_set_header        X-Real-IP       $remote_addr;
                proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        location / {
                try_files $uri /index.html;
        }
}
