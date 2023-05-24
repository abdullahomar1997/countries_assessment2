import React, { useContext } from 'react'
import { CountriesContext} from '../services/countries.context';
import { Link } from 'react-router-dom';
import { CountryMenuItem } from './CountryMenuItem';
import Search from './Search';
  
const CountriesScreen = () => {
    const {countries } = useContext(CountriesContext);
    
    return (
        <>
            <h1 style={Title}>Countries</h1>
            <Search/>
            <div style={ListContainer}>
                {countries.map(item => (
                    <Link style={{textDecoration:"none"}} key={item.id} to={`/details/${item.id}`} >
                        <div style={ListItem}>
                            <CountryMenuItem country={item} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CountriesScreen;

const Title = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:"40px"
};

const ListContainer = {
    display: 'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '10px',
}
  
const ListItem = {
    padding: '5px',
    border: '1px solid gray',
    borderRadius: '10px',
}

