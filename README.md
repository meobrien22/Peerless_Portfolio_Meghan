# Meghan Fasano | Peerless Portfolio

This is a GitHub Pages export of Meghan’s portfolio as of September 29, 2026, updated with her newly supplied portrait. It includes the current design, photos, slide images, presentation viewer, project pages and interactive demonstrations, plus the editable source.

**Start with START-HERE.md.** The website is already built. You do not need Node.js, a terminal or a build service to publish this copy.

## How this package works

- `site/` contains the ready-built pages and browser code.
- `public/` contains the photos, logos, fonts, slide images and slide catalog.
- `app/`, `components/`, `content/`, `hooks/` and `lib/` contain editable source.
- The included GitHub Actions workflow combines the ready-built pages and assets, adjusts links to your GitHub Pages address and publishes them.

Repository sites, account sites and a custom domain configured through GitHub Pages are supported. No repository name needs to be hard-coded. If you change the Pages address or custom domain later, run **Publish portfolio** again.

The existing Sites website is independent of this export. Changes to one copy do not automatically update the other.

## Editing the source later

The included prebuilt snapshot is what publishes. Source edits must be rebuilt before publishing; this keeps the initial publishing process fast and avoids installing dependencies in GitHub Actions.

For a developer using Node.js 22.13 or newer and the pnpm version listed in `package.json`:

```sh
pnpm install --frozen-lockfile
pnpm run build
```

Commit the updated source and `site/` files, then push to `main`. New or changed assets belong in `public/`.

The source uses Next.js static export. The `/__GITHUB_PAGES_BASE__` prefix is intentional: the publishing script replaces it with the correct repository path. Preserve it on internal links and asset URLs. The export has no backend, hosting credentials or server requirement. Contact actions and interactive demonstrations retain their existing browser behavior.

For a local static preview after building, run `node scripts/prepare-pages.mjs` and serve `_site/` with any static HTTP server. Do not double-click an HTML file: browser JavaScript and slide loading require an HTTP server.

## References

- [GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Next.js static export](https://nextjs.org/docs/app/guides/static-exports)

Content, photographs, brand marks and third-party assets retain their existing ownership and license terms. No new open-source license is granted by this export. The Metropolis font license is included alongside its font files.
