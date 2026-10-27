# TC-021 - Remove Course from Enrollment List

> **Jira key:** `SCRUM-T32` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T32` |
| Original title | TC-021 - Remove Course from Enrollment List |
| Source folder | `/Enrollment & Cart` |
| Original priority | **Normal** |
| Suggested test category | Functional / Enrollment / Regression |
| Automation suitability | Yes - stable cart flow |

### Objective

**Proposed based on the Jira title:** Removing a course updates the enrollment list correctly.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** Test enrollment/cart list contains at least one course.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the enrollment list/cart. | Existing item is visible. |
| 2 | Select Remove for one item. | Selected item is removed. |
| 3 | Inspect the remaining items and count. | Selected item is absent and count/list state is updated. |

## Final expected result (proposed)

Removing a course updates the enrollment list correctly.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
