This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Features to add

- There is an animated splash screen and then opens to the site
- Header with name on far left and "About Me", "Portfolio" and "Contact Me" on far right
  - Header shrink towards the center and edges round when scrolling, but stay fixed on top. Design the nav items however you like
  - Each click does a window scroll to the appropriate section
  - In mobile, the header turns into a hamburger menu that sits in the center and opens a drawer from the top with all the options
- Hero section
  - animated name and a brief intro to the left and an animated image on the right
    - In mobile view, animated name and a brief intro stacked on top and animated image on the bottom
- "About Me" section:
  - should start of with summary about me on the left and an animated image on the right. Also add button to download resume and social media links
    - In mobile view, summary on top, animation on the bottom
  - an experience section follows with an animated timeline of all the companies and internships I have been with
  - a services section follows that shows which sort of programming I am good at or willing to do and interested in
  - a skills section follows with the technologies I have used or interested in
  - an education field follows with
- Portfolio section:
  - this section scrolls through the present projects from right to left, and clicking each will sent to the details of the project, in a different page
- "Contact Me" section:
  - a brief text of how to contact and fields that include a rich text editor for the message of the email
- (Optional) Footer section:
  - add an "all rights reserved" tag with more nav and social media links
- (Optional) Multi-language support
