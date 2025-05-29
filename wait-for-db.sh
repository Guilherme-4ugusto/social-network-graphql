#!/bin/sh
set -e

host="$1"
shift
cmd="$*"

echo "Waiting for database at $host..."

until pg_isready -h "$host" -p 5432 > /dev/null 2>&1; do
  echo "Database is not ready yet. Waiting..."
  sleep 2
done

echo "Database is ready! Executing command..."

exec sh -c "$cmd"