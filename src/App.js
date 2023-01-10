import React, { useState, useEffect } from "react";
import StoreOpPull from "./StoreOpPull";


function App() {
    const [hoursOpData, sethoursOpData] = useState([]);

    useEffect(() => {
        gethoursOpData();
    }, []);

    var getStoreHoursUrl = `https://82wrmo39r3.execute-api.us-east-2.amazonaws.com/default/-hoursofop-list`;

    const gethoursOpData = async () => {
        const response = await fetch(getStoreHoursUrl);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
            sethoursOpData(JSON.parse(jsonData.body).Items);
        } else {
            sethoursOpData([]);
        }
    };

    console.log(hoursOpData);
	
		
	return (
		<div>
			<StoreOpPull hoursOpData={hoursOpData} />

			

		</div>
	);
}

export default App;
