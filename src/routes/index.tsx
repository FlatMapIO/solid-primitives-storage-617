import { Title } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";

const S = clientOnly(() => import("../components/client-store"));

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1>Hello world!</h1>

			<S />
		</main>
	);
}
