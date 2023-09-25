import React from "react";
import "./check.css";

function TodoItem({ text }) {
  return (
    <label className="todo">
      <input className="todo__state" type="checkbox" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 25"
        className="todo__icon"
      >
        <defs>
          <linearGradient
            id="boxGradient"
            gradientUnits="userSpaceOnUse"
            x1={0}
            y1={0}
            x2={25}
            y2={25}
          >
            <stop offset="0%" stopColor="#0096ff" />
            <stop offset="100%" stopColor="#0096ff" />
          </linearGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#0096ff" />
            <stop offset="100%" stopColor="#0096ff" />
          </linearGradient>
          <path
            id="todo__line"
            stroke="url(#lineGradient)"
            d="M21 12.3h168v0.1z"
          />
          <path
            id="todo__box"
            stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          />
          <path
            id="todo__check"
            stroke="url(#boxGradient)"
            d="M10 13l2 2 5-5"
          />
          <circle id="todo__circle" cx="13.5" cy="12.5" r={10} />
        </defs>
        <use xlinkHref="#todo__line" className="todo__line" />
        <use xlinkHref="#todo__box" className="todo__box" />
        <use xlinkHref="#todo__check" className="todo__check" />
        <use xlinkHref="#todo__circle" className="todo__circle" />
      </svg>
      <div className="todo__text">{text}</div>
    </label>
  );
}

function Check({ todoItems }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 25"
        className="todo__icon"
      ></svg>
      <div className="todo-list">
        {todoItems.map((text, index) => (
          <TodoItem key={index} text={text} />
        ))}
      </div>
    </div>
  );
}

export default Check;
