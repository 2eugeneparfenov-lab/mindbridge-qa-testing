# TC-002 - User Login: Valid Credentials

> **Jira key:** `SCRUM-T2` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T2` |
| Original title | TC-002 - User Login: Valid Credentials |
| Source folder | `/Smoke Pack` |
| Original priority | **High** |
| Suggested test category | Smoke / Positive / Regression |
| Automation suitability | Yes - critical auth flow |

### Objective

Valid registered email and password authenticate successfully.

### Preconditions

- **Source precondition:** A registered MindBridge account exists.
- **Suggested preparation:** An active test account with valid credentials exists.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the MindBridge login page. | Login form is displayed. |
| 2 | Enter a valid test-account email and password. | Valid credentials are accepted by the form. |
| 3 | Select Sign in. | An authenticated session is created and the dashboard is displayed. |

## Final expected result (proposed)

User successfully authenticates and reaches their dashboard.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
