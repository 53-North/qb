import  React, {useState} from  'react';
import  Bootbox  from  'bootbox-react';

function  Test() {

    const [showAlert, setShowAlert] = useState(false)
    
    const handleClose = () => {
        console.log("You closed Alert!");
        return setShowAlert(false);
    }


    return(
        <>
            <button onClick={ () => setShowAlert(true) }> Alert </button>
            <Bootbox show={showAlert} 
                type={"alert"}  
                message={"This is a simple alert"}  
                onClose={handleClose} 
            />   
        </>
    )
}

export default Test