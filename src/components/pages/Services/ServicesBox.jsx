import React, { useEffect ,useState} from "react";
import axios from "axios";

const ServicesBox = ({planet}) => {
  const [location, setlocation] = useState(null);
  const [zodiac, setzodiac] = useState(null);
  const [lord, setlord] = useState(null);
  const [strength, setstrength] = useState(null);
  const [Prediction, setprediction] = useState(null);
  const [Definition, setDefinition] = useState(null);
  const [Personalized, setPersonalized] = useState(null);
  const [Traitspos, setTraitspos] = useState(null);
  const [Traitsneg, setTraitsneg] = useState(null);
  const [Mantra, setMantra] = useState(null);
  useEffect(() => {
    // Fetching user data from Flask server using axios
    axios.get(`https://back-1-0yhi.onrender.com/planet/${planet}`)  // Replace with your actual Flask endpoint
      .then((response) => {
        if (response.data) {
          setlocation(response.data.planet_location);  // Set the name from the server
          setzodiac(response.data.planet_zodiac);  // Set the name from the server
          setlord(response.data.zodiac_lord);  // Set the name from the server
          setstrength(response.data.planet_strength);  // Set the name from the server
          setprediction(response.data.general_prediction);  // Set the name from the server
          setDefinition(response.data.planet_definitions);  // Set the name from the server
          setPersonalized(response.data.personalised_prediction);  // Set the name from the server
          setTraitspos(response.data.character_keywords_positive);  // Set the name from the server
          setTraitsneg(response.data.character_keywords_negative);  // Set the name from the server
          setMantra(response.data.gayatri_mantra);  // Set the name from the server
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    
    <div className="h-full">
      
      {/* Details section */}
      <div className="mt-5 text-slate-500">
        <p className=" text-gray-800"><strong>Planet Location:</strong> {location}</p>
        <p className=" text-gray-800"><strong>Planet's Zodiac:</strong> {zodiac}</p>
        <p className=" text-gray-800"><strong>Zodiac Lord:</strong> {lord}</p>
        <p className=" text-gray-800"><strong>Planet Strength:</strong> {strength}</p>

        {/* General Prediction */}
        {/* <h2 className="text-l font-semibold mt-2 text-gray-800">General Prediction:</h2>
        <p className="mt-2">{Prediction}</p> */}
        <h2 className="text-l font-semibold mt-2 text-gray-800">Planet Definition:</h2>
        <p className="">{Definition}</p>
        <h2 className="text-l font-semibold mt-2 text-gray-800">Personalized Prediction:</h2>
        <p className="">{Personalized}</p>
        <h2 className="text-l font-semibold mt-2 text-gray-800">Character Traits:</h2>
        <p className="">Positive : {Traitspos}</p>
        <p className="">Negative : {Traitsneg}</p>
        <h2 className="text-l font-semibold mt-2 text-gray-800">Gayatri Mantra:</h2>
        <p className="">{Mantra}</p>
      </div>
    </div>
  );
};

export default ServicesBox;
