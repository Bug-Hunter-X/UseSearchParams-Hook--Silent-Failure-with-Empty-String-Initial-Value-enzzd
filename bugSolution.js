The solution is simple: always initialize `useSearchParams` with an empty array `[]`.  This ensures the hook is properly initialized and correctly updates the search parameters.  This updated code will correctly handle the initial state and any subsequent updates.
```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams([]); // Correct initialization

  // ... rest of your component
}
```
By initializing `useSearchParams` with `[]`, we ensure that any manipulations are handled correctly by the hook, avoiding silent failure.