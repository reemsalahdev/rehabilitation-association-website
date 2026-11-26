// import News from "./News";
// import AddForm from "./AddForm";
// import Home from "./Home";

// function AdminDashboard() {
//   return (
//     <Router>
//       <SrolltoTopPages/>
//       <Routes>
//         <Route path="*" element={
//           // <Layout>
//             <div className="font-sans container mx-auto w-[70%]">
//               <Header />
//               <Routes>
//                 {/* <Route path="/admin" element={<AdminDashboard />} /> */}
//                   <Route path="/admin/news" element={<News />} />
//                 <Route path="/admin/addForm" element={<AddForm />} />
                
//               </Routes>
//               <ScrollToTopButton />
//               <Footer />
//             </div>
//           // </Layout>
//         }/>
//       </Routes>
//     </Router>
//   );
// }

// export default AdminDashboard;

import React, { useState } from "react";
import Home from "./Home";
import {
  FaHome,
  FaNewspaper,
  FaProjectDiagram,
  FaHandsHelping,
  FaCertificate,
  FaBookOpen,
  FaVideo,
  FaImage,
  FaRegChartBar,
  FaChild,
  FaTags,
  FaCog,
} from "react-icons/fa";
import News from "./News";
import AddForm from "./AddForm";
import Programm from "./Programm";
// import Header from "./Header";
// import Footer from "./Footer";
// import ScrollToTopButton from "./ScrollToTopButton";

const items = [
  { title: "الرئيسية", icon: <FaHome />, key: "home" },
  { title: "إضافة خبر", icon: <FaNewspaper />, key: "addForm" },
  { title: "كل الأخبار", icon: <FaNewspaper />, key: "news" },
  { title: "مشاريع", icon: <FaProjectDiagram /> },
  { title: "برامج الجمعية", icon: <FaHandsHelping /> , key: "program" },
  { title: "مدرسة بيسان الخاصة", icon: <FaChild /> },
  { title: "شهادات", icon: <FaCertificate /> },
  { title: "دراسات ومقالات", icon: <FaBookOpen /> },
  { title: "فيديو", icon: <FaVideo /> },
  { title: "صور", icon: <FaImage /> },
  { title: "تقارير سنوية", icon: <FaRegChartBar /> },
  { title: "تصنيفات", icon: <FaTags /> },
  { title: "الإعدادات", icon: <FaCog /> },
];

function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "news":
        return <News />;
      case "addForm":
        return <AddForm />;

        case "program":
        return <Programm />;

      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-100" dir="rtl">
      <main className="flex-1 p-8">
        {/* <Header /> */}
        <div className="my-4">{renderContent()}</div>
        {/* <ScrollToTopButton /> */}
        {/* <Footer /> */}
      </main>

      {/* الشريط الجانبي */}
      <aside className="w-64 bg-[rgb(31,171,232)] text-white flex flex-col py-6 px-4">
        <h1 className="text-2xl font-bold mb-8 tracking-wider">لوحة التحكم</h1>
        <nav className="flex flex-col gap-8 text-sm">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => item.key && setCurrentPage(item.key)}
              className="flex items-center justify-start gap-3 p-1.5 hover:text-black transition text-start"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
}

const DashboardHome = () => (
  <div>
    <Home/>
  </div>
);

export default AdminDashboard;

