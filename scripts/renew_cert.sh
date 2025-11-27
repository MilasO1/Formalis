#!/bin/bash
set -e
LOG=/var/log/certbot_renew.log
echo "$(date '+%F %T') - Starting certbot renew" >> $LOG
/usr/bin/certbot renew --quiet --deploy-hook "docker kill -s HUP formalis_nginx || true" >> $LOG 2>&1
echo "$(date '+%F %T') - Done" >> $LOG
