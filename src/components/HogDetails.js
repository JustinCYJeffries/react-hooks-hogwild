function HogDetails({hog}){
    return(
        <div>
            <div>Speciality: {hog.specialty}</div>
            <div>{hog.greased ? "It's Greased":"Is Not Greased"}</div>
            <div>Weight:{hog.weight}</div>
            <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
        </div>
    )
}
export default HogDetails