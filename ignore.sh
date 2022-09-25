#!/bin/bash
echo $VERCEL_ENV
echo $NEXT_PUBLIC_SENTRY_RELEASE
if [["$abc == ''"]]; then
	exit 1;

else
	exit 0;

fi
