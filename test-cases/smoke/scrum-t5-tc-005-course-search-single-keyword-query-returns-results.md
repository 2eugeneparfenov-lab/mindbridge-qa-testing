# TC-005 - Course Search: Single Keyword Query Returns Results

> **Jira key:** `SCRUM-T5` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T5` |
| Original title | TC-005 - Course Search: Single Keyword Query Returns Results |
| Source folder | `/Smoke Pack` |
| Original priority | **High** |
| Suggested test category | Smoke / Search / Regression |
| Automation suitability | Yes - stable search fixture |

### Objective

A single keyword search returns at least one matching course.

### Preconditions

- **Source precondition:** The catalog or search control is available.
- **Suggested preparation:** At least one matching course is known in the test catalog.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Navigate to course catalog / search. | Search interface is available. |
| 2 | Enter a known course keyword into search. | Keyword is entered. |
| 3 | Execute the search. | A results list is displayed. |
| 4 | Check the result names against the query. | At least one result matches the known keyword. |

## Final expected result (proposed)

A valid single-keyword search returns relevant course results.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
