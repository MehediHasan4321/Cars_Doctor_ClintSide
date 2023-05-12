import serviteImg from '../../../assets/images/checkout/checkout.png'

const ServiceBanner = ({title}) => {
    return (
        <div className='container mx-auto h-[300px] rounded-md flex items-center' style={{backgroundImage:`linear-gradient(80deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${serviteImg})`,backgroundPosition:'center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <h1 className='text-4xl font-semibold text-white pl-32'>{title}</h1>
        </div>
    );
};

export default ServiceBanner;