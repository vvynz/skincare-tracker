import NavBar from "./Components/NavBar";
import ItemForm from "./Components/ItemForm";

import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Tabs>
        <TabList>
          <Tab>Currently In Use</Tab>
          <Tab>Wishlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ItemForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
