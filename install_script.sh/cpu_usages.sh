#!/bin/bash

CPU_USAGE=$(top -b -n2 -p 1 | fgrep "Cpu(s)" | tail -1 | awk -F'id,' -v prefix="$prefix" '{ split($1, vs, ","); v=vs[length(vs)]; sub("%", "", v); printf "%s%.1f%%\n", prefix, 100 - v }')
max=50%
echo "current : $CPU_USAGE "
echo "threshould :  ${max}"
if [ ${CPU_USAGE::-3} -ge ${max%?} ]; then
curl "test"
echo " test"
fi
