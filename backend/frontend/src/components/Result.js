import './Result.css';

const Result = ({clinic}) => {
    return (
       <div className="Clinic">
           <div className="ClinicImage">
                <img src={clinic.image} alt={clinic.name}/>
           </div>
           <div className="ClinicDescription">
                <h3>{clinic.name}</h3>
                <p>{clinic.address.street} {clinic.address.city}, {clinic.address.state} {clinic.address.zip}</p>
                <p>+{clinic.phone}</p>
            </div> 
       </div>
    );
}
 
export default Result;