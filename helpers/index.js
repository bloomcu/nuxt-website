export const appendToSet = (str, set) => {
  if (set.trim().length) {
    set += ` ${str}`;
  } else {
    set = `${str}`;
  }

  return set;
};
