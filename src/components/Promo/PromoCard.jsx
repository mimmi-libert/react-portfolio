import React from "react";
import parse from "html-react-parser";

function PromoCard({ title, description, image, icon: Icon, index }) {
  return (
    <div className="flex flex-col gap-3 text-white rounded-[5px] p-5 sm:p-xs md:p-sm relative odd:bg-teal-dark even:bg-brown">
      {/* Background image overlay */}
      {image && (
        <div
          className="absolute inset-0 rounded-[5px] z-0 opacity-40 sm:opacity-100"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: index === 1 ? "120px 100px" : "160px 140px",
            backgroundPosition: index === 1 ? "top left" : "top right", // Third card (index 2) goes to top right
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <figure className="bg-grey md:h-[40px] md:w-[40px] h-[34px] w-[34px] rounded-full absolute right-2xs top-2xs flex items-center justify-center z-10">
        {Icon ? (
          typeof Icon === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: Icon }} />
          ) : (
            <Icon />
          )
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15.9998 20.6666C14.7621 20.6666 13.5751 20.175 12.7 19.2998C11.8248 18.4246 11.3331 17.2376 11.3331 16C11.3331 14.7623 11.8248 13.5753 12.7 12.7001C13.5751 11.825 14.7621 11.3333 15.9998 11.3333C17.2375 11.3333 18.4244 11.825 19.2996 12.7001C20.1748 13.5753 20.6665 14.7623 20.6665 16C20.6665 17.2376 20.1748 18.4246 19.2996 19.2998C18.4244 20.175 17.2375 20.6666 15.9998 20.6666ZM25.9065 17.2933C25.9598 16.8666 25.9998 16.44 25.9998 16C25.9998 15.56 25.9598 15.12 25.9065 14.6666L28.7198 12.4933C28.9731 12.2933 29.0398 11.9333 28.8798 11.64L26.2131 7.02663C26.0531 6.7333 25.6931 6.6133 25.3998 6.7333L22.0798 8.06663C21.3865 7.54663 20.6665 7.0933 19.8265 6.75996L19.3331 3.22663C19.306 3.06958 19.2242 2.9272 19.1022 2.8247C18.9802 2.7222 18.8258 2.6662 18.6665 2.66663H13.3331C12.9998 2.66663 12.7198 2.90663 12.6665 3.22663L12.1731 6.75996C11.3331 7.0933 10.6131 7.54663 9.91979 8.06663L6.59979 6.7333C6.30645 6.6133 5.94645 6.7333 5.78645 7.02663L3.11979 11.64C2.94645 11.9333 3.02645 12.2933 3.27979 12.4933L6.09312 14.6666C6.03979 15.12 5.99979 15.56 5.99979 16C5.99979 16.44 6.03979 16.8666 6.09312 17.2933L3.27979 19.5066C3.02645 19.7066 2.94645 20.0666 3.11979 20.36L5.78645 24.9733C5.94645 25.2666 6.30645 25.3733 6.59979 25.2666L9.91979 23.92C10.6131 24.4533 11.3331 24.9066 12.1731 25.24L12.6665 28.7733C12.7198 29.0933 12.9998 29.3333 13.3331 29.3333H18.6665C18.9998 29.3333 19.2798 29.0933 19.3331 28.7733L19.8265 25.24C20.6665 24.8933 21.3865 24.4533 22.0798 23.92L25.3998 25.2666C25.6931 25.3733 26.0531 25.2666 26.2131 24.9733L28.8798 20.36C29.0398 20.0666 28.9731 19.7066 28.7198 19.5066L25.9065 17.2933Z"
              fill="#705D56"
            />
          </svg>
        )}
      </figure>
      <h3 className="text-md z-10 relative min-[920px]:pt-md">{title}</h3>
      <p className="text-sm font-light font-rubik z-10 relative">
        {parse(description)}
      </p>
    </div>
  );
}

export default PromoCard;
