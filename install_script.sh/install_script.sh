echo "#########NGINX INSTALLATION BEGAN########"
amazon-linux-extras install nginx1
systemctl enable --now nginx
systemctl status nginx
echo "########NGINX INSTALLED###############"



echo "#######Node.js INSTALLATION BEGAN#######"
yum install -y gcc-c++ make -y
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
yum install -y nodejs
node -v
npm -v
echo "######node.js INSTALLATION FINISHED#######"



echo "#######PM2 INSTALLATION BEGAN###########"
npm install pm2@latest -g
pm2 startup
pm2 -v
pm2 --help
echo "#######PM2 INSTALLATION FINISHED############"



echo "##########INSTALLATION OF GIT########"
yum install git -y
echo "#####installation finished############"



echo "######MARIADB INSTALLATION BEGAN########"
amazon-linux-extras | grep mariadb
 tee /etc/yum.repos.d/mariadb.repo<<EOF
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.5/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
EOF

yum makecache
yum repolist
yum install MariaDB-server MariaDB-client -y
systemctl enable --now mariadb
#mysql_secure_installation
echo "#####MARIADB SUCESSFULY INSTALLED#########"


echo "########INSTALLTING PHP##################"
amazon-linux-extras | grep php
amazon-linux-extras enable php7.4
yum install php php-{cli,fpm,pear,cgi,common,curl,mbstring,gd,mysqlnd,gettext,bcmath,json,xml,intl,zip,imap} -y
amazon-linux-extras enable nginx1
vim /etc/php-fpm.d/www.conf
#user = nginx
#group = nginx
#listen = /run/php-fpm/www.sock
#listen.acl_users = apache,nginx
systemctl enable php-fpm
systemctl restart php-fpm
systemctl status php-fpm
cd /var/log/
mkdir php-fpm
cd php-fpm
touch error.log-20210519
touch www-error.log
touch error.log-20210519
touch error.log
chmod 644 www-error.log
chmod 600 error.log
chmod 600 error.log-20210519
cd ..
chmod 755 php-fpm
systemctl restart php-fpm
wget wordpress.org/latest.tar.gz
tar xvf latest.tar.gz
echo "#########PHP IS INSTALLED###########"

