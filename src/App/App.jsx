import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Technicalwork } from '../pages/technical-work/Technicalwork';
import { ThemeContextProvider } from '../context/theme/ThemeContextProvider';
import { Authorization } from '../pages/auth-login/auth/Authorization';
import { Login } from '../pages/auth-login/login/Login';
import { EmailSentWrapper } from '../pages/support-pages/succeful-reg/components/EmailSentWrapper';
import { FormPage } from '../pages/form-page/FormPage';
import { AuthSubmitTimerProvider } from '../context/timer-submit/authSubmitTimerProvider';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { LayoutWithHeader } from '../layout/LoyoutWithHeader';
import { PersistGate } from 'redux-persist/integration/react';
import { TemplateDetails } from '../pages/form-page/UI/TemplateDetails';
import PrivateProvider from '../components/private-povider/PrivateProvider';
import { FormFillingPage } from '../pages/form-filling/FormFillingPage';

import './main.scss';
import './reset.scss';

export const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeContextProvider>
						<AuthSubmitTimerProvider>
							<Routes>
								<Route path="/" element={<Navigate to="/form" replace />} />

								<Route element={<MainLayout />}>
									<Route path="/technical-work" element={<Technicalwork />} />
									<Route path="/auth" element={<Authorization />} />
									<Route path="/email-sent" element={<EmailSentWrapper />} />
									<Route path="/login" element={<Login />} />
								</Route>

								<Route
									element={
										<PrivateProvider>
											<LayoutWithHeader />
										</PrivateProvider>
									}
								>
									<Route path="/form" element={<FormPage />} />
									<Route path="/form/:key" element={<FormFillingPage />} />
								</Route>
							</Routes>
						</AuthSubmitTimerProvider>
					</ThemeContextProvider>
				</PersistGate>
			</Provider>
		</Router>
	);
};
