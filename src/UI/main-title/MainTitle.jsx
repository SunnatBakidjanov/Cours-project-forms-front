export const MainTitle = ({ text, className, children }) => {
	return (
		<h1 className={`${className}`}>
			{text}
			{children}
		</h1>
	);
};
