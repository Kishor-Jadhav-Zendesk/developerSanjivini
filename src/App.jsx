import { useState } from "react";

import AccordionDataRenderer from "./components/AccordionDataRenderer";
import Search from "./components/search";

import "./App.css";
import axios from "axios";

function App() {
  const [appData, setAppData] = useState([
    {
      label: "Code",
    },
    {
      label: "Document",
    },
    {
      label: "Code & Document",
    },
  ]);

  const [isDataFetchInProgress, setIsDataFetchInProgress] = useState(false);
  const [fetchErrorOccurred, setFetchErrorOccurred] = useState(false);

  const handleSearch = async (searchedValue) => {
    // Expecting following response from our backend, lets not process data on UI.
    setIsDataFetchInProgress(true);
    try {
      const response = await axios.get(
        "https://jsonblob.com/api/1210512890556964864"
      );

      setAppData(response.data?.appData || []);
      setIsDataFetchInProgress(false);
    } catch (err) {
      setIsDataFetchInProgress(false);
      setFetchErrorOccurred(true);
    }
  };

  return (
    <div className="app-container">
      <Search handleSearch={handleSearch} />
      <AccordionDataRenderer
        tabsData={appData}
        isDataFetchInProgress={isDataFetchInProgress}
        fetchErrorOccurred={fetchErrorOccurred}
      />
    </div>
  );
}

export default App;
