import ReactDOM from 'react-dom/client'

import './index.css'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// if (process.env.NODE_ENV === 'development') {
//   // Prepare MSW in a Service Worker
//   import('./API')
//     .then(({ worker }) => {
//       worker.start()
//     })
//     // Launched mock server, and then start client React app
//     .then(() => root.render(<App />))
// } else {
//   // Production
//   root.render(<App />)
// }
root.render(<App />)
