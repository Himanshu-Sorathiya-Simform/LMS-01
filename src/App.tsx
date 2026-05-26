function App() {
	return (
		<section>
			<Name />

			<Intro />

			<GitHub />
		</section>
	);
}

function Name() {
	return <p>Himanshu Sorathiya</p>;
}

function Intro() {
	return (
		<p>
			Hello world, I'm Himanshu Sorathiya, working at Simform Solutions as
			Trainee in React department. I completed my BE in IT at Vishvakarma
			Goverment Engineering College.
		</p>
	);
}

function GitHub() {
	return (
		<p>
			This is my{" "}
			<a
				href="https://github.com/Himanshu-Sorathiya-Simform"
				target="_blank"
			>
				GitHub
			</a>{" "}
			account.
		</p>
	);
}

export default App;
