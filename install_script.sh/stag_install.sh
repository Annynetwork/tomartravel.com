#!/bin/bash
cd /stag_new_disk/git-new-repo-project/spicescreen-node
git pull
npm i
pm2 start "npm run awsstag"  --name "spicescreen-node-staging-7701"
pm2 list
pm2 start "npm run awspreprod" --name "spicescreen-node-staging-7702"
pm2 list
pm2 start "npm run awsadvt" --name "spicescreen-node-staging-7703"
pm2 list
echo "####spicescreen-node project are running###########"

cd /stag_new_disk/mojoboxx
git pull origin master
npm i
pm2 start app.js --name "mojoboxx_website"
pm2 list
echo "########mojoboxx-website project is runnning######"

cd /stag_new_disk/git-new-repo-project/spicescreen-analytics
git pull
pm2 restart
pm2 list
echo "##########spicescreen-analytics project has been started########"

cd /stag_new_disk/git-new-repo-project/DaimlerAnalyticsWeb
git pull
npm i
pm2 restart 62
pm2 list
echo "######DaimlerAnaltyics start working##############

cd /stag_new_disk/git-new-repo-project/preprod-analytics
git pull
npm i
pm2 restart
echo "########preprod-analytics project started##########"


cd /stag_new_disk/prod-daimler
pm2 start app.js --name "DIAMLER-PROD"
echo #####daimeler.vuscreen.in project started#############
cd /stag_new_disk/stag-website
pm2 start app.js --name "stag.spicescreen.co.in-8082"
echo "####Stag.spicescreen.co.in is live now#################


cd /stag_new_disk/preprod-website/preprodnode
npm i
pm2 start "npm run awspreprod2" --name "PreProdNode Deeplink & City"

echo "####prepronode with deeplink & city working #####"


cd /stag_new_disk/git-new-repo-project/spicescreen-ife
git pull
npm i
pm2 start server/app.js --name "stagife-vuscreen"
echo "#####stagife.vuscreen.in is working##########


cd /stag_new_disk/git-new-repo-project/morevidya-analytics
git pull
npm i
pm2 start server/app/js --name "morevidya-analytics-8082"
echo "####morevidya analtyics is working#####################"


cd /stag_new_disk/more-vidya
pm2 start app.js --name "morevidya-vuscreen-8081"

echo "morevidya project is running"


cd /stag_new_disk/edu-mojoboxx
pm2 start app.js --name "edu-mojoboxx-8025"
pm2 list

echo "edu-mojo project is running"

cd /stag_new_disk/byju.mojoboxx.com
pm2 start app.js --name "byjus-mojo-9098
echo "##########byjus is live########"
echo "########STARTING MOJOBOXX WEBSITE######"
cd /stag_new_disk/git-new-repo-project/mojoboxx-website
pm2 start app.js --name "mojoboxx.com-8089"
git pull
npm i
echo "#######MOJOBOXX IS RUNNING##########"
