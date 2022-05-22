import {useState} from "react"
import HogDetails from "./HogDetails"


function HogTile({hog}){

    const [visibleDetails, setVisibleDetails] = useState(false)

    function handleClick(){
    setVisibleDetails(!visibleDetails)
}

    return (
        <div>
            <h1>{hog.name}</h1>
            <img onClick={handleClick} src={hog.image} height='200' width='200'/>
            { visibleDetails ? <div><HogDetails hog={hog} /></div> : " "}
        </div>
    )
}
export default HogTile