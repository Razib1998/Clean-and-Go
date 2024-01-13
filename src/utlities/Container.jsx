/* eslint-disable react/prop-types */


const Container = ({children, className}) => {
    return (
        <div className={`w-full max-w-[1250px] px-[25px] mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default Container;