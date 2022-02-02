#!/bin/bash
NOW = $(date +%H%M%S)
cd /stag_new_disk
mkdir crontab
cd crontab
crontab -l >> touch $NOW
echo "########NOW MOVING CRONTAB ENTRY TO BUCKET#######"
aws s3 cp --recursive /stag_new_disk/crontab/$NOW s3://mobisign-bucket/aws-server/crontab/$NOW
