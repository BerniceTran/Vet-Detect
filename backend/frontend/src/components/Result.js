const Result = ({clinic}) => {
    return (
       <div className="Clinic">
           <div>
               
           </div>
           <h4>{clinic.name}</h4>
           <p>{clinic.address.street    }</p>
       </div>
    );
}
 
export default Result;