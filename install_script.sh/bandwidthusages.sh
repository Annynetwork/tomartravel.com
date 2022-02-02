#!/bin/sh
max=500
current_usage=$(vnstat | tail -n3 | awk  '{print $8}' | head -n1  | awk -F. '{print $1}')
#current_usage=$(vnstat | tail -n3 | awk  '{print $8}' | head -n1)
echo "THE VALUE OF CURRENT USAGE: $current_usage"
echo "THE VALUE OF MAX: $max"
if [ "$current_usage" -ge "$max" ]
then
    curl ""
    echo "Maximum bandwidth usage: $current_usage"
else
       echo "Usage is undercontrol: $current_usage"
fi
echo "THE VALUE OF MAX: $max"
echo "THE VALUE OF CURRENT USAGE: $current_usage"
