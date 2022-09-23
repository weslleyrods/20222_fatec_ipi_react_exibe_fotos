import ReactDOM from 'react-dom';
import App from './components/App'; //como é export default, não precisa de chaves
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);