import Service from './Service/service';

const services = (props) => {
    return(
        props.services.map((serviceItem) => {
          return <Service 
                key={serviceItem.id}
                serviceType={serviceItem.serviceType} 
                servicePolicy={serviceItem.servicePolicy}
                serviceSubType={serviceItem.serviceSubType}  
                warranty={serviceItem.warranty}
                onDelete={()=> props.onDelete(serviceItem.id)} 
                onEdit={() => props.onEdit(serviceItem)}
          /> 
        })
    );
};

export default services; 