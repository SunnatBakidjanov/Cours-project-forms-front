import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EmailSentPage } from '../EmailSentPage';

export const EmailSentWrapper = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [emailState, setEmailState] = useState(null);

	useEffect(() => {
		if (state?.email) {
			sessionStorage.setItem('sent-state', JSON.stringify(state));
			setEmailState(state);
		} else {
			const savedState = sessionStorage.getItem('sent-state');
			if (savedState) {
				setEmailState(JSON.parse(savedState));
			} else {
				navigate('/login');
			}
		}
	}, [state, navigate]);

	if (!emailState) return null;

	return <EmailSentPage name={emailState.name} surname={emailState.surname} email={emailState.email} />;
};
