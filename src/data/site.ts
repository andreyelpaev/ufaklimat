import logo from '../assets/logo.webp';
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
import portfolioOutdoorInstallLorot01 from '../assets/portfolio-outdoor-install-lorot-01.jpg';
import portfolioOutdoorServiceHeight01 from '../assets/portfolio-outdoor-service-height-01.jpg';
import portfolioOutdoorUnitGround01 from '../assets/portfolio-outdoor-unit-ground-01.jpg';
import portfolioServiceFreon01 from '../assets/portfolio-service-freon-01.jpg';
import portfolioServiceHeight02 from '../assets/portfolio-service-height-02.jpg';
import portfolioServiceHeight03 from '../assets/portfolio-service-height-03.jpg';
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
  current: string;
  old: string;
  image: string;
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
  image: string;
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
  icon: string;
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
  hours: 'Пн-Пт: 9:00 - 18:00',
  phoneDisplay: '+7 (987) 587-20-23',
  phoneHref: 'tel:+79875872023',
  email: 'info@ufa-klimat.ru',
  inn: '000000000',
  ogrn: '00000000000',
};

export const messengerLinks: ContactLink[] = [
  { label: 'Telegram', href: 'https://api.whatsapp.com/send?phone=79000000000' },
  { label: 'MAX', href: 'https://telegram.me/telegram_user_name' },
];

export const hero = {
  eyebrow: 'Подбор • Монтаж • Гарантия',
  accent: 'Подберем и установим кондиционер за 3 часа',
  title: 'в квартире, доме или офисе',
  ctaLabel: 'Подобрать кондиционер',
  ctaHref: '#quiz',
  backgroundImage: asset('content/uploads/2025/05/1234.jpg'),
  sideImage: asset('content/uploads/2025/05/234.jpg'),
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

export const products: ProductItem[] = Array.from({ length: 8 }, (_, i) => ({
  name: `Умная сплит-система Rapid RAM-0${i + 1}`,
  current: '17 999 ₽',
  old: '20 999 ₽',
  image: asset(`content/uploads/2025/05/tovar-${i + 1}.jpg`),
}));

export const partnerLogos = ['22', '23', '24', '25', '26', '27', '28'].map((id) =>
  asset(`content/uploads/2025/05/image-${id}.jpg`),
);

export const priceLead = {
  backgroundImage: asset('content/uploads/2025/05/12123.jpg'),
  previewImage: asset('content/uploads/2025/05/price-1.png'),
};

export const certificates = [1, 4, 3, 2].map((id) =>
  asset(`content/uploads/2022/10/certificates-${id}.jpg`),
);

export const portfolio = [
  portfolioOutdoorInstall01.src,
  portfolioOutdoorInstall02.src,
  portfolioIndoorCoveredUnit01.src,
  portfolioServiceFreon01.src,
  portfolioWallPassThrough01.src,
  portfolioBracketLevel01.src,
  portfolioIndoorUnitOpen01.src,
  portfolioOutdoorServiceHeight01.src,
  portfolioOutdoorFreonCheck01.src,
  portfolioOutdoorInstallLorot01.src,
  portfolioOutdoorFreonCheck02.src,
  portfolioIndoorUnitWall01.src,
  portfolioIndoorInstallWindow01.src,
  portfolioServiceLadder01.src,
  portfolioAirPurifier01.src,
  portfolioOutdoorUnitGround01.src,
  portfolioServiceHeight02.src,
  portfolioManifoldGauges01.src,
  portfolioServiceHeight03.src,
  portfolioFanCleaning01.src,
];

export const reviews: ReviewItem[] = [
  {
    name: 'Андрей Сиванов',
    city: 'Москва',
    avatar: asset('content/uploads/2022/10/review-person.jpg'),
    photos: [
      asset('content/uploads/2025/05/montazh-gree.jpg'),
      asset('content/uploads/2025/05/ustanovka-konditsionerov-gree.jpg'),
    ],
    text: 'Мы недавно купили квартиру, сделали свежий ремонт. Очень переживали за аккуратность монтажа, но команда сработала чисто и спокойно. Никакой грязи не оставили, всё сделали профессионально.',
  },
  {
    name: 'Игорь Никифоров',
    city: 'Москва',
    avatar: asset('content/uploads/2022/10/review-person.jpg'),
    photos: [asset('content/uploads/2025/05/kondicioner.jpg')],
    text: 'Подобрали модель под мой бюджет, приехали в согласованное время и закрыли монтаж за один день. Понравилась прозрачная смета и что стоимость не изменилась в процессе.',
  },
];

export const consultationLead = {
  backgroundImage: asset('content/uploads/2025/05/12123.jpg'),
  masterImage: asset('content/uploads/2022/11/122.png'),
  masterName: 'Артем Лошиневич',
  masterRole: 'Старший мастер',
};

export const advantages: AdvantageItem[] = [
  {
    title: 'Фиксированная стоимость',
    text: 'Наши цены не меняются в процессе работ.',
    image: asset('content/uploads/2025/05/icons8-czena-80.png'),
  },
  {
    title: 'Оперативность и скорость',
    text: 'Все работы проходят быстро и эффективно.',
    image: asset('content/uploads/2025/05/icons8-skorost-100.png'),
  },
  {
    title: 'Контроль качества',
    text: 'Монтаж выполняется строго по чек-листу.',
    image: asset('content/uploads/2025/05/icons8-vysokoe-kachestvo-100.png'),
  },
  {
    title: 'Оплата по факту',
    text: 'Оплачиваете после завершения работ.',
    image: asset('content/uploads/2025/05/icons8-oplata-100.png'),
  },
  {
    title: 'Гарантия в договоре',
    text: 'До 2 лет на работы и до 10 лет на оборудование.',
    image: asset('content/uploads/2025/05/icons8-garantiya-100-1.png'),
  },
  {
    title: 'Качественные материалы',
    text: 'Используем только проверенных производителей.',
    image: asset('content/uploads/2025/05/icons8-garantiya-100.png'),
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
    image: asset('content/uploads/2025/05/rectangle-891.png'),
  },
  {
    title: 'Трейд-ин: старый на новый',
    text: 'Обновите технику на выгодных условиях.',
    image: asset('content/uploads/2025/05/group-474.png'),
  },
];

export const contactsCard = {
  requisitesUrl: asset('content/uploads/2025/05/file.pdf'),
  officePhotos: [
    asset('content/uploads/2025/05/1-1-min-1.jpg'),
    asset('content/uploads/2025/05/l_height.webp'),
    asset('content/uploads/2025/05/05-12-19-1.jpg'),
  ],
  mapEmbedUrl:
    'https://yandex.ru/maps/?um=constructor%3A11ded686571788a435c6b106f12019495e37b98d1ce7bb4412dfa995a84dd8d6&source=constructorLink',
  socialLinks: [
    {
      label: 'Telegram',
      href: 'https://telegram.me/telegram_user_name',
      icon: asset('content/uploads/2022/11/telegram.png'),
    },
    {
      label: 'MAX',
      href: '#',
      icon: asset('content/uploads/2022/11/vk.png'),
    },
  ] satisfies SocialLink[],
};
