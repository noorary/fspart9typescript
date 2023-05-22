import React from 'react';

interface ErrorNotificationProps {
  message: string;
}

export const ErrorNotification= (props: ErrorNotificationProps) => {
  return <p style={{ color: 'red' }}>{props.message}</p>;
};

export default ErrorNotification;
