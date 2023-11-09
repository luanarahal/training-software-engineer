const { test, expect } = import('@jest/globals');

test('Verificar se há estudantes com a mesma idade', () => {
  const filteringTheYoungestAboveTwentyYearsOld = students
  .filter(student => student.idade > 20)
  .reduce((youngest, student) => {
      if (!youngest || student.idade < youngest.idade) {
          return student;
      }
      return youngest;
  }, null);

console.log(filteringTheYoungestAboveTwentyYearsOld);

  expect(youngestStudent(students)).toBe(true);
});
