import Service from './Service/service';

const services = (props) => {
    return(
        props.services.map((serviceItem, index) => {
          return <Service 
                key={serviceItem.Id}
                service={serviceItem.service}
                Name={serviceItem.Name} 
                Vendor={serviceItem.Vendor}  
                Area={serviceItem.Area}
                onDelete={props.onDelete(index)} 
          /> 
        })
    );
};

export default services; 