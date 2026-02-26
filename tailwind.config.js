/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'text-yellow-600',
    'bg-yellow-50',
    'text-blue-600',
    'bg-blue-50',
    'text-green-600',
    'bg-green-50',
    'text-gray-600',
    'bg-gray-50'
  ]
}
