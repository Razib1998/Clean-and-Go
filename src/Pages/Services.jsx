import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ServicePageCard from "../components/ServicePageCard";


const Services = () => {
  const axios = useAxios();

  const getServices = async () => {
    const res = await axios.get("/services");
    return res;
  };

  const {
    data: services,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["service"],
    queryFn: getServices,
  });

  if(isLoading){
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if(isError){
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully:{error}</span>
      </div>
    );
  }

  
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-8">
        Our Special Services
      </h2>
      <div className="grid grid-cols-3 gap-12">
        {services?.data?.map((service) => (
          <ServicePageCard
            key={service._id}
            service={service}
          ></ServicePageCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
