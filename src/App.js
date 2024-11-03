import React from 'react';
import ImageUpload from '../src/components/ImageUploader';
import "./App.css"
import LoadingSpinner from './components/Spiner';
import { useSelector } from 'react-redux';
function App() {
  const status=useSelector((state)=>state.accountSlice.status
)
console.log(status)
  return (
    <div className="body">
      <h1 className='h1' >Podelite sa mnom najelpse trenutke ove proslave!</h1>
      {status==="success"&&<ImageUpload />}
      {status!=="success"&& <LoadingSpinner /> }
    </div>
  );
}

export default App;
