import { CellNames } from "./constants";
type MockData = {
  id: number;
  data: {
    [key in CellNames]: {
      id: number;
      value: string;
      comment?: string;
    };
  };
};

export const mockData: MockData[] = [
  {
    id: 1,
    data: {
      number: {
        id: 1,
        value: "1",
        comment: "",
      },
      businessPriority: {
        id: 2,
        value: "Ручной ввод",
        comment: "Согласен",
      },
      factor: {
        id: 3,
        value: "Фактор 1",
        comment: "Согласен",
      },
      question: {
        id: 4,
        value: "Вопрос 1",
        comment: "Соответствует заявленной проблематике",
      },
      agreePercent: {
        id: 5,
        value: "38 %",
        comment: "Данные верные",
      },
      prevYearDynamic: {
        id: 6,
        value: "+15 %",
        comment:
          "Проанализировать динамику ещё подвум параметрам для большей достоверности ...",
      },
      problem: {
        id: 7,
        value: "Условия труда не соответствуют работе, которую я выполняю.",
        comment: "На основании чего?",
      },
      solution: {
        id: 8,
        value: "Увеличение производительности труда на 20 %",
        comment: "Уточнить данные! ...",
      },
      expectedResult: {
        id: 9,
        value: "Увеличение производительности труда на 20 %",
        comment: "Уточнить данные! ...",
      },
      monitoring: {
        id: 10,
        value: "Данные вводятся вручную",
        comment: "Данные вводятся вручную",
      },
      targetAudience: {
        id: 11,
        value: "Данные вводятся вручную",
        comment: "Данные вводятся вручную",
      },
      responsibleEmployee: {
        id: 12,
        value: "Данные вводятся вручную",
        comment: "Данные вводятся вручную",
      },
      date: {
        id: 13,
        value: "Данные вводятся вручную",
        comment: "Данные вводятся вручную",
      },
    },
  },
];
