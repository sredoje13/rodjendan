import React, { useState,useEffect } from 'react';
import "./Imageuploader.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../store/asyncThunckAccount';

function ImageUpload() {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
  const [images, setImages] = useState([]);
  const [files,setFiles]=useState([])
 const dispatch=useDispatch()

 
  const uploadImages = async () => {
    setIsActive2(true);
    setTimeout(() => {
      setIsActive2(false);
    }, 500);
   dispatch(uploadImage(files))
    setFiles([]); setImages([])

}

  const handleImageChange = (e) => {
    
    if(e.target.files.length>10){
        alert("mozete najvise 10 slika dodati!")
    }
    else{
        const filee = Array.from(e.target.files);
        const imagesArray = filee.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => prevImages.concat(imagesArray));
        setFiles((prevImages) => [...prevImages,...e.target.files])
    }
    
  };
const deleteImage=(x)=>{
    const newImages = [...images];
    newImages.splice(x, 1);
    console.log(newImages);
    setImages(newImages); 
}

const handleClick = () => {
    setIsActive(true);
    // Vraća stanje na false nakon 500 ms
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  };
  return (
    <div className='main' >
        <div  onClick={handleClick} >
        <input      disabled={images.length>10}
 type="file" name='images'
      style={{ opacity:0, position:"absolute", zIndex:1,height:"40px"}}
      id="file-upload"
      accept="image/*" multiple
       onChange={handleImageChange} />
       <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                <button  disabled={images.length>10}
  className='addImageButton' style={{transform:isActive?'scale(1.1)':'scale(1)'}}>DODAJ SLIKU</button> {/* Promenjen tekst na dugmetu */}
            </label>
        </div>
   
      <div style={{
        width:images.length===2?"60%":"100%",
        justifyContent:"center"
      }} className='mainimages'>
        {images.map((image, index) => ( <div className='imagee' key={index}>
            <button  className='imagebutton' onClick={()=>deleteImage(index)}>x</button>
            <img  src={image} alt={`Uploaded ${index}`} style={{ width: '100px', 
                
                marginTop: '2px'}} />
            </div>
        ))}
      </div>
     {images.length>0&& <button 
      disabled={images.length>10}
     onClick={uploadImages} className='addImageButton'  style={{
        display:"flex",width:"100%", height:"40px",
        justifyContent:"center",
        alignItems:"center",
        transform:isActive2?'scale(1.1)':'scale(1)'
     }}>{images.length>10?"MOZETE POSLATI NAJVISE 10 SLIKA":"PODELI SLIKE"}</button>}
    </div>
  );
}

export default ImageUpload;
