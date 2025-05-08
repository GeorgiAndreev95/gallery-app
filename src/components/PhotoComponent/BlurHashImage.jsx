import { useEffect, useRef } from "react";
import { decode } from "blurhash";

function BlurHashImage({ hash, width = 32, height = 32 }) {
    const canvasRef = useRef();

    useEffect(() => {
        if (!hash || !canvasRef.current) return;

        const pixels = decode(hash, width, height);
        const ctx = canvasRef.current.getContext("2d");
        const imageData = ctx.createImageData(width, height);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
    }, [hash, width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                inset: 0,
                objectFit: "cover",
                zIndex: 1,
            }}
        />
    );
}

export default BlurHashImage;
