import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  const [ref1Height, setRef1Height] = useState();
  const [ref2Height, setRef2Height] = useState();
  const [hieghtExceeds, setHieghtExceeds] = useState(false);

  const description =
    "Lorem ipsum dolor sit, amet consectetur adipis";

  useEffect(() => {
    const handleResize = () => {
      if (ref1.current) {
        setRef1Height(ref1.current.offsetHeight);
      }
      if (ref2.current) {
        setRef2Height(ref2.current.offsetHeight);
      }
    };

    handleResize(); // Initial measurement

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("ref1 height = ", ref1Height);
  console.log("ref2 height = ", ref2Height);
  console.log("Height exceeds = ", hieghtExceeds);

  useEffect(() => {
    if (ref1Height !== undefined || ref1Height !== null) {
      if (ref2Height !== undefined || ref2Height !== null) {
        if (ref1Height > ref2Height) {
          setHieghtExceeds(true);
        } else {
          setHieghtExceeds(false);
        }
      }
    }
  }, [ref1Height, ref2Height, description]);


  // Bhai ek baar global css check kr custom css daala hua hai
  return (
    <div className="flex flex-col h-screen py-24 w-screen gap-10">
      <div ref={ref2} className={`max-w-[1000px] relative mx-auto w-full border ${expand ? `h-fit` : `description`}`}>
        {description}
        <div ref={ref1} className="absolute top-0 left-0">{description}</div>
      </div>
      {hieghtExceeds && <button onClick={() => { setExpand(!expand) }} className="w-fit px-4 mx-auto"> {expand ? "See Less" : "See More"}</button>}
    </div >
  );
}
