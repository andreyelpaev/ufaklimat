import logo from '../assets/logo.webp';
import centekCassetteSystems from '../assets/centek-cassette-systems.webp';
import centekDuctSystems from '../assets/centek-duct-systems.webp';
import centekFloorCeilingSystems from '../assets/centek-floor-ceiling-systems.webp';
import centekSplitSystems from '../assets/centek-split-systems.webp';
import portfolioImg20260608130932 from '../assets/IMG_20260608_130932.webp';
import portfolioImg20260608130938 from '../assets/IMG_20260608_130938.webp';
import portfolioImg20260608130947 from '../assets/IMG_20260608_130947.webp';
import portfolioAirPurifier01 from '../assets/portfolio-air-purifier-01.webp';
import portfolioBracketLevel01 from '../assets/portfolio-bracket-level-01.webp';
import portfolioFanCleaning01 from '../assets/portfolio-fan-cleaning-01.webp';
import portfolioIndoorCoveredUnit01 from '../assets/portfolio-indoor-covered-unit-01.webp';
import portfolioIndoorInstallWindow01 from '../assets/portfolio-indoor-install-window-01.webp';
import portfolioIndoorUnitOpen01 from '../assets/portfolio-indoor-unit-open-01.webp';
import portfolioIndoorUnitWall01 from '../assets/portfolio-indoor-unit-wall-01.webp';
import portfolioManifoldGauges01 from '../assets/portfolio-manifold-gauges-01.webp';
import portfolioOutdoorFreonCheck01 from '../assets/portfolio-outdoor-freon-check-01.webp';
import portfolioOutdoorFreonCheck02 from '../assets/portfolio-outdoor-freon-check-02.webp';
import portfolioOutdoorInstall01 from '../assets/portfolio-outdoor-install-01.webp';
import portfolioOutdoorInstall02 from '../assets/portfolio-outdoor-install-02.webp';
import portfolioOutdoorInstall03 from '../assets/portfolio-outdoor-install-03.webp';
import portfolioOutdoorInstallLorot01 from '../assets/portfolio-outdoor-install-lorot-01.webp';
import portfolioOutdoorServiceHeight01 from '../assets/portfolio-outdoor-service-height-01.webp';
import portfolioOutdoorUnitGround01 from '../assets/portfolio-outdoor-unit-ground-01.webp';
import portfolioServiceFreon01 from '../assets/portfolio-service-freon-01.webp';
import portfolioServiceHeight02 from '../assets/portfolio-service-height-02.webp';
import portfolioServiceHeight03 from '../assets/portfolio-service-height-03.webp';
import portfolioServiceHeight04 from '../assets/portfolio-service-height-04.webp';
import portfolioServiceLadder01 from '../assets/portfolio-service-ladder-01.webp';
import portfolioWallPassThrough01 from '../assets/portfolio-wall-pass-through-01.webp';

export interface MenuItem {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  text: string;
  image: string;
}

export interface ProductItem {
  name: string;
  description: string;
  details: string;
  image: string;
  href: string;
}

export interface ReviewItem {
  name: string;
  city: string;
  avatar: string;
  photos: string[];
  text: string;
}

