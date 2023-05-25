import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [expand, setExpand] = useState(false);
    const [heightExcede, setheightExcede] = useState(false);
    const ref1 = useRef();

    useEffect(() => {
        const offsetHeight = ref1.current.offsetHeight;
        const scrollHeight = ref1.current.scrollHeight;
        console.log("inner height = ", innerHeight);

        console.log(offsetHeight, scrollHeight);
        if (scrollHeight > offsetHeight) {
            setheightExcede(true);
        } else {
            if (!expand) {
                setheightExcede(false);
            }
        }
    }, [expand]);


    // console.log("inner height = ", innerHeight);
    // console.log("Outer height = ", outerHeight);
    // console.log("Height exceeds = ", hieghtExceeds);

    return (

        <div className="flex flex-col min-h-screen w-screen bg-black text-white gap-10 justify-center items-center ">
            <div
                className={`mx-auto w-1/2 break-words ${expand ? "h-fit" : "line-clamp-1 overflow-hidden"
                    }`}
                ref={ref1}
            >
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor dolores corporis vitae voluptas modi iure fugiat ratione!
                Mollitia, accusamus quaerat possimus veniam sapiente id temporibus eum
                neque culpa debitis nam quas cumque dolore perspiciatis. Maiores iure
                porro voluptatibus tempora id numquam est ratione facere! Asperiores a,
                perferendis cupiditate distinctio voluptates debitis dolorum cumque nemo
                necessitatibus obcaecati illum, veritatis magnam possimus?
            </div>
            {heightExcede && (
                <button
                    onClick={() => {
                        setExpand(!expand);
                    }}
                    className=""
                >
                    {expand ? "See less" : "See more"}
                </button>
            )}
        </div>

    );
}