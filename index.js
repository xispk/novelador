const videoPlayer = document.querySelector('video');
const episodeTitle = document.querySelector('h1');
const listContainer = document.querySelector('.list__container');
const menu = document.querySelector('.menu');

const links = [
  {
    'ep': 1,
    'link': 'c0KHstmSV1TAaKQ',
  },
  {
    'ep': 2,
    'link': 'Sh2PKU0EkYGgeEa',
  },
  {
    'ep': 3,
    'link': '5lpgnzPj6CmQJUy',
  },
  {
    'ep': 4,
    'link': 'ZYOFi1j9sochP0D',
  },
  {
    'ep': 5,
    'link': 'qvPAmJZhvNtAxAs',
  },
  {
    'ep': 6,
    'link': 'ra7NhF5gWuj1mtH',
  },
  {
    'ep': 7,
    'link': 'VlH1Jon5anYvski',
  },
  {
    'ep': 8,
    'link': 'ZZdWViL8A2njS8L',
  },
  {
    'ep': 9,
    'link': 'aKlN1zsPgO84ucb',
  },
  {
    'ep': 10,
    'link': 'WC4whI8XCyTyuHN',
  },
  {
    'ep': 11,
    'link': '9eL4NSHQcXNDjDQ',
  },
  {
    'ep': 12,
    'link': 'X8tSfQBRWXi7CDz',
  },
  {
    'ep': 13,
    'link': 'amgOTbl1w3CXyJl',
  },
  {
    'ep': 14,
    'link': 'ObB4aiWXZhfdlC7',
  },
  {
    'ep': 15,
    'link': 'vGLU0RGZLqcUgj0',
  },
  {
    'ep': 16,
    'link': '3mt2X2a3ABSTOOV',
  },
  {
    'ep': 17,
    'link': 'y0gSbMJiQXmXooK',
  },
  {
    'ep': 18,
    'link': 'dRV9hcB8sueuoVw',
  },
  {
    'ep': 19,
    'link': 'tVQTELrk3OVbjbX',
  },
  {
    'ep': 20,
    'link': 'vB7e1R5vxlOwqW8',
  },
  {
    'ep': 21,
    'link': 'EbtJPXq96XSrty6',
  },
  {
    'ep': 22,
    'link': 'wJYQvehOCl0xQu6',
  },
  {
    'ep': 23,
    'link': 'lIYXQolBZPduB5n',
  },
  {
    'ep': 24,
    'link': 'T7tYfmUiGPZH4wo',
  },
  {
    'ep': 25,
    'link': 'doHXhE2hvKKBdQF',
  },
  {
    'ep': 26,
    'link': 'n3LdxSfHEIYuBM8',
  },
  {
    'ep': 27,
    'link': 'pocexaQZ9mo0lOF',
  },
  {
    'ep': 28,
    'link': 'RszPlQBm7N42WpC',
  },
  {
    'ep': 29,
    'link': '9HaWEUtObnbJvwY',
  },
  {
    'ep': 30,
    'link': '737a0SKFmj7dJAP',
  },
  {
    'ep': 31,
    'link': 'nGs4Z7CbyKdNmP5',
  },
  {
    'ep': 32,
    'link': 'w8x4K8cORbFLesv',
  },
  {
    'ep': 33,
    'link': 'lDAxGZHKAu1UhJt',
  },
  {
    'ep': 34,
    'link': 'RsxueiR9hn75LMU',
  },
  {
    'ep': 35,
    'link': 'RrlMmQsg4yygVvI',
  },
  {
    'ep': 36,
    'link': 'Pgdfh6HFQcndp36',
  },
  {
    'ep': 37,
    'link': 'Fy8Y0WvL1AvmgLk',
  },
  {
    'ep': 38,
    'link': 'u2ODjbetWNvkgT2',
  },
  {
    'ep': 39,
    'link': 'JhDYtZSMP8Hp4BG',
  },
  {
    'ep': 40,
    'link': '5hceixlqY6jCnUg',
  },
  {
    'ep': 41,
    'link': 'UGQDlw4owmjCc08',
  },
  {
    'ep': 42,
    'link': 'yZqoab77YLcAJSS',
  },
  {
    'ep': 43,
    'link': 'aqTfkujZL6NoSmM',
  },
  {
    'ep': 44,
    'link': 'lgDgcXF2DNoy5sQ',
  },
  {
    'ep': 45,
    'link': '7ezmkwRRGEcJdth',
  },
  {
    'ep': 46,
    'link': 'Bb8vRY8rhtwyexR',
  },
  {
    'ep': 47,
    'link': 'xp7rqm6slaX38cu',
  },
  {
    'ep': 48,
    'link': 'J378lLOCY0UbZnX',
  },
  {
    'ep': 49,
    'link': 'pRB9pQdxXOorGCx',
  },
  {
    'ep': 50,
    'link': 'rv26X87zTv2H0T2',
  },
  {
    'ep': 51,
    'link': 'ChRbwEE59YXsuuS',
  },
  {
    'ep': 52,
    'link': 'LpQyHQC3BjdxMzX',
  },
  {
    'ep': 53,
    'link': 'qNCniPEjai6fNG1',
  },
  {
    'ep': 54,
    'link': 'K4rWBntC3lyvcbi',
  },
  {
    'ep': 55,
    'link': 'NCCvMCnDR7GyCcf',
  },
  {
    'ep': 56,
    'link': 'i9xHvX9UcOFA9wQ',
  },
  {
    'ep': 57,
    'link': 'wF6ZjH1GmqvFdgL',
  },
  {
    'ep': 58,
    'link': 'Gro5l3ZUlqSIX0v',
  },
  {
    'ep': 59,
    'link': 'QlVDVJz8235GZzi',
  },
  {
    'ep': 60,
    'link': 'xql0UdpMIFsMUTv',
  },
  {
    'ep': 61,
    'link': 'tpocICLaMo1JiHp',
  },
  {
    'ep': 62,
    'link': 'rWRAAr3IDyyAOXo',
  },
  {
    'ep': 63,
    'link': 'jjf3UQ14HvvVfYy',
  },
  {
    'ep': 64,
    'link': 'Ivai0z7bAjXrsww',
  },
  {
    'ep': 65,
    'link': 'fPWt90GJBJpuwWe',
  },
  {
    'ep': 66,
    'link': 'yT5CSM0ohZY415U',
  },
  {
    'ep': 67,
    'link': 'bdGnJnrx5QJHKbH',
  },
  {
    'ep': 68,
    'link': 'UdtpQZcaD53LlIs',
  },
  {
    'ep': 69,
    'link': 'xMRdSJSALFXNY20',
  },
  {
    'ep': 70,
    'link': 'L4GzWPpXglT8OaL',
  },
  {
    'ep': 71,
    'link': '56Wk9b7Fd2V6jUc',
  },
  {
    'ep': 72,
    'link': 'xmWf6IWuk01apBC',
  },
  {
    'ep': 73,
    'link': 'JyYvm0ZyCkohapC',
  },
  {
    'ep': 74,
    'link': '6Dtugf13OGHyJit',
  },
  {
    'ep': 75,
    'link': 'Sq8UV2gjqYqRsOb',
  },
  {
    'ep': 76,
    'link': 'NyOnJeEhzfP9oAW',
  },
  {
    'ep': 77,
    'link': 'olvbvW5IRgmwdUh',
  },
  {
    'ep': 78,
    'link': 'i7eVnhY7qFAoTKp',
  },
  {
    'ep': 79,
    'link': '6gkEElFqgAEJ8eV',
  },
  {
    'ep': 80,
    'link': 'NvZMhnhbJx48SoH',
  },
  {
    'ep': 81,
    'link': 'aFRKrhUkBH0sLE9',
  },
  {
    'ep': 82,
    'link': 'LtE4WzaGi9dqVAn',
  },
  {
    'ep': 83,
    'link': 'cLqsZ3n3GDVwemT',
  },
  {
    'ep': 84,
    'link': 'cGUoleMVuCIXzyB',
  },
  {
    'ep': 85,
    'link': 'CguC0wjolfFSczV',
  },
  {
    'ep': 86,
    'link': 'GBTy70IcR1y66wS',
  },
  {
    'ep': 87,
    'link': '1ktZxpVXoNaucXW',
  },
  {
    'ep': 88,
    'link': 'RZxiOvdIEcEa2oV',
  },
  {
    'ep': 89,
    'link': '4IGWMWC4biS88Am',
  },
  {
    'ep': 90,
    'link': 'G5TYOycvLYrHASV',
  },
  {
    'ep': 91,
    'link': 'ZOqm0WONqhVEL5c',
  },
  {
    'ep': 92,
    'link': 'BfFhdHQBP3Nz6iS',
  },
  {
    'ep': 93,
    'link': 'EC37e4vOsRuAvnh',
  },
  {
    'ep': 94,
    'link': 'WIyZLKY10GlgyWN',
  },
  {
    'ep': 95,
    'link': 'Cdobmjw0jscCoeE',
  },
  {
    'ep': 96,
    'link': '1lkAzRyJuXeI2jw',
  },
  {
    'ep': 97,
    'link': 'oJXvDalSUzUVMz7',
  },
  {
    'ep': 98,
    'link': 'EYsLGiJDWMJpOs9',
  },
  {
    'ep': 99,
    'link': 'JW4PiPU73ALgrtt',
  },
  {
    'ep': 100,
    'link': 'OcHjfduqaMAiQC2',
  },
  {
    'ep': 101,
    'link': 'ivoinC1TRXR939L',
  },
  {
    'ep': 102,
    'link': 'Achq875eGLdy2d3',
  },
  {
    'ep': 103,
    'link': 'IeeoMgniEl2RoJA',
  },
  {
    'ep': 104,
    'link': 'PsT6fa6eW1rTC7f',
  },
  {
    'ep': 105,
    'link': 'STx9zFpewzFU5pJ',
  },
  {
    'ep': 106,
    'link': '2YxZsPnGd1DOE5C',
  },
  {
    'ep': 107,
    'link': 'xyAjmyue68RdEri',
  },
  {
    'ep': 108,
    'link': 'PJcEpae5tPJh7ps',
  },
  {
    'ep': 109,
    'link': 'wmx5zgk9YOqmGxr',
  },
  {
    'ep': 110,
    'link': 'vculAsf4h8Gk058',
  },
  {
    'ep': 111,
    'link': '9l0S1D4PzNRz4lk',
  },
  {
    'ep': 112,
    'link': 'M0328RfPowaigmP',
  },
  {
    'ep': 113,
    'link': 'Vb0rQhUvqYlwZ3f',
  },
  {
    'ep': 114,
    'link': 'eAJHhR06BEU794W',
  },
  {
    'ep': 115,
    'link': 'vQQxFLVXypxiqzq',
  },
  {
    'ep': 116,
    'link': 'F4cxnk3xfzqUsFq',
  },
  {
    'ep': 117,
    'link': 'XX51LJJxSg3zFLA',
  },
  {
    'ep': 118,
    'link': 'q8d4jcphbe9U1C8',
  },
  {
    'ep': 119,
    'link': 'ENOHMJ9biCZibBi',
  },
  {
    'ep': 120,
    'link': 'g75IfTjLWY5EEhf',
  },
  {
    'ep': 121,
    'link': 'PCq1sdInrYeodC8',
  },
  {
    'ep': 122,
    'link': 'oILyaytrOHBr1EA',
  },
  {
    'ep': 123,
    'link': 'D6C0VjOlQIYuWps',
  },
  {
    'ep': 124,
    'link': 'mkuylaPeCfyLEYp',
  },
  {
    'ep': 125,
    'link': 'EIFCCxA3WRZ5pte',
  },
  {
    'ep': 126,
    'link': 'qQWCHUqrBm0QoHi',
  },
  {
    'ep': 127,
    'link': 'zPyOHGlscdtP0nM',
  },
  {
    'ep': 128,
    'link': 'c0XaQgWQqNpnwUu',
  },
  {
    'ep': 129,
    'link': '84Wra9ZdJOogWWH',
  },
  {
    'ep': 130,
    'link': '5ShhGWBp6o9RGmp',
  },
  {
    'ep': 131,
    'link': 'f77YD0vZjmL8tiX',
  },
  {
    'ep': 132,
    'link': 'dLGdIC5CYUKijxi',
  },
  {
    'ep': 133,
    'link': 'gNuY8IuE3cRoI0z',
  },
  {
    'ep': 134,
    'link': 'Bu6s4h46hpQc22J',
  },
  {
    'ep': 135,
    'link': 'JDvIRuCDu2fYVkz',
  },
  {
    'ep': 136,
    'link': 'btYF7H5w0ZFeNT5',
  },
  {
    'ep': 137,
    'link': 'y6yC9VeUVlOtXO6',
  },
  {
    'ep': 138,
    'link': 'jypGDQQzQ19aAye',
  },
  {
    'ep': 139,
    'link': 'O0DiOxCUYKJCVwa',
  },
  {
    'ep': 140,
    'link': 'R0IgP7oBzLKL6KP',
  },
  {
    'ep': 141,
    'link': 'P4dzWwYB5t25Ll9',
  },
  {
    'ep': 142,
    'link': 'alIuafSDc2AcCXv',
  },
  {
    'ep': 143,
    'link': 'TtSHtxUC77tzRaT',
  },
  {
    'ep': 144,
    'link': 'dFO6wOR0wg8Df9h',
  },
  {
    'ep': 145,
    'link': 'KsUmQlLfyOznCzg',
  },
  {
    'ep': 146,
    'link': 'Gcarge4b2w4DK5t',
  },
  {
    'ep': 147,
    'link': 'huATrmJpRfpmpxV',
  },
  {
    'ep': 148,
    'link': 'Br6gdkzfIN7CtDf',
  },
  {
    'ep': 149,
    'link': 'Hz6vr6MVgE4lRbR',
  },
  {
    'ep': 150,
    'link': 'FGtZzLJC6iJ2pwl',
  },
  {
    'ep': 151,
    'link': 'Ts1n8zSWW5nIyai',
  },
  {
    'ep': 152,
    'link': 'qIAxzLkeA6hsAXd',
  },
  {
    'ep': 153,
    'link': 'sMUPXVDhrZA87k3',
  },
  {
    'ep': 154,
    'link': 'ipV4i7jP0FmU35p',
  },
  {
    'ep': 155,
    'link': '0NgkD2l1FKYb9p3',
  },
  {
    'ep': 156,
    'link': 'd9iEXJtSW1UX09l',
  },
  {
    'ep': 157,
    'link': 'Nmy7JlbYmMkfv1b',
  },
  {
    'ep': 158,
    'link': '4kRfuWMmNIr0kHI',
  },
  {
    'ep': 159,
    'link': '1CIMD0ap6wzzYuI',
  },
  {
    'ep': 160,
    'link': 'jPsyOutPuvor9hy',
  },
  {
    'ep': 161,
    'link': 'prcLZ5DhiPiw4ip',
  },
  {
    'ep': 162,
    'link': 'Tp2H0EEd7lBHtrK',
  },
  {
    'ep': 163,
    'link': 'YuLpC3exY0s8H1i',
  },
  {
    'ep': 164,
    'link': 'CkjktataIchPMOX',
  },
  {
    'ep': 165,
    'link': 'qGWh5PEfBco4Deo',
  },
  {
    'ep': 166,
    'link': 'ljlEYEOirPFJR5W',
  },
  {
    'ep': 167,
    'link': 'yst2FFbnJCBEWAm',
  },
  {
    'ep': 168,
    'link': '61qsKq7Kiib5xi8',
  },
  {
    'ep': 169,
    'link': 'ZXsBpT6ULApJKf9',
  },
  {
    'ep': 170,
    'link': 'gdp6Eg7GqnYni4k',
  },
  {
    'ep': 171,
    'link': 'AMYCSdBBhjvFAjW',
  },
  {
    'ep': 172,
    'link': 'fMANQBd8MlVppYW',
  },
  {
    'ep': 173,
    'link': 'R4lWBlCSEkvlPkV',
  },
  {
    'ep': 174,
    'link': 'wAnTWZbX3SGgWYi',
  },
  {
    'ep': 175,
    'link': 'WNY1pGuwWjhwU0c',
  },
  {
    'ep': 176,
    'link': 'tQpTThuq7FSJMSN',
  },
  {
    'ep': 177,
    'link': 'OgvqxAEe9EJiZe9',
  },
  {
    'ep': 178,
    'link': 'J3WKNGmhqjGeeuT',
  },
  {
    'ep': 179,
    'link': 'imEnFsQ1RnRFfTf',
  },
  {
    'ep': 180,
    'link': 'j78knbPAbF1dQXY',
  },
  {
    'ep': 181,
    'link': 'pAe6LPXVlcssWo4',
  },
  {
    'ep': 182,
    'link': 'Qn47gNNK4xS0lTy',
  },
  {
    'ep': 183,
    'link': 'PJUgpQK60EaSw0H',
  },
  {
    'ep': 184,
    'link': 'gEUDYDkwKSQPT1t',
  },
  {
    'ep': 185,
    'link': '8lPVXe3z6h63VyQ',
  },
  {
    'ep': 186,
    'link': 'yYbxYp9XpKCiyQ4',
  },
  {
    'ep': 187,
    'link': 'M5pLJBa8yGTEqwK',
  },
  {
    'ep': 188,
    'link': '6a4pANkj0sLIpIW',
  },
  {
    'ep': 189,
    'link': 'jiJwRP3NGw3WH0i',
  },
  {
    'ep': 190,
    'link': 'dP3dDaZPu8n4nuk',
  },
  {
    'ep': 191,
    'link': 'venc52ZIy7wpLBX',
  },
  {
    'ep': 192,
    'link': 'NlhqETFKz5vA8hF',
  },
  {
    'ep': 193,
    'link': '7j8P21a9CYV8qQz',
  },
  {
    'ep': 194,
    'link': 'fMhHmJk00Ulf08z',
  },
  {
    'ep': 195,
    'link': '7RkFIGdSlP2QWSu',
  },
  {
    'ep': 196,
    'link': 'QdzhJbduItbILvx',
  },
  {
    'ep': 197,
    'link': 'RtwDKwvlLD7wd6u',
  },
  {
    'ep': 198,
    'link': '8MvcGOW1ayDxoX8',
  },
  {
    'ep': 199,
    'link': 'b7eobH7NT2dLzmo',
  },
  {
    'ep': 200,
    'link': 'vwA2gfyv097H1kk',
  },
  {
    'ep': 201,
    'link': 'fSZDAFQhA7V7OXP',
  },
  {
    'ep': 202,
    'link': 'dbr29gjN4XpXfYF',
  },
  {
    'ep': 203,
    'link': '7Sr7SVpfzHF37y7',
  },
  {
    'ep': 204,
    'link': 'VZnhYsma27ERrCE',
  },
  {
    'ep': 205,
    'link': 'ji8BrTi8jAIYVBR',
  },
  {
    'ep': 206,
    'link': 'mMS9LjGAXG0SQOA',
  },
  {
    'ep': 207,
    'link': 'HCJMiZdd3rWbaEv',
  },
  {
    'ep': 208,
    'link': 'fa4aADbWm82itmA',
  },
  {
    'ep': 209,
    'link': 'J5xrsJoR4DCe9lA',
  },
  {
    'ep': 210,
    'link': 'TTlFL5doAUSmpK8',
  },
  {
    'ep': 211,
    'link': 'TthEgEukyYHpMaN',
  },
  {
    'ep': 212,
    'link': 'GYbcacFSRj0AnMZ',
  },
  {
    'ep': 213,
    'link': 'Yg8tHya4wr0laLU',
  },
  {
    'ep': 214,
    'link': 'kS9NhcsJOaNy5ls',
  },
  {
    'ep': 215,
    'link': 'QBSP08EidoDxTAk',
  },
  {
    'ep': 216,
    'link': 'LC5WWDniVoGuLXN',
  },
  {
    'ep': 217,
    'link': '2TsWyNuvCY5n6C7',
  },
  {
    'ep': 218,
    'link': 's6DgPEN3W6tpCi4',
  },
  {
    'ep': 219,
    'link': 'k3lI8BFIWWheYRr',
  },
  {
    'ep': 220,
    'link': 'sJLeSbAadlxHaUP',
  },
  {
    'ep': 221,
    'link': '7XrSDXeKfGOT7Eq',
  },
];

const index = localStorage.getItem('lastEpisode');

links.forEach((item, index) => {
  const li = document.createElement('li');
  const span = document.createElement('span');

  span.textContent = `Episódio ${index + 1}`;
  li.addEventListener('click', () => {
    videoPlayer.setAttribute(
      'src',
      `https://server${Math.floor(
        Math.random() * 8 + 1
      )}.nflixvod.me/stream/360/${item.link}`
    );
    localStorage.setItem('lastEpisode', JSON.stringify(index));
    episodeTitle.textContent = `Episódio ${item.ep}`;
  });

  li.append(span);
  menu.append(li);
});

episodeTitle.textContent = `Episódio ${+index + 1}`;

videoPlayer.setAttribute(
  'src',
  `https://server${Math.floor(Math.random() * 8 + 1)}.nflixvod.me/stream/360/${
    links[index].link
  }`
);
