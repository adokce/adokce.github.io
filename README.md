# adokce.github.io

Minimal TanStack Start homepage: **WIP**, with links to the independent `test1` and `test2` Pages sites.

Website: https://adokce.github.io/

## Development

Requires Node.js 24.

```sh
npm ci
npm run dev
```

## Deployment

```sh
npm run build
```

TanStack Start prerenders the homepage into `dist/client/index.html`. GitHub Actions deploys only `dist/client` to GitHub Pages on pushes to `main`. Pages must use **GitHub Actions** as its publishing source.

The production homepage was smoke-tested using a static HTTP server, with no Start application server. The project links use ordinary anchors because each destination is a separate application.

GitHub Pages cannot run Start server functions or runtime SSR. Additional pages must be prerendered to use this hosting setup.

- [TanStack Start static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering)
- [GitHub Pages publishing configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
