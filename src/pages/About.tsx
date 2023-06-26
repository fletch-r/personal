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
            <p>My name is Andrew Fletcher, I&apos;m a {birthday} year old, frontend developer from the north-west of England.</p>
            <p>My background is in developing internal systems for an e-commerce platform. This includes PIM and CMS applications.</p>
            <p>
                As for my hobbies, I mainly just like to code. I like to think of my work projects as my own so I do switch between personal
                and work projects in my own time. I know this might be controversial as some people think this is unhealthy. But whether
                it&apos;s for work or for personal use, a project is a project.
            </p>
            <p>
                Not only do I like to learn about new and existing frontend technologies but I like to learn about UI and UX methodologies.
                I believe that all frontend developers need to learn UI/UX as without it, no matter how well you know HTML, CSS and Javascript
                or however clean your code is, if your website looks bad and acts bad, then you&apos;ve got a bad website.
            </p>
        </article>
    );
}