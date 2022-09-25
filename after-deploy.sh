vercel pull --yes --environment=production --token=$VERCEL_TOKEN
vercel env rm NEXT_PUBLIC_SENTRY_RELEASE production --token=$VERCEL_TOKEN --yes
