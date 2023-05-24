import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const innerDiv = useRef();
  const outerDiv = useRef();
  const [innerHeight, setInnerHeight] = useState();
  const [outerHeight, setOuterHeight] = useState();
  const [hieghtExceeds, setHieghtExceeds] = useState(false);

  const description =
    "Lorem ipsum dolor sit, amet consectetur adipisicinglit.Ipsa numquam nesciunt aliquam nisi hic minima quisquam provident adipisci quod neque deleniti officia illum ipsam sit suscipit iure voluptate, laboriosam tenetur magnam fugit velit sed maxime eligendi. Quibusdam molestiae ab voluptatibus enim officiis itaque quam, maxime veritatis corporis, nemo sapiente quidem vero commodi minus, sint ipsa error laboriosam cumque assumenda. Delectus maiores sed possimus omnis facere a, magnam illo eos, ab error fugit quod, vitae non. Numquam quidem nemo beatae repellat dolorem, sit, error distinctio, quo consequuntur eaque reprehenderit iste animi? Atque, qui rem impedit ex nobis provident harum illo vitae!esdcsc";

  useEffect(() => {
    const handleResize = () => {
      if (innerDiv.current) {
        setInnerHeight(innerDiv.current.offsetHeight);
      }
      if (outerDiv.current) {
        setOuterHeight(outerDiv.current.offsetHeight);
      }
    };

    handleResize(); // Initial measurement

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("inner height = ", innerHeight);
  console.log("Outer height = ", outerHeight);
  console.log("Height exceeds = ", hieghtExceeds);

  useEffect(() => {
    if (innerHeight !== undefined || innerHeight !== null) {
      if (outerHeight !== undefined || outerHeight !== null) {
        if (innerHeight > outerHeight) {
          setHieghtExceeds(true);
        } else {
          setHieghtExceeds(false);
        }
      }
    }
  }, [innerHeight, outerHeight, description]);

  return (
    <div className="flex flex-col h-screen py-24 w-screen gap-10">
      <div className="max-w-[1000px] relative mx-auto w-full border">
        <div
          ref={innerDiv}
          className={`max-w-[1000px] ${
            !expand ? `h-fit` : `h-7 overflow-hidden`
          } text-justify mx-auto w-full border`}
        >
          {description}
        </div>
        <div
          ref={outerDiv}
          className={`h-7 text-justify overflow-hidden opacity-0 border absolute top-0 max-w-[1000px] mx-auto w-full`}
        >
          {description}
        </div>
      </div>
      {hieghtExceeds && (
        <button
          onClick={() => setExpand(!expand)}
          className="w-fit z-20 mx-auto border px-10 py-1"
        >
          {expand ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}
