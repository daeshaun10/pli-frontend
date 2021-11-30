import React, { createContext, useContext, useEffect, useState } from 'react';
import { authContext } from './authContext';

export const notificationContext = createContext({
  messages: [],
  view: () => {},
});

const NotificationProvider = (props: any) => {
  const [messages, setMessages] = useState([]);

  const authCtx = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/user/notifications?token=${authCtx.token}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMessages(data.notifications);
    };
    if (!authCtx.isAdmin && authCtx.token) {
      fetchData();
    }
  }, [authCtx]);

  const view = () => {
    const temp = [...messages];
    temp.forEach((i: any) => {
      i.viewed = true;
    });

    setMessages(temp);

    const updateData = async () => {
      const url = `${process.env.REACT_APP_API_ENDPOINT}/user/update-viewed?token=${authCtx.token}`;
      const response = await fetch(url, {
        method: 'POST',
        body: '',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    };
    updateData();
  };

  const value = {
    messages,
    view,
  };
  return (
    <notificationContext.Provider value={value}>
      {props.children}
    </notificationContext.Provider>
  );
};

export default NotificationProvider;
