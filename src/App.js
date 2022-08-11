import NavBar from "./Components/NavBar";
import ItemForm from "./Components/ItemForm";
import Wishlist from "./Components/Wishlist";

import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
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
            <Wishlist />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
