const Banner = () => {
  return (
    <div>
      <div className="hero h-[600px] mt-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src="https://media.istockphoto.com/id/1481473757/de/foto/musik-tanz-und-putzen-mit-einer-haush%C3%A4lterin-in-einem-haus-allein-f%C3%BCr-hygiene-und-spa%C3%9F-haben.jpg?s=2048x2048&w=is&k=20&c=XmVpfglihlLkTlR7dqEEqxzbI-2SPYUurwDYE6pCzkI="
              className=" h-[700px] object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:ml-8">
            <h1 className="text-5xl font-bold">
              Quality Cleaning{" "}
              <span className="text-green-500 ">for your Home!</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary ml-8">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
