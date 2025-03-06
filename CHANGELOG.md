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

- Redesign

  - modernize sidebar look
  - modernize and fix search bar input
  - modernizer nav bar look
  - make logo smaller
  - modernize breadcrumbs
  - change dark bg color

- md migrations

  - migrate all intro images from `<img src="/img/title/storage.svg" className="titlePic" />` to e.g. `![Storage Title Picture](/img/title/storage.svg)` in order to add missing alt texts and prevent page jumping

- repo structure

- misc
  - update github workflow to use node 18 -> 20
