#!/bin/sh -e

# We want to rebuild node-sass in case there is an OS mismatch
# left by a non-Docker platform in node_modules
if [ "$NODE_ENV" = "development" ]; then
    npm rebuild node-sass
fi

exec "$@"
