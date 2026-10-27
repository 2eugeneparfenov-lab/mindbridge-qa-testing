# TC-005 - Logout—Session Termination

> **Jira key:** `SCRUM-T16` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T16` |
| Original title | TC-005 - Logout—Session Termination |
| Source folder | `/Authentication` |
| Original priority | **High** |
| Suggested test category | Functional / Authentication / Regression |
| Automation suitability | Yes - critical security flow |

### Objective

**Proposed based on the Jira title:** Logout ends the authenticated session and prevents access to protected pages.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** User is signed in to MindBridge.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the account or navigation menu. | Log-out action is available. |
| 2 | Select Log out. | Session ends and user is sent to a logged-out view. |
| 3 | Try to return to a protected dashboard page. | Protected content is not accessible without re-authentication. |

## Final expected result (proposed)

Logout ends the authenticated session and prevents access to protected pages.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
