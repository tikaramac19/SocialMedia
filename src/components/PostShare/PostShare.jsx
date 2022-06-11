import React, {useState, useRef} from 'react'
import "./PostShare.css"
import {UilScenery , UilPlayCircle ,UilLocationPoint, UilSchedule, UilTimes} from '@iconscout/react-unicons'
import profilerImage from "../../img/profileImg.jpg";
const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange =(e) =>{
            if(e.target.files && e.target.files[0] ){
                let img = e.target.files[0];

                setImage({
                    image : URL.createObjectURL(img),
                })
            }
    }
  return (
    <div className="PostShare">
         <img src={profilerImage} alt="" />
         <div>
             <input type="text" placeholder="what's happening?" />

             <div className="PostOptions">
             <div className="option"
             style={{color :' #4CB256' }}
             onClick = {()=> imageRef.current.click()}
             >
                 <UilScenery />
                 Photo
             </div>
             <div className="option"
             style={{color :' #4A4EB7' }}
             >
                 <UilPlayCircle />
                 Video
             </div>
             <div className="option"
             style={{color :' #EF5757' }}
             >
                 <UilLocationPoint />
                 Location
             </div>
             <div className="option"
              style={{color :' #E1AE4A' }}
             >
                 <UilSchedule />
                 Shedule
             </div>
             
             <button className="button" style={{height : "3rem", fontSize:"18px",padding: "1rem 2rem"}}>
                 Share
             </button>
             <div className='selectImage'>
                 <input type="file" name='myImage' ref={imageRef} onChange = {onImageChange}/>
             </div>
         </div>
         {
             image && (
                 <div className="previewImage">
                     <UilTimes onClick={()=>setImage(null)}/>
                     <img src={image.image} alt="selected image" />
                 </div>
             )
         }
         </div>
    </div>
  )
}

export default PostShare