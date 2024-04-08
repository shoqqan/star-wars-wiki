import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./app/App.tsx";
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <App/>
    </HashRouter>
)
