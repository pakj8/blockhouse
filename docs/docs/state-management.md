---
id: state-management
title: State Management Approach
---

For state management, this project uses **React Redux** along with Redux Toolkit because:

- **Predictable State:** Redux provides a single source of truth for the app's state.
- **Scalability:** Redux Toolkit simplifies slice creation and async actions.
- **Integration:** It integrates well with Next.js for server/client-side rendering.
- **Maintainability:** Centralized state management makes the code easier to debug and extend.

All cryptocurrency data, along with loading and error states, is managed through Redux.
