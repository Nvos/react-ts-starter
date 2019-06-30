#!/bin/bash

npm list -g --depth 0 | grep yarn || npm install -g yarn --no-shrinkwrap
npm list -g --depth 0 | grep commitizen || npm install -g commitizen --no-shrinkwrap
npm list -g --depth 0 | grep @commitlint/config-conventional || npm install -g @commitlint/config-conventional --no-shrinkwrap
npm list -g --depth 0 | grep hygen || npm install -g hygen --no-shrinkwrap
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

echo "Run yarn install and you'r ready to go!"