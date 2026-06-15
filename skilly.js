export default function skills() {
const skills = [
"spanek",
"lolko",
"lolko"
];
return `
<h1>Dovednosti</h1>
<ul>
${skills.map(s => `<li>${s}</li>`).join("")}
</ul>
`;
}
