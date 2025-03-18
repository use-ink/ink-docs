# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed

- Reorganized package.json dependencies

  - Added new devDependencies for image migration script:
    - @types/glob
    - glob
    - ts-node
  - migrate images to useBaseUrl in order for docusaurus to be able to run docs from subdirectory and hosted at subdomains (e.g. niklasp.github.io/ink-docs/docs)

- Add Pages

  - Stories
  - Tutorials
  - Projects

- Docs Redesign

  - modernize sidebar look
  - modernize and fix search bar input
  - modernizer nav bar look
  - make logo smaller
  - modernize breadcrumbs
  - change dark bg color

- md migrations

  - migrate all intro images from `<img src="/img/title/storage.svg" className="titlePic" />` to e.g. `![Storage Title Picture](/img/title/storage.svg)` in order to add missing alt texts and prevent page jumping

- repo structure

  - create `shared.cs`, `docs.css`, `landing.css`

- misc
  - update github workflow to use node 18 -> 20
  - make docusuaurus.config.js => docusuaurus.config.ts and fix duplicate config entries
  - change `tsconfig.json` to updated docusaurus structure to get rid of import types not found
