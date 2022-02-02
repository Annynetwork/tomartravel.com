
#!/bin/bash
echo "############# Checking test #############################"
if curl -s --head http://test | grep "200 OK"
then
echo "test is up!"
else
echo "test is down!"
curl "test"
fi

echo "############# Checking test #############################"
if curl -s --head http://test | grep "200 OK"
then
echo "test is up!"
else
echo "test is down!"
curl "testtest"
fi


echo "############# Checking test #############################"
if curl -s --head http://test/ | grep "200"
then
echo "test is up!"
else
echo "test is down!"
curl "testProdDaimlerAPI"
fi