export interface AdvantageItem {
  title: string;
  text: string;
  icon: 'badge-percent' | 'zap' | 'shield-check' | 'wallet' | 'file-check' | 'wrench';
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PromotionItem {
  title: string;
  text: string;
  image: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface SocialLink extends ContactLink {
  icon?: 'send' | 'messages-square';
  shortLabel?: string;
}

export interface BrandItem {
  name: string;
  accent?: string;
  note?: string;
  logo?: string;
}

export interface ContactModalData {
  title: string;
  description: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  telegramHref: string;
  maxHref: string;
}

export const externalSite = 'https://landing-magazin.ru/uslugi/stroyka/konder-6';
export const asset = (path: string) => `${externalSite}/${path}`;

export const siteMeta = {
  title: 'УфаКлимат - установка и ремонт кондиционеров в Уфе',
};

export const menu: MenuItem[] = [
  { href: '#products', label: 'Каталог' },
  { href: '#deadlines', label: 'Услуги' },
  { href: '#process', label: 'Портфолио' },
  { href: '#discount', label: 'Акции' },
  { href: '#otziv', label: 'Отзывы' },
  { href: '#faq', label: 'Вопрос-ответ' },
  { href: '#kompanya', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
];

export const companyInfo = {
  logo: logo.src,
  address: 'г. Уфа, ул. Проспект Октября 66а',
  hours: '24/7',
  phoneDisplay: '+7 (987) 587-20-23',
  phoneHref: 'tel:+79875872023',
  whatsappHref: 'https://wa.me/79875872023',
  email: 'ufa-klimat@bk.ru',
};

export const messengerLinks: ContactLink[] = [
  { label: 'WhatsApp', href: companyInfo.whatsappHref },
  { label: 'Telegram', href: 'https://ttttt.me/ufaklimat02' },
  { label: 'MAX', href: 'https://max.ru/u/f9LHodD0cOJPU0NNALEOi6IAuL-oe3LjqmXgO_bAI413yFEMCJpP-r332y8' },
];

export const contactModal: ContactModalData = {
  title: 'Свяжитесь с нами удобным способом',
  description: 'В WhatsApp, Telegram или MAX быстро подскажем по подбору, монтажу и стоимости.',
  phoneDisplay: companyInfo.phoneDisplay,
  phoneHref: companyInfo.phoneHref,
  whatsappHref: companyInfo.whatsappHref,
  telegramHref: 'https://ttttt.me/ufaklimat02',
  maxHref: 'https://max.ru/u/f9LHodD0cOJPU0NNALEOi6IAuL-oe3LjqmXgO_bAI413yFEMCJpP-r332y8',
};

export const hero = {
  eyebrow: 'Подбор • Монтаж • Сервис',
  accent: 'Монтаж кондиционеров',
  accentHighlight: 'от 5 000 ₽',
  title: 'ремонт от 1 000 ₽',
  ctaLabel: 'Позвонить и узнать смету',
  ctaHref: '#quiz',
  backgroundImage: portfolioServiceFreon01.src,
  sideImage: portfolioIndoorUnitOpen01.src,
  highlights: [
    'Бесплатный выезд мастера',
    'Мастера с опытом от 15 лет',
    'Установка, сервис и ремонт любых брендов',
  ],
};

export const services: ServiceItem[] = [
  {
    title: 'Подбор и продажа',
    text: 'Подбираем кондиционер под площадь, бюджет и условия монтажа: от бытовой сплит-системы до решения для бизнеса.',
    image: portfolioIndoorUnitWall01.src,
  },
  {
    title: 'Монтаж кондиционеров',
    text: 'Установим сплит-систему от 5 000 ₽: аккуратная трасса, вакуумирование, запуск и гарантия 2 года.',
    image: portfolioOutdoorInstall01.src,
  },
  {
    title: 'Ремонт кондиционеров',
    text: 'Ремонт от 1 000 ₽: быстро определим причину, согласуем стоимость и вернем кондиционер в работу.',
    image: portfolioServiceLadder01.src,
  },
];

export const products: ProductItem[] = [
  {
    name: 'Сплит-системы',
    description:
      'Настенные сплит-системы для квартир, домов и офисов: от небольших комнат до просторных зон.',
    details: 'Подберем инверторную или классическую модель по площади, шуму, энергоэффективности и бюджету.',
    image: centekSplitSystems.src,
    href: '#contacts',
  },
  {
    name: 'Кассетные',
    description:
      'Кассетные системы для офисов, торговых залов, кафе и помещений с подвесным потолком.',
    details: 'Рассчитаем мощность, схему отвода конденсата, трассы и удобное размещение внутреннего блока.',
    image: centekCassetteSystems.src,
    href: '#contacts',
  },
  {
    name: 'Напольно-потолочные',
    description:
      'Напольно-потолочные решения для помещений, где обычный настенный блок не подходит по планировке или потоку воздуха.',
    details: 'Подберем оборудование под площадь, высоту потолков, режим работы объекта и бюджет.',
    image: centekFloorCeilingSystems.src,
    href: '#contacts',
  },
  {
    name: 'Канальные',
    description:
      'Канальные системы для скрытого монтажа и распределения воздуха по нескольким зонам.',
    details: 'Продумываем воздуховоды, сервисный доступ, дренаж, автоматику и аккуратную интеграцию в интерьер.',
    image: centekDuctSystems.src,
    href: '#contacts',
  },
];

export const partnerBrands: BrandItem[] = [
  {
    name: 'Любые бренды',
    note: 'Установим, обслужим или отремонтируем ваш кондиционер: бытовую сплит-систему, кассетный, канальный или напольно-потолочный блок.',
  },
  {
    name: 'Подбор техники',
    note: 'Если кондиционер еще не куплен, подберем модель под площадь, бюджет, уровень шума и условия монтажа.',
  },
];

export const priceLead = {
  backgroundImage: portfolioOutdoorFreonCheck02.src,
  previewImage: portfolioOutdoorFreonCheck02.src,
};

export const certificates = [
  centekSplitSystems.src,
  centekCassetteSystems.src,
  centekFloorCeilingSystems.src,
  centekDuctSystems.src,
];

export const portfolio = [
  portfolioImg20260608130932.src,
  portfolioImg20260608130938.src,
  portfolioImg20260608130947.src,
  portfolioOutdoorInstall02.src,
  portfolioOutdoorInstall03.src,
  portfolioIndoorCoveredUnit01.src,
  portfolioWallPassThrough01.src,
  portfolioBracketLevel01.src,
  portfolioOutdoorServiceHeight01.src,
  portfolioOutdoorFreonCheck01.src,
  portfolioOutdoorInstallLorot01.src,
  portfolioOutdoorFreonCheck02.src,
  portfolioIndoorInstallWindow01.src,
  portfolioAirPurifier01.src,
  portfolioOutdoorUnitGround01.src,
  portfolioManifoldGauges01.src,
  portfolioFanCleaning01.src,
  portfolioServiceHeight02.src,
  portfolioServiceHeight03.src,
  portfolioServiceHeight04.src,
];

export const reviews: ReviewItem[] = [
  {
    name: 'Андрей Сиванов',
    city: 'Москва',
    avatar: portfolioIndoorUnitWall01.src,
    photos: [portfolioOutdoorInstall02.src, portfolioIndoorInstallWindow01.src],
    text: 'Мы недавно купили квартиру, сделали свежий ремонт. Очень переживали за аккуратность монтажа, но команда сработала чисто и спокойно. Никакой грязи не оставили, всё сделали профессионально.',
  },
  {
    name: 'Игорь Никифоров',
    city: 'Москва',
    avatar: portfolioOutdoorFreonCheck01.src,
    photos: [portfolioOutdoorFreonCheck01.src],
    text: 'Подобрали модель под мой бюджет, приехали в согласованное время и закрыли монтаж за один день. Понравилась прозрачная смета и что стоимость не изменилась в процессе.',
  },
];

export const consultationLead = {
  backgroundImage: portfolioServiceLadder01.src,
  masterImage: portfolioServiceHeight03.src,
  masterName: 'Монтажная команда УфаКлимат',
  masterRole: 'Монтаж, ремонт и сервис любых брендов',
};

export const advantages: AdvantageItem[] = [
  {
    title: 'Фиксированная стоимость',
    text: 'Наши цены не меняются в процессе работ.',
    icon: 'badge-percent',
  },
  {
    title: 'Оперативность и скорость',
    text: 'Все работы проходят быстро и эффективно.',
    icon: 'zap',
  },
  {
    title: 'Контроль качества',
    text: 'Монтаж выполняется строго по чек-листу.',
    icon: 'shield-check',
  },
  {
    title: 'Оплата по факту',
    text: 'Оплачиваете после завершения работ.',
    icon: 'wallet',
  },
  {
    title: 'Гарантия в договоре',
    text: 'Гарантия на монтаж и официальная гарантия на оборудование.',
    icon: 'file-check',
  },
  {
    title: 'Качественные материалы',
    text: 'Используем проверенные материалы и работаем с оборудованием разных производителей.',
    icon: 'wrench',
  },
];

export const faq: FaqItem[] = [
  {
    q: 'Какой кондиционер лучше выбрать для квартиры, офиса или дома?',
    a: 'Это зависит от площади и сценария использования. До 25 м² обычно выбирают 9 000 BTU, 25–35 м² — 12 000 BTU, большие помещения — от 18 000 BTU.',
  },
  { q: 'Сколько времени занимает установка?', a: 'В среднем 2–4 часа, если не требуется сложная трасса.' },
  {
    q: 'Какие гарантии вы даете?',
    a: 'На оборудование действует гарантия производителя, на монтажные работы — 2 года.',
  },
  {
    q: 'Делаете ли скрытый монтаж?',
    a: 'Да, работаем с канальными и кассетными системами. Стоимость зависит от сложности.',
  },
  {
    q: 'Входит ли монтаж в стоимость кондиционера?',
    a: 'Обычно отдельно, но при покупке у нас предоставляется скидка на установку.',
  },
  {
    q: 'Можно ли устанавливать кондиционер зимой?',
    a: 'Да, при сильном минусе требуется спецоборудование.',
  },
  {
    q: 'Нужно ли обслуживать кондиционер после установки?',
    a: 'Рекомендуем профилактику и чистку раз в 1–2 года.',
  },
  {
    q: 'Что делать, если кондиционер шумит или течет?',
    a: 'Свяжитесь с нами: мастер приедет на диагностику и устранение.',
  },
];

export const promotions: PromotionItem[] = [
  {
    title: 'Установка в подарок!',
    text: 'При покупке кондиционера от 30 000 ₽ монтаж бесплатно.',
    image: centekCassetteSystems.src,
  },
  {
    title: 'Трейд-ин: старый на новый',
    text: 'Обновите технику на выгодных условиях.',
    image: centekDuctSystems.src,
  },
];

export const contactsCard = {
  officePhotos: [
    portfolioIndoorUnitWall01.src,
    portfolioIndoorInstallWindow01.src,
    portfolioAirPurifier01.src,
  ],
  mapEmbedUrl:
    'https://yandex.ru/maps/?um=constructor%3A6a20313bdf362764ab5985f7fa098387242a81707e96920138cddbcd2ce99727&source=constructorLink&apiKey=2f880129-eaeb-4da8-80f4-5ccfc443420e\n',
  socialLinks: [
    {
      label: 'WhatsApp',
      href: companyInfo.whatsappHref,
      icon: 'messages-square',
      shortLabel: 'WhatsApp',
    },
    {
      label: 'Telegram',
      href: 'https://ttttt.me/ufaklimat02',
      icon: 'send',
      shortLabel: 'Telegram',
    },
    {
      label: 'MAX',
      href: 'https://max.ru/u/f9LHodD0cOJPU0NNALEOi6IAuL-oe3LjqmXgO_bAI413yFEMCJpP-r332y8',
      icon: 'messages-square',
      shortLabel: 'MAX',
    },
  ] satisfies SocialLink[],
};
