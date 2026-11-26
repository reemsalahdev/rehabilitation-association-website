// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const baseLinkStyle = "block md:px-2 py-4  md:h-full text-white font-bold text-sm";
//   // const baseStyle = "block px-1 py-2  text-black font-bold text-sm";
//   const activeStyle = "bg-[rgb(31,171,232)] text-white font-bold ";


//   return (
//       <header
//       className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all  duration-300  text-white text-sm bg-[#5a2f00] ${
//          isScrolled ?'w-[72%]': 'w-full shadow-md' 
//         }`}
//       >
//         <div className="flex md:hidden mt-4 ">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       <div className="flex justify-between px-8">
        

//         <nav className={`${isMenuOpen ? "flex flex-row flex-wrap  bg-[#5a2f00] " : "hidden"} md:flex gap-6 w-full md:w-auto mt-4 md:mt-0`}> 
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }
//           >
//             الرئيسية
//           </NavLink>

          
//         {/* حول الجمعية */}
//         <div className="relative group">
//           <NavLink
//             to="/home"
//             className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }
//           >
//             حول الجمعية
//           </NavLink>
//           <div className="absolute right-0  w-56 bg-[#5a2f00] shadow-lg hidden group-hover:block z-10">
//             <ul className="text-right space-y-1">
//               {[
//                 { name: "رسالتنا", path: "/home/message" },
//                 { name: "الأهداف", path: "/home/goals" },
//                 // { name: "هيكلية المؤسسة", path: "/structure" },
//                 { name: "النظام الأساسي", path: "/home/regulation" },
//                 { name: "الخطة الإستراتيجية", path: "/home/strategicPlan" },
//                 { name: "مبادئ وسياسات", path: "/home/principles" },
//                 { name: "الشركاء والداعون", path: "/home/partners" },
//                 // { name: "النواتج الداخلية", path: "/outputs" },
//                 { name: "مجلس الإدارة", path: "/home/board" },
//                 { name: "التقارير السنوية", path: "/home/reports" },
//               ].map((item, i) => (
//                 <li key={i}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `${baseLinkStyle} text-white ${
//                         isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>


//   {/* إصدارات */}
//         <div className="relative group">
//           <NavLink
//             to="/publications/programms"
//             className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }
//           >
//             إصدارات
//           </NavLink>
//           <div className="absolute right-0  w-56 bg-[#5a2f00] shadow-lg hidden group-hover:block z-10">
//             <ul className="text-right space-y-1">
//               {[
//                 { name: "برامج الجمعية", path: "/publications/programms" },
//                 { name: "مدرسة بيسان الخاصة", path: "/publications/besan" },
//                 { name: "نشرات", path: "/publications/bulletins" },
//               ].map((item, i) => (
//                 <li key={i}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `${baseLinkStyle} text-white ${
//                         isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//            {/* مكتبة الوسائط */}
//         <div className="relative group">
//           <NavLink
//             to="/PhotoAlbum"
//             className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }
//           >
//             مكتبة الوسائط
//           </NavLink>
//           <div className="absolute right-0  w-56 bg-[#5a2f00] shadow-lg hidden group-hover:block z-10">
//             <ul className="text-right space-y-1">
//               {[
//                 { name: "ألبوم صور", path: "/PhotoAlbum" },
//                 { name: "فيديو", path: "/VideoAlbum" },
//               ].map((item, i) => (
//                 <li key={i}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `${baseLinkStyle} text-white ${
//                         isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//           {/* <Link to="/certificates" className="hover:underline">شهادات</Link> */}
//           <NavLink to="/certificates" className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }
//           >
//             شهادات
//           </NavLink>
//           <NavLink to="/job" className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }>استمارة طلب وظيفة</NavLink>
//           <NavLink to="/contact" className={({ isActive }) =>
//               `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             }>اتصل بنا</NavLink>
//           {/* <a href="#" className="block px-4 py-4  h-full text-white font-bold text-sm hover:bg-[rgb(31,171,232)]">روابط</a> */}
//         </nav>

//         <NavLink to="/English" className={({ isActive }) =>
//               `${baseLinkStyle} text-xs ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)]"}`
//             } >🇬🇧 English</NavLink>
//       </div>
  
//     </header>
//   );
// }

// export default Header;



import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const baseLinkStyle =
  "block md:px-2 py-4 md:h-full font-bold text-sm transition-colors duration-300";
