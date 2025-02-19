import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { History } from './../pages/history/History'
import { DefaultLayout } from '../layout/default_layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}
