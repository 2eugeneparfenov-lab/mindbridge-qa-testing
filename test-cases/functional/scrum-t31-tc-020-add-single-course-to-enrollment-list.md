# TC-020 - Add Single Course to Enrollment List

> **Jira key:** `SCRUM-T31` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T31` |
| Original title | TC-020 - Add Single Course to Enrollment List |
| Source folder | `/Enrollment & Cart` |
| Original priority | **High** |
| Suggested test category | Functional / Enrollment / Regression |
| Automation suitability | Yes - critical cart flow |

### Objective

**Proposed based on the Jira title:** One course is added to the enrollment list correctly.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** A test course is available and not already added.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open a known course detail page. | Course detail is displayed. |
| 2 | Select the control to add the course to the enrollment list. | Application provides the appropriate add confirmation. |
| 3 | Open the enrollment list/cart. | Selected course appears in the list with the expected count/state. |

## Final expected result (proposed)

One course is added to the enrollment list correctly.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
