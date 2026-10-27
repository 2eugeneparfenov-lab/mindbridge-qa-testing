# TC-008 - Search—No Results Returned for Unrecognized Query

> **Jira key:** `SCRUM-T19` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T19` |
| Original title | TC-008 - Search—No Results Returned for Unrecognized Query |
| Source folder | `/Course Catalogue & Search` |
| Original priority | **High** |
| Suggested test category | Negative / Search Validation |
| Automation suitability | Yes - stable negative search |

### Objective

**Proposed based on the Jira title:** An unrecognized query returns an appropriate empty result state.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** Search control is available.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open the course catalog. | Catalog and search control are visible. |
| 2 | Enter an unlikely search query with no matching course titles. | Query is accepted. |
| 3 | Submit the search. | Search completes without an application error. |
| 4 | Review results and empty-state message. | No unrelated matches appear; the user receives a clear no-results state. |

## Final expected result (proposed)

An unrecognized query returns an appropriate empty result state.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
