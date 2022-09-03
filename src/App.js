import NavBar from "./Components/NavBar";
import ItemForm from "./Components/ItemForm";
import WishlistForm from "./Components/WishlistForm";

import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { Toaster } from "react-hot-toast";

import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Toaster 
      toastOptions={{
        error: {
          icon: <WarningIcon w={6} h={6} color="orange.300" />,
          duration: 5000,
          style: {
            border: "1px solid white",
            // background: "#ddbbff",
            color: "black"
          }
        }
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
            <ItemForm />
          </TabPanel>
          <TabPanel>
            <WishlistForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
