import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay = 300) => {
    const [debounced, setDebounce] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebounce(value),delay);
        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])
  return debounced;
}

export default useDebounce