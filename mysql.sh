services:
  db:
    image: mysql:latest
    container_name: db
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ROOT_PASSWORD: root # กำหนด user ของ root mysql
      MYSQL_DATABASE: minecraft # กำหนด database เริ่มต้นของ mysql
    ports:
      - "3306:3306"
    volumes:
      - ./db_volume:/var/lib/mysql
  phpmyadmin:
    image: phpmyadmin/phpmyadmin:latest
    container_name: phpmyadmin
    environment:
      PMA_HOST: db # ระบุ host ที่จะให้ phpmyadmin ไปจัดการ ซึ่งสามารถใส่เป็นชื่อ container name (db) ได้เลย
      PMA_PORT: 3306 # ระบุ port ของ Database
      PMA_USER: root # ระบุ user ของ Database
      PMA_PASSWORD: root # ระบุ password ของ Database
    ports:
      - "8080:80"
    depends_on:
      - db