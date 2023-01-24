import { useState, useEffect } from "react";
import Dog from "../components/Dog";

const DogContainer = () => {

    const [dog, setDog] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setDog(data))
    }, [])

    return(
        <Dog dog={dog}/>
    );

};

export default DogContainer;