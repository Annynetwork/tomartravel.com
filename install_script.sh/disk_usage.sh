#!/bin/bash
used=$(df -Ph | grep '/dev/nvme0n1p1' | awk {'print $5'})
max=90%
if [ ${used%?} -ge ${max%?} ]; then
curl "test"
echo "The Mount Point "/dev/nvme0n1p1" on staging has used $used at $(date)"
echo " test"
fi
