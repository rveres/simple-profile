const COVER_IMAGES_DICT = {
  "1": "Kiso-Fukushima. Fall 2022. Kodak Gold 200.",
  "2": "Atsugi. Spring 2023. Ilford Delta 400.",
  "3": "Tsujido. Spring 2023. Kodak Gold 200.",
  "4": "Atsugi. Spring 2023. Ilford Delta 400.",
  "5": "Tsujido. Spring 2023. Kodak Gold 200.",
  "6": "Shibuya Ward, Tokyo. Spring 2023. Kodak Gold 200.",
  "7": "Osaka. Fall 2022. Kodak Gold 200.",
  "8": "Sagamihara. Spring 2023. Kodak ProImage 100.",
  "9": "Atsugi. Spring 2023. Kodak ProImage 100.",
  "10": "Magome-juku. Fall 2022. Kodak Gold 200.",
  "11": "Gwangju. Spring 2023.",
  "12": "Chiba. Winter 2022. Kodak Ultramax 400.",
  "13": "Ebina. Spring 2023. Kodak ProImage 100.",
  "14": "Ebina. Spring 2023. Kodak ProImage 100.",
  "15": "Ebina. Spring 2023. Kodak ProImage 100.",
  "16": "Ebina. Spring 2023. Kodak ProImage 100.",
  "17": "Tokyo. Spring 2023. Kodak Ultramax 400.",
  "18": "The DMZ. Spring 2023.",
  "19": "Seoul. Spring 2023.",
  "20": "Seoul. Spring 2023.",
  "21": "Seoul. Spring 2023.",
  "22": "Busan. Spring 2023.",
  "23": "Gyeongju. Spring 2023. Fujifilm Fujicolor Superia X-TRA 400.",
  "24": "Fujisawa. Winter 2022. Kodak Ultramax 400.",
  "25": "Tsujido. Winter 2022. Kodak Ultramax 400.",
  "26": "Hachioji. Winter 2023. Kodak Ultramax 400.",
  "27": "Kawaguchiko. Winter 2023. Kodak Gold 200.",
  "28": "Minato Ward, Tokyo. Winter 2022. Fujifilm Fujicolor 100.",
  "29": "Tsujido. Winter 2022. Fujifilm Fujicolor 100.",
  "30": "Minato Ward, Tokyo. Winter 2023. Kodak Gold 200.",
  "31": "Minato Ward, Tokyo. Winter 2023. Kodak Gold 200.",
  "32": "Taito Ward, Tokyo. Fall 2022. Fujifilm Fujicolor 100.",
  "33": "Taito Ward, Tokyo. Fall 2022. Fujifilm Fujicolor 100.",
  "34": "Taito Ward, Tokyo. Fall 2022. Fujifilm Fujicolor 100.",
  "35": "Kyoto. Fall 2022. Kodak Gold 200.",
  "36": "Nara. Fall 2022. Kodak Gold 200.",
  "37": "Sendai. Fall 2022. Fujifilm Fujicolor 100.",
  "38": "Taito Ward, Tokyo. Fall 2022. Fujifilm Fujicolor 100.",
  "39": "Itabashi Ward, Tokyo. Winter 2022. Kodak Ultramax 400.",
  "40": "Tokyo. Winter 2022. Kodak Ultramax 400.",
  "41": "Tokyo. Winter 2022. Fujifilm Fujicolor 100.",
  "42": "Chiba. Winter 2022. Fujifilm Fujicolor 100.",
  "43": "Minato Ward, Tokyo. Winter 2023. Fujifilm Fujicolor 100.",
  "44": "Tokyo. Winter 2022. Fujifilm Fujicolor 100.",
  "45": "Itabashi Ward, Tokyo. Winter 2022. Fujifilm Fujicolor 100.",
  "46": "Chiyoda Ward, Tokyo. Spring 2023. Kodak ProImage 100.",
  "47": "Sapporo. Spring 2023.",
  "48": "Amsterdam. Spring 2023.",
  "49": "Frankfurt. Summer 2023.",
  "50": "Da Lat. Spring 2024.",
  "51": "Ho Chi Minh City. Spring 2024.",
  "52": "Ho Chi Minh City. Spring 2024.",
  "53": "Ho Chi Minh City. Spring 2024.",
  "54": "Ho Chi Minh City. Spring 2024.",
  "55": "Ho Chi Minh City. Spring 2024.",
  "56": "Ho Chi Minh City. Spring 2024.",
  "57": "Ho Chi Minh City. Spring 2024.",
  "58": "Ho Chi Minh City. Spring 2024.",
  "59": "Ho Chi Minh City. Spring 2024.",
  "60": "Ho Chi Minh City. Spring 2024.",
  "61": "Ho Chi Minh City. Spring 2024.",
  "62": "Ho Chi Minh City. Spring 2024.",
  "63": "Ho Chi Minh City. Spring 2024.",
  "64": "Ho Chi Minh City. Spring 2024.",
  "65": "Ho Chi Minh City. Spring 2024.",
  "66": "Ho Chi Minh City. Spring 2024.",
  "67": "Ho Chi Minh City. Spring 2024.",
  "68": "Ho Chi Minh City. Spring 2024.",
  "69": "Ho Chi Minh City. Spring 2024.",
  "70": "Tsujido. Spring 2023. Ilford Delta 400.",
  "71": "Atami. Spring 2023. Ilford Delta 400.",
  "72": "Atami. Spring 2023. Ilford Delta 400.",
};

