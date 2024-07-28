import { useEffect, useState } from 'react'
import MenuList from '../../components/MenuList/MenuList'
import { pizzas } from '../../data/mockData'
import { usePizzaName } from '../../contexts/PizzaNameContext'
import './style.scss'

const MenuPage = () => {
	const [pizzasList, setPizzasList] = useState([]);
	const { pizzaName } = usePizzaName();

	useEffect(() => {
		if (pizzaName) {
			const filteredPizzasList = pizzas.filter((pizza) =>
				pizza.name.toLowerCase().includes(pizzaName.toLowerCase())
			);
			setPizzasList(filteredPizzasList);
		} else {
			setPizzasList(pizzas);
		}
	}, [pizzaName]);

	return <>{pizzasList.length ? <MenuList pizzas={pizzasList} /> : null}</>;
};

export default MenuPage;