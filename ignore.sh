#!/bin/bash
echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_ENVx" == "" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed $VEVERCEL_ENVx"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
