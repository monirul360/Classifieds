import React from 'react';

const Chatmessage = ({ sms }) => {
    return (
        <div>
            <div class="chat-message my-3">
                <b><i className='fa fa-user me-2'></i>{sms?.name}</b>
                <div className="sms-text">
                    <p>{sms?.sms}</p>
                </div>
            </div>
        </div>
    );
};

export default Chatmessage;