if [ -n "$SSH_CLIENT" ]; then
    TEXT="$(date): ssh login to ${USER}@$(hostname -f)"
    TEXT="$TEXT from $(echo $SSH_CLIENT|awk '{print $1}')"
    echo $TEXT
    curl "http://3.7.31.207:7701/spicescreen/webapi/sendAlertWa?key=LOGIN&value=$USER&server=production-backup-3.108.48.228"
    echo "http://3.7.31.207:7701/spicescreen/webapi/sendAlert?key=LOGIN&value=$USER&server=production-backup-3.108.48.228"
fi
