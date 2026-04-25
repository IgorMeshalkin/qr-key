import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/' for dev (serve) and '/qr-key/' for production build/preview (GitHub Pages)
// Allow ngrok host in dev to avoid "Blocked request. This host is not allowed" error
export default defineConfig(({ command }) => {
    const isDev = command === 'serve'

    // Add specific ngrok domain and a wildcard for future tunnels (ngrok-free.app)
    // Be mindful: broad wildcards loosen host checks; keep the list as tight as possible.
    const devAllowedHosts = [
        '6d45-2001-fb1-139-1c4b-1121-6136-bf37-1817.ngrok-free.app',
        '.ngrok-free.app',
    ]

    return {
        plugins: [react()],
        base: isDev ? '/' : '/qr-key/',
        ...(isDev ? { server: { allowedHosts: devAllowedHosts } } : {}),
    }
})
