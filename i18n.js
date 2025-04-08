import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      "Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!":
        "Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!",
      "Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz va o‘z vaqtida yetkazib beradi.":
        "Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz va o‘z vaqtida yetkazib beradi.",
      "Biz bilan boshlang": "Biz bilan boshlang",
      Asosiy: "Asosiy",
      "Biz haqimizda": "Biz haqimizda",
      Xizmatlar: "Xizmatlar",
      Tashishlar: "Tashishlar",
      Afzalliklar: "Afzalliklar",
      Aloqa: "Aloqa",
      "Biz bilan bog'laning": "Biz bilan bog'laning",
      "Transport-ekspeditsiya kompaniyasi":
        "Transport-ekspeditsiya kompaniyasi",
      "Bizning yetkazib berish": "Bizning yetkazib berish",
      "Sizning afzalligingiz": "Sizning afzalligingiz",

      // Description
      "Kompaniyaning asosiy maqsadi":
        "Kompaniyaning asosiy maqsadi biznesni yuqori sifatli logistika, Yevropa va MDHning istalgan nuqtasiga yuklarni eng qulay va ishonchli tashish bilan ta'minlashdan iborat.",

      // Card 1
      "2020 yildan tajriba": "2020 yildan tajriba",
      "2020 yildan beri avtomobil yuk tashish":
        "2020 yildan beri avtomobil yuk tashish sohasida",

      // Card 2
      "Yuqori darajadagi xizmat": "Yuqori darajadagi xizmat",
      "Professional xizmat va yondashuv":
        "Professional xizmat va har bir mijozga kompleks yondashuv",

      // Card 3
      "Eng yuqori ball": "Eng yuqori ball",
      "WTL reytingida eng yuqori ball":
        "WTL hamjamiyatining ishonchlilik reytingida eng yuqori ball (5 yulduz).",
      Bizning: "Bizning",
      Xizmatlar: "Xizmatlar",

      // Services Items
      "Avtomobil tashish": "Avtomobil tashish",
      "Yuklaringiz uchun ishonchli va samarali avtomobil tashish xizmatlarini taqdim etamiz":
        "Yuklaringiz uchun ishonchli va samarali avtomobil tashish xizmatlarini taqdim etamiz",

      "Yuklar konsolidatsiyasi": "Yuklar konsolidatsiyasi",
      "Yetkazib berishni optimallashtirish uchun bir nechta kichik yuklar partiyasini birlashtirish":
        "Yetkazib berishni optimallashtirish uchun bir nechta kichik yuklar partiyasini birlashtirish",

      "Xitoydan yetkazib berish": "Xitoydan yetkazib berish",
      "Xitoydan yuklarni tez va ishonchli yetkazib berishni tashkil qilamiz":
        "Xitoydan yuklarni tez va ishonchli yetkazib berishni tashkil qilamiz",

      "Qiyin joylarga yetkazish": "Qiyin joylarga yetkazish",
      "Eng uzoq va qiyin hududlarga yetkazib berish xizmatini amalga oshiramiz":
        "Eng uzoq va qiyin hududlarga yetkazib berish xizmatini amalga oshiramiz",

      "Ombor xizmatlari": "Ombor xizmatlari",
      "Yuklaringizni saqlash uchun zamonaviy ombor binolarini taqdim etamiz":
        "Yuklaringizni saqlash uchun zamonaviy ombor binolarini taqdim etamiz",
      Xizmatlar: "Xizmatlar",
      "Yig'ma yuklarni yetkazib berish": "Yig'ma yuklarni yetkazib berish",
      "Kichik yuklar va dogruzkalar uchun maxsus xizmat. O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida tezkor va ishonchli yetkazib berish.":
        "Kichik yuklar va dogruzkalar uchun maxsus xizmat. O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida tezkor va ishonchli yetkazib berish.",
      "Yuk og'irligi: 1 kg dan 10 tonnagacha":
        "Yuk og'irligi: 1 kg dan 10 tonnagacha",
      "Asosiy yo'nalishlar: O'zbekiston-Rossiya, O'zbekiston-Qozog'iston va teskari yo'nalishlar":
        "Asosiy yo'nalishlar: O'zbekiston-Rossiya, O'zbekiston-Qozog'iston va teskari yo'nalishlar",
      "Avtomobil yuk tashish": "Avtomobil yuk tashish",
      "Katta yuklar uchun maxsus transport xizmati. O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa bo'ylab yetkazib berish.":
        "Katta yuklar uchun maxsus transport xizmati. O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa bo'ylab yetkazib berish.",
      "Yuk og'irligi: 10 tonnadan 21 tonnagacha":
        "Yuk og'irligi: 10 tonnadan 21 tonnagacha",
      "Yo'nalishlar: O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa":
        "Yo'nalishlar: O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa",
      "Bu tashishlar turli sohalarning ishlashini ta'minlashda muhim rol o'ynaydi va milliy iqtisodiyotning barqarorligini ta'minlaydi. Biz har":
        "Bu tashishlar turli sohalarning ishlashini ta'minlashda muhim rol o'ynaydi va milliy iqtisodiyotning barqarorligini ta'minlaydi. Biz har",
      "qanday yuklarni \"eshikdan eshikgacha\" eng qisqa muddatda va eng yaxshi sifat bilan yetkazib beramiz. Uskunalar yetkazib berish, qurilish va yo'l maxsus texnikasi, qurilish materiallari, mebel, maishiy texnika, ehtiyot qismlar va hatto samolyot - bizning ko'p yillik tajribamiz tashishni tashkil etishda keng imkoniyatlar beradi.":
        "qanday yuklarni \"eshikdan eshikgacha\" eng qisqa muddatda va eng yaxshi sifat bilan yetkazib beramiz. Uskunalar yetkazib berish, qurilish va yo'l maxsus texnikasi, qurilish materiallari, mebel, maishiy texnika, ehtiyot qismlar va hatto samolyot - bizning ko'p yillik tajribamiz tashishni tashkil etishda keng imkoniyatlar beradi.",
      "Biz haqimizda": "Biz haqimizda",
      "Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik rivojlanayotgan kompaniya. Bizning yo'nalishimiz - Yevropa, Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk tashish.":
        "Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik rivojlanayotgan kompaniya. Bizning yo'nalishimiz - Yevropa, Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk tashish.",
      "Bizning afzalliklarimiz": "Bizning afzalliklarimiz",
      "1 tonnadan 22 tonnagacha yuk mashinalari.":
        "1 tonnadan 22 tonnagacha yuk mashinalari.",
      "Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi yuklarni tashish va ekspeditsiya qilish.":
        "Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi yuklarni tashish va ekspeditsiya qilish.",
      "Yuklash/tushirish paytida maslahat yordami.":
        "Yuklash/tushirish paytida maslahat yordami.",
      "Bojxona brokeri yordami.": "Bojxona brokeri yordami.",
      "Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan ishlaymiz.":
        "Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan ishlaymiz.",
      "Har qanday to'lov shakli.": "Har qanday to'lov shakli.",
      "Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim tejamkorlikdir. Mijoz butun mashinaning yurishi uchun emas, balki faqat bir tomonga yetkazib berish uchun to'laydi. Yetkazib berish narxining -30%.":
        "Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim tejamkorlikdir. Mijoz butun mashinaning yurishi uchun emas, balki faqat bir tomonga yetkazib berish uchun to'laydi. Yetkazib berish narxining -30%.",
      "Shu bilan birga, yirik transport kompaniyasining afzalliklari saqlanib qoladi: ishonchli transport, tajribali haydovchilar, sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan xavfsizligi.":
        "Shu bilan birga, yirik transport kompaniyasining afzalliklari saqlanib qoladi: ishonchli transport, tajribali haydovchilar, sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan xavfsizligi.",
      "Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan transport mavjud.":
        "Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan transport mavjud.",
      "Yetkazib berishning barcha bosqichlarini nazorat qilib, biz yukning qayerda ekanligini, uning muddati va yakuniy nuqtaga yetib kelish sanasini aniq bilamiz.":
        "Yetkazib berishning barcha bosqichlarini nazorat qilib, biz yukning qayerda ekanligini, uning muddati va yakuniy nuqtaga yetib kelish sanasini aniq bilamiz.",
      "Biz bozorda ishonchli hamkor sifatida obro' qozondik.":
        "Biz bozorda ishonchli hamkor sifatida obro' qozondik.",
      "Bizga ishonishingiz mumkin.": "Bizga ishonishingiz mumkin.",
      "Aniqlik narxini bilish, ma'lum bir sanada yetkazib berish imkoniyatini aniqlash yoki paydo bo'lgan har qanday savollar bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki shunchaki qo'ng'iroq qiling.":
        "Aniqlik narxini bilish, ma'lum bir sanada yetkazib berish imkoniyatini aniqlash yoki paydo bo'lgan har qanday savollar bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki shunchaki qo'ng'iroq qiling.",
      skills: {
        title: "Nimalarda zo‘rmiz?",
        subtitle:
          "Kompaniyamiz ishonchli, tajribali va professional xodimlardan tashkil topgan bo‘lib, har bir vazifaga mas'uliyat bilan yondashadi.",
        team_title: "Tajribali jamoa",
        team_description:
          "Tajribali jamoamiz yuk tashish jarayonini muammosiz va xavfsiz tashkil qiladi.",
        support_title: "Doimiy qo‘llab-quvvatlash",
        support_description:
          "24/7 mijozlarni qo‘llab-quvvatlash xizmati bilan har doim yoningizdamiz.",
        network_title: "Keng tarmoq",
        network_description:
          "Yurt bo‘ylab keng hamkorlik tarmog‘imiz orqali tezkor yetkazib berishni ta'minlaymiz.",
        security_title: "Tez yetkazib berish",
        security_description:
          "Tez va ishonchli yetkazib berish, tajribali jamoa va 24/7 qo‘llab-quvvatlash.",
        services: {
          regionalDelivery: {
            title: "Hududiy yetkazib berish",
            description:
              "Hududiy yuklarni tez va arzon yetkazib berish xizmatlari.",
          },
          turkeyDelivery: {
            title: "Turkiyadan yuk tashish",
            description:
              "Turkiyadan O'zbekistonga sifatli va ishonchli yuk tashish xizmatlari.",
          },
          europeDelivery: {
            title: "Yevropadan yetkazib berish",
            description:
              "Yevropadan tez va xavfsiz yuklarni yetkazib berish uchun ishonchli logistika xizmatlari.",
          },
          russiaDelivery: {
            title: "Rossiyadan yuk tashish",
            description:
              "Rossiyadan O'zbekistonga barcha turdagi yuklarni tez va ishonchli yetkazib berish.",
          },
          orderButton: "Buyurtma qiling",
        },
        TariffsSection: {
          title: "Yuk mashinalarimiz",
          chooseSize: "Hajmni tanlang",
          orderNow: "Buyurtma berish",
          specs: {
            length: "Ichki uzunligi",
            width: "Ichki kengligi",
            height: "Ichki balandligi",
            capacity: "Yuk ko'tarish quvvati",
          },
        },
        tariffRequest: {
          heading: "Yuk tashish narxini bilish uchun so'rov qoldiring",
          subheading:
            "Bizning mutaxassis siz bilan bog'lanib, narxga ta'sir qilishi mumkin bo'lgan tashish tafsilotlarini aniqlashtiradi",
          note: "Ushbu ma'lumotni taqdim etib, siz qo'shimcha to'lovlarsiz kafolatlangan narxni olasiz",
          pickupLocation: "Yuklash joyi",
          dropoffLocation: "Tushirish joyi",
          deliveryTime: "Yetkazib berish muddati",
          cargoParameters: "Yuk parametrlari",
        },
        routes: {
          heading: "Bizning yo'nalishlar",
          description: "Ishonchli va tezkor yetkazib berish",
        },
      },
      stats: {
        market_experience: {
          title: "5+ yildan beri bozorda",
          description: "Yetkazib berishdagi tajriba, vaqt sinovidan o'tgan",
        },
        reviews: {
          title: "5000+ izohlar",
          description: "Mijozlarimiz bizning ishimizdan mamnun",
        },
        partners: {
          title: "100+ Partnyorlar",
          description: "Ular yuklarini bizga ishonib topshirishadi",
        },
        Ours: "Bizning",
        hamkorlarimiz: "Hamkorlarimiz",
      },

      process: {
        title1: "Ish",
        title2: "tartibi",
      },
      steps: {
        step1Alt:
          "Siz buyurtma qoldirasiz yoki telefon orqali murojaat qilasiz",
        step1Title:
          "Siz buyurtma qoldirasiz yoki telefon orqali murojaat qilasiz",
        step2Alt:
          "Shartlarni muhokama qilamiz, narxni kelishib, shartnoma imzolaymiz",
        step2Title:
          "Shartlarni muhokama qilamiz, narxni kelishib, shartnoma imzolaymiz",
        step3Alt: "Yukni belgilangan yo'nalish bo'yicha yetkazib beramiz",
        step3Title: "Yukni belgilangan yo'nalish bo'yicha yetkazib beramiz",
        step4Alt: "To'lov, yuk va hujjatlarni qabul qilish",
        step4Title: "To'lov, yuk va hujjatlarni qabul qilish",
      },
      contactTitle: "Tez va ishonchli xalqaro yuk tashish xizmati",
      from: "Qayerdan",
      to: "Qayerga",
      cargoName: "Yuk nomi",
      phone: "Telefon",
      send: "Yuborish",
      success: "Ma'lumot muvaffaqiyatli yuborildi!",
      error: "Xatolik yuz berdi. Qaytadan urinib ko‘ring.",
      contact: {
        title: "Ishonchli logistika kerakmi?",
        description:
          "Bizning zamonaviy avtoparkimiz va logistikadagi tajribamiz sizning biznesingizni qanday rivojlantirishi mumkinligini bilish uchun bugun biz bilan bog'laning.",
        address: "Toshkent, Sandiqli ko'chasi, 52",
        phone: "+998 95 340 19 50",
        email: "waschmittelcompany@mail.ru",
        working_hours: "Du-Sha 9:00 dan 18:00 gacha",
      },
      footer: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        advantages: "Bizning afzalliklarimiz",
        services: "Xizmatlar",
        transportation: "Tashishlar",
        contact_us: "Biz bilan bog'laning",
        contacts: "Kontaktlar",
        working_hours: "Du-Sha 9:00 dan 18:00 gacha",
        address: "Toshkent, Sandiqli ko'chasi, 52",
        all_rights_reserved: "Barcha huquqlar himoyalangan",
      },
    },
  },
  ru: {
    translation: {
      "Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!":
        "Мы гарантируем быструю и безопасную доставку!",
      "Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz va o‘z vaqtida yetkazib beradi.":
        "Наш автопарк состоит из лучших грузовиков в своем классе и обеспечивает быструю, безопасную и своевременную доставку ваших грузов в любую точку.",
      "Biz bilan boshlang": "Начать с нами",
      Asosiy: "Основной",
      "Biz haqimizda": "О нас",
      Xizmatlar: "Услуги",
      Tashishlar: "Перевозки",
      Afzalliklar: "Преимущества",
      Aloqa: "Контакты",
      "Biz bilan bog'laning": "Связаться с нами",
      "Transport-ekspeditsiya kompaniyasi":
        "Транспортно-экспедиторская компания",
      "Bizning yetkazib berish": "Наша доставка",
      "Sizning afzalligingiz": "Ваше преимущество",

      "Kompaniyaning asosiy maqsadi":
        "Основная цель компании — обеспечить бизнес качественной логистикой и надежной перевозкой грузов в любую точку Европы и СНГ.",

      "2020 yildan tajriba": "Опыт с 2020 года",
      "2020 yildan beri avtomobil yuk tashish":
        "С 2020 года в сфере автоперевозок",

      "Yuqori darajadagi xizmat": "Высокий уровень сервиса",
      "Professional xizmat va yondashuv":
        "Профессиональный сервис и индивидуальный подход к каждому клиенту",

      "Eng yuqori ball": "Максимальная оценка",
      "WTL reytingida eng yuqori ball":
        "Высшая оценка (5 звезд) в рейтинге надежности WTL сообщества.",
      Bizning: "Наши",
      Xizmatlar: "Услуги",

      "Avtomobil tashish": "Автомобильные перевозки",
      "Yuklaringiz uchun ishonchli va samarali avtomobil tashish xizmatlarini taqdim etamiz":
        "Мы предоставляем надежные и эффективные автомобильные перевозки для ваших грузов",

      "Yuklar konsolidatsiyasi": "Консолидация грузов",
      "Yetkazib berishni optimallashtirish uchun bir nechta kichik yuklar partiyasini birlashtirish":
        "Объединение нескольких мелких партий грузов для оптимизации доставки",

      "Xitoydan yetkazib berish": "Доставка из Китая",
      "Xitoydan yuklarni tez va ishonchli yetkazib berishni tashkil qilamiz":
        "Организуем быструю и надежную доставку грузов из Китая",

      "Qiyin joylarga yetkazish": "Доставка в труднодоступные места",
      "Eng uzoq va qiyin hududlarga yetkazib berish xizmatini amalga oshiramiz":
        "Осуществляем доставку в отдалённые и труднодоступные регионы",

      "Ombor xizmatlari": "Складские услуги",
      "Yuklaringizni saqlash uchun zamonaviy ombor binolarini taqdim etamiz":
        "Предоставляем современные складские помещения для хранения ваших грузов",
      Xizmatlar: "Услуги",
      "Yig'ma yuklarni yetkazib berish": "Доставка сборных грузов",
      "Kichik yuklar va dogruzkalar uchun maxsus xizmat. O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida tezkor va ishonchli yetkazib berish.":
        "Специальный сервис для мелких грузов и посылок. Быстрая и надежная доставка по направлениям Узбекистан, Россия и Казахстан.",
      "Yuk og'irligi: 1 kg dan 10 tonnagacha": "Вес груза: от 1 кг до 10 тонн",
      "Asosiy yo'nalishlar: O'zbekiston-Rossiya, O'zbekiston-Qozog'iston va teskari yo'nalishlar":
        "Основные направления: Узбекистан-Россия, Узбекистан-Казахстан и обратные направления",
      "Avtomobil yuk tashish": "Автомобильные перевозки",
      "Katta yuklar uchun maxsus transport xizmati. O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa bo'ylab yetkazib berish.":
        "Специальный транспорт для крупных грузов. Доставка по направлениям Узбекистан, Россия, Казахстан, Турция и Европа.",
      "Yuk og'irligi: 10 tonnadan 21 tonnagacha":
        "Вес груза: от 10 тонн до 21 тонны",
      "Yo'nalishlar: O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa":
        "Направления: Узбекистан, Россия, Казахстан, Турция и Европа",
      "Bu tashishlar turli sohalarning ishlashini ta'minlashda muhim rol o'ynaydi va milliy iqtisodiyotning barqarorligini ta'minlaydi. Biz har":
        'Эти перевозки играют важную роль в обеспечении функционирования различных отраслей и поддержании стабильности национальной экономики. Мы доставляем любые грузы "от двери до двери" в кратчайшие сроки и с наивысшим качеством. Мы предоставляем транспорт для доставки оборудования, строительной и дорожной техники, строительных материалов, мебели, бытовой техники, запчастей и даже самолетов. Мы имеем многолетний опыт организации перевозок и широкий спектр возможностей.',
      "Biz haqimizda": "О нас",
      "Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik rivojlanayotgan kompaniya. Bizning yo'nalishimiz - Yevropa, Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk tashish.":
        "Компания, работающая более 5 лет на рынке грузоперевозок, динамично развивающаяся. Наши направления - Европа, Россия, Турция и страны СНГ по автомобильным перевозкам.",
      "Bizning afzalliklarimiz": "Наши преимущества",
      "1 tonnadan 22 tonnagacha yuk mashinalari.": "Грузовики от 1 до 22 тонн.",
      "Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi yuklarni tashish va ekspeditsiya qilish.":
        "Действительно актуальные тарифы. Перевозка и экспедирование грузов любой сложности.",
      "Yuklash/tushirish paytida maslahat yordami.":
        "Консультации при загрузке/разгрузке.",
      "Bojxona brokeri yordami.": "Помощь таможенного брокера.",
      "Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan ishlaymiz.":
        "Работаем с юридическими лицами и индивидуальными предпринимателями.",
      "Har qanday to'lov shakli.": "Любые формы оплаты.",
      "Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim tejamkorlikdir. Mijoz butun mashinaning yurishi uchun emas, balki faqat bir tomonga yetkazib berish uchun to'laydi. Yetkazib berish narxining -30%.":
        "Транзитная доставка (консолидированная перевозка) всегда экономична. Клиент платит не за весь путь, а только за доставку в одну сторону. Скидка на доставку -30%.",
      "Shu bilan birga, yirik transport kompaniyasining afzalliklari saqlanib qoladi: ishonchli transport, tajribali haydovchilar, sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan xavfsizligi.":
        "При этом сохраняются преимущества крупных транспортных компаний: надежный транспорт, опытные водители, проверенные маршруты и гарантированная безопасность вашего имущества.",
      "Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan transport mavjud.":
        "Даже при срочных заказах всегда есть свободный транспорт.",
      "Yetkazib berishning barcha bosqichlarini nazorat qilib, biz yukning qayerda ekanligini, uning muddati va yakuniy nuqtaga yetib kelish sanasini aniq bilamiz.":
        "Контролируя все этапы доставки, мы точно знаем, где находится груз, его срок и дату доставки в конечную точку.",
      "Biz bozorda ishonchli hamkor sifatida obro' qozondik.":
        "Мы зарекомендовали себя как надежный партнер на рынке.",
      "Bizga ishonishingiz mumkin.": "Вы можете нам доверять.",
      "Aniqlik narxini bilish, ma'lum bir sanada yetkazib berish imkoniyatini aniqlash yoki paydo bo'lgan har qanday savollar bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki shunchaki qo'ng'iroq qiling.":
        "Чтобы уточнить цену, возможность доставки в определенную дату или получить консультацию по любым вопросам, оставьте запрос на сайте или просто позвоните.",
      skills: {
        title: "В чем мы сильны?",
        subtitle:
          "Наша компания состоит из надежных, опытных и профессиональных сотрудников, которые подходят к каждой задаче с ответственностью.",
        team_title: "Опытная команда",
        team_description:
          "Наша опытная команда организует процесс перевозки быстро и безопасно.",
        support_title: "Постоянная поддержка",
        support_description:
          "Мы всегда рядом с вами с круглосуточной поддержкой клиентов.",
        network_title: "Широкая сеть",
        network_description:
          "Обеспечиваем быструю доставку через нашу широкую сеть партнеров по всей стране.",
        security_title: "Быстрая доставка",
        security_description:
          "Быстрая и надежная доставка, опытная команда и круглосуточная поддержка.",
        services: {
          regionalDelivery: {
            title: "Региональная доставка",
            description: "Быстрая и доступная доставка грузов по регионам.",
          },
          turkeyDelivery: {
            title: "Доставка из Турции",
            description:
              "Надежные услуги доставки грузов из Турции в Узбекистан.",
          },
          europeDelivery: {
            title: "Доставка из Европы",
            description: "Быстрая и безопасная логистика из Европы.",
          },
          russiaDelivery: {
            title: "Доставка из России",
            description:
              "Надежная и быстрая доставка всех видов грузов из России в Узбекистан.",
          },
          orderButton: "Сделать заказ",
        },
        TariffsSection: {
          title: "Наши грузовики",
          chooseSize: "Выберите объем",
          orderNow: "Оформить заказ",
          specs: {
            length: "Внутренняя длина",
            width: "Внутренняя ширина",
            height: "Внутренняя высота",
            capacity: "Грузоподъёмность",
          },
        },
        tariffRequest: {
          heading: "Оставьте заявку, чтобы узнать цену перевозки",
          subheading:
            "Наш специалист свяжется с вами и уточнит детали перевозки, которые могут повлиять на цену",
          note: "Предоставив эту информацию, вы получите гарантированную цену без дополнительных сборов",
          pickupLocation: "Место загрузки",
          dropoffLocation: "Место выгрузки",
          deliveryTime: "Срок доставки",
          cargoParameters: "Параметры груза",
        },
        routes: {
          heading: "Наши направления",
          description: "Надёжная и быстрая доставка",
        },
      },
      stats: {
        market_experience: {
          title: "Более 5 лет на рынке",
          description: "Опыт доставки, проверенный временем",
        },
        reviews: {
          title: "5000+ отзывов",
          description: "Наши клиенты довольны нашей работой",
        },
        partners: {
          title: "100+ партнёров",
          description: "Они доверяют нам свои грузы",
        },
        Ours: "Наши",
        hamkorlarimiz: "Партнеры",
      },
      process: {
        title1: "Процесс",
        title2: "работы",
      },
      steps: {
        step1Alt: "Вы оставляете заявку или звоните",
        step1Title: "Вы оставляете заявку или звоните",
        step2Alt:
          "Обсуждаем условия, договариваемся о цене и подписываем контракт",
        step2Title:
          "Обсуждаем условия, договариваемся о цене и подписываем контракт",
        step3Alt: "Доставляем груз по указанному маршруту",
        step3Title: "Доставляем груз по указанному маршруту",
        step4Alt: "Получение оплаты, груза и документов",
        step4Title: "Получение оплаты, груза и документов",
      },
      contactTitle: "Быстрые и надежные международные грузоперевозки",
      from: "Откуда",
      to: "Куда",
      cargoName: "Название груза",
      phone: "Телефон",
      send: "Отправить",
      success: "Информация успешно отправлена!",
      error: "Произошла ошибка. Попробуйте снова.",
      contact: {
        title: "Нужна надежная логистика?",
        description:
          "Свяжитесь с нами сегодня, чтобы узнать, как наш современный автопарк и опыт в логистике могут развить ваш бизнес.",
        address: "Ташкент, улица Сандыклы, 52",
        phone: "+998 95 340 19 50",
        email: "waschmittelcompany@mail.ru",
        working_hours: "Пн-Сб с 9:00 до 18:00",
      },
      footer: {
        home: "Главная",
        about: "О нас",
        advantages: "Наши преимущества",
        services: "Услуги",
        transportation: "Перевозки",
        contact_us: "Свяжитесь с нами",
        contacts: "Контакты",
        working_hours: "Пн-Сб с 9:00 до 18:00",
        address: "Ташкент, улица Сандикли, 52",
        all_rights_reserved: "Все права защищены",
      },
    },
  },
  en: {
    translation: {
      "Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!":
        "We guarantee fast and secure delivery!",
      "Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz va o‘z vaqtida yetkazib beradi.":
        "Our fleet consists of the best-in-class trucks that ensure your cargo is delivered quickly, safely, and on time wherever it needs to go.",
      "Biz bilan boshlang": "Start with us",
      Asosiy: "Home",
      "Biz haqimizda": "About Us",
      Xizmatlar: "Services",
      Tashishlar: "Transportations",
      Afzalliklar: "Advantages",
      Aloqa: "Contact",
      "Biz bilan bog'laning": "Contact Us",
      "Transport-ekspeditsiya kompaniyasi": "Transport and forwarding company",
      "Bizning yetkazib berish": "Our delivery",
      "Sizning afzalligingiz": "Your advantage",

      "Kompaniyaning asosiy maqsadi":
        "The main goal of the company is to ensure high-quality logistics and reliable transportation of goods to any point in Europe and the CIS.",

      "2020 yildan tajriba": "Experience since 2020",
      "2020 yildan beri avtomobil yuk tashish":
        "In the field of road freight transport since 2020",

      "Yuqori darajadagi xizmat": "High-level service",
      "Professional xizmat va yondashuv":
        "Professional service and a comprehensive approach to every client",

      "Eng yuqori ball": "Highest rating",
      "WTL reytingida eng yuqori ball":
        "The highest rating (5 stars) in the WTL community reliability ranking.",
      Bizning: "Our",
      Xizmatlar: "Services",

      "Avtomobil tashish": "Road Freight",
      "Yuklaringiz uchun ishonchli va samarali avtomobil tashish xizmatlarini taqdim etamiz":
        "We offer reliable and efficient road freight services for your goods",

      "Yuklar konsolidatsiyasi": "Cargo Consolidation",
      "Yetkazib berishni optimallashtirish uchun bir nechta kichik yuklar partiyasini birlashtirish":
        "Combining several small cargo batches to optimize delivery",

      "Xitoydan yetkazib berish": "Delivery from China",
      "Xitoydan yuklarni tez va ishonchli yetkazib berishni tashkil qilamiz":
        "We organize fast and reliable delivery of goods from China",

      "Qiyin joylarga yetkazish": "Delivery to Hard-to-Reach Areas",
      "Eng uzoq va qiyin hududlarga yetkazib berish xizmatini amalga oshiramiz":
        "We deliver to the most remote and challenging regions",

      "Ombor xizmatlari": "Warehousing Services",
      "Yuklaringizni saqlash uchun zamonaviy ombor binolarini taqdim etamiz":
        "We provide modern warehousing facilities for your cargo storage",
      Xizmatlar: "Services",
      "Yig'ma yuklarni yetkazib berish": "Consolidated Freight Delivery",
      "Kichik yuklar va dogruzkalar uchun maxsus xizmat. O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida tezkor va ishonchli yetkazib berish.":
        "Special service for small goods and parcels. Fast and reliable delivery to Uzbekistan, Russia, and Kazakhstan.",
      "Yuk og'irligi: 1 kg dan 10 tonnagacha":
        "Cargo weight: from 1 kg to 10 tons",
      "Asosiy yo'nalishlar: O'zbekiston-Rossiya, O'zbekiston-Qozog'iston va teskari yo'nalishlar":
        "Main routes: Uzbekistan-Russia, Uzbekistan-Kazakhstan, and reverse routes",
      "Avtomobil yuk tashish": "Automobile Freight Transport",
      "Katta yuklar uchun maxsus transport xizmati. O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa bo'ylab yetkazib berish.":
        "Special transport service for large freight. Delivery across Uzbekistan, Russia, Kazakhstan, Turkey, and Europe.",
      "Yuk og'irligi: 10 tonnadan 21 tonnagacha":
        "Cargo weight: from 10 tons to 21 tons",
      "Yo'nalishlar: O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa":
        "Routes: Uzbekistan, Russia, Kazakhstan, Turkey, and Europe",
      "Bu tashishlar turli sohalarning ishlashini ta'minlashda muhim rol o'ynaydi va milliy iqtisodiyotning barqarorligini ta'minlaydi. Biz har":
        'These freight services play an important role in ensuring the operation of various industries and maintaining the stability of the national economy. We deliver any freight "door-to-door" in the shortest time and with the highest quality. We provide equipment delivery, construction and road special machinery, construction materials, furniture, household appliances, spare parts, and even airplanes. Our years of experience in organizing freight transport provides extensive opportunities.',
      "Biz haqimizda": "About us",
      "Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik rivojlanayotgan kompaniya. Bizning yo'nalishimiz - Yevropa, Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk tashish.":
        "A dynamic and developing company operating in the freight transportation market for over 5 years. Our direction is freight transportation by road in Europe, Russia, Turkey, and the CIS countries.",
      "Bizning afzalliklarimiz": "Our advantages",
      "1 tonnadan 22 tonnagacha yuk mashinalari.": "Trucks from 1 to 22 tons.",
      "Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi yuklarni tashish va ekspeditsiya qilish.":
        "Really relevant rates. Transportation and forwarding of goods of any complexity.",
      "Yuklash/tushirish paytida maslahat yordami.":
        "Consultations during loading/unloading.",
      "Bojxona brokeri yordami.": "Customs broker assistance.",
      "Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan ishlaymiz.":
        "We work with legal entities and individual entrepreneurs.",
      "Har qanday to'lov shakli.": "Any form of payment.",
      "Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim tejamkorlikdir. Mijoz butun mashinaning yurishi uchun emas, balki faqat bir tomonga yetkazib berish uchun to'laydi. Yetkazib berish narxining -30%.":
        "Transit delivery (consolidated transport) is always cost-effective. The client pays not for the entire route, but only for delivery in one direction. A -30% discount on delivery price.",
      "Shu bilan birga, yirik transport kompaniyasining afzalliklari saqlanib qoladi: ishonchli transport, tajribali haydovchilar, sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan xavfsizligi.":
        "At the same time, the advantages of a large transport company remain: reliable vehicles, experienced drivers, tested routes, and guaranteed safety of your property.",
      "Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan transport mavjud.":
        "Even for urgent orders, transport with available space is always available.",
      "Yetkazib berishning barcha bosqichlarini nazorat qilib, biz yukning qayerda ekanligini, uning muddati va yakuniy nuqtaga yetib kelish sanasini aniq bilamiz.":
        "By controlling all stages of delivery, we know exactly where the cargo is, its duration, and the delivery date to the final point.",
      "Biz bozorda ishonchli hamkor sifatida obro' qozondik.":
        "We have earned a reputation as a reliable partner in the market.",
      "Bizga ishonishingiz mumkin.": "You can trust us.",
      "Aniqlik narxini bilish, ma'lum bir sanada yetkazib berish imkoniyatini aniqlash yoki paydo bo'lgan har qanday savollar bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki shunchaki qo'ng'iroq qiling.":
        "To clarify the price, check the possibility of delivery on a specific date, or get advice on any issues, leave a request on the website or simply call.",
      skills: {
        title: "What are we strong at?",
        subtitle:
          "Our company consists of reliable, experienced, and professional staff who approach every task with responsibility.",
        team_title: "Experienced team",
        team_description:
          "Our experienced team organizes the freight transportation process smoothly and safely.",
        support_title: "Constant support",
        support_description:
          "We are always with you with 24/7 customer support.",
        network_title: "Wide network",
        network_description:
          "We ensure fast delivery through our wide network of partners across the country.",
        security_title: "Fast delivery",
        security_description:
          "Fast and reliable delivery, experienced team, and 24/7 support",
        services: {
          regionalDelivery: {
            title: "Regional Delivery",
            description:
              "Fast and affordable regional cargo delivery services.",
          },
          turkeyDelivery: {
            title: "Delivery from Turkey",
            description:
              "Reliable cargo delivery services from Turkey to Uzbekistan.",
          },
          europeDelivery: {
            title: "Delivery from Europe",
            description: "Fast and secure logistics services from Europe.",
          },
          russiaDelivery: {
            title: "Delivery from Russia",
            description:
              "Reliable and fast delivery of all types of cargo from Russia to Uzbekistan.",
          },
          orderButton: "Place Order",
        },
        TariffsSection: {
          title: "Our Trucks",
          chooseSize: "Choose size",
          orderNow: "Order now",
          specs: {
            length: "Inner length",
            width: "Inner width",
            height: "Inner height",
            capacity: "Load capacity",
          },
        },

        tariffRequest: {
          heading: "Request a quote to find out the shipping cost",
          subheading:
            "Our specialist will contact you to clarify the shipping details that may affect the price",
          note: "By providing this information, you get a guaranteed price with no extra charges",
          pickupLocation: "Pickup location",
          dropoffLocation: "Drop-off location",
          deliveryTime: "Delivery time",
          cargoParameters: "Cargo parameters",
        },
        routes: {
          heading: "Our Routes",
          description: "Reliable and fast delivery",
        },
      },
      stats: {
        market_experience: {
          title: "5+ years in the market",
          description: "Delivery experience proven over time",
        },
        reviews: {
          title: "5000+ reviews",
          description: "Our clients are happy with our work",
        },
        partners: {
          title: "100+ partners",
          description: "They trust us with their cargo",
        },
        Ours: "Ours",
        hamkorlarimiz: "Partners",
      },
      process: {
        title1: "Work",
        title2: "process",
      },
      steps: {
        step1Alt: "You place an order or contact us by phone",
        step1Title: "You place an order or contact us by phone",
        step2Alt:
          "We discuss the terms, agree on the price, and sign the contract",
        step2Title:
          "We discuss the terms, agree on the price, and sign the contract",
        step3Alt: "We deliver the cargo along the designated route",
        step3Title: "We deliver the cargo along the designated route",
        step4Alt: "Receive the payment, cargo, and documents",
        step4Title: "Receive the payment, cargo, and documents",
      },
      contactTitle: "Fast and reliable international cargo service",
      from: "From",
      to: "To",
      cargoName: "Cargo name",
      phone: "Phone",
      send: "Send",
      success: "Information sent successfully!",
      error: "An error occurred. Please try again.",
      contact: {
        title: "Need reliable logistics?",
        description:
          "Contact us today to learn how our modern fleet and logistics expertise can grow your business.",
        address: "Tashkent, Sandikli street, 52",
        phone: "+998 95 340 19 50",
        email: "waschmittelcompany@mail.ru",
        working_hours: "Mon-Sat 9:00 AM to 6:00 PM",
      },
      footer: {
        home: "Home",
        about: "About Us",
        advantages: "Our Advantages",
        services: "Services",
        transportation: "Transportation",
        contact_us: "Contact Us",
        contacts: "Contacts",
        working_hours: "Mon-Sat 9:00 AM to 6:00 PM",
        address: "Tashkent, Sandikli Street, 52",
        all_rights_reserved: "All rights reserved",
      },
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
