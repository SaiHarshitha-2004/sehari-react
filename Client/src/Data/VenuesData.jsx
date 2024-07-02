import React, { useState, useEffect } from 'react';

const VenuesData = () => {
  const [venues, setVenues] = useState([]);
  const [venuesIconData, setVenuesIconData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bestVenuesResponse = await fetch("https://deploy-sehari-api.vercel/database/bestvenues");
        const bestVenuesData = await bestVenuesResponse.json();
        const filteredVenues = bestVenuesData.filter((ven) => isValid(ven));
        setVenues(filteredVenues);
  
        const venuesIconResponse = await fetch("http://localhost:8000/database/venuesiconsdata");  
        const venuesIconData = await venuesIconResponse.json();
        setVenuesIconData(venuesIconData); 

      } catch (err) {
        console.error("Error in displaying data", err);
  
      }
      finally{
        setIsLoading(false)
      }
  
    }
    fetchData();
  }, []);
  
  
  return [ venues , venuesIconData , isLoading] ;
};

const isValid = (venue) => {
    return venue.image && venue.bgImage && venue.address && venue.country && venue.name && venue.description ;
}

export default VenuesData;
