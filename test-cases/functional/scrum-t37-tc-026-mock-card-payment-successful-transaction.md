# TC-026 - Mock Card Payment—Successful Transaction

> **Jira key:** `SCRUM-T37` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T37` |
| Original title | TC-026 - Mock Card Payment—Successful Transaction |
| Source folder | `/Checkout & Payment` |
| Original priority | **High** |
| Suggested test category | Positive / Checkout / End-to-End |
| Automation suitability | Yes - core happy path |

### Objective

**Proposed based on the Jira title:** Mock card payment completes successfully and a confirmation is shown.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** Valid test course in cart; sandbox mock-payment credentials available.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open checkout with the eligible course. | Checkout form is available. |
| 2 | Enter valid test billing and mock card data. | Form accepts valid mock-payment test data. |
| 3 | Confirm displayed order summary. | Summary matches selected course. |
| 4 | Submit mock payment and inspect confirmation. | Successful mock transaction is confirmed with appropriate order/enrollment result. |

## Final expected result (proposed)

Mock card payment completes successfully and a confirmation is shown.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
