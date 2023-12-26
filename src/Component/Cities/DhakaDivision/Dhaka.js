import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNTER_CONTEXT } from '../../../App';
import chaticon from './../../../Icon/chat.png';
import likeicon from './../../../Icon/like.png';
import shareicon from './../../../Icon/share.png';
import commenticon from './../../../Icon/message.png';

import profileicon from './../../../Icon/profile.jpg';

const Dhaka = () => {


    const { filter } = useContext(COUNTER_CONTEXT)

    console.log(filter);
    return (
        <div className='city-filter'>

            {filter.map(item =>

                <>
                    {/* <!-- post items -1 start --> */}
                    <div class="post-outlet shadow-lg">
                        <div class="user-info">
                            <img src={item.userphoto || profileicon} alt='' />
                            <div class="user-details">
                                <h2>{item?.name}</h2>
                                <p>@{item?.bio}</p>
                            </div>
                        </div>
                        <p style={{ " color": "#333" }}><b>Location: {item?.category}</b></p>
                        <p class="post-text mb-2">{item?.Title}</p>
                        <Link to="/">See more</Link>
                        <img class="post-image" src={item?.image} alt="" />
                        <div class="show-action">
                            <div class="show-flex">
                                <div>
                                    <p>&nbsp;Likes <span>360</span></p>
                                </div>
                                <div>
                                    <p><span>187 </span>Comments &nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div class="post-actions">
                            <button> <img src={likeicon} alt="" />
                                <span>Like</span></button>
                            <button> <img src={chaticon} alt="" /> Comment</button>
                            <button> <img src={shareicon} alt="" /> Share</button>
                            <button> <img src={commenticon} alt="" /> Send</button>
                        </div>
                    </div >
                    {/* <!-- post items -1 end --> */}
                </>

            )
            }
        </div >
    );
};

export default Dhaka;