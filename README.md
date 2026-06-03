# portfolio

[![Linter](https://github.com/vbetsch/portfolio/workflows/Linter/badge.svg)](https://github.com/vbetsch/portfolio/actions?query=workflow%3ALint++)
[![Checks](https://github.com/vbetsch/portfolio/workflows/Checks/badge.svg)](https://github.com/vbetsch/portfolio/actions?query=workflow%3AChecks++)
[![Tests](https://github.com/vbetsch/portfolio/workflows/Tests/badge.svg)](https://github.com/vbetsch/portfolio/actions?query=workflow%3ATests++)
[![Build](https://github.com/vbetsch/portfolio/workflows/Build/badge.svg)](https://github.com/vbetsch/portfolio/actions?query=workflow%3ABuild++)

My official personal website

## 🚀 Getting Started

We recommend using Node
version [lts/krypton -> v24.14.1](https://nodejs.org/en/blog/release/v24.14.1).

### 1. Setup environment

Create a **.env** file by copying the [.env.example](.env.example) file. These values are only for the
local environment, you have to modify it.

### 2. Install dependencies

```bash
npm install
```

### 3. Check your installation

```bash
npm run check
```

### 4. Start the project (development)

```bash
npm run start:dev
```

## 🧪 Running Tests

### Run tests in default mode

```bash
npm test
```

### Run tests with coverage

```bash
npm run test:cov
```

## 🧹 Linting & Formatting

### Run linter in default mode

```bash
npm run lint
```

### Run linter in strict mode

```bash
npm run lint:strict
```

### Format the code

```bash
npm run format
```

## 🏗️ Building the Project

### Build application

```bash
npm run build
```

### Check the build

```bash
npm run start:prod
```

## 🚥 Development Workflow

Validate your setup by running the following commands in order:

```bash
npm clean-install        # Update dependencies
npm run start:dev        # Check development execution
npm run format           # Format code
npm run test:cov         # Run tests with coverage
npm run check            # Type-checking, astro check and linter
npm run build            # Run production build
npm run start:prod       # Check production execution
```
