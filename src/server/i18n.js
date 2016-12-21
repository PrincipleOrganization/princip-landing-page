'use strict';

/**
* Module body.
**/

const KEYS = {
  navbarProducts: {
    en: 'Products',
    ua: 'Продукти'
  },

  navbarServices: {
    en: 'Services',
    ua: 'Послуги'
  },

  navbarClients: {
    en: 'Clients',
    ua: 'Клієнти'
  },

  navbarAboutUs: {
    en: 'About us',
    ua: 'Про нас'
  },

  navbarContacts: {
    en: 'Contacts',
    ua: 'Контакти'
  },

  landingTitle: {
    en: 'Internet of Things',
    ua: 'Інтернет речей'
  },

  landingTitleP: {
    en: 'for production facilities',
    ua: 'для виробничих потужностей'
  },

  landingSubtitle: {
    en: 'Keeping up with modern technologies',
    ua: 'Рука в руку з сучасними технологіями'
  },

  landingButton: {
    en: 'Show more',
    ua: 'Більше'
  },

  sectionTitleProducts: {
    en: 'Products',
    ua: 'Продукти'
  },

  sectionTitleServices: {
    en: 'Services',
    ua: 'Послуги'
  },

  sectionTitleClients: {
    en: 'Clients',
    ua: 'Клієнти'
  },

  sectionTitleAboutUs: {
    en: 'About us',
    ua: 'Про нас'
  },

  sectionProductsProductTitle1: {
    en: 'PANTHEON',
    ua: 'PANTHEON'
  },

  sectionProductsProductTitle2: {
    en: 'ATOM',
    ua: 'ATOM'
  },

  sectionProductsProduct1: {
    en: "It\'s a typical Raspberry Pi computer with Atom software on board which enables connection with serial or modbus devices by a simple http request. It integrates your devices with any software system without additional components and expands opportunities to work and manage them. We use it on truck, rail or bulk scales and integrate it into 1C with REST service on board.",
    ua: "Це звичайний Raspberry Pi комп\'ютер з установленим програмним забезпеченням Atom, який дозволяє з\'єднання з іншими пристроями через послідовні порти або MODBUS, шляхом простих запитів по HTTP. Допомагає легко інтегрувати пристрої з будь-якою програмною системою без додаткових компонентів і розширює можливості для роботи і управління. Даний комплекс використовується на автомобільних, залізничних або перевалочних вагах з інтеграцією з системами на базі платформи \"1С:Підприємство\" через REST API."
  },

  sectionProductsProduct2: {
    en: "Software which connects devices in network, collects their data and allows management through simple REST API.",
    ua: "Програмне забезпечення, яке об\'єднує пристрої в мережі, збирає та обробляє необхідіні дані, і дозволяє здійснювати управління за допомогою простого REST API."
  },

  sectionServicesServiceTitle1: {
    en: 'DEVELOPMENT',
    ua: 'РОЗРОБКА'
  },

  sectionServicesServiceTitle2: {
    en: 'SUPPORT',
    ua: 'ПІДТРИМКА'
  },

  sectionServicesServiceTitle3: {
    en: 'CONSULTING',
    ua: 'КОНСАЛТИНГ'
  },

  sectionServicesServiceTitle4: {
    en: 'AUDIT',
    ua: 'АУДИТ'
  },

  sectionServicesServiceSubtitle1: {
    en: 'We are developing:',
    ua: 'Ми розробляємо:'
  },

  sectionServicesServiceElems1: {
    en: ['IoT devices', 'IoT applications', 'IoT systems', 'CRM systems', 'WEB applications', 'Mobile applications'],
    ua: ['IoT пристрої', 'IoT ПЗ', 'IoT системи', 'CRM системи', 'WEB ПЗ', 'ПЗ для смартфонів']
  },

  sectionServicesServiceSubtitle2: {
    en: 'We provide support for solutions developed by us and any solutions based on the platform of 1C:Enterprise',
    ua: "Ми надаємо підтримку для рішень розроблених нами, та рішень на платформі \"1С:Підприємство\""
  },

  sectionServicesServiceSubtitle3: {
    en: 'IT consulting in different areas:',
    ua: 'ІТ-консультації в галузях:'
  },

  sectionServicesServiceElems3: {
    en: ['Agribusiness', 'Grain elevators', 'Grain and oil terminals', 'Oil refineries'],
    ua: ['Аграрного бізнесу', 'Елеваторів', 'Зернових та олійних терміналів', 'Маслоекстакційних заводів']
  },

  sectionServicesServiceSubtitle4: {
    en: 'Secure functioning audit of grain elevators and port terminals:',
    ua: 'Аудит безпечної роботи елеваторів та портових терміналів:'
  },

  sectionServicesServiceElems4: {
    en: ['Accounting system', 'Weighing system', 'Video monitoring system'],
    ua: ['Облікова система', 'Система зважування', 'Система відеомоніторингу']
  },

  sectionAboutUsLegend: {
    en: 'We are a team of enthusiasts-professionals in the development and implementation of complex systems for business. Our specialization is IoT, web-applications, platform 1C:Enterprise and more. Using the latest and proven technologies of well-known IT-giants we achieve excellent results and provide high quality products and services. Usability and efficiency - that is our main goal and idea.',
    ua: "Ми команда ентузіастів-професіоналів у розробці та впровадженні складних систем для бізнесу. Нашою спеціалізацією є технології інтернету речей, web-застосунків, платформа \"1С:Підприємство\" та багато іншого. Вискористовуючи передові та перевірені технології IT-гігантів ми досягаємо високих результатів, створюємо якісні продукти та надаємо послуги. Зручність, точність та ефективність - це наша основна мета та ідея."
  },

  sectionAboutUsSubtitle: {
    en: 'Technologies and Vendors',
    ua: 'Технології та постачальники'
  },

  sectionContactsCALL: {
    en: 'CALL',
    ua: 'ТЕЛЕФОНИ'
  },

  rights: {
    en: 'All rights reserved.',
    ua: 'Всі права захищені.'
  }
}

/**
* Export.
**/

module.exports = (language) => {
  let values = {};

  for (let key in KEYS) {
    values[key] = KEYS[key][language];
  }

  return values;
};
