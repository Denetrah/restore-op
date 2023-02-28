import React, { useState, useEffect } from "react";
import StoreOpPull from "./storeOpPull.js";

function Main() {
	const [hoursOpData, sethoursOpData] = useState(false);
	

	
	useEffect(() => {
		gethoursOpData();
	});

	var getStoreHoursUrl = ``

	const gethoursOpData = async () => {
		const response = await fetch(getStoreHoursUrl);
		const jsonData = await response.json()
		if (jsonData && jsonData.message !== "Not Found") {
      const displayResult = JSON.parse(jsonData.body).Items
      console.log(displayResult)
  

			sethoursOpData(JSON.parse(jsonData.body).Items);
	
		}
		else {
			sethoursOpData({})
		}
	};
	
	return (
		<div>
			< StoreOpPull hoursOpData={hoursOpData} />
		</div>
	);
}

export default Main;