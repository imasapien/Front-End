import React, { useState, useEffect } from 'react';
import IndividualCard from './IndividualCard';
import axios from 'axios';



const Browse = () => {
    
    const [strain, setStrain] = useState([]);
    

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
             .then(res => {
               console.log(res.data);
               setStrain(res.data.results)
             })
             .catch(err => {
               console.log(err)
             })
      }, [])
    
    
    
    
    
    return (
        <div>
            <IndividualCard strain={strain} setStrain={setStrain}/>
            
        </div>
    );
};

export default Browse;