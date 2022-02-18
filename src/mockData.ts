const descriptions = [
  {
    name: "Я и мои коллеги работаем вместе для достижения общих целей",
    percent: 39,
    id: 1,
  },
  {
    name: "Мои коллеги уважают мое мнение и мои чувства",
    percent: 15,
    id: 2,
  },
  {
    name:
      "В компании хорошо налажено взаимодействие между различными подразделениями",
    percent: 85,
    id: 3,
  },
];

const MockData = {
  title: "Красноярское обособленное предприятие",
  year: 2021,
  yearsList: [2020, 2021],
  percent: 58,
  difference: 3,
  desription: `«Зона риска» - нижний квартиль, 25%  компаний имеют результаты ниже, чем 54%. 

  «Зона риска» - у половины компаний вовлечённость находиться в диапазоне от 54-78%. 

  «Зона результативности» - верхний квартиль, 25%  компаний имеют результаты более, чем78%. 

  Распределение зон пересчитывается ежегодно. 
  Границы рассчитаны по России, 2020 год`,
  disclaimer: `
Уважаемые коллеги! 
Для создания плана по вовлечённости
необходимо выбрать один или несколько 
ключевых показателей.`,
  factors: [
    {
      id: 1,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 2,
      percent: 56,
      difference: 3,
      name: "Очень длинное название для фактора которое не может поместиться",
      descriptions,
    },
    {
      id: 3,
      percent: 77,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 4,
      percent: 100,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 5,
      percent: 50,
      difference: 15,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 6,
      percent: 2,
      difference: -90,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 7,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 8,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 9,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 10,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 11,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
    {
      id: 12,
      percent: 22,
      difference: -3,
      name: "Взаимодействие",
      descriptions,
    },
  ],
};
export default MockData;
