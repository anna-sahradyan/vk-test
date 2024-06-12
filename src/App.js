import React from 'react';
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import { Route, Routes} from "react-router-dom";
import Form from "./components/applicationForm/Form";


const App = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/app'} element={<Form/>}/>
                </Routes>
            </Layout>

        </div>
    );
};

export default App;
