// "use client";
// import { useRef, useState, useEffect } from "react";

// export const useIntersectionObserver = () => {
//   const ref = useRef();
//   const [inView, setInView] = useState(false);

//   let callback = (entries: any, observer: any) => {
//     entries.forEach((entry: any) => {
//       if (entry.isIntersecting) {
//         setInView(true);
//       }
//     });
//   };

//   useEffect(() => {
//     let observer = new IntersectionObserver(callback);
//     if (ref?.current) {
//       observer.observe(ref.current);
//     }
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return [ref, inView];
// };
