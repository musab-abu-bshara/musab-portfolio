# Test Case Template

This document is a concise, repeatable template for writing manual or automated test cases. Copy the table below for each test case and keep examples under `QA/test_cases/` so visitors can read them easily.

---

## Template (one test case)

- **Test Case ID:** CONTACT-01
- **Title:** Submit contact form with valid data
- **Pre-condition:** Application running locally at `http://localhost:3000` and contact page available at `/contact`.
- **Test Steps:**
  1. Navigate to `/contact`.
  2. Enter `Alice` in the Name field.
  3. Enter `alice@example.com` in the Email field.
  4. Enter `Hello` in the Message field.
  5. Click the `Submit` button.
- **Expected Result:** The form POSTs to `/api/contact` and the UI shows a success message (e.g., "Thank you").
- **Test Data:**
  - name: `Alice`
  - email: `alice@example.com`
  - message: `Hello`
- **Actual Result:** (Record what happened during the test)
- **Status:** (Not executed / Passed / Failed / Blocked)
- **Comments:** (Any additional notes, environment, screenshots, logs)

---

## Field Guidance

- **Test Case ID:** Use a short prefix for the area (e.g., `CONTACT`) + a 2-digit number. Keep IDs unique.
- **Title:** One-line summary of the intent.
- **Pre-condition:** Any setup required before steps (logged in, mock server running, route available).
- **Test Steps:** Numbered, actionable steps a tester can follow without extra context.
- **Expected Result:** Clear, verifiable outcome. Include both backend and UI expectations if applicable.
- **Test Data:** Concrete values to use. For automated tests, these are the payloads asserted in intercepts/mocks.
- **Actual Result:** Filled after execution; include precise error messages or screenshots links if failing.
- **Status:** Use a small controlled vocabulary: `Not executed`, `Passed`, `Failed`, `Blocked`.
- **Comments:** Reproduction notes, environment (browser/version), or links to related issues/PRs.

## Example (filled)

- **Test Case ID:** CONTACT-02
- **Title:** Show validation errors when fields empty
- **Pre-condition:** Contact page open.
- **Test Steps:**
  1. Navigate to `/contact`.
  2. Leave all fields empty.
  3. Click `Submit`.
- **Expected Result:** Validation messages appear for Name, Email and Message (e.g., "Name is required"). No network request is sent.
- **Test Data:** N/A
- **Actual Result:** Name and Email validation messages appeared; Message validation missing (replace with observed behavior).
- **Status:** Failed
- **Comments:** Message validation not shown; file a bug and link issue #12.

---

## Where to add tests in this repo

- Manual/visible examples: `QA/test_cases/` (this file and additional examples).
- Unit tests: `tests/` or `src/__tests__/` using Jest + React Testing Library.
- E2E tests: `cypress/e2e/` with Cypress. Keep at least one happy-path and one failure path per flow.

## Quick tips for maintainers

- Keep one test case per template block; use clear IDs and update `Actual Result` + `Status` after each run.
- Reference test case IDs in bug reports and PR descriptions to connect coverage to issues.
- Prefer deterministic test data and mocks for automated tests.

---

If you want, I can add a few real example test files (Jest + Cypress) in the repo next.
