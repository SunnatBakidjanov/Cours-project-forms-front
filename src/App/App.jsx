import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Technicalwork } from '../pages/technical-work/Technicalwork';
import { ThemeContextProvider } from '../components/theme/ThemeContextProvider';
import { Authorization } from '../pages/auth-login/auth/Authorization';
import { Login } from '../pages/auth-login/login/Login';
import { EmailSentWrapper } from '../pages/support-pages/succeful-reg/components/EmailSentWrapper';

import './main.scss';
import './reset.scss';

export const App = () => {
	return (
		<Router>
			<ThemeContextProvider>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Navigate to="/email-sent" replace />} />
						<Route path="/technical-work" element={<Technicalwork />} />
						<Route path="/auth" element={<Authorization />} />
						<Route path="/login" element={<Login />} />
						<Route path="/email-sent" element={<EmailSentWrapper />} />
					</Routes>
				</MainLayout>
			</ThemeContextProvider>
		</Router>
	);
};
