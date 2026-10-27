# TC-019 - Search—Special Characters Handled Gracefully

> **Jira key:** `SCRUM-T30` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T30` |
| Original title | TC-019 - Search—Special Characters Handled Gracefully |
| Source folder | `/Course Catalogue & Search` |
| Original priority | **Low** |
| Suggested test category | Negative / Input Robustness |
| Automation suitability | Yes - input robustness |

### Objective

**Proposed based on the Jira title:** Special-character searches are handled gracefully without an unhandled error.

### Preconditions

- **Source precondition:** Not specified in the Jira export.
- **Suggested preparation:** Search is available.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Open course search. | Search is displayed. |
| 2 | Enter a harmless special-character-only query such as '@@@%%'. | Query is accepted or validated with clear feedback. |
| 3 | Submit and inspect results. | Search handles it without an unhandled crash. |
| 4 | Check for escaped text and unexpected application errors. | No internal error or broken rendering is exposed. |

## Final expected result (proposed)

Special-character searches are handled gracefully without an unhandled error.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
