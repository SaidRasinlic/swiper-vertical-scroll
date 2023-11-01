import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route index element={<Public />} />
      </Route>
    </Routes>
  );
}
