```javascript
import isEqual from 'lodash.isequal'; // Or a custom deep comparison function

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(prevProps.data, props.data)) {
      console.log('Data changed!');
    }
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```