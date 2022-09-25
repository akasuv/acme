#!/bin/bash
echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$NEXT_PUBLIC_SENTRY_RELEASE" == "" ]] ; then
  # Don't build
  echo "No new release, deployment aborted."
  exit 0;

else
  # Proceed with the build
  echo "New release: $NEXT_PUBLIC_SENTRY_RELEASE"
  exit 1;
fi
