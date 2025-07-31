import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Squares from './components/Squares.tsx'

createRoot(document.getElementById('root')!).render(
<Squares 
speed={0.5} 
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>  
)
