export default function useAppData() {
  const appData = {};

  const generateDate = () => {
    const date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
  };
  appData.generateDate = generateDate;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  appData.getDaysInMonth = getDaysInMonth;

  const search = (state, term) => {
    let output = [];

    for (let i of state) {
      if (
        i.brand.toLowerCase().includes(term.toLowerCase()) ||
        i.itemName.toLowerCase().includes(term.toLowerCase())
      ) {
        output.push(i);
      }
    }
    return output;
  };
  appData.search = search;

  return appData;
}
