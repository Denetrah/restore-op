// import React from "react";

function StoreOpCard({ storeHoursData }) {
	console.log(storeHoursData)
    let content=''
	Array.from(storeHoursData).forEach(storeHour => {
       content += `<div className="datacontainer">
		    <div className="dataitem">Day ${storeHour.day}  </div>
			<div className="dataitem">Open :  ${storeHour.open}</div>
			<div className="dataitem">Close:  ${storeHour.close}</div>
		</div>`
        })
    return content
}
export default StoreOpCard;