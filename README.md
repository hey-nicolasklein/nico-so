# Nico.so

My personal website, written in ReactJS using the Next.JS framework. <br> The site is live at [nico.so](https://nico.so). <br> Animations have been made with FramerMotion and ReactSpring.
The website utilizes the Spotify Api to show songs I've recently listened to. The raw-data can be accessed through
the NextJS API entpoints `api/spotify/recent` or `api/spotify/top`.

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Usage

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [/api/spotify/top](http://localhost:3000/api/spotify/top) and [/api/spotify/recent](http://localhost:3000/api/spotify/recent).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
