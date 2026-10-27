# TC-003 - User Login: Invalid Password Rejection

> **Jira key:** `SCRUM-T3` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T3` |
| Original title | TC-003 - User Login: Invalid Password Rejection |
| Source folder | `/Smoke Pack` |
| Original priority | **High** |
| Suggested test category | Negative / Authentication / Regression |
| Automation suitability | Yes - stable negative scenario |

### Objective

Valid email with incorrect password is rejected with an error message.

### Preconditions

- **Source precondition:** A registered MindBridge account exists.
- **Suggested preparation:** A registered test user exists.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the login page. | Login form is displayed. |
| 2 | Enter the registered email and a deliberately incorrect password. | Invalid password is accepted as input for the validation attempt. |
| 3 | Select Sign in and inspect the response. | An informative error is shown and no authenticated session is created. |
| 4 | Attempt to access an authenticated-only page. | The protected page remains inaccessible. |

## Final expected result (proposed)

Incorrect password is rejected; no authenticated session is granted.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
