import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import { useEffect } from "react"
import { fetchUsers } from './redux/thunk/user';
import Router from './router'

function App() {
  return (
    <Router />
  );
}

export default App;
