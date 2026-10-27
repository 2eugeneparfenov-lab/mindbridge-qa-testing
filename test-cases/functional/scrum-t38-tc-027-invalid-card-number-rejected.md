# TC-027 - Invalid Card Number Rejected

> **Jira key:** `SCRUM-T38` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T38` |
| Original title | TC-027 - Invalid Card Number Rejected |
| Source folder | `/Checkout & Payment` |
| Original priority | **High** |
| Suggested test category | Negative / Payment Validation |
| Automation suitability | Yes - core negative flow |

### Objective

**Proposed based on the Jira title:** Invalid card is rejected without a successful payment or confirmed purchase.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** A valid cart is ready; payment supports sandbox test cards.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open checkout. | Checkout form is available. |
| 2 | Enter a deliberately invalid card number (non-sensitive test data). | Invalid test card is entered. |
| 3 | Submit the checkout attempt. | Payment fails with controlled validation feedback. |
| 4 | Inspect validation and order result. | No successful purchase confirmation/enrollment is created. |

## Final expected result (proposed)

Invalid card is rejected without a successful payment or confirmed purchase.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
