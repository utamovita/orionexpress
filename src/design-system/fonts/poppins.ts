import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/poppins/poppins-medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/poppins/poppins-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/poppins/poppins-medium.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});
