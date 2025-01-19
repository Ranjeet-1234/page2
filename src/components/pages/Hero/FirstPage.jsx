import React, { useEffect ,useState } from "react";
import axios from "axios";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  const [userName, setUserName] = useState(null);
  const [dob, setdob] = useState(null);
  const [tob, settob] = useState(null);
  const [gender, setgender] = useState(null);
  const [city, setcity] = useState(null);
  const [state, setstate] = useState(null);
  useEffect(() => {
    // Fetching user data from Flask server using axios
    axios.get("https://back-1-0yhi.onrender.com/name")  // Replace with your actual Flask endpoint
      .then((response) => {
        if (response.data && response.data.name) {
          setUserName(response.data.name);  // Set the name from the server
          setdob(response.data.dob);  // Set the name from the server
          settob(response.data.tob);  // Set the name from the server
          setgender(response.data.gender);  // Set the name from the server
          setcity(response.data.city);  // Set the name from the server
          setstate(response.data.state);  // Set the name from the server
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-4xl font-bold text-black/80">
                {userName}
              </p>
              <p className="text-4xl md:text-xl  text-black/80">
                Date of Birth :{dob}
              </p>
              <p className="text-4xl md:text-xl text-black/80">
                Time of Birth :{tob}
              </p>
              <p className="text-4xl md:text-xl text-black/80">
                Gender : {gender}
              </p>
              <p className="text-4xl md:text-xl text-black/80">
                City : {city}
              </p>
              <p className="text-4xl md:text-xl text-black/80">
                State : {state}
              </p>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