var CURR_LANG = "en";
const CJK_LANGS = ["cn", "jp", "vn"];

const TRANSLATIONS = {
  en: {
    "name-title": "Robert Veres",
    "email-caption": "me [@] robertveres.com",
    "github-link": "github",
    "linkedin-link": "linkedin",
    "essay-link": "essays",
    "magic-link": "magic!",
    "copyright-text":
      "© 2026 Robert Veres.<br/>Pictures taken with Canon AE-1 Program or Ricoh FF-3D AF Super.",
  },
  hu: {
    "name-title": "Veres Róbert",
    "email-caption": "me [@] robertveres.com",
    "github-link": "github",
    "linkedin-link": "linkedin",
    "essay-link": "esszék",
    "magic-link": "magikus!",
    "copyright-text":
      "© 2026 Veres Róbert.<br/>Képek: Canon AE-1 Program vagy Ricoh FF-3D AF Super.",
  },
  cn: {
    "name-title": "罗伯特",
    "email-caption": "3928225149 [@] qq.com",
    "github-link": "github",
    "linkedin-link": "领英",
    "essay-link": "论文",
    "magic-link": "魔法!",
    "copyright-text":
      "© 2026 罗伯特。<br/>使用佳能 AE-1 或理光 FF-3D AF Super 拍摄的照片。",
  },
  jp: {
    "name-title": "ベレス・ロバート",
    "email-caption": "me [@] robertveres.com",
    "github-link": "ギットハブ",
    "linkedin-link": "リンクトイン",
    "essay-link": "エッセイ",
    "magic-link": "魔法!",
    "copyright-text":
      "© 2026 ベレス・ロバート。<br/>キヤノン AE-1 プログラムまたはリコー FF-3D AF スーパーで撮影した写真。",
  },
  vn: {
    "name-title": "Veres Robert",
    "email-caption": "me [@] robertveres.com",
    "github-link": "github",
    "linkedin-link": "linkedin",
    "essay-link": "bài luận",
    "magic-link": "ảo thuật!",
    "copyright-text":
      "© 2026 Veres Robert.<br/>Ảnh chụp bằng Canon AE-1 Program hoặc Ricoh FF-3D AF Super.",
  },
  ru: {
    "name-title": "Роберт Верес",
    "email-caption": "me [@] robertveres.com",
    "github-link": "гитхаб",
    "linkedin-link": "linkedin",
    "essay-link": "эссе",
    "magic-link": "магия!",
    "copyright-text":
      "© 2026 Роберт Верес.<br/>Снимки, сделанные с помощью Канон AЭ-1 или Рикох ФФ-3D АФ Супер.",
  },
  es: {
    "name-title": "Roberto Veres",
    "email-caption": "me [@] robertveres.com",
    "github-link": "github",
    "linkedin-link": "linkedin",
    "essay-link": "ensayos",
    "magic-link": "¡magia!",
    "copyright-text":
      "© 2026 Roberto Veres.<br/>Fotos tomadas con una Canon AE-1 Program o una Ricoh FF-3D AF Super.",
  },
  de: {
    "name-title": "Robert Veres",
    "email-caption": "me [@] robertveres.com",
    "github-link": "github",
    "linkedin-link": "linkedin",
    "essay-link": "aufsätze",
    "magic-link": "magie!",
    "copyright-text":
      "© 2026 Robert Veres.<br/>Bilder aufgenommen mit Canon AE-1 Program oder Ricoh FF-3D AF Super.",
  }
};

num_cover_img = Object.keys(COVER_IMAGES_DICT).length;
cover_img_idx = -1;
last_img_idx = -1;

cover_img_elem = document.getElementById("cover-img");
cover_caption_elem = document.getElementById("cover-caption");

function switch_lang(lang) {
  if (lang === CURR_LANG) {
    return false;
  }

  const dict = TRANSLATIONS[lang];
  for (const id in dict) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = dict[id];
  }

  const font_targets = [
    document.getElementById("name-title"),
    document.getElementById("email-caption"),
    document.getElementById("github-link"),
    document.getElementById("linkedin-link"),
    document.getElementById("essay-link"),
    document.getElementById("lol-link"),
    document.getElementById("magic-link"),
    document.getElementById("copyright-text"),
  ];

  if (CJK_LANGS.includes(CURR_LANG) && !CJK_LANGS.includes(lang)) {
    font_targets.forEach((el) => {
      if (!el) return;
      el.classList.remove("cjk-font");
    });
  } else if (!CJK_LANGS.includes(CURR_LANG) && CJK_LANGS.includes(lang)) {
    font_targets.forEach((el) => {
      if (!el) return;
      el.classList.add("cjk-font");
    });
  }

  if (CURR_LANG === "ru" && lang !== "ru") {
    font_targets.forEach((el) => {
      if (!el) return;
      el.classList.remove("ru-font");
    });
  } else if (CURR_LANG !== "ru" && lang === "ru") {
    font_targets.forEach((el) => {
      if (!el) return;
      el.classList.add("ru-font");
    });
  }

  CURR_LANG = lang;

  return false;
}

function sel_img() {
  last_img_idx = cover_img_idx;

  do {
    cover_img_idx = Math.floor(Math.random() * num_cover_img + 1);
  } while (cover_img_idx == last_img_idx);

  cover_img_elem.src = "images/" + cover_img_idx + ".jpg";
  cover_caption_elem.innerText = COVER_IMAGES_DICT[cover_img_idx];

  return false;
}

sel_img();
