import { useEffect, useRef } from "react";
import { decode } from "blurhash";

import classes from "./BlurHashImage.module.css";

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
            className={classes.blurHashImage}
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
}

export default BlurHashImage;
