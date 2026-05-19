import logo from '../assets/logo.webp';
import centekAirLogo from '../assets/centek-air-logo.png';
import centekCassetteSystems from '../assets/centek-cassette-systems.png';
import centekDuctSystems from '../assets/centek-duct-systems.png';
import centekFloorCeilingSystems from '../assets/centek-floor-ceiling-systems.png';
import centekSplitSystems from '../assets/centek-split-systems.jpg';
import portfolioAirPurifier01 from '../assets/portfolio-air-purifier-01.jpg';
import portfolioBracketLevel01 from '../assets/portfolio-bracket-level-01.jpg';
import portfolioFanCleaning01 from '../assets/portfolio-fan-cleaning-01.jpg';
import portfolioIndoorCoveredUnit01 from '../assets/portfolio-indoor-covered-unit-01.jpg';
import portfolioIndoorInstallWindow01 from '../assets/portfolio-indoor-install-window-01.jpg';
import portfolioIndoorUnitOpen01 from '../assets/portfolio-indoor-unit-open-01.jpg';
import portfolioIndoorUnitWall01 from '../assets/portfolio-indoor-unit-wall-01.jpg';
import portfolioManifoldGauges01 from '../assets/portfolio-manifold-gauges-01.jpg';
import portfolioOutdoorFreonCheck01 from '../assets/portfolio-outdoor-freon-check-01.jpg';
import portfolioOutdoorFreonCheck02 from '../assets/portfolio-outdoor-freon-check-02.jpg';
import portfolioOutdoorInstall01 from '../assets/portfolio-outdoor-install-01.jpg';
import portfolioOutdoorInstall02 from '../assets/portfolio-outdoor-install-02.jpg';
import portfolioOutdoorInstall03 from '../assets/portfolio-outdoor-install-03.jpg';
import portfolioOutdoorInstallLorot01 from '../assets/portfolio-outdoor-install-lorot-01.jpg';
import portfolioOutdoorServiceHeight01 from '../assets/portfolio-outdoor-service-height-01.jpg';
import portfolioOutdoorUnitGround01 from '../assets/portfolio-outdoor-unit-ground-01.jpg';
import portfolioServiceFreon01 from '../assets/portfolio-service-freon-01.jpg';
import portfolioServiceHeight02 from '../assets/portfolio-service-height-02.jpg';
import portfolioServiceHeight03 from '../assets/portfolio-service-height-03.jpg';
import portfolioServiceHeight04 from '../assets/portfolio-service-height-04.jpg';
import portfolioServiceLadder01 from '../assets/portfolio-service-ladder-01.jpg';
import portfolioWallPassThrough01 from '../assets/portfolio-wall-pass-through-01.jpg';

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
  telegramHref: string;
  maxHref: string;
}

export const externalSite = 'https://landing-magazin.ru/uslugi/stroyka/konder-6';
export const asset = (path: string) => `${externalSite}/${path}`;

export const siteMeta = {
  title: 'Установка кондиционеров',
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
  email: 'info@ufa-klimat.ru',
  inn: '000000000',
  ogrn: '00000000000',
};

export const messengerLinks: ContactLink[] = [
  { label: 'Telegram', href: 'https://telegram.me/telegram_user_name' },
  { label: 'MAX', href: '#' },
];

export const contactModal: ContactModalData = {
  title: 'Свяжитесь с нами удобным способом',
  description: 'В Telegram или MAX и быстро подскажем по подбору, монтажу и стоимости.',
  phoneDisplay: companyInfo.phoneDisplay,
  phoneHref: companyInfo.phoneHref,
  telegramHref: 'https://telegram.me/telegram_user_name',
  maxHref: '#',
};

export const hero = {
  eyebrow: 'Подбор • Монтаж • Гарантия',
  accent: 'Установим любой кондиционер',
  accentHighlight: 'за 3 часа',
  title: 'в квартире, доме или офисе',
  ctaLabel: 'Подобрать кондиционер',
  ctaHref: '#quiz',
  backgroundImage: portfolioServiceFreon01.src,
  sideImage: portfolioIndoorUnitOpen01.src,
  highlights: [
    'Бесплатный выезд мастера',
    'Мастера с опытом от 15 лет',
    'Доставка и монтаж за 1 день',
  ],
};

export const services: ServiceItem[] = [
  {
    title: 'Подбор и продажа',
    text: 'В наличии на складе более 700+ моделей кондиционеров под разный бюджет.',
    image: portfolioIndoorUnitWall01.src,
  },
  {
    title: 'Монтаж кондиционеров',
    text: 'Приедем к вам на объект и смонтируем кондиционер за 1 день с гарантией 2 года.',
    image: portfolioOutdoorInstall01.src,
  },
  {
    title: 'Ремонт кондиционеров',
    text: 'Оказываем полный комплекс услуг по ремонту и восстановлению кондиционеров.',
    image: portfolioServiceFreon01.src,
  },
];

