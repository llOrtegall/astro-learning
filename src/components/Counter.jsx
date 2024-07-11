import { useState } from "preact/hooks";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button class="px-4 hover:text-blue-600 py-2 border text-xl" onClick={() => setCount(count + 1)}>+</button>
      <button class="px-4 hover:text-blue-600 py-2 border text-xl" onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}