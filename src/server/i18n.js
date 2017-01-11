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
    en: 'to the business community',
    ua: 'для бізнесу'
  },

  landingSubtitle: {
    en: 'Keeping up with modern technologies',
    ua: 'Йдемо в ногу з сучасними технологіями'
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
    en: 'SmartScales',
    ua: 'SmartScales'
  },

  sectionProductsProductTitle2: {
    en: 'ATOM',
    ua: 'ATOM'
  },

  sectionProductsProduct1: {
    en: "It\'s a typical Raspberry Pi computer with Atom software on board which enables connection with serial or modbus devices by a simple http request. It integrates your devices with any software system without additional components and expands opportunities to work and manage them. We use it on truck, rail or bulk scales and integrate it into 1C with REST service on board.",
    ua: "Революційний продукт, який дозволяє по-сучасному підійти до комерційних зважувань на автомобільних та залізничних вагах. Він поєднує в собі сучасні розробки в ІТ та традиційні методи роботи із ваговим обладнанням."
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
    en: ['IoT devices', 'IoT applications', 'WEB and Mobile applications'],
    ua: ['IoT пристрої для бізнесу', 'Програмне забезпечення для IoT', 'Програмне забезпечення для WEB та смартфонів']
  },

  sectionServicesServiceSubtitle2: {
    en: 'We provide support for our solutions and any solutions based on the platform of 1C:Enterprise',
    ua: "Ми надаємо підтримку для розроблених нами рішень, та рішень на платформі \"1С:Підприємство\""
  },

  sectionServicesServiceSubtitle3: {
    en: 'IT consulting in different areas:',
    ua: 'ІТ-консультації в галузях:'
  },

  sectionServicesServiceElems3: {
    en: ['Agribusiness', 'Grain elevators', 'Grain and oil terminals', 'Oil refineries'],
    ua: ['Аграрного бізнесу', 'Елеваторів', 'Зернових та олійних портових терміналів', 'Маслоекстракційних заводів']
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
    en: 'We are a team of professionals in the development and implementation of complex systems for business. Our specialization is IoT, web-applications, platform 1C:Enterprise and more. Using the latest and proven technologies of well-known IT-giants we achieve excellent results and provide high quality products and services. Usability and efficiency - that is our main goal and idea.',
    ua: "Ми команда професіоналів у розробці та впровадженні складних IT систем для бізнесу. Нашою спеціалізацією автоматизація та впровадження сучасних технологій: IoT, web-застосунків, платформа \"1С:Підприємство\" та інше. Вискористовуючи передові та перевірені технології IT-гігантів ми досягаємо високих результатів, надаємо якісні послуги та продукти. Зручність, точність та ефективність - це наша основна мета та ідея."
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
