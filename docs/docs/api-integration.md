---
id: api-integration
title: API Integration
---

### 2. API Integration Details (`docs/api-integration.md`)

```markdown
---
id: api-integration
title: API Integration Details
URL: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,cardano,solana"
---

The dashboard fetches live cryptocurrency prices using the CoinGecko API.

- **Endpoint Used:**
```

- **Data Handling:**
- Data is fetched using an asynchronous thunk (`fetchCryptos`) created with Redux Toolkit’s `createAsyncThunk`.
- The fetched data is stored in the Redux store and updated via actions corresponding to loading, success, and error states.
