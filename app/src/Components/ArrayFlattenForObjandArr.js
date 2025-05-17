const flattenMixed = (input) => {
    const result = [];

    const process = (item) => {
        if (Array.isArray(item)) {
            for (const subItem of item) {
                process(subItem);
            }
        } else if (item && typeof item === 'object') {
            const { children, ...rest } = item;
            result.push(rest);

            if (Array.isArray(children)) {
                process(children);
            }
        }
    };

    process(input);
    return result;
};

const flattenNumbers = (input) => {
  const result = [];

  const flatten = (arr) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  };

  flatten(input);
  return result;
};

useEffect(() => {
    const result = flattenMixed(categoryTree); // or any array-like structure
    setFlattenArray(result);
}, []);
