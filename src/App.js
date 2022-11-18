import React, { useState, useEffect, useMemo } from "react";

import NavBar from "./Components/NavBar";
import ItemForm from "./Components/ItemForm";
import WishlistForm from "./Components/WishlistForm";
import SearchResults from "./Components/SearchResults";

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
  const [wishlistFormData, setWishlistFormData] = useState({
    brand: "",
    itemName: "",
  });
  const [editWishlistFormData, setEditWishlistFormData] = useState({
    brand: "",
    itemName: "",
  });

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [items, wishlist]);

  const filteredResults = useMemo(() => {
    return items.filter((item) => {
      if (
        item.brand.toLowerCase().includes(query.toLowerCase()) ||
        item.itemName.toLowerCase().includes(query.toLowerCase())
      )
        return item;
    });
  }, [items, query]);

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
      <NavBar
        items={items}
        query={query}
        setQuery={setQuery}
        setResults={setResults}
      />
      <Tabs
        className="tabs"
        isFitted
        variant="enclosed"
        colorScheme="purple"
        defaultIndex={0}
      >
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Currently In Use</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SearchResults query={query} filteredResults={filteredResults} items={items} wishlist={wishlist} />
          </TabPanel>
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
              wishlistFormData={wishlistFormData}
              setWishlistFormData={setWishlistFormData}
              editWishlistFormData={editWishlistFormData}
              setEditWishlistFormData={setEditWishlistFormData}
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
