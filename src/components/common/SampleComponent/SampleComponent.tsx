import React from "react";
import Image from "next/image";
import { Blok } from "~/global/types";
import s from "./SampleComponent.module.scss";

interface Props {
	blok: Blok;
}

const SampleComponent = ({ blok }: Props) => {
	return (
		<main className={s.SampleComponent}>
			<Image src="/img/logo.svg" width="131px" height="150px" />
			<h1>{blok.heading}</h1>
			<span>{blok.subtitle}</span>
		</main>
	);
};

export default SampleComponent;
