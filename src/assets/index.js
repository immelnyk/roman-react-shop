// import logoImg from "./images/logo.svg";
// import logoWhiteImg from "./images/logo-white.svg";
import logoImg from "./images/my-logo.svg";
import cartIcon from "./icons/cart.svg";
import searchIcon from "./icons/search.svg";
import favIcon from "./icons/fav.svg";

export { logoImg, cartIcon, searchIcon, favIcon };

const getSmartphonesIcon = (color = "black") => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2602_1013)">
      <path
        d="M33.375 5.25H14.625C13.3306 5.25 12.2812 6.29933 12.2812 7.59375V40.4062C12.2812 41.7007 13.3306 42.75 14.625 42.75H33.375C34.6694 42.75 35.7188 41.7007 35.7188 40.4062V7.59375C35.7188 6.29933 34.6694 5.25 33.375 5.25Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 6H26.6875"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 37.7188V37.7404"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line x1="13" y1="34" x2="35" y2="34" stroke={color} stroke-width="2" />
    </g>
    <defs>
      <clipPath id="clip0_2602_1013">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const getCamerasIcon = (color = "black") => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2602_2416)">
      <path
        d="M10 14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 9.46957 16.2107 8.96086 16.5858 8.58579C16.9609 8.21071 17.4696 8 18 8H30C30.5304 8 31.0391 8.21071 31.4142 8.58579C31.7893 8.96086 32 9.46957 32 10C32 11.0609 32.4214 12.0783 33.1716 12.8284C33.9217 13.5786 34.9391 14 36 14H38C39.0609 14 40.0783 14.4214 40.8284 15.1716C41.5786 15.9217 42 16.9391 42 18V36C42 37.0609 41.5786 38.0783 40.8284 38.8284C40.0783 39.5786 39.0609 40 38 40H10C8.93913 40 7.92172 39.5786 7.17157 38.8284C6.42143 38.0783 6 37.0609 6 36V18C6 16.9391 6.42143 15.9217 7.17157 15.1716C7.92172 14.4214 8.93913 14 10 14"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 32C27.3137 32 30 29.3137 30 26C30 22.6863 27.3137 20 24 20C20.6863 20 18 22.6863 18 26C18 29.3137 20.6863 32 24 32Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2602_2416">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const getHeadphonesIcon = (color = "black") => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2602_2338)">
      <path
        d="M14 26H12C9.79086 26 8 27.7909 8 30V36C8 38.2091 9.79086 40 12 40H14C16.2091 40 18 38.2091 18 36V30C18 27.7909 16.2091 26 14 26Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36 26H34C31.7909 26 30 27.7909 30 30V36C30 38.2091 31.7909 40 34 40H36C38.2091 40 40 38.2091 40 36V30C40 27.7909 38.2091 26 36 26Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 30V24C8 19.7565 9.68571 15.6869 12.6863 12.6863C15.6869 9.68571 19.7565 8 24 8C28.2435 8 32.3131 9.68571 35.3137 12.6863C38.3143 15.6869 40 19.7565 40 24V30"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2602_2338">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const getComputersIcon = (color = "black") => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2602_1549)">
      <path
        d="M40 8H8C6.89543 8 6 8.89543 6 10V30C6 31.1046 6.89543 32 8 32H40C41.1046 32 42 31.1046 42 30V10C42 8.89543 41.1046 8 40 8Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 40H34"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 32V40"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 32V40"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.85718 27.4286H41.1429"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2602_1549">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const getSmartWatchesIcon = (color = "black") => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2602_2366)">
      <path
        d="M30 12H18C14.6863 12 12 14.6863 12 18V30C12 33.3137 14.6863 36 18 36H30C33.3137 36 36 33.3137 36 30V18C36 14.6863 33.3137 12 30 12Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 36V42H30V36"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 12V6H30V12"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="20.7144"
        y1="18"
        x2="20.7144"
        y2="29"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="24.7144"
        y1="23"
        x2="24.7144"
        y2="29"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="28.7144"
        y1="21"
        x2="28.7144"
        y2="29"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2602_2366">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const getIconBasedOnCategory = (category, color) => {
  switch (category) {
    case "smartphones":
      return getSmartphonesIcon(color);
    case "laptops":
      return getComputersIcon(color);
    case "headphones":
      return getHeadphonesIcon(color);
    case "smartwatches":
      return getSmartWatchesIcon(color);
    default:
      return null;
  }
};
