import GitHub from "./GitHub.tsx";
import Intro from "./Intro.tsx";
import Name from "./Name.tsx";

function AppLayout() {
	return (
		<section>
			<Name />

			<Intro />

			<GitHub />
		</section>
	);
}

export default AppLayout;
