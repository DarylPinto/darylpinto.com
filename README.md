# Snakebyte Studios NextJS/Storyblok Template

## 🐶 Prerequisits

Node 15.3 or newer

## 👉 Get Started

Install dependencies

```
INIT_CWD="$(pwd)" npm install
```

Copy `.env.example` to `.env.local` and update your .env.local file with values for each variable

```
cp .env.example .env.local
```

Run the development server

```
npm run dev
```

When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack

This project uses the following libraries and services:

- Framework - [Next.js](https://nextjs.org)
- UI Kit - [Bulma](https://bulma.io)
- Contact Form - [Sendgrid](https://sendgrid.com/)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Vercel](https://vercel.com)

## 📚 Guide

<details>
  <summary><b>Styles</b></summary>
  <p>
    You can edit Bulma SASS variables in the global stylesheet located at <code>src/global/styles.scss</code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bulma elements with custom style check the <a href="https://bulma.io/documentation">Bulma docs</a> to see if you can do what need by tweaking a SASS variable.
  </p>
  <p>
    Custom styles are located in their related component's directory. For example, if any custom style is applied to the Navbar component you'll find it in <code>src/components/Navbar.module.scss</code>.
  </p>
</details>

<details>
<summary><b>Deployment</b></summary>
  <p>
    This repository integrates easily with Vercel to automatically deploy each commit to their own respective test URLs.
  </p>
</details>

<details>
  <summary><b>Commit Messages</b></summary>
  <p>
		Commit messages in this repository follow the <a href="https://www.conventionalcommits.org/">"Conventional Commits"</a> format. You should begin your commit messages with <code>feat:</code>, <code>fix:</code> or any of the other subjects listed in the <a href="https://www.conventionalcommits.org/en/v1.0.0/#specification">spec</a> such as <code>build:</code>, <code>chore:</code>, <code>ci:</code>, <code>docs:</code>, <code>style:</code>, <code>refactor:</code>, <code>perf:</code> or <code>test:</code>.
  </p>
	<p>Subjects can also contain a scope in parentheses like so: <code>feat(blog):</code> and should ideally be written in present tense. These practices improve readibility and  help facilitate a commit history that's easily parsable.</p>
	<p>Example of a good commit message following these rules: <code>feat(blog): add comments section</code></p>
</details>

<details>
  <summary><b>Other</b></summary>
  <p>
    The <a href="https://github.com/zeit/next.js">Next.js documentation</a> covers many other topics.
    This project was initially created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, a React codebase generator. Feel free to ask questions in the <a href="https://spectrum.chat/divjoy">Divjoy forum</a> and we'll do our best to help you out.
  </p>
</details>
