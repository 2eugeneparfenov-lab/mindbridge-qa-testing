# TC-013 - Browse Catalog—All Courses Display

> **Jira key:** `SCRUM-T24` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T24` |
| Original title | TC-013 - Browse Catalog—All Courses Display |
| Source folder | `/Course Catalogue & Search` |
| Original priority | **Normal** |
| Suggested test category | Functional / Catalog / Regression |
| Automation suitability | Conditional - stable catalog data |

### Objective

**Proposed based on the Jira title:** Catalog browsing displays available courses correctly.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** The catalog contains known seeded courses.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the course catalog. | Catalog is displayed. |
| 2 | Browse the course list. | Expected catalog items are shown. |
| 3 | Confirm available course cards are rendered with essential fields. | Course labels/details are readable and linked as designed. |
| 4 | If pagination exists, inspect further pages. | Navigation does not silently hide expected seeded courses. |

## Final expected result (proposed)

Catalog browsing displays available courses correctly.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
