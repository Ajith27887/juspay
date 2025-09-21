import { createContext, useState } from "react";

export const SidemenuContext = createContext();

const SidemenuProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [theme, setTheme] = useState("light");

	return <SidemenuContext.Provider value={{ show, setShow, theme, setTheme }}>{children}</SidemenuContext.Provider>;
};

export default SidemenuProvider;
