import { useState } from "react";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
	const [activePage, setActivePage] = useState("home");

	const handleItemClick = (e, { name }) => setActivePage(name);

	return (
		<Menu pointing>
			<Menu.Item
				name="home"
				active={activePage === "home"}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name="messages"
				active={activePage === "messages"}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name="friends"
				active={activePage === "friends"}
				onClick={handleItemClick}
			/>
		</Menu>
	);
};
export default Navbar;
