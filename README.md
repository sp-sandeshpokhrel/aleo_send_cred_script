# DokoJS Developer Guide

## Introduction

DokoJS is a powerful and lightweight library designed for seamless interaction with the Aleo blockchain and its diverse ecosystem. Drawing inspiration from the [zk-gaming-toolkit](https://github.com/kryha/zk-gaming-toolkit), dokojs fully harnesses existing tools while offering a user-friendly interface for developers keen on building atop the Aleo blockchain.

## Installation

Before beginning, make sure you have the following set up:

**1. Rust**: [Installation Guide](https://www.rust-lang.org/tools/install)

**2. Leo language**:
[Installation Guide](https://github.com/ProvableHQ/leo)

### From NPM

Install dokojs globally using npm:
`npm install -g @doko-js/cli@latest`

### From Source

> In case pnpm is not set up, follow the [pnpm installation guide](https://pnpm.io/installation)

```bash
# Download the source file
git clone https://github.com/venture23-aleo/doko-js

cd doko-js

# Install the dependencies
pnpm install

# Build the project
npm run build

# Install dokojs
npm run install:cli
```

## Usage

Compile first:

```bash
dokojs compile
```

Run script for sending credits:

```bash
npx tsx scripts/send_credits.ts
```
