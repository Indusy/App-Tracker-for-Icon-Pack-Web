API?='http://localhost:8099'

build:
	env VITE_APP_API_URL=${API} npm run build
dev:
	env VITE_APP_API_URL=${API} npm run dev