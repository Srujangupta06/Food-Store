import {useRouteError} from 'react-router-dom';
const Error = () => {
  const err = useRouteError();
  const {error,status,statusText} = err;
  return (
    <div className='error-details-container'>
      <img src='https://res.cloudinary.com/djv3sgbxn/image/upload/v1728287894/Oops_404_Error_with_a_broken_robot-cuate_1_npvmav.png' width={"350px"}/>
      <h1>{error.message}</h1>
      <h3>{status} : {statusText}</h3>
    </div>
  );
};

export default Error;