const activeStyle =
  "bg-white text-[rgb(31,171,232)]";
const hoverStyle =
  "hover:bg-white hover:text-[rgb(31,171,232)]";


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const baseLinkStyle = "block md:px-2 py-4  md:h-full bg-[rgb(31,171,232)] text-white font-bold text-sm";
  // const baseStyle = "block px-1 py-2  text-black font-bold text-sm";
  // const activeStyle = "text-white bg-[rgb(31,171,232)]  font-bold ";


  return (
      <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all  duration-300  text-white text-sm bg-[rgb(31,171,232)] ${
         isScrolled ?'w-[72%]': 'w-full shadow-md' 
        }`}
      >
        <div className="flex md:hidden mt-4 ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      <div className="flex justify-between px-8">
        

        <nav className={`${isMenuOpen ? "flex flex-row flex-wrap  bg-[rgb(31,171,232]" : "hidden"} md:flex gap-6 w-full md:w-auto mt-4 md:mt-0`}> 
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : hoverStyle}`
            }
          >
            الرئيسية
        </NavLink>


          
        {/* حول الجمعية */}
        <div className="relative group">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : hoverStyle}`
            }
          >
            حول الجمعية
          </NavLink>
          <div className="absolute right-0  w-56 bg-[rgb(31,171,232)] shadow-lg hidden group-hover:block z-10">
            <ul className="text-right space-y-1">
              {[
                { name: "رسالتنا", path: "/home/message" },
                { name: "الأهداف", path: "/home/goals" },
                // { name: "هيكلية المؤسسة", path: "/structure" },
                { name: "النظام الأساسي", path: "/home/regulation" },
                { name: "الخطة الإستراتيجية", path: "/home/strategicPlan" },
                { name: "مبادئ وسياسات", path: "/home/principles" },
                { name: "الشركاء والداعون", path: "/home/partners" },
                // { name: "النواتج الداخلية", path: "/outputs" },
                { name: "مجلس الإدارة", path: "/home/board" },
                { name: "التقارير السنوية", path: "/home/reports" },
              ].map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${baseLinkStyle}  ${
                        isActive ? activeStyle : hoverStyle
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>


  {/* إصدارات */}
        <div className="relative group">
          <NavLink
            to="/publications/programms"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : hoverStyle}`
            }
          >
            إصدارات
          </NavLink>
          <div className="absolute right-0  w-56 bg-[rgb(31,171,232)] shadow-lg hidden group-hover:block z-10">
            <ul className="text-right space-y-1">
              {[
                { name: "برامج الجمعية", path: "/publications/programms" },
                { name: "مدرسة بيسان الخاصة", path: "/publications/besan" },
                { name: "نشرات", path: "/publications/bulletins" },
              ].map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${baseLinkStyle}  ${
                        isActive ? activeStyle : hoverStyle
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

           {/* مكتبة الوسائط */}
        <div className="relative group">
          <NavLink
            to="/PhotoAlbum"
            className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : hoverStyle}`
            }
          >
            مكتبة الوسائط
          </NavLink>
          <div className="absolute right-0  w-56  bg-[rgb(31,171,232)] shadow-lg hidden group-hover:block z-10">
            <ul className="text-right space-y-1">
              {[
                { name: "ألبوم صور", path: "/PhotoAlbum" },
                { name: "فيديو", path: "/VideoAlbum" },
              ].map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${baseLinkStyle}  ${
                        isActive ? activeStyle : hoverStyle
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* <Link to="/certificates" className="hover:underline">شهادات</Link> */}
          <NavLink to="/certificates" className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : hoverStyle}`
            }
          >
            شهادات
          </NavLink>
          <NavLink to="/job" className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-white hover:text-[rgb(31,171,232)]"}`
            }>استمارة طلب وظيفة</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
              `${baseLinkStyle} ${isActive ? activeStyle : "hover:bg-white hover:text-[rgb(31,171,232)]"}`
            }>اتصل بنا</NavLink>
          {/* <a href="#" className="block px-4 py-4  h-full text-white font-bold text-sm hover:bg-[rgb(31,171,232)]">روابط</a> */}
        </nav>

        <NavLink to="/English" className={({ isActive }) =>
              `${baseLinkStyle} text-xs ${isActive ? activeStyle : "hover:bg-[rgb(31,171,232)] "}`
            } >🇬🇧 English</NavLink>
      </div>
  
    </header>
  );
}

export default Header;
