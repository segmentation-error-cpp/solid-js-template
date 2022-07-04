import { createSignal, JSXElement } from "solid-js";



export default function SidebarButton(props: any): JSXElement {
	const [text, setText] = createSignal("");
	setText((prev: string) => props.text || "Base button text");
	return <h1>{text()}</h1>;
}
