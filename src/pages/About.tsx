import React from "react";

function calculateAge(birthday: Date) {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs).getTime(); // milliseconds from epoch
    return ageDate / 31557600000;
}

export default function About() {
    const [birthday, setBirthday] = React.useState('');

    setInterval(() => {
        const x = calculateAge(new Date("1997-09-30"));
        setBirthday(x.toString());
    }, 200);

    return (
        <div>
            <h1>About page</h1>
            <p>Hi I'm Andrew, {birthday.slice(0, 11)} years old</p>
        </div>
    );
}