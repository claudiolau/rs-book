//  @ts-nocheck
import { useState } from "react";
import "./App.css";
import react from "@assets/react.svg";
import rust from "@assets/rust.svg";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={react} alt="example" />
				</a>
				<a href="https://rsbuild.dev/" target="_blank" rel="noreferrer">
					<img src={rust} alt="example" />
				</a>
			</div>
			<h1>Rust + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rust and React logos to learn more
			</p>
		</>
	);
}

export default App;
