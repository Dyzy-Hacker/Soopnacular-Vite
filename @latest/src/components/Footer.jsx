import React from "react";
import icon from "../images/Ico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-cosutm_yellow p-7">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={icon} alt="icon" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Spoonacular
          </span>
        </a>
        <div className="flex justify-end gap-4">
          <p className="font-bold">Socials</p>
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#010101" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#010101" }} />
          <FontAwesomeIcon icon={faWindowRestore} style={{ color: "#010101" }} />
          <FontAwesomeIcon icon={faPinterestP} style={{ color: "#010101" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;




// import React from "react";
// import icon from "../images/Ico.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
// import { faPinterestP } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <div className="bg-cosutm_yellow p-7 fixed bottom-0 w-full">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={icon} alt="icon" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
//             Spoonacular
//           </span>
//         </a>
//         <div className="flex justify-end gap-4 ">
//           <p className="font-bold">Socials</p>
//           <FontAwesomeIcon icon={faYoutube} style={{ color: "#010101" }} />
//           <FontAwesomeIcon icon={faTwitter} style={{ color: "#010101" }} />
//           <FontAwesomeIcon icon={faWindowRestore} style={{ color: "#010101" }} />
//           <FontAwesomeIcon icon={faPinterestP} style={{ color: "#010101" }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
