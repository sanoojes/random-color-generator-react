import { useState } from "react";
import Button from "./Button";
import copy from "copy-to-clipboard";

const RandomColor = () => {
    const [colorType, setColorType] = useState<string>("Hex");
    const [color, setColor] = useState<string>("#000000");
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const randomInt = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    function generateRandomHexColor() {
        const letters = "0123456789ABCDEF";
        let HexColor = "#";
        for (let i = 0; i < 6; i++) {
            HexColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(HexColor);
    }

    function generateRandomRgbColor() {
        setColor(
            `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
                0,
                255
            )})`
        );
    }

    function handleCopyColor() {
        copy(color);
        setIsCopied(true);
    }

    return (
        <div
            className="w-screen h-screen flex justify-center items-center p-4 gap-4 flex-col"
            style={{ backgroundColor: color }}
        >
            <div className="flex gap-4 items-center justify-center bg-neutral-950 bg-opacity-50 p-4 rounded-xl border-2 border-white w-full max-w-screen-md">
                <Button
                    onClick={() => {
                        setColorType("Hex");
                        generateRandomHexColor();
                        setIsCopied(false);
                    }}
                >
                    Create Hex Color
                </Button>
                <Button
                    onClick={() => {
                        setColorType("Rgb");
                        generateRandomRgbColor();
                        setIsCopied(false);
                    }}
                >
                    Create RGB Color
                </Button>
                <Button
                    onClick={
                        colorType === "Hex"
                            ? generateRandomHexColor
                            : generateRandomRgbColor
                    }
                >
                    Randomise Color
                </Button>
            </div>
            <div className="flex gap-4 bg-neutral-950 bg-opacity-50 p-4 rounded-xl border-2 border-white flex-col w-full text-base text-gray-50 font-bold justify-center items-center max-w-screen-md">
                <h1 className="text-xl">{colorType} Color</h1>
                <p>{color}</p>
                <Button onClick={handleCopyColor}>
                    {isCopied ? "Copied !" : "Copy Color Code"}
                </Button>
            </div>
        </div>
    );
};

export default RandomColor;
