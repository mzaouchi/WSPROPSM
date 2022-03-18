import PropTypes from 'prop-types';
// const Home=(props)=>{
    const Home=({LastName,age,tab,bestUser:{rank,location},handleAlert,handleName,show,children})=>{
    return(
        <div>
            {/* <h2>My name is {props.LastName}</h2>
            <h3>My age is {props.age}</h3> */}
            {/* <h4>{props.tab[0]}</h4> */}
            {/* <ul>
                {
                    props.tab.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            // <h4>{props.bestUser.location}</h4> */}

            <h2>My name is {LastName}</h2> 
            <h3>My age is {age}</h3> 
            <h4>{tab[0]}</h4>
            <ul>
                {
                    tab.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h4>{location}</h4>
            <button onClick={handleAlert}>Props</button>
            <button onClick={()=>handleName(LastName)}>Props2</button>

            {
                show  ? <h6>Gomycode</h6> : <h6>tawla</h6>
            }

            {
                children
            }
        </div>
    )
}

Home.defaultProps={
    LastName: "Mehdi",
    age : 25
}

Home.propTypes = {
    LastName: PropTypes.string
}
export default Home

