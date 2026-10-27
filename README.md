# MindBridge Education — QA Testing & Automation

**Manual Testing · Test Case Design · Defect Reporting · Playwright · SQL · Regression Analysis**

## Project Overview

MindBridge Education is a training web application used to practice end-to-end quality assurance of an online learning platform. The project covers account access, course discovery, enrollment/cart management, checkout, and account settings.

This repository documents my hands-on QA work: designing test cases, investigating defects, validating test data with SQL, reviewing regression logs, and automating important user flows with Playwright.

> **Project type:** Educational / portfolio QA project. Test evidence is labeled to distinguish executed tests, test designs, and training-data examples. The simulated Jira/PR workflow used in the course is not presented as a public GitHub pull request.

## Tools & Techniques

| Area | Tools / techniques |
|---|---|
| Manual QA | Functional, smoke, regression, exploratory, and negative testing |
| Test design | Test cases, preconditions, test steps, expected outcomes |
| Defect management | Jira / Zephyr-style workflow, severity & priority, reproduction steps |
| Automation | Playwright, JavaScript, locators, assertions |
| Database validation | SQL (`SELECT`, `WHERE`, `JOIN`), test-data verification |
| Investigation | Browser DevTools, error logs, root-cause analysis, 5 Whys |
| Version control | Git; local PR / ticket traceability exercise |

## Portfolio Highlights

| Deliverable | Scope / result |
|---|---|
| Test-case inventory | **35 cases** exported from Jira; **16 cases** selected and expanded for the portfolio |
| Test-case execution | The exported cases were **Draft**; they are not reported as passed |
| Defect documentation | **4 reports**, with the evidence/source status stated individually |
| Regression-log analysis | **14 results:** 5 passed, 9 failed; **7 TimeoutError occurrences** identified in the provided nightly logs |
| Playwright work | Successful login and account-update happy-path scenarios developed during coursework |
| SQL validation | Confirmed the expected test user exists before UI automation |

> **Note:** The 14-test regression-log dataset and the 16 curated Jira test cases are different sources. They must not be combined into one pass-rate claim.

## Test Case Documentation

The curated cases cover login/logout, course search and filtering, catalog browsing, enrollment/cart interactions, and checkout/payment scenarios. The collection includes positive, negative, smoke, and regression-oriented test designs.

**Browse the test cases:** [Test Case Index](test-cases/README.md)

All 16 case documents retain their original `SCRUM-T...` Jira keys and include proposed steps and expected observations. Because the source Jira export contained draft records without execution evidence, **the step-by-step procedures are portfolio-ready drafts**, to be checked against requirements before execution.

## Defect Reports

**Browse the reports:** [Bug Report Index](bug-reports/README.md)

| Report | Issue | Evidence classification |
|---|---|---|
| [MB-QA-001](bug-reports/mb-qa-001-enrollment-date-format-mismatch.md) | Enrollment date-format validation mismatch | Based on my course RCA / browser evidence |
| [MB-QA-002](bug-reports/mb-qa-002-checkout-payment-sql-timeout.md) | Payment SQL connection timeout | Investigation of supplied training server log; independent reproduction not claimed |
| [MB-QA-003](bug-reports/mb-qa-003-mobile-catalog-responsive-overlap.md) | Mobile catalog layout obstruction | Based on my test coverage observations |
| [MB-QA-004](bug-reports/mb-qa-004-advanced-filter-includes-beginner-courses.md) | Incorrect course-level filtering | Seeded training backlog example; independent reproduction pending |

Reports describe environment, preconditions, reproduction steps, expected vs. actual behavior, impact, proposed severity/priority, and evidence limitations.

## Playwright Automation

Playwright exercises in this project cover:

- **Successful login (happy path):** valid credentials should lead to the dashboard.
- **Account update (happy path):** log in, navigate to Account, update `Region` to `APAC`, save, and verify the success confirmation.

Additional scenarios considered for expansion are invalid-password rejection and persistence of the saved region after a page reload. They should be marked as implemented only after their scripts and passing results are added.

To execute Playwright scripts **after adding your actual automation project files and dependencies**, run from the directory containing `package.json` and the Playwright configuration:

```bash
npm install
npx playwright install chromium
npx playwright test
```

The test application must be running; coursework used `http://localhost:3000`. Do not commit real passwords or tokens: keep credentials in environment variables for any publicly shared runnable tests.

## SQL Data Validation

Before running the account-update automation, I checked that the test user was present in the database:

```sql
SELECT id, email, name, role
FROM users
WHERE id = '101';
```

This query returned the expected test-user record, helping distinguish application defects from missing test data. SQL scripts and output evidence can be added under `sql/` once uploaded to the repository.

## Regression Analysis

The supplied nightly test-results exercise contained **14 executed tests**, including **5 passes and 9 failures**. The corresponding training log contained **7 occurrences of `TimeoutError`**, which I highlighted as a recurring failure pattern for investigation. The counts describe that training dataset, **not** a live CI pipeline or the exported Jira test-case set.

## Repository Structure

```text
mindbridge-qa-testing/
├── README.md
├── test-cases/
│   ├── README.md
│   ├── smoke/                # 5 selected cases
│   └── functional/           # 11 selected cases
├── bug-reports/
│   ├── README.md
│   └── mb-qa-00*.md          # 4 documented cases
└── docs/
    ├── test-case-index.csv
    ├── test-execution-template.csv
    ├── cv-alignment.md
    └── review-checklist.md
```

The sections on Playwright and SQL document related coursework; **add the actual `.spec.js` and `.sql` files to this repository** before presenting them as included source-code artifacts.

## What This Project Demonstrates

- Translating feature requirements into structured, traceable QA test cases.
- Combining manual QA with basic Playwright automation and SQL validation.
- Writing reproducible defect reports and assessing user/business impact.
- Analyzing regression data and communicating risks without inventing results.

---

**Portfolio note:** This is an educational project. Results, test designs, personally observed findings, and seeded examples are explicitly distinguished to keep the evidence transparent.

