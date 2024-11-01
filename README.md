This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Testing on mobile phone
First install ngrok to forward your port to outer network:
```bash
npm install -g ngrok
```

Start your app by running:
```bash
npm run dev
```

In a new terminal, start ngrok:
```bash
ngrok http 3000
```

ngrok will give you a link something like this:
```bash
https://d1ee-xx-xxx-xxx-xxx.ngrok-free.app 
```

Update your .env.local file:
```bash
NEXTAUTH_URL = https://d1ee-xx-xxx-xxx-xxx.ngrok-free.app 
```
Note:
now you can either:
1. tell David abnout this new link you got and he will add it in google dev console for you
2. or you can setup google oauth and add the link yourself. 
rememeber to change google client id and google secret if you're connecting to your own google oauth api

Now go to chrome and add the app to your homescreen, you're all set



