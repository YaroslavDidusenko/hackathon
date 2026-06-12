export interface AIResponse {
  restoredAbonents: number;
  timeHours: number;
  actions: string[];
  scenarioNumber: number;
  plan: string;
}

const PLAN_TEMPLATES = [
  {
    plan: "переключити лінію 110 кВ на ПС-7 з перемиканням шин",
    actions: [
      "ізолювати пошкоджену секцію на ПС-330 кВ",
      "переключити лінію 110 кВ на резервну шину ПС-7",
      "перевірити навантаження та баланс фаз",
    ],
  },
  {
    plan: "задіяти резервний генератор на ТЕЦ-2 потужністю 150 МВт",
    actions: [
      "активувати резервний генератор на ТЕЦ-2",
      "перерозподілити навантаження через РП-3",
      "синхронізувати частоту з основною мережею",
    ],
  },
  {
    plan: "перерозподілити навантаження через РП-3 та РП-7",
    actions: [
      "відключити пошкоджену ділянку ЛЕП-110",
      "задіяти резервний трансформатор на РП-3",
      "поступово підключити споживачів через РП-7",
    ],
  },
  {
    plan: "обійти пошкоджену ділянку через підстанцію «Південна»",
    actions: [
      "ізолювати секцію шин на ПС «Південна»",
      "замкнути резервну лінію 330/110 кВ",
      "контролювати струм навантаження на трансформаторах",
    ],
  },
  {
    plan: "використати мобільні джерела живлення для критичних об'єктів",
    actions: [
      "розгорнути мобільні ДЕС потужністю 50 МВт",
      "підключити лікарні та водоканал до резервного живлення",
      "поступово відновити подачу на житлові квартали",
    ],
  },
];

export function generateAIResponse(offlineCount: number): AIResponse {
  const totalAbonents = 160_000;
  const affected = Math.round((offlineCount / 16) * totalAbonents);
  const restored = totalAbonents - affected;
  const timeHours = Math.round((Math.random() * 1.5 + 1.5) * 10) / 10;
  const scenarioNumber = Math.floor(Math.random() * 5) + 1;
  const template =
    PLAN_TEMPLATES[Math.floor(Math.random() * PLAN_TEMPLATES.length)];

  return {
    restoredAbonents: restored,
    timeHours,
    actions: template.actions,
    scenarioNumber,
    plan: template.plan,
  };
}

export function formatAIResponse(response: AIResponse): string {
  return `✅ ШІ-аналіз завершено. Сценарій №${response.scenarioNumber}: ${response.plan}. Повернення живлення для ${response.restoredAbonents.toLocaleString("uk-UA")} абонентів. Орієнтовний час: ${response.timeHours} год. Рекомендовані дії: 1) ${response.actions[0]}; 2) ${response.actions[1]}; 3) ${response.actions[2]}.`;
}
