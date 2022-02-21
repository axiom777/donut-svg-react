export type CellNames =
  | "number"
  | "businessPriority"
  | "factor"
  | "question"
  | "agreePercent"
  | "prevYearDynamic"
  | "problem"
  | "solution"
  | "expectedResult"
  | "monitoring"
  | "targetAudience"
  | "responsibleEmployee"
  | "date";

type TableHeadingElement = {
  name: CellNames;
  text: string;
  clicable: boolean;
  info: string;
  width: number;
};

type TableHeading = TableHeadingElement[];

export const tableHeading: TableHeading = [
  {
    name: "number",
    text: "№",
    clicable: false,
    info: "Образец для заполнения",
    width: 35,
  },
  {
    name: "businessPriority",
    text: "Бизнес- приоритет",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 94,
  },
  {
    name: "factor",
    text: "Фактор",
    clicable: true,
    info: "Выпадающий список (подтягивается из системы отчета Кинсентрик)",
    width: 90,
  },
  {
    name: "question",
    text: "Вопрос",
    clicable: true,
    info: "Выпадающий список (подтягивается из системы отчета Кинсентрик)",
    width: 115,
  },
  {
    name: "agreePercent",
    text: "% согласных из результата опроса",
    clicable: true,
    info: "Данные из выгрузки",
    width: 183,
  },
  {
    name: "prevYearDynamic",
    text: "Динамика результатов по отношению к прошлому году (%)",
    clicable: true,
    info: "Вычисляется автоматически",
    width: 209,
  },
  {
    name: "problem",
    text:
      "Проблема (в чём состоит проблема, на что обратили внимание сотрудники)",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 209,
  },
  {
    name: "solution",
    text: "Решение (конкретные мероприятия)",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 260,
  },
  {
    name: "expectedResult",
    text:
      "Ожидаемый эффект/результат (количественные и качественные показатели)",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 260,
  },
  {
    name: "monitoring",
    text: "Как будет проводиться мониторинг (контрольные точки, вехи, опросы)",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 227,
  },
  {
    name: "targetAudience",
    text:
      "Целевая аудитория (на какую группу сотрудников будет направлено мероприятие)",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 218,
  },
  {
    name: "responsibleEmployee",
    text: "Ответственный",
    clicable: true,
    info: "Данные вводятся вручную",
    width: 212,
  },
  {
    name: "date",
    text: "Дата",
    clicable: true,
    info: "Выбирается атоматически",
    width: 212,
  },
];
