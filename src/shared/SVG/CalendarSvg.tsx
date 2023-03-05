import React from 'react';

const CalendarSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#ec927e"
        d="M7.5 10.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM12.5 10.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM17.5 10.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM7.5 14.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM12.5 14.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM17.5 14.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM7.5 18.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM12.5 18.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zM17.5 18.5h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1z"
      ></path>
      <path
        fill="#ec927e"
        fillRule="evenodd"
        d="M18.75 3h2.75c1.105 0 2 .895 2 2v17c0 1.105-.895 2-2 2h-19c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2H4c.276 0 .5.224.5.5v2.25c0 .414.336.75.75.75S6 6.164 6 5.75V1c0-.552.448-1 1-1s1 .448 1 1v1.751c0 .138.112.249.25.249h6.25c.276 0 .5.224.5.5v2.25c0 .414.336.75.75.75s.75-.336.75-.75V1c0-.552.448-1 1-1s1 .448 1 1v1.75c0 .138.112.25.25.25zm2.75 19c.276 0 .5-.224.5-.5v-12c0-.276-.224-.5-.5-.5h-18c-.276 0-.5.224-.5.5v12c0 .276.224.5.5.5h18z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default React.memo(CalendarSvg, () => true);
