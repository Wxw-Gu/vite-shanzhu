#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy1
git remote add origin git@github.com:Wxw-Gu/react-mangosteen-preview.git
git push -f origin master:master
cd -