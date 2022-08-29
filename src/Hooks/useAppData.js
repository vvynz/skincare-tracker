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

  return appData;
}
