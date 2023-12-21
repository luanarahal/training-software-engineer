import { calculateAge } from "./utils.date.js";

const consumo = {
    "estudantes": [
      {"id": 1001, "dataNascimento": "2005-03-02"},
      {"id": 1002, "dataNascimento": "2003-07-15"},
      {"id": 1003, "dataNascimento": "2004-11-21"},
      {"id": 1004, "dataNascimento": "2006-01-04"},
      {"id": 1005, "dataNascimento": "2002-05-09"}
    ],
    "compras": [
      {"idEstudante": 1001, "categoria": "Tecnologia", "valor": 500, "dataCompra": "2023-03-15"},
      {"idEstudante": 1002, "categoria": "Livros", "valor": 80, "dataCompra": "2023-03-20"},
      {"idEstudante": 1003, "categoria": "Roupas", "valor": 200, "dataCompra": "2023-03-22"},
      {"idEstudante": 1004, "categoria": "Jogos", "valor": 150, "dataCompra": "2023-03-25"},
      {"idEstudante": 1005, "categoria": "Tecnologia", "valor": 1200, "dataCompra": "2023-03-28"},
      {"idEstudante": 1001, "categoria": "Roupas", "valor": 300, "dataCompra": "2023-03-30"},
      {"idEstudante": 1003, "categoria": "Tecnologia", "valor": 750, "dataCompra": "2023-04-02"},
      {"idEstudante": 1002, "categoria": "Alimentação", "valor": 50, "dataCompra": "2023-04-05"},
      {"idEstudante": 1004, "categoria": "Livros", "valor": 90, "dataCompra": "2023-04-07"},
      {"idEstudante": 1005, "categoria": "Jogos", "valor": 400, "dataCompra": "2023-04-10"}
    ]
}

const getAgeRange = (age) => {
  if (age < 0) {
    return "Não aceitamos idade negativa.";
  }

  if (age <= 18) {
    return "0-18";
  } else if (age > 18 && age <= 20) {
    return "18-20";
  } else if (age > 20 && age <= 22) {
    return "20-22";
  } else {
    return "> 22";
  }
}

const filterPurchasesByStudent = (studentId, purchases) => {
  return purchases
    .filter(purchase => purchase.idEstudante === studentId)
    .map(purchase => {
      delete purchase.idEstudante;
      return purchase;
    });
}

const groupByAgeRange = (students, purchases) => {
  const groupedAge = {
    "0-18": [],
    "18-20": [],
    "20-22": [],
    ">22": [],
  };

  students.forEach(student => {
    const purchasesByStudent = filterPurchasesByStudent(student.id, purchases);
    const age = calculateAge(student.dataNascimento);
    const ageRange = getAgeRange(age);

    groupedAge[ageRange].push(...purchasesByStudent);
  });

  return groupedAge;
}

console.log(groupByAgeRange(consumo.estudantes, consumo.compras));
