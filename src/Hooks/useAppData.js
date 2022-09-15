import React from "react";
import { nanoid } from "nanoid";
import { useDisclosure } from "@chakra-ui/react";

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
    term = term.toLowerCase();
    let output = [];

    for (let i of state) {
      if (
        i.brand.toLowerCase().includes(term) ||
        i.itemName.toLowerCase().includes(term)
      ) {
        output.push(i);
      }
    }
    return output;
  };
  appData.search = search;

  return appData;
}
