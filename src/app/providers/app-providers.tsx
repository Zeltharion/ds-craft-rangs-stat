import { RouterProvider } from 'react-router-dom'
import { router } from '../router'
import { ThemeProvider } from './theme-provider'

export const AppProviders = () => {
	return (
		<ThemeProvider defaultTheme='dark'>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
