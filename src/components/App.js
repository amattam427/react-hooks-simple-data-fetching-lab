// create your App component here
import React,{useEffect, useState} from 'react'

function App (){
    //intial state can be null or "" since we're returning a random image every time the page renders. 
    const [dogImage, setDogImage] = useState('')
   
    
        useEffect(()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
                .then((r)=>r.json())
                .then((data)=>{
                    setDogImage(data.message)
                })
        }, []);
        //if pic/data hasn't been loaded, show loading indicator

        if(!dogImage){
            return <p>Loading...</p>
        }

    return (
        <div>
            <img src={dogImage} alt='A Random Dog'/>
        </div>
    );
}



export default App;