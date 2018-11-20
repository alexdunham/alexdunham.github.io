#!/bin/bash
cp CNAME ./public
git add .
git commit -m "deploy commit"
git push origin HEAD
git push origin `git subtree split --prefix public generator`:master --force
