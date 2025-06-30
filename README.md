# `ink-docs`

This is the documentation portal for [ink!](https://github.com/use-ink/ink). The latest version is always available at [https://use.ink](https://use.ink).

Run it locally via

```bash
# Enable Corepack to use the correct pnpm version specified in package.json
corepack enable

# Install dependencies and start the development server
pnpm install
pnpm start
```

If you don't have pnpm installed, you can install it by following the instructions at [https://pnpm.io/installation](https://pnpm.io/installation), or use Corepack (recommended) which comes with Node.js 16.10+ and will automatically use the correct version specified in this project.

We want to provide comprehensive documentation for anything you need to work with ink! here.

If you spot gaps in the information provided, or are uncertain about any
specific area, please do <a href="https://github.com/use-ink/ink-docs/issues">log an issue</a>
or <a href="https://github.com/use-ink/ink-docs/pulls">make a pull-request</a>.

We really want to have good documentation here and allow people to be productive
right from the start.

## Development Notes

If you need to run ReCaptcha on your localhost you will need to add `dev.use.ink` to your `/etc/hosts`.

### Linux

```sh
sudo bash -c 'echo "127.0.0.1 dev.use.ink" >> /etc/hosts'
```

### OSX

```sh
sudo bash -c 'echo "::1 dev.use.ink" >> /etc/hosts'
```

Then visit [http://dev.use.ink:8080/](http://dev.use.ink:8080/) (Don't forget the port number)

## Adding a new Version

As we are using redirects from `docs` to `/docs/<latest_version>` some manual setup is required. If you want to create a new default version.

1. change the `current` setting in `docs.versions` to point to the version you want as default
1. the redirect from /docs to /docs/<latest_version> is happening in `/src/pages/docs.tsx`. Change the **two** occurences of the version to match your new default
1. Nav and Footer links directly point hardcode the current version. Change it in `src/config.ts` to match your latest version.
