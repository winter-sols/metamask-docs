# Getting Started

::: warning IMPORTANT NOTE
To develop for MetaMask, you’re first going to want to get MetaMask installed on your development machine. [Download here](https://metamask.io/)
:::

Once you have it running, you should find that new browser tabs have a window.ethereum object available in the console. This is the way MetaMask provides for you to interact with it.
## Global Installation

If you just want to play around with VuePress, you can install it globally:

``` bash
# install globally
yarn global add vuepress # OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```

## Inside an Existing Project

If you have an existing project and would like to keep documentation inside the project, you should install VuePress as a local dependency. This setup also allows you to use CI or services like Netlify for automatic deployment on push.

``` bash
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

::: warning
It is currently recommended to use [Yarn](https://yarnpkg.com/en/) instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.
:::

Then, add some scripts to `package.json`:

``` json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

You can now start writing with:

``` bash
yarn docs:dev # OR npm run docs:dev
```

To generate static assets, run:

``` bash
yarn docs:build # Or npm run docs:build
```

By default, the built files will be in `.vuepress/dist`, which can be configured via the `dest` field in `.vuepress/config.js`. The built files can be deployed to any static file server. See [Deployment Guide](deploy.md) for guides on deploying to popular services.
