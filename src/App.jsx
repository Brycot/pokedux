import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Col, Spin } from "antd";

import Searcher from "./components/Searchers";
import PokemonList from "./components/PokemonList";
import Logo from "./statics/logo.svg";
import "./App.css";
import { fetchPokemonsWithDetails } from "./slices/dataSlices";

function App() {
    const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
    const loading = useSelector((state) => state.ui.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonsWithDetails());
    }, []);
    console.log(loading);
    return (
        <div className="App">
            <Col span={4} offset={10}>
                <img src={Logo} alt="pokedux" />
            </Col>
            <Col span={8} offset={8}>
                <Searcher />
            </Col>
            {loading && (
                <Col span={4} offset={10}>
                    <Spin spinning size="large" />
                </Col>
            )}
            <PokemonList pokemons={pokemons} />
        </div>
    );
}

export default App;
