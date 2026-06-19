# Smoke Tests Strategy

This document outlines the tiered smoke testing strategy integrated within our GitHub Actions CI/CD
pipeline, mapped across different deployment environments (`preview`, `develop`, and `production`).

---

## 🎯 Test Levels Overview

To optimize execution speed and resource usage, tests are categorized into three incremental levels
based on complexity and scope:

* **Smoke Level 1** (Vitality Check)
  * **Healthcheck:** Verifies HTTP 200 connectivity to ensure the server is responsive.
  * **Root DOM Elements:** Ensures basic HTML structures are mounted and parsing correctly.
  * **Main Title:** Validates the title and that the primary page header loads with the correct
    content.
* **Smoke Level 2** (Functional & Assets Verification)
  * **Dynamic Components:** Tests critical client-side interactivity and interactive blocks.
  * **Assets Integrity:** Programmatically checks crucial static assets for a successful HTTP 200
    response.
* **Smoke Level 3** (Full Compliance)
  * **a11y:** Executes deeper automated accessibility checks across the DOM structure.

---

## 🚀 Environment Mapping

The table below describes which testing suites are triggered depending on the target deployment
environment:

| Level             |  Preview   |  Develop   | Production |
|:------------------|:----------:|:----------:|:----------:|
| **Smoke Level 1** | 🔄 Enabled | 🔄 Enabled | 🔄 Enabled |
| **Smoke Level 2** | ❌ Skipped  | 🔄 Enabled | 🔄 Enabled |
| **Smoke Level 3** | ❌ Skipped  | ❌ Skipped  | 🔄 Enabled |

### 🛠️ Execution Rules Summary

1. **Preview Environment (Pull Requests):** Fast feedback loop. Only **Smoke Level 1** runs to block
   broken builds instantly without incurring heavy compute times.
2. **Develop Environment (Staging):** Intermediate gate. Runs **Level 1** and **Level 2** to
   thoroughly validate functionality and static assets before staging pushes.
3. **Production Environment (Live):** Full regression guard. Executes the entire suite (**Levels 1,
   2, and 3**) to guarantee the highest quality
   before final delivery.
