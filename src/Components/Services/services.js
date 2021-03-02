import Service from './Service/service';


const Services = (props) => {
    return(
        props.Services.map((serviceItem) => {
          return(<div>
          <Service 
                Key={serviceItem.id}
                ServiceType={serviceItem.serviceType} 
                ServicePolicy={serviceItem.servicePolicy}
                ServiceSubType={serviceItem.serviceSubType}  
                Warranty={serviceItem.warranty}
                onDelete={props.onDelete(serviceItem.id)} 
                onEdit={props.onEdit(serviceItem)}
          />
         </div>
          )
        })
    );
};

export default Services; 