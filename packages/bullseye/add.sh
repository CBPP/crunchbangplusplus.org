#!/bin/bash -ex

if [ $(which reprepro >/dev/null) ] || [ $(which grep >/dev/null) ] || [ $(which sed >/dev/null) ]; then
  echo "== One or more utilities not found =="
  echo "== Required: reprepro, grep, sed =="
  exit 1
fi

if [ $(touch conf/distributions) ]; then
  echo "== conf/distributions file not found =="
  exit 1
else
  CODENAME=$(grep 'Codename: ' conf/distributions | sed 's/Codename: //g')
fi

reprepro -b . includedeb ${CODENAME} $@
