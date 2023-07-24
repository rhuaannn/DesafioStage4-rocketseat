const students = [
  {
    name: "Rhuan",
    n1: 8,
    n2: 4,
  },
  {
    name: "Brenda",
    n1: 9,
    n2: 7,
  },
  {
    name: "Samuel",
    n1: 10,
    n2: 10,
  },
];

const calculateAverege = (n1, n2) => {
  return ((n1 + n2) / 2).toFixed(2);
};

for (let student of students) {
  const average = parseFloat(calculateAverege(student.n1, student.n2));
  
  if (average >= 7) {
    alert(`${student.name} foi Aprovado!`);
  } else {
    alert(`${student.name} foi Reprovado.`);
  }
}
