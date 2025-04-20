export const filterData = (data, keyword) => {
  if (keyword.trim() === "") {
    return [];
  }

  return data.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );
};
