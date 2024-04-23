import { makePersisted } from "@solid-primitives/storage";
import { createSignal } from "solid-js";

export default () => {
	const [data, setData] = makePersisted(createSignal({}));
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setData({
						hello: "world",
					});
				}}
			>
				set data
			</button>

			<button
				type="button"
				onClick={() => {
					setData(null);
				}}
			>
				clear
			</button>

			<pre>{JSON.stringify(data(), null, 2)}</pre>
		</div>
	);
};
