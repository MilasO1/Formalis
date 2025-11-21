#!/bin/bash
set -e
echo "Checking API via nginx..."
curl -k -s -o /dev/null -w "%{http_code}" -H "Host: formation.local" https://localhost/api/health || exit 1
echo "OK"
