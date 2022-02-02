#!/bin/sh
max=70.00
ramusage=$(free | awk '/Mem/{printf("RAM Usage: %.2f\n"), $3/$2*100}'| awk '{print $2,$3}')
echo $ramusage
if [ "$ramusage" > $max ]; then
 curl ""
 echo ""
else
        echo "RAM USAGE IS $ramusage at $hostname"
  fi
