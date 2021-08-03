import { useEffect, useState } from 'react';
import Circle from "react-circle";
import Card from "./Card"

export default function Circlem() {
    //進捗率
    const [progress, setProgress] = useState(0);

    //レンダリング時に進捗率をセット
    useEffect(() => {
        setProgress(80)
    }, []);

    return (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
            <Circle
                progress={progress}           //進捗率
                animationDuration="1s"        //アニメーション時間
            />
            <div className="m-4">
                <div className="rounded-3xl shadow-2xl h-20 w-full p-4  bg-gray-200">
                </div>
            </div>
            <div className="m-4">
                <div className="rounded-3xl shadow-2xl h-20 w-full p-4  bg-gray-200">
                </div>
            </div>
            <div className="m-4">
                <div className="rounded-3xl shadow-2xl h-full w-full p-4  bg-gray-200">
                    <div className="rounded-xl bg-blue-300 h-12 w-12"></div>
                    <div className="rounded-lg bg-gray-200 h-30 w-30"></div>
                </div>
            </div>
        </div>
    );
}

// https://zenn.dev/syu/articles/1cd30810c4363c