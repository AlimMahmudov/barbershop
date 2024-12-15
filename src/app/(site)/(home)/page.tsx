// import HomePage from "@/appPages/site/pages/home/HomePage";
// import { Metadata } from "next";
// import Head from "next/head";
// import React from "react";

// export const metadata: Metadata = {
//   title: "Барбершоп в Бишкеке - Твой стиль, твоя уверенность",
//   description:
//     "Идеальная стрижка и уход для мужчин в Бишкеке. Запишись онлайн в наш барбершоп и наслаждайся профессионализмом мастеров. Создаем стиль, который подчеркивает твою индивидуальность.",
//   keywords:
//     "барбершоп Бишкек, мужские стрижки, уход за бородой, стильные стрижки, барберы Бишкек, профессиональные барберы",
//   robots: "index,follow",
// };

// const page = () => {
//   return (
//     <>
//       <Head>
//         <meta
//           name="title"
//           content="Барбершоп в Бишкеке - Твой стиль, твоя уверенность"
//         />
//         <meta
//           name="description"
//           content="Идеальная стрижка и уход для мужчин в Бишкеке. Запишись онлайн в наш барбершоп и наслаждайся профессионализмом мастеров. Создаем стиль, который подчеркивает твою индивидуальность."
//         />
//         <meta
//           name="keywords"
//           content="барбершоп Бишкек, мужские стрижки, уход за бородой, стильные стрижки, барберы Бишкек, профессиональные барберы"
//         />
//         <title>Барбершоп в Бишкеке - Твой стиль, твоя уверенность</title>
//         <link rel="canonical" href="https://yourbarbershop.kg" />
//       </Head>
//       <HomePage />
//     </>
//   );
// };

// export default page;

import HomePage from "@/appPages/site/pages/home/HomePage";
import React from "react";

const page = () => <HomePage />;

export default page;
