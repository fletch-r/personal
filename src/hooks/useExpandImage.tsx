import React from 'react'

type ReferenceImageDimensions = {
    /** x position of the reference image on the page */
    x: number;
    /** y position of the reference image on the page */
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
 * @param {number} scale Set the scale value about you want your expanded image to grow by. Defaulted to 1.2.
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

    // Get reference images values.
    React.useEffect(() => {
        if (ref.current) {
            setRefSrc(ref.current.src);
            setRefAlt(ref.current.alt)
            const refBoundingClient = ref.current.getBoundingClientRect();
            setRefDimensions(refBoundingClient);
        }
    }, [ref.current, show]);

    // Set custom zoom animation to ExpandImage
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

    // TODO: Find better name. ExpandImage doesn't sound the best.
    const ExpandedImage = React.useMemo(() => {
        const image: React.FC = () => (
            <img
                ref={img}
                src={refSrc}
                alt={refAlt}
                className="rounded shadow-md fixed z-50 transition-[top] ease-in-out top-1/2 left-1/2"
                style={{
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