# 1. Gunakan image PHP versi 8.2 (atau sesuaikan dengan versimu) yang sudah ada Apache-nya
FROM php:8.2-apache

# 2. Install dependensi sistem, ekstensi PHP, Node.js, dan NPM (untuk Breeze/Vite)
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    nodejs \
    npm \
    && docker-php-ext-install pdo pdo_mysql zip

# 3. Aktifkan mod_rewrite Apache (Wajib agar routing Laravel jalan)
RUN a2enmod rewrite

# 4. Ubah Document Root Apache ke folder /public milik Laravel
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 5. Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 6. Set folder kerja di dalam server
WORKDIR /var/www/html

# 7. --- FIX ERROR WASMER: Copy file config dependensi DULU ---
COPY composer.json composer.lock* package.json package-lock.json* ./

# 8. Install *package* PHP dan Javascript
RUN composer install --no-dev --optimize-autoloader && npm install

# 9. Copy semua sisa kode web kamu ke dalam server
COPY . .

# 10. Compile aset Vite/Tailwind bawaan Breeze
RUN npm run build

# 11. Atur perizinan folder agar Laravel bisa menyimpan cache dan log
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# 12. Buka port 80 untuk web server
EXPOSE 80