# Tides

A theme for [Ghost](http://github.com/tryghost/ghost/) based on the base [Casper](https://github.com/TryGhost/Casper) one.

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node (v8.9.0 for best results) and Gulp installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

You will still need a running instance of ghost. The `scripts` directory contains a simple one to run `yarn dev` and ghost installed in a `ghost-local` dir with nodemon, as per ghost docs. It's noddy but enough to work on this theme.

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ yarn zip
```

# PostCSS Features Used

- Autoprefixer
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)

# Copyright & License

Copyright (c) 2018 Dominik Piatek [MIT license](LICENSE).
