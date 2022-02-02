#!/bin/bash
NOW=$(date +"%m-%d-%Y-%H-%M")
#cd /data/Daily-Bck/
cd /home/ec2-user
mkdir Daily-Bck
cd Daily-Bck
mkdir $NOW
cd $NOW
pwd
echo " ############### $NOW Directory Created DataBase Backup Started ####################"
mysqldump -u root  '-pRBI@M0ve@1980'  --single-transaction --quick --all-databases  > /home/ec2-user/Daily-Bck/$NOW/all-databases.sql
echo "#################### Cities_List.sql################################"
aws s3 cp  all-databases.sql s3://mobisign-bucket/aws-server/mysql-bck/staging/$NOW/
cd /home/ec2-user/Daily-Bck
rm -rf $NOW
echo " # All Sql files of this folder is upload in vuliv-bucket/vuliv-backup/mysql-bck/$NOW/  #####"
aws s3 cp /usr/share/tomcat/webapps/daimler.war s3://mobisign-bucket/aws-server/tomcat/staging/$NOW/
aws s3 cp /usr/share/tomcat/webapps/spicescreen.war s3://mobisign-bucket/aws-server/tomcat/staging/$NOW/
aws s3 cp /usr/share/tomcat/webapps/spicevertical.war s3://mobisign-bucket/aws-server/tomcat/staging/$NOW/
aws s3 cp /usr/share/tomcat/webapps/vscommon.war s3://mobisign-bucket/aws-server/tomcat/staging/$NOW/
aws s3 cp /usr/share/tomcat/webapps/vuscreen.war s3://mobisign-bucket/aws-server/tomcat/staging/$NOW/
echo "##nginx html backup##"
aws s3 cp /etc/nginx/nginx.conf s3://mobisign-bucket/aws-server/nginx/staging/$NOW/
echo "##nginx conf backup##"
curl "http://3.7.31.207:7701/spicescreen/webapi/sendAlert?key=DBBACKUP&value=DONE&server=staging3.7.31.207"
