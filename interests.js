export default function interests() {
const hobbies = [
"Spánek",
"lolko",
"Spánek",
"lolkp"
];
return `
<h1>Zájmy</h1>
<ul>
${hobbies.map(h => `<li>${h}</li>`).join("")}
</ul>
`;
}
