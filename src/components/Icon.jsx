// Icon.js
import React from 'react';

function Icon({ name, className = 'icon' }) {
    switch (name) {
        case 'eye':
            return (
                <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                    <path stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M.833 10S4.167 3.333 10 3.333c5.834 0 9.167 6.667 9.167 6.667S15.833 16.667 10 16.667.833 10 .833 10z"
                    ></path> <path stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    ></path>
                </svg>
            );
        case 'heart':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        d="M19.66 5.678c.48.546.843 1.19 1.064 1.889a5.65 5.65 0 0 1-.417 4.454c-1.288 2.32-3.876 4.913-7.696 7.706a1.01 1.01 0 0 1-1.196 0c-3.838-2.798-6.426-5.392-7.711-7.71a5.65 5.65 0 0 1-.43-4.467A5.2 5.2 0 0 1 4.34 5.67a5.1 5.1 0 0 1 1.726-1.271c1.506-.678 3.067-.489 4.511.562.532.39 1.01.852 1.422 1.372.412-.52.89-.982 1.422-1.372 1.447-1.046 3.005-1.237 4.511-.56a5.1 5.1 0 0 1 1.728 1.278Z"
                        clipRule="evenodd"
                    ></path>
                </svg>

            );
        case 'cart':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        d="M4 20.071 5.28 7.5h13.44L20 20.071z"
                    ></path>
                    <path
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        d="M15.429 9.786V6.357a3.429 3.429 0 1 0-6.857 0v3.429"
                    ></path>
                </svg>

            );
        case 'caret-down':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="5"
                    fill="none"
                    viewBox="0 0 9 5"
                >
                    <path fill="currentcolor" d="M4.5 5 0 0h9z"></path>
                </svg>

            );
        case 'search':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <g
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        opacity="0.6"
                    >
                        <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16M21 21l-4.35-4.35"></path>
                    </g>
                </svg>

            );
        case 'help':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                >
                    <path
                        fill="currentcolor"
                        fillRule="evenodd"
                        d="M16 7.85a8.15 8.15 0 1 0 0 16.3 8.15 8.15 0 0 0 0-16.3M6.15 16c0-5.44 4.41-9.85 9.85-9.85s9.85 4.41 9.85 9.85-4.41 9.85-9.85 9.85S6.15 21.44 6.15 16"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="currentcolor"
                        fillRule="evenodd"
                        d="M16 14.588c.47 0 .85.38.85.85V20.5a.85.85 0 1 1-1.7 0v-5.062c0-.47.38-.85.85-.85M16 11.213c.47 0 .85.38.85.85v.562a.85.85 0 1 1-1.7 0v-.562c0-.47.38-.85.85-.85"
                        clipRule="evenodd"
                    ></path>
                </svg>

            );
        case 'orders':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                >
                    <path
                        fill="currentcolor"
                        fillRule="evenodd"
                        d="M10.464 8.85c-.892 0-1.614.723-1.614 1.614v10.84c0 .892.723 1.614 1.614 1.614h10.84c.892 0 1.614-.722 1.614-1.614v-5.42a.85.85 0 1 1 1.7 0v5.42a3.314 3.314 0 0 1-3.314 3.314h-10.84a3.314 3.314 0 0 1-3.314-3.314v-10.84a3.314 3.314 0 0 1 3.314-3.314h9.362a.85.85 0 0 1 0 1.7zM25.6 7.892a.85.85 0 0 1 0 1.202l-9.116 9.116a.85.85 0 0 1-1.202 0l-2.956-2.957a.85.85 0 1 1 1.202-1.202l2.355 2.356L24.4 7.892a.85.85 0 0 1 1.202 0"
                        clipRule="evenodd"
                    ></path>
                </svg>

            );
        case 'dashboard':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 28 28"
                >
                    <path
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.667 3.5H3.5v8.167h8.167zM24.5 3.5h-8.167v8.167H24.5zM24.5 16.333h-8.167V24.5H24.5zM11.667 16.333H3.5V24.5h8.167z"
                    ></path>
                </svg>

            );
        case 'membership':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                >
                    <path
                        fill="currentcolor"
                        fillRule="evenodd"
                        d="M15.5 9.304a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3m-4.35 2.65a4.35 4.35 0 1 1 8.7 0 4.35 4.35 0 0 1-8.7 0M6.15 22.5A4.85 4.85 0 0 1 11 17.65h9a4.85 4.85 0 0 1 4.85 4.85V25c0 .47-.38.35-.85.35a.85.85 0 0 1-.85-.85v-2A3.15 3.15 0 0 0 20 19.35h-9a3.15 3.15 0 0 0-3.15 3.15v2c0 .47-.38.85-.85.85s-.85.12-.85-.35z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="currentcolor"
                        fillRule="evenodd"
                        d="M6.15 25c0-.47.38-.85.85-.85h17a.85.85 0 1 1 0 1.7H7a.85.85 0 0 1-.85-.85"
                        clipRule="evenodd"
                    ></path>
                </svg>

            );
        case 'logo':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                >
                    <path
                        fill="currentcolor"
                        fillRule="evenodd"
                        d="M16.24 6.918a2.12 2.12 0 0 0-2.122 2.114v12.936c0 3.331-2.713 6.032-6.06 6.032C4.714 28 2 25.3 2 21.968V16.52h3.936v5.448c0 1.167.95 2.113 2.123 2.113a2.12 2.12 0 0 0 2.123-2.113V9.032C10.182 5.7 12.894 3 16.24 3s6.058 2.7 6.058 6.032v4.088h-3.936V9.032c0-1.167-.95-2.114-2.122-2.114m2.124 15.29v-5.75H22.3v5.75c0 1.035.842 1.874 1.882 1.874s1.882-.84 1.882-1.874v-5.75H30v5.75C30 25.407 27.395 28 24.182 28c-3.214 0-5.818-2.593-5.818-5.792"
                        clipRule="evenodd"
                    ></path>
                </svg>

            );
        case 'hamburger':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12h18M3 6h18M3 18h18"
                    ></path>
                </svg>

            );
        case 'close':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                >
                    <path d="M7 4a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0 0 1.414L11.586 15l-7.293 7.293a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0L15 18.414l7.293 7.293a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414L18.414 15l7.293-7.293a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0L15 11.586 7.707 4.293A1 1 0 0 0 7 4" fill="currentcolor"></path>
                </svg>

            );
        case 'star-fill':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    fill="none"
                    viewBox="0 0 14 13"
                >
                    <path
                        fill="#EBBC11"
                        d="m7 0 1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085z"
                    ></path>
                </svg>

            );
        case 'star-no-fill':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    fill="none"
                    viewBox="0 0 14 13"
                >
                    <path
                        fill="#C4C4C4"
                        d="m7 0 1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085z"
                    ></path>
                </svg>

            );
        case 'login':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 25"
                >
                    <path
                        fill="currentcolor"
                        d="M11 7.5 9.6 8.9l2.6 2.6H2v2h10.2l-2.6 2.6 1.4 1.4 5-5zm9 12h-8v2h10v-18H12v2h8z"
                    ></path>
                </svg>

            );
        case 'membership-profile':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                >
                    <path
                        fill="currentcolor"
                        d="M2.287 5.783c.002-.204.11-.399.299-.543.19-.144.446-.226.714-.228h18.4c.56 0 1.013.346 1.013.771v12.434c-.002.204-.11.399-.299.543-.19.144-.446.226-.714.228H3.3c-.268 0-.526-.082-.716-.226s-.297-.341-.297-.545zm2.043.782v10.87h16.34V6.565zm2.042 1.553h4.59v4.658h-4.59zm1.152 1.2V11.6h2.422V9.318zm-1.152 5.011h12.256v1.553H6.372zm5.858-6.211h6.398V9.67H12.23zm0 3.105h6.398v1.553H12.23z"
                    ></path>
                </svg>

            );
        case 'subscription':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                >
                    <path
                        fill="currentcolor"
                        d="M20.5 2.5h-12c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2m-12 14v-12h12l.002 12z"
                    ></path>
                    <path
                        fill="currentcolor"
                        d="M4.5 8.5h-2v12c0 1.103.897 2 2 2h12v-2h-12zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z"
                    ></path>
                </svg>

            );
        case 'payment':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                >
                    <path
                        fill="currentcolor"
                        d="M18.755 14.213V7.362c0-.942-.806-1.713-1.79-1.713H4.432c-.984 0-1.79.77-1.79 1.713v6.85c0 .943.806 1.714 1.79 1.714h12.531c.985 0 1.79-.771 1.79-1.713m-1.79 0H4.432V7.362h12.531zm-6.266-5.995c-1.486 0-2.685 1.148-2.685 2.57 0 1.42 1.199 2.568 2.685 2.568s2.685-1.147 2.685-2.569-1.2-2.569-2.685-2.569m11.636 0v9.42c0 .942-.806 1.713-1.79 1.713H5.328v-1.713h15.217v-9.42z"
                    ></path>
                    <path
                        fill="currentcolor"
                        d="M10.804 8.724v.631h-.31v-.63zm-.037 3.378v.553h-.309v-.553zm.413-.653a.45.45 0 0 0-.056-.224.54.54 0 0 0-.184-.182 1.5 1.5 0 0 0-.343-.153 2 2 0 0 1-.45-.196.86.86 0 0 1-.293-.288.8.8 0 0 1-.1-.416q0-.255.109-.438a.73.73 0 0 1 .31-.284q.2-.099.472-.099.21 0 .376.064a.7.7 0 0 1 .28.186.8.8 0 0 1 .175.304q.062.18.062.416h-.38a1 1 0 0 0-.034-.254.6.6 0 0 0-.099-.2.44.44 0 0 0-.161-.133.5.5 0 0 0-.22-.048.6.6 0 0 0-.287.06.38.38 0 0 0-.165.17.55.55 0 0 0-.054.25q0 .133.054.232a.5.5 0 0 0 .182.18q.13.078.357.155.268.084.454.2.186.114.283.282.097.165.097.412 0 .266-.12.45a.76.76 0 0 1-.337.278 1.3 1.3 0 0 1-.509.095q-.176 0-.347-.048a.9.9 0 0 1-.31-.155.8.8 0 0 1-.222-.287 1.05 1.05 0 0 1-.083-.441h.385q0 .175.05.292a.49.49 0 0 0 .322.277.8.8 0 0 0 .205.027q.186 0 .315-.058a.45.45 0 0 0 .198-.17.5.5 0 0 0 .068-.256"
                    ></path>
                </svg>

            );
        case 'get-membership':
            return (
                <svg className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                >
                    <path
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21.875 13.625c-.75 3.75-3.578 7.28-7.545 8.07A9.375 9.375 0 0 1 5.56 6.197C8.28 3.2 12.874 2.375 16.624 3.875"
                    ></path>
                    <path
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m9.125 12.125 3.75 3.75 9-9.75"
                    ></path>
                </svg>

            );

        default:
            return null;
    }
}

export default Icon;
