import { useState } from "react";
import moment from "moment";

const Clock = () => {
	const [currentTime, setCurrentTime] = useState(Date.now());

	// Update time every second
	setInterval(() => {
		setCurrentTime(Date.now());
	}, 1000);

	return moment(currentTime).format("MMM Do YYYY, h:mm:ss A");
};

export default Clock;
