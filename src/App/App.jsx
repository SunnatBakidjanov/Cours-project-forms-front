import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Technicalwork } from '../pages/technical-work/Technicalwork';
import { ThemeContextProvider } from '../components/theme/ThemeContextProvider';
import { Authorization } from '../pages/auth-login/auth/Authorization';

import './main.scss';
import './reset.scss';

export const App = () => {
	return (
		<Router>
			<ThemeContextProvider>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Navigate to="/auth" replace />} />
						<Route path="/technical-work" element={<Technicalwork />} />
						<Route path="/auth" element={<Authorization />} />
					</Routes>
				</MainLayout>
			</ThemeContextProvider>
		</Router>
	);
};
