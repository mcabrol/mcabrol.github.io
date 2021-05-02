#!/bin/bash

FOOT="];"

read -p "Name: " name
read -p "Version name: " version

FILE=$(head -2 ci.js)

NEW=$name-$version
CAT=$FILE\"$NEW\"$FOOT

echo $CAT > ci.js
