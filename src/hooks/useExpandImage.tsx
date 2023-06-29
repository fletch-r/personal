import React from 'react'

type ReferenceImageDimensions = {
    /** x position on the screen */
    x: number;
    /** y position on the screen */
    y: number;
    /** width of reference image */
    width: number;
    /** height of reference image */
    height: number;
};

/**
 * Add this ref to an image. When clicking the image a larger expanded will animate
 *
 * @param {boolean} show When to show the expanded image.
 */
export default function useExpandImage(show: boolean, scale = 1.2): [React.RefObject<HTMLImageElement>, React.FC] {
    const ref = React.useRef<HTMLImageElement>(null);
    const img = React.useRef<HTMLImageElement>(null);

    const [refSrc, setRefSrc] = React.useState('');
    const [refAlt, setRefAlt] = React.useState('');
    const [refDimensions, setRefDimensions] = React.useState<ReferenceImageDimensions>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    React.useEffect(() => {
        if (ref.current) {
            setRefSrc(ref.current.src);
            setRefAlt(ref.current.alt)
            const refBoundingClient = ref.current.getBoundingClientRect();
            setRefDimensions(refBoundingClient);
        }
    }, [ref.current, show]);

    React.useEffect(() => {
        if (img.current) {
            img.current.animate([
                {
                    top: `${refDimensions.y}px`,
                    left: `${refDimensions.x}px`,
                    transform: 'scale(1)',
                },
                {
                    top: `50%`,
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${scale})`,
                }
            ], { duration: 200 });
        }
    }, [img.current]);

    const ExpandedImage = React.useMemo(() => {
        const image: React.FC = () => (
            <img
                ref={img}
                src={refSrc}
                alt={refAlt}
                className="rounded shadow-md fixed z-50 transition-[top] ease-in-out"
                style={{
                    top: `50%`,
                    left: '50%',
                    width: `${refDimensions.width}px`,
                    height: `${refDimensions.height}px`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                }}
            />
        )
        return image;
    }, [refDimensions, img, refSrc]);

    return [
        ref,
        ExpandedImage
    ];
}