import MenuItem from './MenuItem/MenuItem'
import './style.scss'

const MenuList = ({ pizzas }) => {
	return (
		<ul className="menu-list">
			{pizzas.map((pizza) => (
				<MenuItem key={pizza.id} pizza={pizza} />
			))}
		</ul>
	);
};

export default MenuList;