import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase';
import io from 'socket.io-client';

const Chat = () => {
    const [user, loadding] = useAuthState(auth);

    return (
        <div>

        </div>
    );
};

export default Chat;