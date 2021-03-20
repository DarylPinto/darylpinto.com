/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
/**
 * From: https://usehooks.com/useWindowSize/
 *
 * A really common need is to get the current size of the browser window.
 * This hook returns an object containing the window's width and height.
 * If executed server-side (no window object) the value of width and height
 * will be undefined.
 */
interface WindowSize {
	width: number;
	height: number;
}

const useWindowSize = (): WindowSize => {
	const isClient = typeof window === "object";

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	// @ts-ignore
	useEffect(() => {
		if (!isClient) {
			return false;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
};

export default useWindowSize;
