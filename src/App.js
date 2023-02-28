import React, { useState, useEffect } from "react";
import StoreOpCard from "./StoreOpCard.js";

function Main() {
	const [storeHoursData, setStoreHoursData] = useState(Object);
	

	
	useEffect(() => {
		getStoreHoursData();
	});

	var getStoreHoursUrl = `https://82wrmo39r3.execute-api.us-east-2.amazonaws.com/default/-hoursofop-list`;
  

	const getStoreHoursData = async () => {
		const response = await fetch(getStoreHoursUrl);
		const jsonData = await response.json()
		if (jsonData && jsonData.message !== "Not Found") {
      const displayResult = JSON.parse(jsonData.body).Items
      console.log(displayResult)
     // console.log(JSON.parse(jsonData.body).Items)

			setStoreHoursData(JSON.parse(jsonData.body).Items);
		//	console.log(jsonData.body.Items)
		}
		else {
			setStoreHoursData({})
		}
	};
	
	return (
		<div>
			<StoreOpCard storeHoursData={storeHoursData} />
		</div>
	);
}

export default App;
