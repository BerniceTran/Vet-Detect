const Result = ({clinic}) => {
    return (
       <div>
           <p>{clinic.clinicName}</p>
           <p>{clinic.address}</p>
       </div>
    );
}
 
export default Result;