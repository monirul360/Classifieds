import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogeDetails = ({blogData}) => {
    const {id,img,name,description}=blogData;

    const navigate =useNavigate()

    const navigateBlogeDetaile=(id)=>{
       
      navigate(`/blogeDetail/:${id}`)
    }

    return (
        <div key={id} className='bloge-card '>
            <div onClick={()=>navigateBlogeDetaile(id)} style={{ width: "18rem", }}>
                <img className='bloge-img' variant="top" src={img} />
                <div style={{cursor:"pointer"}} >
                  <h3 className="blog-title">{name}</h3>
                  <p> {description}</p>
                </div>
              </div>
        </div>
    );
};

export default BlogeDetails;