export default function Form(props) {
	function handleKeyDown(event) {
		console.log(event.key);

		if (props.notAllowed.includes(event.key.toLowerCase())) {
			event.preventDefault();
			console.log("Caracter prohibido ingresado!!", props.notAllowed);
		}
	}

	return (
		<form>
			<label htmlFor="noVowels">{props.text}</label>
			<input onKeyDown={handleKeyDown} type="text" name="noVowels" />
		</form>
	);
}
