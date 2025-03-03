---
id: challenges-solutions
title: Challenges & Solutions
---

### API Rate Limits and Error Handling

- **Challenge:** Handling potential API rate limits or downtime.
- **Solution:** Implemented error handling in the Redux slice to display error messages when API calls fail.

### State Synchronization

- **Challenge:** Ensuring the UI reflects up-to-date data on manual refresh.
- **Solution:** The "Refresh" button re-dispatches the fetch action to update the state immediately.

### UI Responsiveness

- **Challenge:** Making sure the dashboard looks good on different devices.
- **Solution:** Tailwind CSS utility classes were used to create a responsive layout.
