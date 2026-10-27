# TC-014 - Filter by Category Returns Correct Subset

> **Jira key:** `SCRUM-T25` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T25` |
| Original title | TC-014 - Filter by Category Returns Correct Subset |
| Source folder | `/Course Catalogue & Search` |
| Original priority | **Normal** |
| Suggested test category | Functional / Filtering / Regression |
| Automation suitability | Yes - stable categories |

### Objective

**Proposed based on the Jira title:** Category filter returns the correct subset of courses.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** Catalog has courses in at least two known categories.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the catalog. | Filter is visible. |
| 2 | Select a known category filter. | Results update to selected category. |
| 3 | Inspect each visible result. | Each displayed result belongs to the selected category. |
| 4 | Clear the filter. | Full expected result set is restored after clearing. |

## Final expected result (proposed)

Category filter returns the correct subset of courses.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
