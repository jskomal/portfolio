import { useEffect } from 'react';

type RedirectProps = {
	url: string;
};

const Redirect = ({ url }: RedirectProps) => {
	useEffect(() => {
		window.location.href = url;
	}, []);
	return (
		<>
			<h1>Redirecting...</h1>
		</>
	);
};

export default Redirect;
