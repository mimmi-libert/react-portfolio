import React from "react";

function TimeLineItem(props) {
  function getLocation() {
    if (props.type === "education") {
      return props.school;
    }

    return props.organization;
  }

  function getHeading() {
    if (props.type === "education") {
      return props.program;
    }

    return props.task;
  }

  function getIcon() {
    if (props.type === "education") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="35"
          viewBox="0 0 42 35"
          fill="none"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
        >
          <path
            d="M37.8 25.45V13.65L21.7 22.4C21.1 22.7334 20.4667 22.9 19.8 22.9C19.1334 22.9 18.5 22.7334 17.9 22.4L1.00002 13.2C0.633351 13 0.374684 12.75 0.224018 12.45C0.0733508 12.15 -0.00131579 11.8167 1.75439e-05 11.45C0.00135088 11.0834 0.0766845 10.75 0.226018 10.45C0.375351 10.15 0.633351 9.90003 1.00002 9.70003L17.9 0.500031C18.2 0.333365 18.5087 0.208031 18.826 0.124031C19.1434 0.0400308 19.468 -0.00130208 19.8 3.12503e-05C20.132 0.00136458 20.4574 0.0433645 20.776 0.126031C21.0947 0.208698 21.4027 0.333365 21.7 0.500031L40.75 10.9C41.0834 11.0667 41.342 11.3087 41.526 11.626C41.71 11.9434 41.8014 12.2847 41.8 12.65V25.45C41.8 26.0167 41.608 26.492 41.224 26.876C40.84 27.26 40.3654 27.4514 39.8 27.45C39.2347 27.4487 38.76 27.2567 38.376 26.874C37.992 26.4914 37.8 26.0167 37.8 25.45ZM17.9 34.4L7.90002 29C7.23335 28.6334 6.71668 28.1334 6.35002 27.5C5.98335 26.8667 5.80002 26.1834 5.80002 25.45V17.85L17.9 24.4C18.5 24.7334 19.1334 24.9 19.8 24.9C20.4667 24.9 21.1 24.7334 21.7 24.4L33.8 17.85V25.45C33.8 26.1834 33.6167 26.8667 33.25 27.5C32.8834 28.1334 32.3667 28.6334 31.7 29L21.7 34.4C21.4 34.5667 21.092 34.692 20.776 34.776C20.46 34.86 20.1347 34.9014 19.8 34.9C19.4654 34.8987 19.14 34.8574 18.824 34.776C18.508 34.6947 18.2 34.5694 17.9 34.4Z"
            fill="#F7F7F7"
          />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="38"
        viewBox="0 0 40 38"
        fill="none"
        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
      >
        <path
          d="M4 38C2.9 38 1.95867 37.6087 1.176 36.826C0.393333 36.0433 0.00133333 35.1013 0 34V12C0 10.9 0.392 9.95867 1.176 9.176C1.96 8.39333 2.90133 8.00133 4 8H12V4C12 2.9 12.392 1.95867 13.176 1.176C13.96 0.393333 14.9013 0.00133333 16 0H24C25.1 0 26.042 0.392 26.826 1.176C27.61 1.96 28.0013 2.90133 28 4V8H36C37.1 8 38.042 8.392 38.826 9.176C39.61 9.96 40.0013 10.9013 40 12V34C40 35.1 39.6087 36.042 38.826 36.826C38.0433 37.61 37.1013 38.0013 36 38H4ZM16 8H24V4H16V8Z"
          fill="#F7F7F7"
        />
      </svg>
    );
  }

  return (
    <article className="relative">
      <figure
        className={`absolute top-0 left-[-4rem] lg:left-[-8rem] w-[48px] h-[48px] lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center ${
          props.type === "education" ? "bg-teal" : "bg-brown"
        }`}
      >
        {getIcon()}
      </figure>

      <div className="narrow">
        <span
          className={`uppercase text-xs font-rubik font-medium ${
            props.type === "education" ? "text-teal" : "text-brown"
          }`}
        >
          {getLocation()}
        </span>
        <h3 className="py-[2px]">{getHeading()}</h3>
        <span className="text-xs pt-2xs text-brown font-poppins">
          {props.date}
        </span>
        <p className="pt-3 md:pt-2xs">{props.description}</p>
      </div>
    </article>
  );
}

export default TimeLineItem;
