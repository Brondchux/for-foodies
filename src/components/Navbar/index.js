import { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";

const Navbar = () => {
	const [activePage, setActivePage] = useState("home");

	const handleItemClick = (e, { name }) => setActivePage(name);

	return (
		<Menu fluid widths={4} pointing stackable>
			<Menu.Item
				name="home"
				active={activePage === "home"}
				onClick={handleItemClick}
			>
				<Icon name="user" />
				Foodie
			</Menu.Item>
			<Menu.Item
				name="newFood"
				active={activePage === "newFood"}
				onClick={handleItemClick}
			>
				<Icon name="food" />
				New Food
			</Menu.Item>
			<Menu.Item
				name="savedFoods"
				active={activePage === "savedFoods"}
				onClick={handleItemClick}
			>
				<Icon name="list" />
				Saved Foods
			</Menu.Item>
			<Menu.Item
				name="foodLogs"
				active={activePage === "foodLogs"}
				onClick={handleItemClick}
			>
				<Icon name="calendar alternate" />
				Food Logs
			</Menu.Item>
		</Menu>
	);
};
export default Navbar;
