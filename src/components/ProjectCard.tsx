import React from "react";

type PropTypes = {
    link: string;
    name: string;
    description: string;
    languages: { name: string; color: string; }[];
    backgroundGradientColors: string[];
};

export default function ProjectCard({ link, name, description, languages, backgroundGradientColors }: PropTypes) {
    const [gradientColors, setGradientColors] = React.useState<string>("");

    const generateGradients = () => {
        const gradients = [];
        for (let i = 0; i < backgroundGradientColors.length; i++) {
            const color = backgroundGradientColors[i];
            if (i === 0) { // first object
                if (backgroundGradientColors.length === 1) {
                    gradients.push(`hover:bg-${color}/10`);
                } else {
                    gradients.push(`hover:bg-transparent hover:bg-gradient-to-r hover:from-${color}/10`);
                }
            } else if (i === (backgroundGradientColors.length - 1)) { // last object
                gradients.push(`hover:to-${color}/10`);
            } else {
                gradients.push(`hover:via-${color}/10`);
            }
        }
        setGradientColors(gradients.join(' '));
    };

    React.useEffect(() => {
        generateGradients();
    }, []);

    return (
        <a href={link} className={`flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 ${gradientColors} p-4 rounded-lg`}>
            <div className='flex flex-col gap-2'>
                <h4 className="text-xl font-bold">{name}</h4>
                <p className="text-sm">{description}</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
                {languages.map((language) => (
                    <React.Fragment key={language.name}>
                        <div className={`w-2 h-2 rounded-full bg-${language.color}`}></div>
                        <p className='text-sm'>{language.name}</p>
                    </React.Fragment>
                ))}
            </div>
        </a>
    )
}