export const products: ProductItem[] = [
  {
    name: 'Сплит-системы',
    description:
      'Настенные сплит-системы Centek Air для квартир, домов и помещений разной площади: от небольших комнат до более крупных зон.',
    details: 'Серии ADC, BDC, CDC, EDC, FDC, MDC, SDC, RDC и другие.',
    image: centekSplitSystems.src,
    href: 'https://centek-air.ru/split-sistemy',
  },
  {
    name: 'Кассетные',
    description:
      'Полупромышленные кассетные системы мощностью от 12 до 60 кБТЕ с подмесом свежего воздуха, дренажной помпой и работой на обогрев до -15 °С.',
    details: 'Японские компрессоры Toshiba/GMCC и Hitachi/Highly, гарантия 3 года.',
    image: centekCassetteSystems.src,
    href: 'https://centek-air.ru/kassetnye',
  },
  {
    name: 'Напольно-потолочные',
    description:
      'Полупромышленная линейка мощностью от 18 000 до 60 000 БТЕ для объектов, где важен гибкий монтаж и уверенная работа на больших площадях.',
    details: 'Есть Full DC inverter в CT-66X60; компрессоры Gree, Toshiba и Hitachi; гарантия 3 года.',
    image: centekFloorCeilingSystems.src,
    href: 'https://centek-air.ru/napolno-potolochnye',
  },
  {
    name: 'Канальные',
    description:
      'Средненапорные и высоконапорные канальные системы Centek Air для скрытого монтажа и распределения воздуха по нескольким зонам.',
    details: 'Статическое давление до 80 Па и до 196 Па, проводные пульты, подмес свежего воздуха, работа до -15 °С.',
    image: centekDuctSystems.src,
    href: 'https://centek-air.ru/katalog/kanalnye',
  },
];

export const partnerBrands: BrandItem[] = [
  {
    name: 'CENTEK',
    accent: 'AIR',
    note: 'Centek Air — наш партнер по поставкам климатической техники для бытовых и полупромышленных решений.',
    logo: centekAirLogo.src,
  },
];

export const priceLead = {
  backgroundImage: portfolioOutdoorFreonCheck02.src,
  previewImage: centekAirLogo.src,
};

export const certificates = [
  centekSplitSystems.src,
  centekCassetteSystems.src,
  centekFloorCeilingSystems.src,
  centekDuctSystems.src,
];

export const portfolio = [
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
    avatar: centekAirLogo.src,
    photos: [portfolioOutdoorInstall02.src, portfolioIndoorInstallWindow01.src],
    text: 'Мы недавно купили квартиру, сделали свежий ремонт. Очень переживали за аккуратность монтажа, но команда сработала чисто и спокойно. Никакой грязи не оставили, всё сделали профессионально.',
  },
  {
    name: 'Игорь Никифоров',
    city: 'Москва',
    avatar: centekAirLogo.src,
    photos: [portfolioOutdoorFreonCheck01.src],
    text: 'Подобрали модель под мой бюджет, приехали в согласованное время и закрыли монтаж за один день. Понравилась прозрачная смета и что стоимость не изменилась в процессе.',
  },
];

export const consultationLead = {
  backgroundImage: portfolioServiceLadder01.src,
  masterImage: portfolioServiceHeight03.src,
  masterName: 'Монтажная команда Centek Air',
  masterRole: 'Подбор, монтаж и сервис',
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
    text: 'До 2 лет на работы и до 10 лет на оборудование.',
    icon: 'file-check',
  },
  {
    title: 'Качественные материалы',
    text: 'Используем только проверенных производителей.',
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
    a: 'На оборудование 1–3 года (в зависимости от бренда), на монтаж — 2 года.',
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
  requisitesUrl: asset('content/uploads/2025/05/file.pdf'),
  officePhotos: [
    portfolioIndoorUnitWall01.src,
    portfolioIndoorInstallWindow01.src,
    portfolioAirPurifier01.src,
  ],
  mapEmbedUrl:
    'https://yandex.ru/maps/?um=constructor%3A6a20313bdf362764ab5985f7fa098387242a81707e96920138cddbcd2ce99727&source=constructorLink&apiKey=2f880129-eaeb-4da8-80f4-5ccfc443420e\n',
  socialLinks: [
    {
      label: 'Telegram',
      href: 'https://telegram.me/telegram_user_name',
      icon: 'send',
      shortLabel: 'Telegram',
    },
    {
      label: 'MAX',
      href: '#',
      icon: 'messages-square',
      shortLabel: 'MAX',
    },
  ] satisfies SocialLink[],
};
