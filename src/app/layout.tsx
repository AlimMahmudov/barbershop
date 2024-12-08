import type { Metadata } from "next";
import "./globals.scss";
import LayoutSlice from "@/appPages/site/layout/LayoutSlice";
import { gilroy } from "@/constants/fonts/fonts";
// import { SEO_DESCRIPTION, SITE_NAME } from "@/constants/seo/seo.constants";

// export const metadata: Metadata = {
// 	title: {
// 		default: SITE_NAME,
// 		template: `%s | ${SITE_NAME}`,
// 	},
// 	description:
// 	SEO_DESCRIPTION
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilroy.variable}>
        <LayoutSlice>{children}</LayoutSlice>
      </body>
    </html>
  );
}
