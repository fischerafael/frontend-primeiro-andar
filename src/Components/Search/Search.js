import React from 'react'

import './style.css'

function Search({ citySearch, setCitySearch, priceSearch, setPriceSearch }) {
    return (
        <div className="search">            
            <h2>Filtrar quartos</h2>
            <form>
                <div className="search-inputs">
                    <div className="city-input">
                        <label htmlFor="city">Pesquisar por cidade</label>
                        <input 
                            id="city"
                            type="text" 
                            placeholder="Nome da cidade"
                            value={citySearch}
                            onChange={setCitySearch}
                        />
                    </div>
                    <div className="price-input">
                        <label htmlFor="price">Pesquisar por aluguel máximo</label>
                        <input 
                            id="price"
                            type="number" 
                            step="250"                                                           
                            value={priceSearch}
                            onChange={setPriceSearch}
                        />
                    </div>                          
                </div>                                                                                               
            </form>
        </div>
    )
}

export default Search
