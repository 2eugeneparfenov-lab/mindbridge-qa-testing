# TC-025 - Proceed to Checkout From Cart

> **Jira key:** `SCRUM-T36` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T36` |
| Original title | TC-025 - Proceed to Checkout From Cart |
| Source folder | `/Checkout & Payment` |
| Original priority | **High** |
| Suggested test category | Functional / Checkout / Smoke / Regression |
| Automation suitability | Yes - critical flow |

### Objective

**Proposed based on the Jira title:** User can reach checkout from a valid cart without losing selected course details.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** Cart/enrollment list has an eligible course.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the enrollment list/cart. | Eligible cart is displayed. |
| 2 | Select Proceed to Checkout. | Navigation proceeds to checkout. |
| 3 | Verify checkout view is displayed and chosen course information is retained. | Checkout view shows the selected course and expected order context. |

## Final expected result (proposed)

User can reach checkout from a valid cart without losing selected course details.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
