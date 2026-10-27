# TC-008 - User Dashboard: Loads With Correct User Data

> **Jira key:** `SCRUM-T8` · **Source status:** Draft · **Portfolio status:** Draft / Not executed

## Source details

| Field | Value |
|---|---|
| Jira test case | `SCRUM-T8` |
| Original title | TC-008 - User Dashboard: Loads With Correct User Data |
| Source folder | `/Smoke Pack` |
| Original priority | **High** |
| Suggested test category | Smoke / UI-Data Validation |
| Automation suitability | Conditional - requires stable fixture |

### Objective

Dashboard greeting, Recent activity, and Grades all show the correct user 
data.

### Preconditions

- **Source precondition:** You completed the two-course checkout setup in the lab instructions so this 
user has enrolments and payment history.
- **Suggested preparation:** A user account with expected enrollments, activity and grades has been prepared.

## Proposed test procedure

The exported record contains **no step-by-step instructions, test data or expected-result entries**.
The following steps and assertions were developed from its title/objective and must be reviewed
against the live application and acceptance criteria before marking this case ready for execution.

| Step | Action | Expected observation |
|:---:|---|---|
| 1 | Sign in with the prepared user. | User successfully signs in. |
| 2 | Navigate to the dashboard. | Dashboard is displayed. |
| 3 | Compare the greeting, recent activity and grades with the seeded test-account data. | Shown user information and educational records match the known fixture. |

## Final expected result (proposed)

Dashboard displays the correct user's greeting, activity and grades.

## Execution evidence

- **Execution status:** Not run (the export contains no test runs).
- **Actual result:** Not yet recorded.
- **Defect link:** Add Jira issue if a defect is found.
- **Evidence:** Add screenshots, logs, API captures or automation report after execution.
- **Environment / build:** To be recorded at execution time.

---
*Source: user-supplied `atm-exporter.xlsx`; the underlying Jira key, title, folder,
priority and any source objective/precondition are preserved above.*
