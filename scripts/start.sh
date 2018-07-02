#! /bin/sh

yarn dev &

cd ../ghost-local
nodemon current/index.js --watch content/themes/tides --ext hbs,js,css

cd -
