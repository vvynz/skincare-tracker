import React, { useState, useEffect } from "react";

import NavBar from "./Components/NavBar";
import ItemForm from "./Components/ItemForm";
import WishlistForm from "./Components/WishlistForm";

import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { Toaster } from "react-hot-toast";

import "./Styles/App.scss";

function App() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );
  const [formData, setFormData] = useState({
    brand: "",
    itemName: "",
    dateOpened: "",
    expiryDate: "",
    repurchase: false,
  });
  const [editFormData, setEditFormData] = useState({
    brand: "",
    itemName: "",
    dateOpened: "",
    expiryDate: "",
    repurchase: false,
  });
  const [editItemID, setEditItemID] = useState(null);

  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [items, wishlist]);

  return (
    <div className="App">
      <Toaster
        toastOptions={{
          error: {
            icon: <WarningIcon w={8} h={8} color="purple.200" />,
            duration: 5000,
            style: {
              // border: "1px solid white",
              borderRadius: "10px",
              // background: "#333",
              color: "#333",
              fontSize: "16px",
              marginTop: "20px",
            },
          },
        }}
      />
      <NavBar />
      <Tabs className="tabs" variant="enclosed" colorScheme="purple">
        <TabList>
          <Tab>Currently In Use</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ItemForm
              items={items}
              setItems={setItems}
              formData={formData}
              setFormData={setFormData}
              editFormData={editFormData}
              setEditFormData={setEditFormData}
              editItemID={editItemID}
              setEditItemID={setEditItemID}
            />
          </TabPanel>
          <TabPanel>
            <WishlistForm
              wishlist={wishlist}
              setWishlist={setWishlist}
              editItemID={editItemID}
              setEditItemID={setEditItemID}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
