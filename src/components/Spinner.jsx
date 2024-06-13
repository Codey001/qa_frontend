import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full m-40">
      <ClipLoader size={35} color={"#123abc"} loading={true} />
      <p className="ml-2">Processing File...</p>
    </div>
  );
};

export default Spinner;
