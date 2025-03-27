# `ink-docs`

This is the documentation portal for [ink!](https://github.com/use-ink/ink). The latest version is always available at [https://use.ink](https://use.ink).

Run it locally via

```bash
yarn
yarn start
```

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