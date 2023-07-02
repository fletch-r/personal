import React from "react";

function calculateAge(birthday: string) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs); // milliseconds
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function About() {
    const [birthday, setBirthday] = React.useState('');

    React.useEffect(() => {
        const age = calculateAge("1997-09-30");
        setBirthday(age.toString());
    }, []);

    return (
        <article className="prose prose-invert mx-auto">
            <h1 className="font-cals text-4xl tracking-wider">About me</h1>
            <p>My name is Andrew Fletcher, I&apos;m a {birthday} year old, senior frontend developer from the north-west of England.</p>
            <p>My background is in developing internal systems for e-commerce platforms. This includes applications link PIM and CMS.</p>
            <p>
                As for my hobbies, coding isn&apos;t just a job for me but my hobby. In my free time I love to catch up on new or new things within
                the frontend ecosystem. Developing my skills further, seeing if there are any open-source libraries I can contribute too or
                just continuing on with my own personal projects.
            </p>
            <p>
                I currently have 2 personal projects written about here on my personal website but I have 2 more soon to be released and
                added here.
            </p>
            <p>
                Not only do I like to learn about new and existing frontend technologies but I like to learn about UI and UX methodologies.
                I believe that all frontend developers need to learn UI/UX as without it, no matter how well you know HTML, CSS and Javascript
                or however clean your code is, if your website looks bad and acts bad, then you&apos;ve got a bad website.
            </p>
        </article>
    );
}