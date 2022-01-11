import { useState } from "react";
import moment from "moment";

const Clock = () => {
	const [currentTime, setCurrentTime] = useState(Date.now());

	// Update time every second
	setInterval(() => {
		setCurrentTime(Date.now());
	}, 1000);

	return <h2>{moment(currentTime).format("MMMM Do YYYY, h:mm:ss a")}</h2>;
};

export default Clock;
