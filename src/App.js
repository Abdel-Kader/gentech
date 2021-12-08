import { useSelector, useDispatch } from "react-redux";
import { add } from "./features/societeSlice";
function App() {
	const societe = useSelector((state) => state.societe.nom);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>Gentech {societe}</h1>
			<button
				onClick={() => {
					dispatch(add("salut"));
				}}
			>
				Click
			</button>
		</div>
	);
}

export default App;
