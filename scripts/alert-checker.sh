#!/bin/sh

EXPECTED_ARGS=1

LOCAL_PATH=/Users/soniafabre/Projects/workspace/git/react-alerts-ikea-api/scripts

if [ $# -ne "$EXPECTED_ARGS" ]
  then
  echo "Usage: ./alert-checker.sh {local|staging}"
    exit $E_BADARGS
fi

case "$1" in
        local)
        mongo localhost:27017/alerts-ikea --quiet $LOCAL_PATH/db/find_active_alerts.js | awk -F\t '{system("curl -S -s \x27http://localhost:3000/availability/"$3"?email="$4"&id="$1"\x27")}'
        ;;
*)
    echo "Usage: ./generate_reports.sh {local|staging}"
    exit $E_BADARGS

esac




