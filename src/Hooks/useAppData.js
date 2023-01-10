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

  const expiringItems = (state) => {
    const today = generateDate();
    const d = Number(today.substring(today.length - 2));
    const m = Number(today.substring(today.length - 5, today.length - 3));
    const y = Number(today.substring(0, 4));
    let daysInCurrentMonth = getDaysInMonth(y, m, 0);

    let result = [];
    let expiredItems = [];

    state.map((item) => {
      const expDay = Number(
        item.expiryDate.substring(item.expiryDate.length - 2)
      );
      const month = Number(
        item.expiryDate.substring(
          item.expiryDate.length - 5,
          item.expiryDate.length - 3
        )
      );
      const year = Number(item.expiryDate.substring(0, 4));

      // if the current month matches the item's expiry month
      let daysRemaining;
      let daysLeftInCurrentMon = daysInCurrentMonth - d;
      let daysExpired;

      if (y === year && m === month) {
        //calculate the num of items expiring this month
        daysRemaining = expDay - d;
      }

      if (y === year && m < month) {
        // calculate the num of items expiring if their expiry date is within the next month

        daysRemaining = daysLeftInCurrentMon + expDay;
      }

      if (y === year && m > month) {
        // calculate the num of items that have expired in the past month
        let daysInPrevMonth = getDaysInMonth(y, month, 0);
        daysExpired = Math.abs(daysInPrevMonth) * -1 + expDay - d;
      }
      // console.log("days expired", daysExpired)
      // console.log("d remaining", daysRemaining)

      return daysExpired < 0
        ? expiredItems.push(item.itemName)
        : daysRemaining < 0 
        ? expiredItems.push(item.itemName) 
        : daysRemaining <= 30 && daysRemaining > 0
        ? result.push(item.itemName)
        : null;
    });
    // console.log("results arr =", result);
    // console.log("expItems arr", expiredItems);

    return expiredItems.length === 1 && result.length === 1
      ? `${expiredItems.join(" ")} has expired! ${result.join(
          " "
        )} is expiring soon!`
      : expiredItems.length > 1 && result.length === 1
      ? `${expiredItems.join(", ")} have expired! ${result.join(
          ", "
        )} is expiring soon!`
      : expiredItems.length > 1 && result.length > 1
      ? `${expiredItems.join(", ")} have expired! ${result.join(
          ", "
        )} are expiring soon!`
      : expiredItems.length === 1
      ? `${expiredItems.join(" ")} has expired!`
      : expiredItems.length > 1
      ? `${expiredItems.join(", ")} have expired!`
      : result.length === 1
      ? `${result.join(" ")} is expiring soon!`
      : result.length > 1
      ? `${result.join(", ")} are expiring soon!`
      : "No notifications at this time";
  };
  appData.expiringItems = expiringItems;

  return appData;
}
