COVER_IMAGES_DICT = {
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
};

num_cover_img = Object.keys(COVER_IMAGES_DICT).length;
cover_img_idx = -1;
last_img_idx = -1;

cover_img_elem = document.getElementById("cover-img");
cover_caption_elem = document.getElementById("cover-caption");

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
