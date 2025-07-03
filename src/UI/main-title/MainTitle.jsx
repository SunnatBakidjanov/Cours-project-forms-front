export const MainTitle = ({ text, className, onClick, children }) => {
	return (
		<h1 className={`${className}`} onClick={onClick}>
			{text}
			{children}
		</h1>
	);
};
