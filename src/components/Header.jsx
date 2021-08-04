import Title from "./Title"
import Notice from "./Notice"

export default function Header({title}) {
    return (
        <>
            <div className="z-10 w-full relative flex justify-center bg-gray-300">
                <div className="absolute left-4">
                    <Notice />
                </div>
                <div>
                    <Title title={title} />
                </div>
            </div>
        </>
    )
}