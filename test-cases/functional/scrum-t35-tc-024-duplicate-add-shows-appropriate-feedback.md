# TC-024 - Duplicate Add Shows Appropriate Feedback

> **Jira key:** `SCRUM-T35` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T35` |
| Original title | TC-024 - Duplicate Add Shows Appropriate Feedback |
| Source folder | `/Enrollment & Cart` |
| Original priority | **Normal** |
| Suggested test category | Negative / State Handling / Regression |
| Automation suitability | Conditional - business rule needs confirmation |

### Objective

**Proposed based on the Jira title:** Duplicate-add handling provides appropriate feedback and a consistent list state; confirm exact expected behavior against requirements.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** An identified course has already been added.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the course already in the enrollment list. | Course is available for inspection. |
| 2 | Attempt to add the same course again. | Second add attempt is processed safely. |
| 3 | Inspect user feedback and cart/list state. | Application responds according to the product's duplicate-add acceptance criterion; no silent inconsistent state occurs. |

## Final expected result (proposed)

Duplicate-add handling provides appropriate feedback and a consistent list state; confirm exact expected behavior against requirements.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
