import React, { useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "../styles/Errors.scss";

const Errors = () => {
  useEffect(() => {
    document.title = "404 | Berita PTI";
  }, []);

  return (
    <Flex
      minH="calc(100vh - 14rem)"
      w="100%"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDir="column"
        w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }}
      >
        <Box textAlign="center">
          <Flex
            flexDir="column"
            className="glitched"
            fontSize={{ base: "5rem", md: "8rem" }}
            color="var(--sec-color)"
            fontWeight="700"
            mb={{ base: "5rem", md: "8rem" }}
            justifyContent="center"
          >
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
          </Flex>
          <Heading
            color="var(--sec-color)"
            fontWeight="500"
            fontSize={{ base: "2rem", md: "2.5rem" }}
          >
            Ooops you're on the wrong way
          </Heading>
          <Text
            color="#626F7E"
            fontWeight="400"
            fontSize={{ base: "0.8rem", md: "1.2rem" }}
            mt="1rem"
            mb="1rem"
          >
            The page you are looking for could not be found. Please return to
            the previous page or try to browse other pages.
          </Text>
          <NavLink to="/">
            <Text
              className="navigasi"
              fontSize={{ base: "0.8rem", md: "1.2rem" }}
            >
              Back to Home
            </Text>
          </NavLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Errors;

const ErrorIlust = (props) => {
  return (
    <svg
      width={props.width || "auto"}
      height={props.height || "auto"}
      viewBox="0 0 555 402"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.9044 101.152H478.094C485.836 101.152 493.261 104.227 498.735 109.702C504.21 115.176 507.285 122.601 507.285 130.343V368.647H58.6519V130.343C58.6518 126.505 59.4089 122.704 60.8797 119.158C62.3506 115.612 64.5063 112.392 67.2234 109.68C69.9405 106.969 73.1658 104.82 76.7145 103.356C80.2633 101.893 84.0658 101.144 87.9044 101.152V101.152Z"
        fill="white"
      />
      <path
        d="M507.286 369.561H58.6528C58.4105 369.561 58.1781 369.464 58.0068 369.293C57.8355 369.122 57.7393 368.889 57.7393 368.647V130.343C57.7446 122.355 60.9203 114.696 66.5687 109.047C72.2172 103.399 79.8766 100.223 87.8647 100.218H478.095C486.081 100.229 493.737 103.406 499.385 109.053C505.032 114.701 508.209 122.357 508.22 130.343V368.647C508.215 368.891 508.114 369.123 507.939 369.294C507.765 369.465 507.53 369.561 507.286 369.561V369.561ZM59.6272 367.713H506.352V130.343C506.347 122.851 503.368 115.666 498.07 110.368C492.772 105.07 485.587 102.091 478.095 102.086H87.9053C80.4106 102.091 73.2242 105.069 67.9227 110.367C62.6213 115.664 59.6379 122.849 59.6272 130.343V367.713Z"
        fill="#231F20"
      />
      <path
        d="M479.251 125.126H86.7476V368.647H479.251V125.126Z"
        fill="#55697E"
      />
      <path
        d="M544.679 369.681H21.3001C21.143 369.726 20.9777 369.734 20.817 369.704C20.6564 369.674 20.5049 369.608 20.3745 369.509C20.2441 369.411 20.1382 369.283 20.0654 369.137C19.9925 368.991 19.9546 368.83 19.9546 368.666C19.9546 368.503 19.9925 368.342 20.0654 368.196C20.1382 368.049 20.2441 367.922 20.3745 367.824C20.5049 367.725 20.6564 367.659 20.817 367.629C20.9777 367.599 21.143 367.607 21.3001 367.651H544.679C544.836 367.607 545.001 367.599 545.162 367.629C545.322 367.659 545.474 367.725 545.604 367.824C545.735 367.922 545.841 368.049 545.913 368.196C545.986 368.342 546.024 368.503 546.024 368.666C546.024 368.83 545.986 368.991 545.913 369.137C545.841 369.283 545.735 369.411 545.604 369.509C545.474 369.608 545.322 369.674 545.162 369.704C545.001 369.734 544.836 369.726 544.679 369.681V369.681Z"
        fill="#231F20"
      />
      <path
        d="M12.0437 368.647H553.936C553.936 377.261 550.514 385.523 544.423 391.614C538.332 397.705 530.07 401.127 521.456 401.127H44.4021C35.7878 401.127 27.5263 397.705 21.4351 391.614C15.3439 385.523 11.9219 377.261 11.9219 368.647H12.0437Z"
        fill="white"
      />
      <path
        d="M521.515 402H44.4618C35.6228 401.984 27.1507 398.464 20.9025 392.212C14.6543 385.96 11.1396 377.486 11.1289 368.647C11.1288 368.402 11.2244 368.168 11.3952 367.993C11.5659 367.819 11.7983 367.718 12.0424 367.713H553.935C554.181 367.718 554.415 367.818 554.589 367.992C554.763 368.166 554.863 368.401 554.869 368.647C554.858 377.489 551.34 385.966 545.088 392.219C538.835 398.472 530.358 401.989 521.515 402V402ZM12.9965 369.52C13.2444 377.707 16.6695 385.477 22.5464 391.184C28.4233 396.89 36.2905 400.085 44.4821 400.092H521.536C529.726 400.08 537.59 396.883 543.466 391.178C549.342 385.473 552.768 377.706 553.021 369.52H12.9965Z"
        fill="#231F20"
      />
      <path d="M326.939 368.647H239.06V376.747H326.939V368.647Z" fill="black" />
      <path
        d="M105.099 149.384C108.72 149.384 111.656 146.449 111.656 142.827C111.656 139.206 108.72 136.271 105.099 136.271C101.478 136.271 98.542 139.206 98.542 142.827C98.542 146.449 101.478 149.384 105.099 149.384Z"
        fill="#231F20"
      />
      <path
        d="M127.307 149.384C130.929 149.384 133.864 146.449 133.864 142.827C133.864 139.206 130.929 136.271 127.307 136.271C123.686 136.271 120.75 139.206 120.75 142.827C120.75 146.449 123.686 149.384 127.307 149.384Z"
        fill="white"
      />
      <path
        d="M149.536 149.384C153.157 149.384 156.093 146.449 156.093 142.827C156.093 139.206 153.157 136.271 149.536 136.271C145.915 136.271 142.979 139.206 142.979 142.827C142.979 146.449 145.915 149.384 149.536 149.384Z"
        fill="white"
      />
      <path
        d="M478.967 159.92H87.0121C86.7429 159.92 86.4847 159.813 86.2944 159.623C86.104 159.433 85.9971 159.175 85.9971 158.905C85.9971 158.636 86.104 158.378 86.2944 158.188C86.4847 157.997 86.7429 157.89 87.0121 157.89H478.967C479.237 157.89 479.495 157.997 479.685 158.188C479.875 158.378 479.982 158.636 479.982 158.905C479.982 159.175 479.875 159.433 479.685 159.623C479.495 159.813 479.237 159.92 478.967 159.92Z"
        fill="white"
      />
      <path
        d="M167.237 300.479C166.221 300.607 165.193 300.346 164.361 299.748C163.529 299.15 162.954 298.259 162.751 297.255C162.548 296.25 162.732 295.206 163.267 294.332C163.802 293.458 164.647 292.818 165.634 292.541C202.746 276.758 242.66 268.623 282.989 268.623C323.318 268.623 363.232 276.758 400.344 292.541C400.844 292.752 401.297 293.059 401.679 293.445C402.06 293.831 402.361 294.288 402.566 294.79C402.77 295.293 402.874 295.83 402.871 296.373C402.867 296.915 402.757 297.452 402.547 297.951C402.336 298.451 402.029 298.905 401.643 299.286C401.257 299.667 400.8 299.969 400.298 300.173C399.796 300.378 399.258 300.481 398.715 300.478C398.173 300.475 397.637 300.365 397.137 300.154C361.038 284.807 322.215 276.897 282.989 276.897C243.763 276.897 204.94 284.807 168.841 300.154C168.331 300.361 167.788 300.471 167.237 300.479V300.479Z"
        fill="white"
      />
      <path
        d="M64.9041 102.167C64.6904 102.168 64.4826 102.097 64.3154 101.964C64.1012 101.802 63.9583 101.563 63.9166 101.298C63.875 101.033 63.9379 100.762 64.0921 100.543C67.7258 95.5692 72.2121 88.3626 68.8626 82.638C68.7594 82.4546 68.6441 82.2783 68.5175 82.1102C64.8267 86.5683 60.4394 90.4003 55.5254 93.458C52.9253 95.3399 49.7269 96.2063 46.5324 95.894C45.854 95.7565 45.2107 95.4821 44.6418 95.0877C44.0729 94.6933 43.5903 94.1872 43.2235 93.6001C42.7575 92.7594 42.4684 91.8322 42.3742 90.8756C42.2799 89.9191 42.3824 88.9533 42.6754 88.0378C42.843 87.3861 43.0602 86.7482 43.325 86.1296C39.0551 90.4004 34.2273 94.0742 28.9728 97.0511C27.8371 97.7819 26.5061 98.15 25.1564 98.1067C24.072 97.8816 23.09 97.3107 22.3579 96.4797C21.6258 95.6487 21.1831 94.6026 21.0963 93.4986C20.9828 91.5223 21.4035 89.5518 22.3143 87.7942C25.8864 80.0685 31.4248 73.4164 38.3754 68.5035C45.3261 63.5907 53.4451 60.5895 61.9199 59.8003C63.4302 56.0101 63.6373 51.8253 62.5087 47.9044C61.9556 45.9951 60.9167 44.2619 59.4935 42.8743C58.0702 41.4866 56.3113 40.4919 54.3886 39.9874C50.7183 39.5498 47.0025 40.2589 43.7513 42.0174C26.2517 49.9819 11.9481 63.6133 3.15101 80.7095C2.46879 81.7843 2.10295 83.0296 2.09539 84.3026C2.12887 84.5896 2.21982 84.867 2.36282 85.1181C2.50581 85.3692 2.69794 85.589 2.9277 85.7642C3.04599 85.8671 3.18568 85.9423 3.33667 85.9845C3.48766 86.0266 3.64615 86.0346 3.80061 86.0078C4.06981 85.9567 4.3483 86.0146 4.57481 86.1687C4.80133 86.3229 4.95732 86.5608 5.00847 86.83C5.05962 87.0992 5.00172 87.3777 4.84754 87.6042C4.69335 87.8307 4.4555 87.9867 4.1863 88.0378C3.7425 88.1383 3.28219 88.1414 2.8371 88.0467C2.39201 87.9521 1.97273 87.7621 1.60819 87.4897C0.721255 86.7897 0.145226 85.7688 0.00447595 84.6477C-0.0500794 82.9725 0.395111 81.3189 1.28338 79.8975C10.3052 62.3686 24.9739 48.3936 42.919 40.231C46.4512 38.6476 50.6128 37.1048 54.754 37.9574C57.058 38.5177 59.1745 39.6733 60.8916 41.3086C62.6088 42.9438 63.8664 45.0012 64.5387 47.2751C65.7001 51.3452 65.551 55.6776 64.1124 59.6582C65.4522 59.6582 66.792 59.6582 68.1724 59.6582C69.4768 59.6661 70.7593 59.9937 71.9076 60.6123C74.5466 62.2566 74.6887 65.7483 74.5466 67.6768C74.1318 72.2497 72.4907 76.6259 69.7964 80.3441C70.1035 80.7219 70.3817 81.1222 70.6287 81.5418C74.5669 88.2408 69.7355 96.2391 65.7567 101.68C65.6689 101.828 65.5441 101.95 65.3947 102.036C65.2452 102.121 65.0762 102.166 64.9041 102.167ZM61.0267 61.9115C53.0828 62.8283 45.5088 65.7752 39.0342 70.4685C32.5596 75.1617 27.4027 81.4432 24.0602 88.7077C23.3138 90.1405 22.9502 91.7418 23.0046 93.3565C23.0438 94.0199 23.2962 94.6528 23.7241 95.1613C24.1521 95.6697 24.7327 96.0263 25.3797 96.1782C26.3196 96.17 27.2367 95.8878 28.0187 95.3662C36.3621 90.8393 43.0611 83.8154 49.5166 77.0961C53.6578 72.4676 58.3065 67.6768 61.0267 61.9115ZM59.3418 78.1517C58.3056 78.1485 57.2718 78.2505 56.2562 78.4562C53.5815 78.9341 51.0874 80.1315 49.0417 81.9197C46.996 83.7079 45.4759 86.0195 44.6445 88.6062C44.4228 89.2692 44.3355 89.9698 44.3878 90.6669C44.4401 91.3641 44.6309 92.0438 44.949 92.6663C45.1701 93.0272 45.4655 93.3369 45.8155 93.5749C46.1655 93.8129 46.5621 93.9737 46.979 94.0467C49.6235 94.2635 52.2602 93.545 54.4292 92.0167C59.2728 88.9423 63.5681 85.0793 67.1371 80.5877C64.9099 78.8665 62.1554 77.9699 59.3418 78.0502V78.1517ZM59.3418 76.1216C62.5991 76.0315 65.7884 77.0635 68.3754 79.0449C70.7089 75.6805 72.1097 71.7582 72.4354 67.6768C72.4354 66.4994 72.4354 63.6168 70.7505 62.5002C69.8897 62.0618 68.9354 61.8389 67.9694 61.8506C66.4076 61.7593 64.8418 61.7593 63.2801 61.8506C60.5801 68.2046 55.6878 73.4217 51.2827 78.0908C52.7161 77.3894 54.2294 76.8645 55.7893 76.5276C56.9393 76.2375 58.1162 76.0675 59.3012 76.0201L59.3418 76.1216Z"
        fill="#D1D3D4"
      />
      <path
        d="M110.352 90.9898C110.186 90.8556 110.07 90.6685 110.025 90.4596C109.962 90.1988 110.003 89.9237 110.138 89.6922C110.274 89.4608 110.495 89.2911 110.753 89.2189C116.716 87.6749 124.754 84.9439 125.791 78.393C125.827 78.1857 125.85 77.9762 125.858 77.766C120.178 78.8752 114.356 79.0587 108.617 78.3094C105.413 78.1172 102.39 76.7602 100.117 74.494C99.6792 73.9577 99.3555 73.3378 99.1654 72.6721C98.9753 72.0065 98.9229 71.3091 99.0112 70.6225C99.1836 69.6769 99.5476 68.7765 100.081 67.9769C100.614 67.1772 101.306 66.4952 102.113 65.9727C102.655 65.5749 103.228 65.2191 103.824 64.9084C97.8148 65.5057 91.7521 65.2876 85.801 64.26C84.4594 64.1055 83.1965 63.5467 82.1799 62.6577C81.4838 61.7964 81.0861 60.7324 81.0464 59.6256C81.0068 58.5189 81.3274 57.4291 81.96 56.5201C83.1247 54.9194 84.699 53.662 86.5175 52.8797C94.1769 49.1677 102.677 47.5324 111.167 48.1375C119.657 48.7426 127.839 51.5669 134.895 56.3277C138.465 54.3531 141.278 51.2474 142.89 47.4992C143.672 45.6719 143.967 43.6728 143.746 41.6974C143.524 39.7219 142.794 37.8378 141.627 36.2289C139.065 33.5643 135.741 31.7578 132.112 31.0574C113.528 26.127 93.8247 27.6056 76.1847 35.2542C74.9758 35.6532 73.9036 36.3845 73.0909 37.3644C72.9349 37.6077 72.8294 37.8799 72.7809 38.1647C72.7324 38.4496 72.7417 38.7413 72.8083 39.0225C72.8346 39.1771 72.895 39.3238 72.9851 39.4521C73.0752 39.5804 73.1927 39.687 73.3292 39.7642C73.5698 39.8952 73.7485 40.1165 73.826 40.3793C73.9035 40.6422 73.8734 40.925 73.7424 41.1656C73.6113 41.4063 73.39 41.585 73.1272 41.6625C72.8644 41.74 72.5815 41.7099 72.3409 41.5789C71.9339 41.3753 71.5759 41.0859 71.2916 40.7306C71.0073 40.3753 70.8034 39.9626 70.6941 39.5209C70.4517 38.4173 70.6531 37.2626 71.2548 36.3062C72.2744 34.9758 73.6668 33.9789 75.2547 33.4424C93.3427 25.6015 113.546 24.0886 132.6 29.1481C136.336 30.162 140.533 31.6061 143.196 34.8903C144.623 36.784 145.527 39.0192 145.819 41.3724C146.111 43.7256 145.78 46.1141 144.859 48.299C143.178 52.1834 140.316 55.44 136.681 57.6073C137.717 58.4564 138.754 59.3056 139.821 60.1805C140.825 61.0133 141.61 62.0795 142.106 63.2858C143.105 66.2303 141.002 69.0212 139.67 70.4228C136.451 73.6971 132.408 76.042 127.967 77.2104C127.965 77.6973 127.927 78.1833 127.852 78.6644C126.652 86.3421 117.846 89.4668 111.32 91.1533C111.158 91.2121 110.984 91.228 110.814 91.1993C110.645 91.1707 110.485 91.0985 110.352 90.9898ZM132.866 57.3946C126.14 53.069 118.414 50.5481 110.431 50.0749C102.449 49.6017 94.4786 51.1921 87.2889 54.6928C85.8035 55.328 84.5074 56.3362 83.5261 57.6196C83.136 58.1576 82.93 58.8072 82.9388 59.4717C82.9476 60.1362 83.1707 60.7801 83.5749 61.3076C84.3071 61.8969 85.1954 62.2599 86.1308 62.352C95.4536 64.1383 105.087 62.9511 114.339 61.845C120.476 60.8895 127.108 60.13 132.866 57.3946ZM121.27 68.8886C120.47 68.2294 119.606 67.6531 118.69 67.1685C116.318 65.8431 113.63 65.1885 110.915 65.2752C108.199 65.3618 105.558 66.1864 103.275 67.6604C102.684 68.0327 102.172 68.5193 101.771 69.0917C101.369 69.664 101.086 70.3107 100.938 70.9938C100.88 71.4131 100.912 71.8399 101.032 72.2458C101.152 72.6517 101.357 73.0275 101.633 73.3482C103.541 75.1919 106.036 76.3073 108.682 76.4997C114.378 77.1915 120.148 76.9258 125.756 75.7134C125.124 72.9706 123.561 70.5312 121.334 68.8101L121.27 68.8886ZM122.556 67.3184C125.133 69.3131 126.946 72.1327 127.691 75.3049C131.629 74.1814 135.198 72.0353 138.037 69.0848C138.783 68.174 140.61 65.9443 140.014 64.0128C139.626 63.1281 139.029 62.3508 138.275 61.7477C137.125 60.6872 135.913 59.6948 134.647 58.7756C128.532 61.9793 121.441 62.9141 115.075 63.7337C116.628 64.0997 118.131 64.6528 119.551 65.3809C120.625 65.8853 121.643 66.4997 122.589 67.2141L122.556 67.3184Z"
        fill="#D1D3D4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M212.775 246.854C209.573 246.856 206.54 244.6 205.435 241.12C204.358 237.729 205.283 234.521 208.476 232.561C210.862 231.097 213.522 229.889 216.217 229.194C220.253 228.154 223.28 231.437 222.572 235.582C222.023 238.788 220.711 241.621 218.728 244.143C217.311 245.945 215.463 246.914 212.775 246.854Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M233.302 224.293C228.351 224.324 226.234 221.667 226.909 217.725C227.426 214.702 228.673 212.029 230.472 209.609C232.416 206.994 235.047 206.081 238.159 206.817C241.32 207.566 243.366 209.673 244.156 212.802C244.9 215.751 244.171 218.419 241.73 220.381C238.955 222.613 235.875 224.148 233.302 224.293Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M236.664 246.854C239.866 246.856 242.899 244.6 244.004 241.12C245.082 237.729 244.156 234.521 240.963 232.561C238.578 231.098 235.917 229.889 233.222 229.194C229.187 228.154 226.159 231.437 226.868 235.582C227.416 238.788 228.728 241.621 230.712 244.143C232.128 245.945 233.977 246.914 236.664 246.854Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M216.138 224.293C221.088 224.324 223.205 221.667 222.53 217.725C222.013 214.702 220.766 212.029 218.967 209.609C217.023 206.994 214.392 206.081 211.281 206.817C208.119 207.566 206.073 209.673 205.284 212.802C204.54 215.751 205.268 218.419 207.709 220.381C210.484 222.612 213.564 224.148 216.138 224.293Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M329.346 246.854C326.145 246.856 323.111 244.6 322.006 241.12C320.929 237.729 321.854 234.521 325.048 232.561C327.433 231.097 330.093 229.889 332.788 229.194C336.824 228.154 339.852 231.437 339.143 235.582C338.595 238.788 337.282 241.621 335.299 244.143C333.883 245.945 332.034 246.914 329.346 246.854Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M349.873 224.293C344.922 224.324 342.805 221.667 343.48 217.725C343.998 214.702 345.244 212.029 347.043 209.609C348.987 206.994 351.619 206.081 354.73 206.817C357.891 207.566 359.937 209.673 360.727 212.802C361.471 215.751 360.742 218.419 358.301 220.381C355.527 222.613 352.446 224.148 349.873 224.293Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M353.236 246.854C356.437 246.856 359.471 244.6 360.576 241.12C361.653 237.729 360.727 234.521 357.534 232.561C355.149 231.098 352.489 229.889 349.793 229.194C345.758 228.154 342.73 231.437 343.439 235.582C343.987 238.788 345.3 241.621 347.283 244.143C348.699 245.945 350.548 246.914 353.236 246.854Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M332.709 224.293C337.66 224.324 339.777 221.667 339.102 217.725C338.584 214.702 337.338 212.029 335.538 209.609C333.595 206.994 330.963 206.081 327.852 206.817C324.691 207.566 322.645 209.673 321.855 212.802C321.111 215.751 321.84 218.419 324.281 220.381C327.055 222.612 330.136 224.148 332.709 224.293Z"
        fill="white"
      />
    </svg>
  );
};
