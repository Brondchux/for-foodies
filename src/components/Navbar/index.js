import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import "./navbar.css";

const Navbar = () => {
	const [activePage, setActivePage] = useState("home");

	const handleItemClick = (e, { name }) => setActivePage(name);

	return (
		<Menu fluid widths={4} pointing stackable>
			<Menu.Item
				name="home"
				active={activePage === "home"}
				onClick={handleItemClick}
				as="div"
			>
				<Link to="/">
					<Icon name="user" />
					Foodie
				</Link>
			</Menu.Item>
			<Menu.Item
				name="newFood"
				active={activePage === "newFood"}
				onClick={handleItemClick}
				as="div"
			>
				<Link to="/new-food">
					<Icon name="food" />
					New Food
				</Link>
			</Menu.Item>
			<Menu.Item
				name="savedFoods"
				active={activePage === "savedFoods"}
				onClick={handleItemClick}
				as="div"
			>
				<Link to="/saved-foods">
					<Icon name="list" />
					Saved Foods
				</Link>
			</Menu.Item>
			<Menu.Item
				name="foodLogs"
				active={activePage === "foodLogs"}
				onClick={handleItemClick}
				as="div"
			>
				<Link to="/food-logs">
					<Icon name="calendar alternate" />
					Food Logs
				</Link>
			</Menu.Item>
		</Menu>
	);
};
export default Navbar;
