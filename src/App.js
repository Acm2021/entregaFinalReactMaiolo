import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from  "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailCotainer";
import { Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                </Routes>           
            </BrowserRouter>
        </div>
    );
}

export default App;