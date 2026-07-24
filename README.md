# nico.so

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhey-nicolasklein%2Fnico-so&env=SPOTIFY_REFRESH_TOKEN,SPOTIFY_CLIENT_SECRET,SPOTIFY_CLIENT_ID&envDescription=For%20the%20spotify%20connection%20to%20work%20you%20need%20to%20authenticate%20via%20a%20client_id%2C%20client_secret%20and%20refresh_token.%20Checkout%20the%20spotify%20docs%20to%20find%20out%20how%20to%20create%20them%20for%20your%20own%20account.&envLink=https%3A%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fgeneral%2Fguides%2Fauthorization%2Fcode-flow%2F)

> My personal website ✨

## Technology stack

-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Back-end:** [Next.js](https://nextjs.org/)
-   **Front-end:** [React](https://reactjs.org/)
-   **Animation:** [ReactSpring](https://react-spring.dev/) + [FramerMotion](https://www.framer.com/docs/animation/)
-   **Deployment:** [Vercel](https://vercel.com/)

## Running locally

1. Clone this repo:

```sh
$ git clone https://github.com/hey-nicolasklein/nico-so.git
```

2. Then go to the project's folder:

```sh
cd nico-so
```

3. Install all dependencies:

```sh
npm install
```

4. Set up environment variables:

```sh
cp .env.example .env
```

The site content itself is static (see [Content](#content) below), so the only
environment variables are for the live Spotify "Music I love" row. See the
[Spotify docs](https://developer.spotify.com/documentation/web-api/concepts/authorization)
for how to obtain a `client_id`, `client_secret` and `refresh_token`. Without
them the app still builds; the music row is simply empty.

5. Run locally:

```sh
npm run dev
```

The basic file structure for the project is organized in the following way:

```
.
|-- components
|-- data
|-- hooks
|-- interfaces
|-- lib
|-- pages
|-- public
```

### [components](https://github.com/hey-nicolasklein/nico-so/tree/master/components)

This folder contains reusable React components.

### [data](https://github.com/hey-nicolasklein/nico-so/tree/master/data)

This folder contains the site content as static, version-controlled files
(portfolio items, skills, CV entries, social links). See [Content](#content).

### [hooks](https://github.com/hey-nicolasklein/nico-so/tree/master/hooks)

This folder contains custom hooks.

### [interfaces](https://github.com/hey-nicolasklein/nico-so/tree/master/interfaces)

This folder contains the TypeScript types for the site content and the Spotify API.

### [lib](https://github.com/hey-nicolasklein/nico-so/tree/master/lib)

This folder containts the logic for fetching data from spotify.

### [pages](https://github.com/zenorocha/zenorocha.com/tree/master/pages)

This folder containts the main pages of the site.

### [public](https://github.com/zenorocha/zenorocha.com/tree/master/public)

This folder contains the any images or graphics used on the site.

## Content

The site is **git-first**: all content lives in the repository, with no external
CMS. To update the page, edit the relevant file and commit.

-   `data/portfolio.ts` — the "Things I love" cabinet of curiosities
-   `data/skills.ts` — the orbiting skills
-   `data/cv.ts` — experience and education entries
-   `data/socialLinks.ts` — hero social links
-   `interfaces/content.ts` — the types backing the above

Images referenced by the content live in `public/assets` and are served from
`/assets/...`. The Spotify "Music I love" row is the one exception — it is
fetched live at build time (see [Running locally](#running-locally)).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](http://zenorocha.mit-license.org/) © Nicolas Klein
