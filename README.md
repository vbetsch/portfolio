# portfolio

[![CI](https://github.com/vbetsch/portfolio/workflows/CI/badge.svg)](https://github.com/vbetsch/portfolio/actions?query=workflow%3ACI++)
[![CD](https://github.com/vbetsch/portfolio/workflows/CD/badge.svg)](https://github.com/vbetsch/portfolio/actions?query=workflow%3ACD++)

My official personal website

## 🚀 Getting Started

We recommend using Node
version [lts/krypton -> v24.14.1](https://nodejs.org/en/blog/release/v24.14.1).

### 1. Setup environment

Create a **.env** file by copying the [.env.example](.env.example) file. These values are only for
the local environment, you have to modify it.

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

### Run all tests

```bash
npm test
```

### Units tests

#### Run units tests in default mode

```bash
npm run test:units
```

#### Run units tests with coverage

```bash
npm run test:units:cov
```

#### Run units tests in watch mode

```bash
npm run test:units:watch
```

### End-To-End

#### Run all e2e tests in CLI

```bash
npm run test:playwright
```

#### Run all e2e tests in UI

```bash
npm run test:playwright:ui
```

#### Run only e2e tests with tag @a11y

##### in CLI

```bash
npm run test:playwright:tag -- @a11y
```

##### in UI

```bash
npm run test:playwright:ui:tag -- @a11y
```

### HTML

#### Validate HTML structure

```bash
npm run test:html
```

## 🧹 Linting & Formatting

### Run Oxlint in default mode

```bash
npm run lint:ox
```

### Run ESLint in default mode

```bash
npm run lint:es
```

### Run ESLint in strict mode

```bash
npm run lint:es:strict
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
npm clean-install           # Update dependencies
npm run start:dev           # Check development execution
npm run format              # Format code
npm run check               # Type-checking, astro check and linters
npm run test:units:cov      # Run all unit tests
npm run build               # Run production build
npm run test:html           # Run HTML tests
npm run test:playwright:ui  # Run Playwright tests
npm run start:prod          # Check production execution
```

## ➕ See more

- [Smoke Tests Strategy](docs/SMOKE_TESTS_STRATEGY.md)
