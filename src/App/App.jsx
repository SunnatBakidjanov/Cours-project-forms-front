import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Technicalwork } from '../pages/technical-work/Technicalwork';
import { ThemeContextProvider } from '../components/theme/ThemeContextProvider';
import { Authorization } from '../pages/auth-login/auth/Authorization';
import { Login } from '../pages/auth-login/login/Login';
import { EmailSentWrapper } from '../pages/support-pages/succeful-reg/components/EmailSentWrapper';
import { FormPage } from '../pages/form-page/FormPage';
import { AuthSubmitTimerProvider } from '../components/timer-submit/authSubmitTimerProvider';

import './main.scss';
import './reset.scss';

export const App = () => {
	return (
		<Router>
			<ThemeContextProvider>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Navigate to="/technical-work" replace />} />
						<Route path="/technical-work" element={<Technicalwork />} />
						<Route
							path="/auth"
							element={
								<AuthSubmitTimerProvider>
									<Authorization />
								</AuthSubmitTimerProvider>
							}
						/>
						<Route
							path="/email-sent"
							element={
								<AuthSubmitTimerProvider>
									<EmailSentWrapper />
								</AuthSubmitTimerProvider>
							}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="/form" element={<FormPage />} />
					</Routes>
				</MainLayout>
			</ThemeContextProvider>
		</Router>
	);
};
