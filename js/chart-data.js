// 嵌入的弦图和堆叠面积图数据
const embeddedChordData = [
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "澳大利亚",
    "flight_count": "2812"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "巴西",
    "flight_count": "459"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "加拿大",
    "flight_count": "653"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "瑞士",
    "flight_count": "2129"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "德国",
    "flight_count": "5923"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "西班牙",
    "flight_count": "1676"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "法国",
    "flight_count": "2623"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "北爱尔兰",
    "flight_count": "9367"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "印度",
    "flight_count": "20023"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "意大利",
    "flight_count": "2793"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "日本",
    "flight_count": "539"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "荷兰",
    "flight_count": "2037"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "俄罗斯",
    "flight_count": "4581"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "瑞典",
    "flight_count": "672"
  },
  {
    "period": "TP1",
    "origin_country": "阿联酋",
    "dest_country": "美国",
    "flight_count": "4444"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "阿联酋",
    "flight_count": "4376"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "巴西",
    "flight_count": "13"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "加拿大",
    "flight_count": "995"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "瑞士",
    "flight_count": "37"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "德国",
    "flight_count": "300"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "西班牙",
    "flight_count": "100"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "法国",
    "flight_count": "170"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "北爱尔兰",
    "flight_count": "1172"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "印度",
    "flight_count": "615"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "意大利",
    "flight_count": "116"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "日本",
    "flight_count": "678"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "荷兰",
    "flight_count": "112"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "俄罗斯",
    "flight_count": "79"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "瑞典",
    "flight_count": "34"
  },
  {
    "period": "TP1",
    "origin_country": "澳大利亚",
    "dest_country": "美国",
    "flight_count": "5368"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "阿联酋",
    "flight_count": "544"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "澳大利亚",
    "flight_count": "7"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "加拿大",
    "flight_count": "449"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "瑞士",
    "flight_count": "385"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "德国",
    "flight_count": "795"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "西班牙",
    "flight_count": "1510"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "法国",
    "flight_count": "1310"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "北爱尔兰",
    "flight_count": "885"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "印度",
    "flight_count": "3"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "意大利",
    "flight_count": "1259"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "日本",
    "flight_count": "2"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "荷兰",
    "flight_count": "528"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "俄罗斯",
    "flight_count": "8"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "瑞典",
    "flight_count": "4"
  },
  {
    "period": "TP1",
    "origin_country": "巴西",
    "dest_country": "美国",
    "flight_count": "6606"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "阿联酋",
    "flight_count": "563"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "澳大利亚",
    "flight_count": "987"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "巴西",
    "flight_count": "403"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "瑞士",
    "flight_count": "1141"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "德国",
    "flight_count": "3758"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "西班牙",
    "flight_count": "933"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "法国",
    "flight_count": "3778"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "北爱尔兰",
    "flight_count": "6640"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "印度",
    "flight_count": "667"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "意大利",
    "flight_count": "1420"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "日本",
    "flight_count": "290"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "荷兰",
    "flight_count": "1780"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "俄罗斯",
    "flight_count": "9"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "瑞典",
    "flight_count": "17"
  },
  {
    "period": "TP1",
    "origin_country": "加拿大",
    "dest_country": "美国",
    "flight_count": "117848"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "阿联酋",
    "flight_count": "2244"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "巴西",
    "flight_count": "382"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "加拿大",
    "flight_count": "1121"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "德国",
    "flight_count": "27832"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "西班牙",
    "flight_count": "12709"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "法国",
    "flight_count": "12894"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "北爱尔兰",
    "flight_count": "29029"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "印度",
    "flight_count": "688"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "意大利",
    "flight_count": "10786"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "日本",
    "flight_count": "27"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "荷兰",
    "flight_count": "6277"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "俄罗斯",
    "flight_count": "3159"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "瑞典",
    "flight_count": "2687"
  },
  {
    "period": "TP1",
    "origin_country": "瑞士",
    "dest_country": "美国",
    "flight_count": "6088"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "阿联酋",
    "flight_count": "5838"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "澳大利亚",
    "flight_count": "4"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "巴西",
    "flight_count": "878"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "加拿大",
    "flight_count": "3851"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "瑞士",
    "flight_count": "27148"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "西班牙",
    "flight_count": "34368"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "法国",
    "flight_count": "24561"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "北爱尔兰",
    "flight_count": "54784"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "印度",
    "flight_count": "3275"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "意大利",
    "flight_count": "38344"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "日本",
    "flight_count": "659"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "荷兰",
    "flight_count": "15289"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "俄罗斯",
    "flight_count": "15088"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "瑞典",
    "flight_count": "12037"
  },
  {
    "period": "TP1",
    "origin_country": "德国",
    "dest_country": "美国",
    "flight_count": "20308"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "阿联酋",
    "flight_count": "1647"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "澳大利亚",
    "flight_count": "17"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "巴西",
    "flight_count": "1520"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "加拿大",
    "flight_count": "993"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "瑞士",
    "flight_count": "13619"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "德国",
    "flight_count": "35642"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "法国",
    "flight_count": "28018"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "北爱尔兰",
    "flight_count": "60793"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "印度",
    "flight_count": "149"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "意大利",
    "flight_count": "24837"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "日本",
    "flight_count": "14"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "荷兰",
    "flight_count": "12565"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "俄罗斯",
    "flight_count": "4737"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "瑞典",
    "flight_count": "5220"
  },
  {
    "period": "TP1",
    "origin_country": "西班牙",
    "dest_country": "美国",
    "flight_count": "9129"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "阿联酋",
    "flight_count": "2433"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "巴西",
    "flight_count": "1240"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "加拿大",
    "flight_count": "3443"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "瑞士",
    "flight_count": "13206"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "德国",
    "flight_count": "22586"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "西班牙",
    "flight_count": "26269"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "北爱尔兰",
    "flight_count": "30879"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "印度",
    "flight_count": "1827"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "意大利",
    "flight_count": "26043"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "日本",
    "flight_count": "566"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "荷兰",
    "flight_count": "7420"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "俄罗斯",
    "flight_count": "5081"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "瑞典",
    "flight_count": "3123"
  },
  {
    "period": "TP1",
    "origin_country": "法国",
    "dest_country": "美国",
    "flight_count": "14281"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "阿联酋",
    "flight_count": "9250"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "澳大利亚",
    "flight_count": "404"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "巴西",
    "flight_count": "713"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "加拿大",
    "flight_count": "6352"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "瑞士",
    "flight_count": "28325"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "德国",
    "flight_count": "51617"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "西班牙",
    "flight_count": "46233"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "法国",
    "flight_count": "31174"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "印度",
    "flight_count": "4368"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "意大利",
    "flight_count": "36091"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "日本",
    "flight_count": "258"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "荷兰",
    "flight_count": "29973"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "俄罗斯",
    "flight_count": "3611"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "瑞典",
    "flight_count": "9388"
  },
  {
    "period": "TP1",
    "origin_country": "北爱尔兰",
    "dest_country": "美国",
    "flight_count": "42843"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "阿联酋",
    "flight_count": "16781"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "澳大利亚",
    "flight_count": "499"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "巴西",
    "flight_count": "35"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "加拿大",
    "flight_count": "610"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "瑞士",
    "flight_count": "675"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "德国",
    "flight_count": "3358"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "西班牙",
    "flight_count": "161"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "法国",
    "flight_count": "1576"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "北爱尔兰",
    "flight_count": "4188"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "意大利",
    "flight_count": "934"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "日本",
    "flight_count": "158"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "荷兰",
    "flight_count": "822"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "俄罗斯",
    "flight_count": "836"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "瑞典",
    "flight_count": "213"
  },
  {
    "period": "TP1",
    "origin_country": "印度",
    "dest_country": "美国",
    "flight_count": "1489"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "阿联酋",
    "flight_count": "3050"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "澳大利亚",
    "flight_count": "8"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "巴西",
    "flight_count": "1215"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "加拿大",
    "flight_count": "1472"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "瑞士",
    "flight_count": "10389"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "德国",
    "flight_count": "41505"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "西班牙",
    "flight_count": "26241"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "法国",
    "flight_count": "28163"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "北爱尔兰",
    "flight_count": "40370"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "印度",
    "flight_count": "760"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "日本",
    "flight_count": "170"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "荷兰",
    "flight_count": "10559"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "俄罗斯",
    "flight_count": "9594"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "瑞典",
    "flight_count": "2059"
  },
  {
    "period": "TP1",
    "origin_country": "意大利",
    "dest_country": "美国",
    "flight_count": "8668"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "阿联酋",
    "flight_count": "541"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "澳大利亚",
    "flight_count": "1184"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "巴西",
    "flight_count": "1"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "加拿大",
    "flight_count": "689"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "瑞士",
    "flight_count": "58"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "德国",
    "flight_count": "1611"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "西班牙",
    "flight_count": "59"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "法国",
    "flight_count": "1312"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "北爱尔兰",
    "flight_count": "1103"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "印度",
    "flight_count": "169"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "意大利",
    "flight_count": "74"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "荷兰",
    "flight_count": "483"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "俄罗斯",
    "flight_count": "94"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "瑞典",
    "flight_count": "42"
  },
  {
    "period": "TP1",
    "origin_country": "日本",
    "dest_country": "美国",
    "flight_count": "5310"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "阿联酋",
    "flight_count": "2239"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "巴西",
    "flight_count": "594"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "加拿大",
    "flight_count": "1806"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "瑞士",
    "flight_count": "5942"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "德国",
    "flight_count": "15479"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "西班牙",
    "flight_count": "11759"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "法国",
    "flight_count": "8576"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "北爱尔兰",
    "flight_count": "33531"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "印度",
    "flight_count": "908"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "意大利",
    "flight_count": "11085"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "日本",
    "flight_count": "367"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "俄罗斯",
    "flight_count": "2733"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "瑞典",
    "flight_count": "4339"
  },
  {
    "period": "TP1",
    "origin_country": "荷兰",
    "dest_country": "美国",
    "flight_count": "9985"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "阿联酋",
    "flight_count": "4551"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "澳大利亚",
    "flight_count": "20"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "巴西",
    "flight_count": "5"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "加拿大",
    "flight_count": "3"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "瑞士",
    "flight_count": "3280"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "德国",
    "flight_count": "16207"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "西班牙",
    "flight_count": "4920"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "法国",
    "flight_count": "5753"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "北爱尔兰",
    "flight_count": "4363"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "印度",
    "flight_count": "815"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "意大利",
    "flight_count": "9388"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "日本",
    "flight_count": "98"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "荷兰",
    "flight_count": "2630"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "瑞典",
    "flight_count": "1644"
  },
  {
    "period": "TP1",
    "origin_country": "俄罗斯",
    "dest_country": "美国",
    "flight_count": "2023"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "阿联酋",
    "flight_count": "647"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "巴西",
    "flight_count": "5"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "加拿大",
    "flight_count": "7"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "瑞士",
    "flight_count": "2536"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "德国",
    "flight_count": "11083"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "西班牙",
    "flight_count": "4133"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "法国",
    "flight_count": "3114"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "北爱尔兰",
    "flight_count": "9397"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "印度",
    "flight_count": "152"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "意大利",
    "flight_count": "1942"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "日本",
    "flight_count": "2"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "荷兰",
    "flight_count": "3743"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "俄罗斯",
    "flight_count": "1455"
  },
  {
    "period": "TP1",
    "origin_country": "瑞典",
    "dest_country": "美国",
    "flight_count": "1639"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "阿联酋",
    "flight_count": "4729"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "澳大利亚",
    "flight_count": "5840"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "巴西",
    "flight_count": "6777"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "加拿大",
    "flight_count": "120840"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "瑞士",
    "flight_count": "6116"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "德国",
    "flight_count": "20603"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "西班牙",
    "flight_count": "8259"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "法国",
    "flight_count": "14554"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "北爱尔兰",
    "flight_count": "44336"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "印度",
    "flight_count": "2006"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "意大利",
    "flight_count": "8036"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "日本",
    "flight_count": "3315"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "荷兰",
    "flight_count": "10702"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "俄罗斯",
    "flight_count": "1670"
  },
  {
    "period": "TP1",
    "origin_country": "美国",
    "dest_country": "瑞典",
    "flight_count": "1591"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "澳大利亚",
    "flight_count": "711"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "巴西",
    "flight_count": "166"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "加拿大",
    "flight_count": "156"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "瑞士",
    "flight_count": "541"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "德国",
    "flight_count": "1901"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "西班牙",
    "flight_count": "464"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "法国",
    "flight_count": "816"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "北爱尔兰",
    "flight_count": "2264"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "印度",
    "flight_count": "5315"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "意大利",
    "flight_count": "629"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "日本",
    "flight_count": "182"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "荷兰",
    "flight_count": "680"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "新西兰",
    "flight_count": "169"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "俄罗斯",
    "flight_count": "1299"
  },
  {
    "period": "TP2",
    "origin_country": "阿联酋",
    "dest_country": "美国",
    "flight_count": "1131"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "阿联酋",
    "flight_count": "1060"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "巴西",
    "flight_count": "11"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "加拿大",
    "flight_count": "258"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "瑞士",
    "flight_count": "5"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "德国",
    "flight_count": "37"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "西班牙",
    "flight_count": "9"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "法国",
    "flight_count": "28"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "北爱尔兰",
    "flight_count": "136"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "印度",
    "flight_count": "118"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "意大利",
    "flight_count": "11"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "日本",
    "flight_count": "240"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "荷兰",
    "flight_count": "7"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "新西兰",
    "flight_count": "5215"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "俄罗斯",
    "flight_count": "5"
  },
  {
    "period": "TP2",
    "origin_country": "澳大利亚",
    "dest_country": "美国",
    "flight_count": "1569"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "阿联酋",
    "flight_count": "157"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "澳大利亚",
    "flight_count": "5"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "加拿大",
    "flight_count": "148"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "瑞士",
    "flight_count": "113"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "德国",
    "flight_count": "297"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "西班牙",
    "flight_count": "366"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "法国",
    "flight_count": "358"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "北爱尔兰",
    "flight_count": "311"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "印度",
    "flight_count": "2"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "意大利",
    "flight_count": "257"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "荷兰",
    "flight_count": "221"
  },
  {
    "period": "TP2",
    "origin_country": "巴西",
    "dest_country": "美国",
    "flight_count": "2434"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "阿联酋",
    "flight_count": "182"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "澳大利亚",
    "flight_count": "262"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "巴西",
    "flight_count": "137"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "瑞士",
    "flight_count": "282"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "德国",
    "flight_count": "879"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "西班牙",
    "flight_count": "111"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "法国",
    "flight_count": "773"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "北爱尔兰",
    "flight_count": "1502"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "印度",
    "flight_count": "252"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "意大利",
    "flight_count": "27"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "日本",
    "flight_count": "117"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "荷兰",
    "flight_count": "416"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "新西兰",
    "flight_count": "146"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "俄罗斯",
    "flight_count": "2"
  },
  {
    "period": "TP2",
    "origin_country": "加拿大",
    "dest_country": "美国",
    "flight_count": "39865"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "阿联酋",
    "flight_count": "632"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "巴西",
    "flight_count": "141"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "加拿大",
    "flight_count": "299"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "德国",
    "flight_count": "7339"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "西班牙",
    "flight_count": "2829"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "法国",
    "flight_count": "2960"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "北爱尔兰",
    "flight_count": "8893"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "印度",
    "flight_count": "163"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "意大利",
    "flight_count": "2217"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "日本",
    "flight_count": "14"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "荷兰",
    "flight_count": "1517"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "俄罗斯",
    "flight_count": "879"
  },
  {
    "period": "TP2",
    "origin_country": "瑞士",
    "dest_country": "美国",
    "flight_count": "1393"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "阿联酋",
    "flight_count": "1934"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "澳大利亚",
    "flight_count": "8"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "巴西",
    "flight_count": "403"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "加拿大",
    "flight_count": "946"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "瑞士",
    "flight_count": "7202"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "西班牙",
    "flight_count": "9023"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "法国",
    "flight_count": "6916"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "北爱尔兰",
    "flight_count": "13839"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "印度",
    "flight_count": "864"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "意大利",
    "flight_count": "9809"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "日本",
    "flight_count": "373"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "荷兰",
    "flight_count": "3946"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "俄罗斯",
    "flight_count": "3662"
  },
  {
    "period": "TP2",
    "origin_country": "德国",
    "dest_country": "美国",
    "flight_count": "6600"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "阿联酋",
    "flight_count": "488"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "巴西",
    "flight_count": "382"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "加拿大",
    "flight_count": "113"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "瑞士",
    "flight_count": "2884"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "德国",
    "flight_count": "8919"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "法国",
    "flight_count": "5767"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "北爱尔兰",
    "flight_count": "10494"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "印度",
    "flight_count": "37"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "意大利",
    "flight_count": "5554"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "日本",
    "flight_count": "3"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "荷兰",
    "flight_count": "2595"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "俄罗斯",
    "flight_count": "852"
  },
  {
    "period": "TP2",
    "origin_country": "西班牙",
    "dest_country": "美国",
    "flight_count": "1745"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "阿联酋",
    "flight_count": "801"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "澳大利亚",
    "flight_count": "2"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "巴西",
    "flight_count": "347"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "加拿大",
    "flight_count": "761"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "瑞士",
    "flight_count": "3145"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "德国",
    "flight_count": "6971"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "西班牙",
    "flight_count": "5843"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "北爱尔兰",
    "flight_count": "7909"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "印度",
    "flight_count": "507"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "意大利",
    "flight_count": "5942"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "日本",
    "flight_count": "312"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "荷兰",
    "flight_count": "1944"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "俄罗斯",
    "flight_count": "1093"
  },
  {
    "period": "TP2",
    "origin_country": "法国",
    "dest_country": "美国",
    "flight_count": "3337"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "阿联酋",
    "flight_count": "2419"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "澳大利亚",
    "flight_count": "102"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "巴西",
    "flight_count": "299"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "加拿大",
    "flight_count": "1475"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "瑞士",
    "flight_count": "8809"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "德国",
    "flight_count": "13791"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "西班牙",
    "flight_count": "9582"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "法国",
    "flight_count": "7834"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "印度",
    "flight_count": "1090"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "意大利",
    "flight_count": "8408"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "日本",
    "flight_count": "276"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "荷兰",
    "flight_count": "7554"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "新西兰",
    "flight_count": "1"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "俄罗斯",
    "flight_count": "1122"
  },
  {
    "period": "TP2",
    "origin_country": "北爱尔兰",
    "dest_country": "美国",
    "flight_count": "11173"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "阿联酋",
    "flight_count": "5410"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "澳大利亚",
    "flight_count": "125"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "巴西",
    "flight_count": "17"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "加拿大",
    "flight_count": "247"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "瑞士",
    "flight_count": "175"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "德国",
    "flight_count": "1094"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "西班牙",
    "flight_count": "42"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "法国",
    "flight_count": "377"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "北爱尔兰",
    "flight_count": "1245"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "意大利",
    "flight_count": "211"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "日本",
    "flight_count": "53"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "荷兰",
    "flight_count": "262"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "新西兰",
    "flight_count": "9"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "俄罗斯",
    "flight_count": "212"
  },
  {
    "period": "TP2",
    "origin_country": "印度",
    "dest_country": "美国",
    "flight_count": "743"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "阿联酋",
    "flight_count": "697"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "巴西",
    "flight_count": "240"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "加拿大",
    "flight_count": "25"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "瑞士",
    "flight_count": "2020"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "德国",
    "flight_count": "9693"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "西班牙",
    "flight_count": "5411"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "法国",
    "flight_count": "5505"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "北爱尔兰",
    "flight_count": "8350"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "印度",
    "flight_count": "163"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "日本",
    "flight_count": "5"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "荷兰",
    "flight_count": "1855"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "俄罗斯",
    "flight_count": "2085"
  },
  {
    "period": "TP2",
    "origin_country": "意大利",
    "dest_country": "美国",
    "flight_count": "1058"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "阿联酋",
    "flight_count": "131"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "澳大利亚",
    "flight_count": "343"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "加拿大",
    "flight_count": "94"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "瑞士",
    "flight_count": "11"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "德国",
    "flight_count": "285"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "西班牙",
    "flight_count": "2"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "法国",
    "flight_count": "183"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "北爱尔兰",
    "flight_count": "159"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "印度",
    "flight_count": "35"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "意大利",
    "flight_count": "6"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "荷兰",
    "flight_count": "146"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "新西兰",
    "flight_count": "40"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "俄罗斯",
    "flight_count": "23"
  },
  {
    "period": "TP2",
    "origin_country": "日本",
    "dest_country": "美国",
    "flight_count": "1542"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "阿联酋",
    "flight_count": "909"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "巴西",
    "flight_count": "332"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "加拿大",
    "flight_count": "417"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "瑞士",
    "flight_count": "1658"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "德国",
    "flight_count": "4322"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "西班牙",
    "flight_count": "2877"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "法国",
    "flight_count": "2243"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "北爱尔兰",
    "flight_count": "8225"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "印度",
    "flight_count": "283"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "意大利",
    "flight_count": "2275"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "日本",
    "flight_count": "109"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "俄罗斯",
    "flight_count": "622"
  },
  {
    "period": "TP2",
    "origin_country": "荷兰",
    "dest_country": "美国",
    "flight_count": "3270"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "阿联酋",
    "flight_count": "147"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "澳大利亚",
    "flight_count": "5257"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "巴西",
    "flight_count": "8"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "加拿大",
    "flight_count": "171"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "德国",
    "flight_count": "1"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "西班牙",
    "flight_count": "5"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "北爱尔兰",
    "flight_count": "5"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "印度",
    "flight_count": "10"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "意大利",
    "flight_count": "1"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "日本",
    "flight_count": "45"
  },
  {
    "period": "TP2",
    "origin_country": "新西兰",
    "dest_country": "美国",
    "flight_count": "805"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "阿联酋",
    "flight_count": "1352"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "巴西",
    "flight_count": "3"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "加拿大",
    "flight_count": "4"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "瑞士",
    "flight_count": "954"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "德国",
    "flight_count": "4029"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "西班牙",
    "flight_count": "866"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "法国",
    "flight_count": "1204"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "北爱尔兰",
    "flight_count": "1308"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "印度",
    "flight_count": "227"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "意大利",
    "flight_count": "2157"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "日本",
    "flight_count": "13"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "荷兰",
    "flight_count": "668"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "新西兰",
    "flight_count": "1"
  },
  {
    "period": "TP2",
    "origin_country": "俄罗斯",
    "dest_country": "美国",
    "flight_count": "525"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "阿联酋",
    "flight_count": "1385"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "澳大利亚",
    "flight_count": "1858"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "巴西",
    "flight_count": "2680"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "加拿大",
    "flight_count": "41022"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "瑞士",
    "flight_count": "1415"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "德国",
    "flight_count": "6907"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "西班牙",
    "flight_count": "1575"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "法国",
    "flight_count": "3321"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "北爱尔兰",
    "flight_count": "11652"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "印度",
    "flight_count": "779"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "意大利",
    "flight_count": "1049"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "日本",
    "flight_count": "1795"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "荷兰",
    "flight_count": "3537"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "新西兰",
    "flight_count": "789"
  },
  {
    "period": "TP2",
    "origin_country": "美国",
    "dest_country": "俄罗斯",
    "flight_count": "505"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "巴西",
    "flight_count": "1"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "加拿大",
    "flight_count": "70"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "瑞士",
    "flight_count": "9"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "德国",
    "flight_count": "31"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "西班牙",
    "flight_count": "12"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "法国",
    "flight_count": "14"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "北爱尔兰",
    "flight_count": "129"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "印度",
    "flight_count": "172"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "意大利",
    "flight_count": "13"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "日本",
    "flight_count": "706"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "荷兰",
    "flight_count": "11"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "新西兰",
    "flight_count": "4793"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "俄罗斯",
    "flight_count": "1"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "土耳其",
    "flight_count": "5"
  },
  {
    "period": "TP3",
    "origin_country": "澳大利亚",
    "dest_country": "美国",
    "flight_count": "2806"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "澳大利亚",
    "flight_count": "2"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "加拿大",
    "flight_count": "243"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "瑞士",
    "flight_count": "400"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "德国",
    "flight_count": "857"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "西班牙",
    "flight_count": "719"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "法国",
    "flight_count": "779"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "北爱尔兰",
    "flight_count": "437"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "印度",
    "flight_count": "2"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "意大利",
    "flight_count": "151"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "日本",
    "flight_count": "4"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "荷兰",
    "flight_count": "896"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "俄罗斯",
    "flight_count": "7"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "土耳其",
    "flight_count": "305"
  },
  {
    "period": "TP3",
    "origin_country": "巴西",
    "dest_country": "美国",
    "flight_count": "5358"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "澳大利亚",
    "flight_count": "247"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "巴西",
    "flight_count": "198"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "瑞士",
    "flight_count": "847"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "德国",
    "flight_count": "2862"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "西班牙",
    "flight_count": "398"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "法国",
    "flight_count": "2873"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "北爱尔兰",
    "flight_count": "2993"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "印度",
    "flight_count": "859"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "意大利",
    "flight_count": "394"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "日本",
    "flight_count": "738"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "荷兰",
    "flight_count": "1624"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "新西兰",
    "flight_count": "20"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "俄罗斯",
    "flight_count": "31"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "土耳其",
    "flight_count": "620"
  },
  {
    "period": "TP3",
    "origin_country": "加拿大",
    "dest_country": "美国",
    "flight_count": "64532"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "澳大利亚",
    "flight_count": "3"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "巴西",
    "flight_count": "341"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "加拿大",
    "flight_count": "856"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "德国",
    "flight_count": "20852"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "西班牙",
    "flight_count": "14644"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "法国",
    "flight_count": "10876"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "北爱尔兰",
    "flight_count": "10902"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "印度",
    "flight_count": "195"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "意大利",
    "flight_count": "9369"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "日本",
    "flight_count": "124"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "荷兰",
    "flight_count": "5709"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "俄罗斯",
    "flight_count": "2232"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "土耳其",
    "flight_count": "4628"
  },
  {
    "period": "TP3",
    "origin_country": "瑞士",
    "dest_country": "美国",
    "flight_count": "3062"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "澳大利亚",
    "flight_count": "3"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "巴西",
    "flight_count": "1275"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "加拿大",
    "flight_count": "3088"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "瑞士",
    "flight_count": "20797"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "西班牙",
    "flight_count": "49380"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "法国",
    "flight_count": "20317"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "北爱尔兰",
    "flight_count": "31442"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "印度",
    "flight_count": "2478"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "意大利",
    "flight_count": "34108"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "日本",
    "flight_count": "1763"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "荷兰",
    "flight_count": "15502"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "俄罗斯",
    "flight_count": "7716"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "土耳其",
    "flight_count": "20458"
  },
  {
    "period": "TP3",
    "origin_country": "德国",
    "dest_country": "美国",
    "flight_count": "20165"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "巴西",
    "flight_count": "612"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "加拿大",
    "flight_count": "409"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "瑞士",
    "flight_count": "14597"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "德国",
    "flight_count": "48925"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "法国",
    "flight_count": "25937"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "北爱尔兰",
    "flight_count": "44606"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "印度",
    "flight_count": "30"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "意大利",
    "flight_count": "24230"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "日本",
    "flight_count": "5"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "荷兰",
    "flight_count": "17693"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "俄罗斯",
    "flight_count": "1885"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "土耳其",
    "flight_count": "2227"
  },
  {
    "period": "TP3",
    "origin_country": "西班牙",
    "dest_country": "美国",
    "flight_count": "4803"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "巴西",
    "flight_count": "710"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "加拿大",
    "flight_count": "2925"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "瑞士",
    "flight_count": "12657"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "德国",
    "flight_count": "21128"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "西班牙",
    "flight_count": "27781"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "北爱尔兰",
    "flight_count": "17251"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "印度",
    "flight_count": "1485"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "意大利",
    "flight_count": "20859"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "日本",
    "flight_count": "1301"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "荷兰",
    "flight_count": "8929"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "俄罗斯",
    "flight_count": "1797"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "土耳其",
    "flight_count": "4244"
  },
  {
    "period": "TP3",
    "origin_country": "法国",
    "dest_country": "美国",
    "flight_count": "10390"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "澳大利亚",
    "flight_count": "61"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "巴西",
    "flight_count": "394"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "加拿大",
    "flight_count": "3395"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "瑞士",
    "flight_count": "11089"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "德国",
    "flight_count": "31860"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "西班牙",
    "flight_count": "44715"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "法国",
    "flight_count": "15357"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "印度",
    "flight_count": "3074"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "意大利",
    "flight_count": "21817"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "日本",
    "flight_count": "1292"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "荷兰",
    "flight_count": "16306"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "俄罗斯",
    "flight_count": "2064"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "土耳其",
    "flight_count": "6132"
  },
  {
    "period": "TP3",
    "origin_country": "北爱尔兰",
    "dest_country": "美国",
    "flight_count": "25452"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "澳大利亚",
    "flight_count": "141"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "巴西",
    "flight_count": "16"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "加拿大",
    "flight_count": "873"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "瑞士",
    "flight_count": "206"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "德国",
    "flight_count": "3182"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "西班牙",
    "flight_count": "64"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "法国",
    "flight_count": "1204"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "北爱尔兰",
    "flight_count": "3127"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "意大利",
    "flight_count": "240"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "日本",
    "flight_count": "524"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "荷兰",
    "flight_count": "638"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "新西兰",
    "flight_count": "2"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "俄罗斯",
    "flight_count": "401"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "土耳其",
    "flight_count": "1088"
  },
  {
    "period": "TP3",
    "origin_country": "印度",
    "dest_country": "美国",
    "flight_count": "3080"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "巴西",
    "flight_count": "108"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "加拿大",
    "flight_count": "393"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "瑞士",
    "flight_count": "8203"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "德国",
    "flight_count": "33085"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "西班牙",
    "flight_count": "24086"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "法国",
    "flight_count": "19015"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "北爱尔兰",
    "flight_count": "20911"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "印度",
    "flight_count": "170"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "日本",
    "flight_count": "308"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "荷兰",
    "flight_count": "11025"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "俄罗斯",
    "flight_count": "2708"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "土耳其",
    "flight_count": "2957"
  },
  {
    "period": "TP3",
    "origin_country": "意大利",
    "dest_country": "美国",
    "flight_count": "4756"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "澳大利亚",
    "flight_count": "1117"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "加拿大",
    "flight_count": "954"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "瑞士",
    "flight_count": "147"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "德国",
    "flight_count": "1729"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "西班牙",
    "flight_count": "10"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "法国",
    "flight_count": "1416"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "北爱尔兰",
    "flight_count": "1326"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "印度",
    "flight_count": "743"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "意大利",
    "flight_count": "119"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "荷兰",
    "flight_count": "750"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "新西兰",
    "flight_count": "93"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "俄罗斯",
    "flight_count": "408"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "土耳其",
    "flight_count": "195"
  },
  {
    "period": "TP3",
    "origin_country": "日本",
    "dest_country": "美国",
    "flight_count": "16192"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "巴西",
    "flight_count": "1109"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "加拿大",
    "flight_count": "1690"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "瑞士",
    "flight_count": "5776"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "德国",
    "flight_count": "15967"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "西班牙",
    "flight_count": "18159"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "法国",
    "flight_count": "8369"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "北爱尔兰",
    "flight_count": "16208"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "印度",
    "flight_count": "606"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "意大利",
    "flight_count": "12230"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "日本",
    "flight_count": "472"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "俄罗斯",
    "flight_count": "1867"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "土耳其",
    "flight_count": "4126"
  },
  {
    "period": "TP3",
    "origin_country": "荷兰",
    "dest_country": "美国",
    "flight_count": "10889"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "澳大利亚",
    "flight_count": "4727"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "巴西",
    "flight_count": "1"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "加拿大",
    "flight_count": "172"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "北爱尔兰",
    "flight_count": "1"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "印度",
    "flight_count": "2"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "日本",
    "flight_count": "72"
  },
  {
    "period": "TP3",
    "origin_country": "新西兰",
    "dest_country": "美国",
    "flight_count": "1005"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "澳大利亚",
    "flight_count": "7"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "巴西",
    "flight_count": "8"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "加拿大",
    "flight_count": "12"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "瑞士",
    "flight_count": "2198"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "德国",
    "flight_count": "7834"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "西班牙",
    "flight_count": "1403"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "法国",
    "flight_count": "1475"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "北爱尔兰",
    "flight_count": "2512"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "印度",
    "flight_count": "306"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "意大利",
    "flight_count": "2905"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "日本",
    "flight_count": "427"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "荷兰",
    "flight_count": "2012"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "土耳其",
    "flight_count": "10403"
  },
  {
    "period": "TP3",
    "origin_country": "俄罗斯",
    "dest_country": "美国",
    "flight_count": "1085"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "澳大利亚",
    "flight_count": "3"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "巴西",
    "flight_count": "254"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "加拿大",
    "flight_count": "352"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "瑞士",
    "flight_count": "4389"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "德国",
    "flight_count": "21514"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "西班牙",
    "flight_count": "2457"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "法国",
    "flight_count": "4199"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "北爱尔兰",
    "flight_count": "6032"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "印度",
    "flight_count": "924"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "意大利",
    "flight_count": "3071"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "日本",
    "flight_count": "129"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "荷兰",
    "flight_count": "3525"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "俄罗斯",
    "flight_count": "9687"
  },
  {
    "period": "TP3",
    "origin_country": "土耳其",
    "dest_country": "美国",
    "flight_count": "2624"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "澳大利亚",
    "flight_count": "3698"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "巴西",
    "flight_count": "5796"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "加拿大",
    "flight_count": "69291"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "瑞士",
    "flight_count": "3243"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "德国",
    "flight_count": "20886"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "西班牙",
    "flight_count": "4512"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "法国",
    "flight_count": "10501"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "北爱尔兰",
    "flight_count": "26061"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "印度",
    "flight_count": "3136"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "意大利",
    "flight_count": "4952"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "日本",
    "flight_count": "12892"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "荷兰",
    "flight_count": "12076"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "新西兰",
    "flight_count": "1100"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "俄罗斯",
    "flight_count": "1323"
  },
  {
    "period": "TP3",
    "origin_country": "美国",
    "dest_country": "土耳其",
    "flight_count": "3375"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "加拿大",
    "flight_count": "157"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "瑞士",
    "flight_count": "4"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "德国",
    "flight_count": "25"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "西班牙",
    "flight_count": "3"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "法国",
    "flight_count": "25"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "北爱尔兰",
    "flight_count": "286"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "印度",
    "flight_count": "402"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "意大利",
    "flight_count": "3"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "日本",
    "flight_count": "270"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "荷兰",
    "flight_count": "8"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "新西兰",
    "flight_count": "1713"
  },
  {
    "period": "TP4",
    "origin_country": "澳大利亚",
    "dest_country": "美国",
    "flight_count": "1222"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "澳大利亚",
    "flight_count": "155"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "瑞士",
    "flight_count": "288"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "德国",
    "flight_count": "1181"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "西班牙",
    "flight_count": "189"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "法国",
    "flight_count": "992"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "北爱尔兰",
    "flight_count": "1818"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "印度",
    "flight_count": "521"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "意大利",
    "flight_count": "153"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "日本",
    "flight_count": "120"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "荷兰",
    "flight_count": "565"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "新西兰",
    "flight_count": "48"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "波兰",
    "flight_count": "129"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "葡萄牙",
    "flight_count": "383"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "土耳其",
    "flight_count": "206"
  },
  {
    "period": "TP4",
    "origin_country": "加拿大",
    "dest_country": "美国",
    "flight_count": "45689"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "加拿大",
    "flight_count": "305"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "德国",
    "flight_count": "9699"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "西班牙",
    "flight_count": "6228"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "法国",
    "flight_count": "6448"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "北爱尔兰",
    "flight_count": "10737"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "印度",
    "flight_count": "53"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "意大利",
    "flight_count": "3724"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "日本",
    "flight_count": "19"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "荷兰",
    "flight_count": "3020"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "波兰",
    "flight_count": "1063"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "葡萄牙",
    "flight_count": "3013"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "土耳其",
    "flight_count": "1605"
  },
  {
    "period": "TP4",
    "origin_country": "瑞士",
    "dest_country": "美国",
    "flight_count": "1971"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "加拿大",
    "flight_count": "1297"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "瑞士",
    "flight_count": "9439"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "西班牙",
    "flight_count": "21435"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "法国",
    "flight_count": "11576"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "北爱尔兰",
    "flight_count": "16246"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "印度",
    "flight_count": "807"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "意大利",
    "flight_count": "15681"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "日本",
    "flight_count": "400"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "荷兰",
    "flight_count": "6984"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "波兰",
    "flight_count": "6729"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "葡萄牙",
    "flight_count": "5118"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "土耳其",
    "flight_count": "6821"
  },
  {
    "period": "TP4",
    "origin_country": "德国",
    "dest_country": "美国",
    "flight_count": "8108"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "澳大利亚",
    "flight_count": "2"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "加拿大",
    "flight_count": "166"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "瑞士",
    "flight_count": "5626"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "德国",
    "flight_count": "20730"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "法国",
    "flight_count": "12290"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "北爱尔兰",
    "flight_count": "23573"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "印度",
    "flight_count": "9"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "意大利",
    "flight_count": "12057"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "日本",
    "flight_count": "1"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "荷兰",
    "flight_count": "6606"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "波兰",
    "flight_count": "1661"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "葡萄牙",
    "flight_count": "5929"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "土耳其",
    "flight_count": "980"
  },
  {
    "period": "TP4",
    "origin_country": "西班牙",
    "dest_country": "美国",
    "flight_count": "2857"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "加拿大",
    "flight_count": "949"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "瑞士",
    "flight_count": "6173"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "德国",
    "flight_count": "11829"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "西班牙",
    "flight_count": "12755"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "北爱尔兰",
    "flight_count": "12376"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "印度",
    "flight_count": "469"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "意大利",
    "flight_count": "12101"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "日本",
    "flight_count": "313"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "荷兰",
    "flight_count": "4125"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "波兰",
    "flight_count": "1913"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "葡萄牙",
    "flight_count": "7033"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "土耳其",
    "flight_count": "1771"
  },
  {
    "period": "TP4",
    "origin_country": "法国",
    "dest_country": "美国",
    "flight_count": "5380"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "澳大利亚",
    "flight_count": "255"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "加拿大",
    "flight_count": "1794"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "瑞士",
    "flight_count": "9706"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "德国",
    "flight_count": "16590"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "西班牙",
    "flight_count": "25104"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "法国",
    "flight_count": "11947"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "印度",
    "flight_count": "921"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "意大利",
    "flight_count": "13602"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "日本",
    "flight_count": "244"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "荷兰",
    "flight_count": "11197"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "波兰",
    "flight_count": "6478"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "葡萄牙",
    "flight_count": "8430"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "土耳其",
    "flight_count": "2999"
  },
  {
    "period": "TP4",
    "origin_country": "北爱尔兰",
    "dest_country": "美国",
    "flight_count": "13519"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "澳大利亚",
    "flight_count": "378"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "加拿大",
    "flight_count": "515"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "瑞士",
    "flight_count": "46"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "德国",
    "flight_count": "983"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "西班牙",
    "flight_count": "10"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "法国",
    "flight_count": "393"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "北爱尔兰",
    "flight_count": "901"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "意大利",
    "flight_count": "33"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "日本",
    "flight_count": "219"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "荷兰",
    "flight_count": "146"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "波兰",
    "flight_count": "80"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "葡萄牙",
    "flight_count": "1"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "土耳其",
    "flight_count": "295"
  },
  {
    "period": "TP4",
    "origin_country": "印度",
    "dest_country": "美国",
    "flight_count": "978"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "加拿大",
    "flight_count": "149"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "瑞士",
    "flight_count": "3174"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "德国",
    "flight_count": "14956"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "西班牙",
    "flight_count": "11844"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "法国",
    "flight_count": "11297"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "北爱尔兰",
    "flight_count": "13249"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "印度",
    "flight_count": "15"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "日本",
    "flight_count": "37"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "荷兰",
    "flight_count": "5026"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "波兰",
    "flight_count": "2891"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "葡萄牙",
    "flight_count": "2358"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "土耳其",
    "flight_count": "1307"
  },
  {
    "period": "TP4",
    "origin_country": "意大利",
    "dest_country": "美国",
    "flight_count": "2476"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "澳大利亚",
    "flight_count": "303"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "加拿大",
    "flight_count": "236"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "瑞士",
    "flight_count": "41"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "德国",
    "flight_count": "367"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "西班牙",
    "flight_count": "1"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "法国",
    "flight_count": "307"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "北爱尔兰",
    "flight_count": "261"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "印度",
    "flight_count": "207"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "意大利",
    "flight_count": "8"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "荷兰",
    "flight_count": "87"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "新西兰",
    "flight_count": "42"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "波兰",
    "flight_count": "7"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "土耳其",
    "flight_count": "89"
  },
  {
    "period": "TP4",
    "origin_country": "日本",
    "dest_country": "美国",
    "flight_count": "4745"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "澳大利亚",
    "flight_count": "2"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "加拿大",
    "flight_count": "599"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "瑞士",
    "flight_count": "2884"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "德国",
    "flight_count": "7101"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "西班牙",
    "flight_count": "7134"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "法国",
    "flight_count": "4099"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "北爱尔兰",
    "flight_count": "11358"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "印度",
    "flight_count": "120"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "意大利",
    "flight_count": "5505"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "日本",
    "flight_count": "35"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "波兰",
    "flight_count": "2268"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "葡萄牙",
    "flight_count": "2500"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "土耳其",
    "flight_count": "1433"
  },
  {
    "period": "TP4",
    "origin_country": "荷兰",
    "dest_country": "美国",
    "flight_count": "3821"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "澳大利亚",
    "flight_count": "1654"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "加拿大",
    "flight_count": "53"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "德国",
    "flight_count": "2"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "西班牙",
    "flight_count": "3"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "北爱尔兰",
    "flight_count": "2"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "日本",
    "flight_count": "25"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "荷兰",
    "flight_count": "2"
  },
  {
    "period": "TP4",
    "origin_country": "新西兰",
    "dest_country": "美国",
    "flight_count": "310"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "澳大利亚",
    "flight_count": "1"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "加拿大",
    "flight_count": "124"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "瑞士",
    "flight_count": "1006"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "德国",
    "flight_count": "6892"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "西班牙",
    "flight_count": "1772"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "法国",
    "flight_count": "1992"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "北爱尔兰",
    "flight_count": "6711"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "印度",
    "flight_count": "77"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "意大利",
    "flight_count": "2836"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "日本",
    "flight_count": "4"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "荷兰",
    "flight_count": "2304"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "葡萄牙",
    "flight_count": "428"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "土耳其",
    "flight_count": "330"
  },
  {
    "period": "TP4",
    "origin_country": "波兰",
    "dest_country": "美国",
    "flight_count": "485"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "加拿大",
    "flight_count": "437"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "瑞士",
    "flight_count": "2899"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "德国",
    "flight_count": "5743"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "西班牙",
    "flight_count": "6653"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "法国",
    "flight_count": "7805"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "北爱尔兰",
    "flight_count": "9170"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "印度",
    "flight_count": "4"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "意大利",
    "flight_count": "2712"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "荷兰",
    "flight_count": "2689"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "波兰",
    "flight_count": "486"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "土耳其",
    "flight_count": "235"
  },
  {
    "period": "TP4",
    "origin_country": "葡萄牙",
    "dest_country": "美国",
    "flight_count": "1476"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "加拿大",
    "flight_count": "164"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "瑞士",
    "flight_count": "1690"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "德国",
    "flight_count": "7996"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "西班牙",
    "flight_count": "1269"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "法国",
    "flight_count": "2247"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "北爱尔兰",
    "flight_count": "3155"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "印度",
    "flight_count": "337"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "意大利",
    "flight_count": "1691"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "日本",
    "flight_count": "72"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "荷兰",
    "flight_count": "1539"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "波兰",
    "flight_count": "365"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "葡萄牙",
    "flight_count": "300"
  },
  {
    "period": "TP4",
    "origin_country": "土耳其",
    "dest_country": "美国",
    "flight_count": "1167"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "澳大利亚",
    "flight_count": "1510"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "加拿大",
    "flight_count": "46915"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "瑞士",
    "flight_count": "1959"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "德国",
    "flight_count": "8388"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "西班牙",
    "flight_count": "2854"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "法国",
    "flight_count": "5435"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "北爱尔兰",
    "flight_count": "14117"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "印度",
    "flight_count": "1013"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "意大利",
    "flight_count": "2442"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "日本",
    "flight_count": "2756"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "荷兰",
    "flight_count": "3929"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "新西兰",
    "flight_count": "311"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "波兰",
    "flight_count": "515"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "葡萄牙",
    "flight_count": "1300"
  },
  {
    "period": "TP4",
    "origin_country": "美国",
    "dest_country": "土耳其",
    "flight_count": "1526"
  }
];

const embeddedStackedAreaData = [
  {
    "month": "20190101",
    "country": "美国",
    "flight_count": "563585"
  },
  {
    "month": "20190101",
    "country": "澳大利亚",
    "flight_count": "61675"
  },
  {
    "month": "20190101",
    "country": "德国",
    "flight_count": "60321"
  },
  {
    "month": "20190101",
    "country": "北爱尔兰",
    "flight_count": "59779"
  },
  {
    "month": "20190101",
    "country": "印度",
    "flight_count": "47574"
  },
  {
    "month": "20190101",
    "country": "意大利",
    "flight_count": "39045"
  },
  {
    "month": "20190101",
    "country": "法国",
    "flight_count": "36765"
  },
  {
    "month": "20190101",
    "country": "俄罗斯",
    "flight_count": "34089"
  },
  {
    "month": "20190101",
    "country": "西班牙",
    "flight_count": "30197"
  },
  {
    "month": "20190101",
    "country": "巴西",
    "flight_count": "29563"
  },
  {
    "month": "20190201",
    "country": "美国",
    "flight_count": "534389"
  },
  {
    "month": "20190201",
    "country": "北爱尔兰",
    "flight_count": "62413"
  },
  {
    "month": "20190201",
    "country": "德国",
    "flight_count": "59922"
  },
  {
    "month": "20190201",
    "country": "澳大利亚",
    "flight_count": "57523"
  },
  {
    "month": "20190201",
    "country": "印度",
    "flight_count": "39671"
  },
  {
    "month": "20190201",
    "country": "法国",
    "flight_count": "35414"
  },
  {
    "month": "20190201",
    "country": "意大利",
    "flight_count": "33614"
  },
  {
    "month": "20190201",
    "country": "西班牙",
    "flight_count": "32865"
  },
  {
    "month": "20190201",
    "country": "俄罗斯",
    "flight_count": "29765"
  },
  {
    "month": "20190201",
    "country": "巴西",
    "flight_count": "27348"
  },
  {
    "month": "20190301",
    "country": "美国",
    "flight_count": "602507"
  },
  {
    "month": "20190301",
    "country": "北爱尔兰",
    "flight_count": "70193"
  },
  {
    "month": "20190301",
    "country": "德国",
    "flight_count": "68203"
  },
  {
    "month": "20190301",
    "country": "澳大利亚",
    "flight_count": "60272"
  },
  {
    "month": "20190301",
    "country": "法国",
    "flight_count": "40974"
  },
  {
    "month": "20190301",
    "country": "印度",
    "flight_count": "39556"
  },
  {
    "month": "20190301",
    "country": "意大利",
    "flight_count": "36283"
  },
  {
    "month": "20190301",
    "country": "西班牙",
    "flight_count": "35334"
  },
  {
    "month": "20190301",
    "country": "俄罗斯",
    "flight_count": "32966"
  },
  {
    "month": "20190301",
    "country": "加拿大",
    "flight_count": "32654"
  },
  {
    "month": "20190401",
    "country": "美国",
    "flight_count": "602966"
  },
  {
    "month": "20190401",
    "country": "北爱尔兰",
    "flight_count": "75400"
  },
  {
    "month": "20190401",
    "country": "德国",
    "flight_count": "72655"
  },
  {
    "month": "20190401",
    "country": "澳大利亚",
    "flight_count": "59046"
  },
  {
    "month": "20190401",
    "country": "法国",
    "flight_count": "45293"
  },
  {
    "month": "20190401",
    "country": "意大利",
    "flight_count": "39721"
  },
  {
    "month": "20190401",
    "country": "印度",
    "flight_count": "38487"
  },
  {
    "month": "20190401",
    "country": "西班牙",
    "flight_count": "37850"
  },
  {
    "month": "20190401",
    "country": "俄罗斯",
    "flight_count": "33993"
  },
  {
    "month": "20190401",
    "country": "加拿大",
    "flight_count": "31973"
  },
  {
    "month": "20190501",
    "country": "美国",
    "flight_count": "687637"
  },
  {
    "month": "20190501",
    "country": "北爱尔兰",
    "flight_count": "82671"
  },
  {
    "month": "20190501",
    "country": "德国",
    "flight_count": "78882"
  },
  {
    "month": "20190501",
    "country": "澳大利亚",
    "flight_count": "61033"
  },
  {
    "month": "20190501",
    "country": "法国",
    "flight_count": "45178"
  },
  {
    "month": "20190501",
    "country": "意大利",
    "flight_count": "41905"
  },
  {
    "month": "20190501",
    "country": "印度",
    "flight_count": "41773"
  },
  {
    "month": "20190501",
    "country": "西班牙",
    "flight_count": "40908"
  },
  {
    "month": "20190501",
    "country": "俄罗斯",
    "flight_count": "37831"
  },
  {
    "month": "20190501",
    "country": "加拿大",
    "flight_count": "36185"
  },
  {
    "month": "20190601",
    "country": "美国",
    "flight_count": "685706"
  },
  {
    "month": "20190601",
    "country": "北爱尔兰",
    "flight_count": "83170"
  },
  {
    "month": "20190601",
    "country": "德国",
    "flight_count": "79453"
  },
  {
    "month": "20190601",
    "country": "澳大利亚",
    "flight_count": "61101"
  },
  {
    "month": "20190601",
    "country": "意大利",
    "flight_count": "49700"
  },
  {
    "month": "20190601",
    "country": "法国",
    "flight_count": "46770"
  },
  {
    "month": "20190601",
    "country": "印度",
    "flight_count": "43312"
  },
  {
    "month": "20190601",
    "country": "西班牙",
    "flight_count": "40277"
  },
  {
    "month": "20190601",
    "country": "俄罗斯",
    "flight_count": "37550"
  },
  {
    "month": "20190601",
    "country": "加拿大",
    "flight_count": "34886"
  },
  {
    "month": "20190701",
    "country": "美国",
    "flight_count": "763501"
  },
  {
    "month": "20190701",
    "country": "北爱尔兰",
    "flight_count": "89127"
  },
  {
    "month": "20190701",
    "country": "德国",
    "flight_count": "82851"
  },
  {
    "month": "20190701",
    "country": "澳大利亚",
    "flight_count": "66278"
  },
  {
    "month": "20190701",
    "country": "意大利",
    "flight_count": "54460"
  },
  {
    "month": "20190701",
    "country": "法国",
    "flight_count": "49918"
  },
  {
    "month": "20190701",
    "country": "西班牙",
    "flight_count": "43328"
  },
  {
    "month": "20190701",
    "country": "印度",
    "flight_count": "42585"
  },
  {
    "month": "20190701",
    "country": "俄罗斯",
    "flight_count": "41802"
  },
  {
    "month": "20190701",
    "country": "加拿大",
    "flight_count": "38904"
  },
  {
    "month": "20190801",
    "country": "美国",
    "flight_count": "851162"
  },
  {
    "month": "20190801",
    "country": "北爱尔兰",
    "flight_count": "88215"
  },
  {
    "month": "20190801",
    "country": "德国",
    "flight_count": "81614"
  },
  {
    "month": "20190801",
    "country": "澳大利亚",
    "flight_count": "62681"
  },
  {
    "month": "20190801",
    "country": "意大利",
    "flight_count": "52883"
  },
  {
    "month": "20190801",
    "country": "法国",
    "flight_count": "48293"
  },
  {
    "month": "20190801",
    "country": "印度",
    "flight_count": "45353"
  },
  {
    "month": "20190801",
    "country": "俄罗斯",
    "flight_count": "42833"
  },
  {
    "month": "20190801",
    "country": "加拿大",
    "flight_count": "42243"
  },
  {
    "month": "20190801",
    "country": "西班牙",
    "flight_count": "42124"
  },
  {
    "month": "20190901",
    "country": "美国",
    "flight_count": "776482"
  },
  {
    "month": "20190901",
    "country": "北爱尔兰",
    "flight_count": "80430"
  },
  {
    "month": "20190901",
    "country": "德国",
    "flight_count": "79519"
  },
  {
    "month": "20190901",
    "country": "澳大利亚",
    "flight_count": "63108"
  },
  {
    "month": "20190901",
    "country": "意大利",
    "flight_count": "45378"
  },
  {
    "month": "20190901",
    "country": "西班牙",
    "flight_count": "45109"
  },
  {
    "month": "20190901",
    "country": "法国",
    "flight_count": "44068"
  },
  {
    "month": "20190901",
    "country": "加拿大",
    "flight_count": "40925"
  },
  {
    "month": "20190901",
    "country": "印度",
    "flight_count": "39443"
  },
  {
    "month": "20190901",
    "country": "俄罗斯",
    "flight_count": "38398"
  },
  {
    "month": "20191001",
    "country": "美国",
    "flight_count": "885818"
  },
  {
    "month": "20191001",
    "country": "德国",
    "flight_count": "84590"
  },
  {
    "month": "20191001",
    "country": "北爱尔兰",
    "flight_count": "81207"
  },
  {
    "month": "20191001",
    "country": "澳大利亚",
    "flight_count": "68293"
  },
  {
    "month": "20191001",
    "country": "西班牙",
    "flight_count": "49271"
  },
  {
    "month": "20191001",
    "country": "意大利",
    "flight_count": "47497"
  },
  {
    "month": "20191001",
    "country": "加拿大",
    "flight_count": "46648"
  },
  {
    "month": "20191001",
    "country": "法国",
    "flight_count": "45564"
  },
  {
    "month": "20191001",
    "country": "印度",
    "flight_count": "44199"
  },
  {
    "month": "20191001",
    "country": "俄罗斯",
    "flight_count": "35948"
  },
  {
    "month": "20191101",
    "country": "美国",
    "flight_count": "848136"
  },
  {
    "month": "20191101",
    "country": "德国",
    "flight_count": "68650"
  },
  {
    "month": "20191101",
    "country": "北爱尔兰",
    "flight_count": "65909"
  },
  {
    "month": "20191101",
    "country": "澳大利亚",
    "flight_count": "64681"
  },
  {
    "month": "20191101",
    "country": "印度",
    "flight_count": "46004"
  },
  {
    "month": "20191101",
    "country": "加拿大",
    "flight_count": "44954"
  },
  {
    "month": "20191101",
    "country": "意大利",
    "flight_count": "38489"
  },
  {
    "month": "20191101",
    "country": "法国",
    "flight_count": "37978"
  },
  {
    "month": "20191101",
    "country": "西班牙",
    "flight_count": "37132"
  },
  {
    "month": "20191101",
    "country": "俄罗斯",
    "flight_count": "32767"
  },
  {
    "month": "20191201",
    "country": "美国",
    "flight_count": "852220"
  },
  {
    "month": "20191201",
    "country": "北爱尔兰",
    "flight_count": "66498"
  },
  {
    "month": "20191201",
    "country": "澳大利亚",
    "flight_count": "63473"
  },
  {
    "month": "20191201",
    "country": "德国",
    "flight_count": "63288"
  },
  {
    "month": "20191201",
    "country": "印度",
    "flight_count": "48762"
  },
  {
    "month": "20191201",
    "country": "加拿大",
    "flight_count": "47581"
  },
  {
    "month": "20191201",
    "country": "西班牙",
    "flight_count": "37690"
  },
  {
    "month": "20191201",
    "country": "法国",
    "flight_count": "37590"
  },
  {
    "month": "20191201",
    "country": "意大利",
    "flight_count": "37225"
  },
  {
    "month": "20191201",
    "country": "俄罗斯",
    "flight_count": "31739"
  },
  {
    "month": "20200101",
    "country": "美国",
    "flight_count": "876815"
  },
  {
    "month": "20200101",
    "country": "北爱尔兰",
    "flight_count": "64392"
  },
  {
    "month": "20200101",
    "country": "德国",
    "flight_count": "62918"
  },
  {
    "month": "20200101",
    "country": "澳大利亚",
    "flight_count": "60880"
  },
  {
    "month": "20200101",
    "country": "印度",
    "flight_count": "48689"
  },
  {
    "month": "20200101",
    "country": "加拿大",
    "flight_count": "48440"
  },
  {
    "month": "20200101",
    "country": "法国",
    "flight_count": "37984"
  },
  {
    "month": "20200101",
    "country": "意大利",
    "flight_count": "35922"
  },
  {
    "month": "20200101",
    "country": "俄罗斯",
    "flight_count": "32462"
  },
  {
    "month": "20200101",
    "country": "西班牙",
    "flight_count": "31460"
  },
  {
    "month": "20200201",
    "country": "美国",
    "flight_count": "895689"
  },
  {
    "month": "20200201",
    "country": "北爱尔兰",
    "flight_count": "66154"
  },
  {
    "month": "20200201",
    "country": "德国",
    "flight_count": "65189"
  },
  {
    "month": "20200201",
    "country": "澳大利亚",
    "flight_count": "59142"
  },
  {
    "month": "20200201",
    "country": "加拿大",
    "flight_count": "48831"
  },
  {
    "month": "20200201",
    "country": "印度",
    "flight_count": "48503"
  },
  {
    "month": "20200201",
    "country": "法国",
    "flight_count": "39229"
  },
  {
    "month": "20200201",
    "country": "西班牙",
    "flight_count": "38001"
  },
  {
    "month": "20200201",
    "country": "意大利",
    "flight_count": "36359"
  },
  {
    "month": "20200201",
    "country": "俄罗斯",
    "flight_count": "30743"
  },
  {
    "month": "20200301",
    "country": "美国",
    "flight_count": "791055"
  },
  {
    "month": "20200301",
    "country": "澳大利亚",
    "flight_count": "55285"
  },
  {
    "month": "20200301",
    "country": "北爱尔兰",
    "flight_count": "50043"
  },
  {
    "month": "20200301",
    "country": "德国",
    "flight_count": "44446"
  },
  {
    "month": "20200301",
    "country": "加拿大",
    "flight_count": "42967"
  },
  {
    "month": "20200301",
    "country": "印度",
    "flight_count": "37513"
  },
  {
    "month": "20200301",
    "country": "俄罗斯",
    "flight_count": "29020"
  },
  {
    "month": "20200301",
    "country": "法国",
    "flight_count": "26102"
  },
  {
    "month": "20200301",
    "country": "西班牙",
    "flight_count": "25307"
  },
  {
    "month": "20200301",
    "country": "巴西",
    "flight_count": "22089"
  },
  {
    "month": "20200401",
    "country": "美国",
    "flight_count": "365292"
  },
  {
    "month": "20200401",
    "country": "澳大利亚",
    "flight_count": "20885"
  },
  {
    "month": "20200401",
    "country": "德国",
    "flight_count": "12710"
  },
  {
    "month": "20200401",
    "country": "加拿大",
    "flight_count": "11612"
  },
  {
    "month": "20200401",
    "country": "日本",
    "flight_count": "9738"
  },
  {
    "month": "20200401",
    "country": "北爱尔兰",
    "flight_count": "8085"
  },
  {
    "month": "20200401",
    "country": "中国",
    "flight_count": "7455"
  },
  {
    "month": "20200401",
    "country": "俄罗斯",
    "flight_count": "5752"
  },
  {
    "month": "20200401",
    "country": "韩国",
    "flight_count": "5702"
  },
  {
    "month": "20200401",
    "country": "",
    "flight_count": "4949"
  },
  {
    "month": "20200501",
    "country": "美国",
    "flight_count": "449171"
  },
  {
    "month": "20200501",
    "country": "澳大利亚",
    "flight_count": "22682"
  },
  {
    "month": "20200501",
    "country": "德国",
    "flight_count": "16892"
  },
  {
    "month": "20200501",
    "country": "加拿大",
    "flight_count": "11982"
  },
  {
    "month": "20200501",
    "country": "中国",
    "flight_count": "11903"
  },
  {
    "month": "20200501",
    "country": "北爱尔兰",
    "flight_count": "11122"
  },
  {
    "month": "20200501",
    "country": "俄罗斯",
    "flight_count": "7024"
  },
  {
    "month": "20200501",
    "country": "法国",
    "flight_count": "6407"
  },
  {
    "month": "20200501",
    "country": "韩国",
    "flight_count": "6091"
  },
  {
    "month": "20200501",
    "country": "日本",
    "flight_count": "5907"
  },
  {
    "month": "20200601",
    "country": "美国",
    "flight_count": "565286"
  },
  {
    "month": "20200601",
    "country": "澳大利亚",
    "flight_count": "25915"
  },
  {
    "month": "20200601",
    "country": "德国",
    "flight_count": "23475"
  },
  {
    "month": "20200601",
    "country": "加拿大",
    "flight_count": "16973"
  },
  {
    "month": "20200601",
    "country": "中国",
    "flight_count": "15809"
  },
  {
    "month": "20200601",
    "country": "北爱尔兰",
    "flight_count": "14448"
  },
  {
    "month": "20200601",
    "country": "俄罗斯",
    "flight_count": "14116"
  },
  {
    "month": "20200601",
    "country": "印度",
    "flight_count": "13666"
  },
  {
    "month": "20200601",
    "country": "法国",
    "flight_count": "12338"
  },
  {
    "month": "20200601",
    "country": "日本",
    "flight_count": "9787"
  },
  {
    "month": "20200701",
    "country": "美国",
    "flight_count": "684765"
  },
  {
    "month": "20200701",
    "country": "德国",
    "flight_count": "37639"
  },
  {
    "month": "20200701",
    "country": "北爱尔兰",
    "flight_count": "30769"
  },
  {
    "month": "20200701",
    "country": "澳大利亚",
    "flight_count": "29243"
  },
  {
    "month": "20200701",
    "country": "西班牙",
    "flight_count": "27256"
  },
  {
    "month": "20200701",
    "country": "法国",
    "flight_count": "25189"
  },
  {
    "month": "20200701",
    "country": "加拿大",
    "flight_count": "22812"
  },
  {
    "month": "20200701",
    "country": "俄罗斯",
    "flight_count": "22704"
  },
  {
    "month": "20200701",
    "country": "意大利",
    "flight_count": "21999"
  },
  {
    "month": "20200701",
    "country": "中国",
    "flight_count": "17227"
  },
  {
    "month": "20200801",
    "country": "美国",
    "flight_count": "714471"
  },
  {
    "month": "20200801",
    "country": "北爱尔兰",
    "flight_count": "43788"
  },
  {
    "month": "20200801",
    "country": "德国",
    "flight_count": "42330"
  },
  {
    "month": "20200801",
    "country": "西班牙",
    "flight_count": "35510"
  },
  {
    "month": "20200801",
    "country": "法国",
    "flight_count": "29388"
  },
  {
    "month": "20200801",
    "country": "俄罗斯",
    "flight_count": "28610"
  },
  {
    "month": "20200801",
    "country": "意大利",
    "flight_count": "28536"
  },
  {
    "month": "20200801",
    "country": "澳大利亚",
    "flight_count": "25856"
  },
  {
    "month": "20200801",
    "country": "加拿大",
    "flight_count": "23952"
  },
  {
    "month": "20200801",
    "country": "日本",
    "flight_count": "21604"
  },
  {
    "month": "20200901",
    "country": "美国",
    "flight_count": "679873"
  },
  {
    "month": "20200901",
    "country": "北爱尔兰",
    "flight_count": "42209"
  },
  {
    "month": "20200901",
    "country": "德国",
    "flight_count": "41467"
  },
  {
    "month": "20200901",
    "country": "俄罗斯",
    "flight_count": "28522"
  },
  {
    "month": "20200901",
    "country": "澳大利亚",
    "flight_count": "27196"
  },
  {
    "month": "20200901",
    "country": "法国",
    "flight_count": "27087"
  },
  {
    "month": "20200901",
    "country": "意大利",
    "flight_count": "24686"
  },
  {
    "month": "20200901",
    "country": "西班牙",
    "flight_count": "24234"
  },
  {
    "month": "20200901",
    "country": "加拿大",
    "flight_count": "22866"
  },
  {
    "month": "20200901",
    "country": "印度",
    "flight_count": "17583"
  },
  {
    "month": "20201001",
    "country": "美国",
    "flight_count": "728303"
  },
  {
    "month": "20201001",
    "country": "德国",
    "flight_count": "37918"
  },
  {
    "month": "20201001",
    "country": "北爱尔兰",
    "flight_count": "37217"
  },
  {
    "month": "20201001",
    "country": "澳大利亚",
    "flight_count": "29276"
  },
  {
    "month": "20201001",
    "country": "印度",
    "flight_count": "26882"
  },
  {
    "month": "20201001",
    "country": "俄罗斯",
    "flight_count": "24701"
  },
  {
    "month": "20201001",
    "country": "法国",
    "flight_count": "23725"
  },
  {
    "month": "20201001",
    "country": "加拿大",
    "flight_count": "22606"
  },
  {
    "month": "20201001",
    "country": "意大利",
    "flight_count": "21902"
  },
  {
    "month": "20201001",
    "country": "西班牙",
    "flight_count": "20369"
  },
  {
    "month": "20201101",
    "country": "美国",
    "flight_count": "691993"
  },
  {
    "month": "20201101",
    "country": "澳大利亚",
    "flight_count": "33845"
  },
  {
    "month": "20201101",
    "country": "印度",
    "flight_count": "29976"
  },
  {
    "month": "20201101",
    "country": "德国",
    "flight_count": "26505"
  },
  {
    "month": "20201101",
    "country": "日本",
    "flight_count": "22515"
  },
  {
    "month": "20201101",
    "country": "北爱尔兰",
    "flight_count": "21853"
  },
  {
    "month": "20201101",
    "country": "加拿大",
    "flight_count": "20882"
  },
  {
    "month": "20201101",
    "country": "俄罗斯",
    "flight_count": "20526"
  },
  {
    "month": "20201101",
    "country": "中国",
    "flight_count": "18195"
  },
  {
    "month": "20201101",
    "country": "巴西",
    "flight_count": "17562"
  },
  {
    "month": "20201201",
    "country": "美国",
    "flight_count": "706821"
  },
  {
    "month": "20201201",
    "country": "澳大利亚",
    "flight_count": "39992"
  },
  {
    "month": "20201201",
    "country": "印度",
    "flight_count": "35488"
  },
  {
    "month": "20201201",
    "country": "日本",
    "flight_count": "27897"
  },
  {
    "month": "20201201",
    "country": "北爱尔兰",
    "flight_count": "26171"
  },
  {
    "month": "20201201",
    "country": "德国",
    "flight_count": "25813"
  },
  {
    "month": "20201201",
    "country": "加拿大",
    "flight_count": "22407"
  },
  {
    "month": "20201201",
    "country": "俄罗斯",
    "flight_count": "21768"
  },
  {
    "month": "20201201",
    "country": "巴西",
    "flight_count": "21261"
  },
  {
    "month": "20201201",
    "country": "法国",
    "flight_count": "17433"
  },
  {
    "month": "20210101",
    "country": "美国",
    "flight_count": "679518"
  },
  {
    "month": "20210101",
    "country": "印度",
    "flight_count": "36647"
  },
  {
    "month": "20210101",
    "country": "澳大利亚",
    "flight_count": "36101"
  },
  {
    "month": "20210101",
    "country": "德国",
    "flight_count": "22530"
  },
  {
    "month": "20210101",
    "country": "巴西",
    "flight_count": "21881"
  },
  {
    "month": "20210101",
    "country": "俄罗斯",
    "flight_count": "21169"
  },
  {
    "month": "20210101",
    "country": "日本",
    "flight_count": "20582"
  },
  {
    "month": "20210101",
    "country": "加拿大",
    "flight_count": "19400"
  },
  {
    "month": "20210101",
    "country": "北爱尔兰",
    "flight_count": "17835"
  },
  {
    "month": "20210101",
    "country": "法国",
    "flight_count": "17752"
  },
  {
    "month": "20210201",
    "country": "美国",
    "flight_count": "644714"
  },
  {
    "month": "20210201",
    "country": "澳大利亚",
    "flight_count": "37063"
  },
  {
    "month": "20210201",
    "country": "印度",
    "flight_count": "33046"
  },
  {
    "month": "20210201",
    "country": "德国",
    "flight_count": "21303"
  },
  {
    "month": "20210201",
    "country": "俄罗斯",
    "flight_count": "17703"
  },
  {
    "month": "20210201",
    "country": "巴西",
    "flight_count": "17575"
  },
  {
    "month": "20210201",
    "country": "法国",
    "flight_count": "16427"
  },
  {
    "month": "20210201",
    "country": "加拿大",
    "flight_count": "15749"
  },
  {
    "month": "20210201",
    "country": "北爱尔兰",
    "flight_count": "14618"
  },
  {
    "month": "20210201",
    "country": "日本",
    "flight_count": "14455"
  },
  {
    "month": "20210301",
    "country": "美国",
    "flight_count": "842198"
  },
  {
    "month": "20210301",
    "country": "澳大利亚",
    "flight_count": "45907"
  },
  {
    "month": "20210301",
    "country": "印度",
    "flight_count": "36279"
  },
  {
    "month": "20210301",
    "country": "德国",
    "flight_count": "27000"
  },
  {
    "month": "20210301",
    "country": "日本",
    "flight_count": "23149"
  },
  {
    "month": "20210301",
    "country": "俄罗斯",
    "flight_count": "22373"
  },
  {
    "month": "20210301",
    "country": "加拿大",
    "flight_count": "18723"
  },
  {
    "month": "20210301",
    "country": "北爱尔兰",
    "flight_count": "18709"
  },
  {
    "month": "20210301",
    "country": "法国",
    "flight_count": "18198"
  },
  {
    "month": "20210301",
    "country": "中国",
    "flight_count": "18006"
  },
  {
    "month": "20210401",
    "country": "美国",
    "flight_count": "887393"
  },
  {
    "month": "20210401",
    "country": "澳大利亚",
    "flight_count": "51976"
  },
  {
    "month": "20210401",
    "country": "德国",
    "flight_count": "31581"
  },
  {
    "month": "20210401",
    "country": "印度",
    "flight_count": "30636"
  },
  {
    "month": "20210401",
    "country": "日本",
    "flight_count": "27596"
  },
  {
    "month": "20210401",
    "country": "俄罗斯",
    "flight_count": "25836"
  },
  {
    "month": "20210401",
    "country": "北爱尔兰",
    "flight_count": "24254"
  },
  {
    "month": "20210401",
    "country": "加拿大",
    "flight_count": "19403"
  },
  {
    "month": "20210401",
    "country": "法国",
    "flight_count": "18318"
  },
  {
    "month": "20210401",
    "country": "新西兰",
    "flight_count": "17286"
  },
  {
    "month": "20210501",
    "country": "美国",
    "flight_count": "927600"
  },
  {
    "month": "20210501",
    "country": "澳大利亚",
    "flight_count": "51210"
  },
  {
    "month": "20210501",
    "country": "德国",
    "flight_count": "33763"
  },
  {
    "month": "20210501",
    "country": "俄罗斯",
    "flight_count": "31219"
  },
  {
    "month": "20210501",
    "country": "北爱尔兰",
    "flight_count": "27206"
  },
  {
    "month": "20210501",
    "country": "日本",
    "flight_count": "24346"
  },
  {
    "month": "20210501",
    "country": "西班牙",
    "flight_count": "22421"
  },
  {
    "month": "20210501",
    "country": "法国",
    "flight_count": "22179"
  },
  {
    "month": "20210501",
    "country": "加拿大",
    "flight_count": "20132"
  },
  {
    "month": "20210501",
    "country": "巴西",
    "flight_count": "18949"
  },
  {
    "month": "20210601",
    "country": "美国",
    "flight_count": "1005881"
  },
  {
    "month": "20210601",
    "country": "德国",
    "flight_count": "45609"
  },
  {
    "month": "20210601",
    "country": "澳大利亚",
    "flight_count": "43021"
  },
  {
    "month": "20210601",
    "country": "俄罗斯",
    "flight_count": "38015"
  },
  {
    "month": "20210601",
    "country": "北爱尔兰",
    "flight_count": "37875"
  },
  {
    "month": "20210601",
    "country": "西班牙",
    "flight_count": "33741"
  },
  {
    "month": "20210601",
    "country": "法国",
    "flight_count": "31605"
  },
  {
    "month": "20210601",
    "country": "意大利",
    "flight_count": "30253"
  },
  {
    "month": "20210601",
    "country": "加拿大",
    "flight_count": "25658"
  },
  {
    "month": "20210601",
    "country": "日本",
    "flight_count": "24226"
  },
  {
    "month": "20210701",
    "country": "美国",
    "flight_count": "1057507"
  },
  {
    "month": "20210701",
    "country": "德国",
    "flight_count": "61570"
  },
  {
    "month": "20210701",
    "country": "西班牙",
    "flight_count": "52129"
  },
  {
    "month": "20210701",
    "country": "北爱尔兰",
    "flight_count": "48206"
  },
  {
    "month": "20210701",
    "country": "法国",
    "flight_count": "44834"
  },
  {
    "month": "20210701",
    "country": "意大利",
    "flight_count": "42617"
  },
  {
    "month": "20210701",
    "country": "俄罗斯",
    "flight_count": "39756"
  },
  {
    "month": "20210701",
    "country": "加拿大",
    "flight_count": "34696"
  },
  {
    "month": "20210701",
    "country": "澳大利亚",
    "flight_count": "33473"
  },
  {
    "month": "20210701",
    "country": "日本",
    "flight_count": "27706"
  },
  {
    "month": "20210801",
    "country": "美国",
    "flight_count": "1019984"
  },
  {
    "month": "20210801",
    "country": "德国",
    "flight_count": "64585"
  },
  {
    "month": "20210801",
    "country": "北爱尔兰",
    "flight_count": "57641"
  },
  {
    "month": "20210801",
    "country": "西班牙",
    "flight_count": "52512"
  },
  {
    "month": "20210801",
    "country": "加拿大",
    "flight_count": "42377"
  },
  {
    "month": "20210801",
    "country": "法国",
    "flight_count": "41912"
  },
  {
    "month": "20210801",
    "country": "意大利",
    "flight_count": "41679"
  },
  {
    "month": "20210801",
    "country": "俄罗斯",
    "flight_count": "40755"
  },
  {
    "month": "20210801",
    "country": "日本",
    "flight_count": "30796"
  },
  {
    "month": "20210801",
    "country": "印度",
    "flight_count": "28988"
  },
  {
    "month": "20210901",
    "country": "美国",
    "flight_count": "915990"
  },
  {
    "month": "20210901",
    "country": "德国",
    "flight_count": "62996"
  },
  {
    "month": "20210901",
    "country": "北爱尔兰",
    "flight_count": "57706"
  },
  {
    "month": "20210901",
    "country": "西班牙",
    "flight_count": "41950"
  },
  {
    "month": "20210901",
    "country": "加拿大",
    "flight_count": "40242"
  },
  {
    "month": "20210901",
    "country": "法国",
    "flight_count": "35046"
  },
  {
    "month": "20210901",
    "country": "意大利",
    "flight_count": "34832"
  },
  {
    "month": "20210901",
    "country": "俄罗斯",
    "flight_count": "30313"
  },
  {
    "month": "20210901",
    "country": "印度",
    "flight_count": "29347"
  },
  {
    "month": "20210901",
    "country": "澳大利亚",
    "flight_count": "27428"
  },
  {
    "month": "20211001",
    "country": "美国",
    "flight_count": "997677"
  },
  {
    "month": "20211001",
    "country": "德国",
    "flight_count": "69911"
  },
  {
    "month": "20211001",
    "country": "北爱尔兰",
    "flight_count": "61647"
  },
  {
    "month": "20211001",
    "country": "加拿大",
    "flight_count": "46123"
  },
  {
    "month": "20211001",
    "country": "西班牙",
    "flight_count": "43119"
  },
  {
    "month": "20211001",
    "country": "法国",
    "flight_count": "38374"
  },
  {
    "month": "20211001",
    "country": "意大利",
    "flight_count": "34685"
  },
  {
    "month": "20211001",
    "country": "俄罗斯",
    "flight_count": "34659"
  },
  {
    "month": "20211001",
    "country": "澳大利亚",
    "flight_count": "31951"
  },
  {
    "month": "20211001",
    "country": "印度",
    "flight_count": "31390"
  },
  {
    "month": "20211101",
    "country": "美国",
    "flight_count": "935995"
  },
  {
    "month": "20211101",
    "country": "德国",
    "flight_count": "56263"
  },
  {
    "month": "20211101",
    "country": "北爱尔兰",
    "flight_count": "54365"
  },
  {
    "month": "20211101",
    "country": "加拿大",
    "flight_count": "42065"
  },
  {
    "month": "20211101",
    "country": "澳大利亚",
    "flight_count": "37118"
  },
  {
    "month": "20211101",
    "country": "法国",
    "flight_count": "35005"
  },
  {
    "month": "20211101",
    "country": "日本",
    "flight_count": "33967"
  },
  {
    "month": "20211101",
    "country": "西班牙",
    "flight_count": "33211"
  },
  {
    "month": "20211101",
    "country": "意大利",
    "flight_count": "32177"
  },
  {
    "month": "20211101",
    "country": "印度",
    "flight_count": "30393"
  },
  {
    "month": "20211201",
    "country": "美国",
    "flight_count": "931899"
  },
  {
    "month": "20211201",
    "country": "北爱尔兰",
    "flight_count": "56368"
  },
  {
    "month": "20211201",
    "country": "德国",
    "flight_count": "55310"
  },
  {
    "month": "20211201",
    "country": "澳大利亚",
    "flight_count": "50924"
  },
  {
    "month": "20211201",
    "country": "加拿大",
    "flight_count": "46973"
  },
  {
    "month": "20211201",
    "country": "日本",
    "flight_count": "39355"
  },
  {
    "month": "20211201",
    "country": "法国",
    "flight_count": "39126"
  },
  {
    "month": "20211201",
    "country": "印度",
    "flight_count": "37659"
  },
  {
    "month": "20211201",
    "country": "西班牙",
    "flight_count": "37002"
  },
  {
    "month": "20211201",
    "country": "意大利",
    "flight_count": "32603"
  },
  {
    "month": "20220101",
    "country": "美国",
    "flight_count": "879849"
  },
  {
    "month": "20220101",
    "country": "北爱尔兰",
    "flight_count": "47582"
  },
  {
    "month": "20220101",
    "country": "德国",
    "flight_count": "46810"
  },
  {
    "month": "20220101",
    "country": "澳大利亚",
    "flight_count": "46728"
  },
  {
    "month": "20220101",
    "country": "加拿大",
    "flight_count": "39319"
  },
  {
    "month": "20220101",
    "country": "日本",
    "flight_count": "38344"
  },
  {
    "month": "20220101",
    "country": "法国",
    "flight_count": "32791"
  },
  {
    "month": "20220101",
    "country": "西班牙",
    "flight_count": "31851"
  },
  {
    "month": "20220101",
    "country": "俄罗斯",
    "flight_count": "27689"
  },
  {
    "month": "20220101",
    "country": "印度",
    "flight_count": "27520"
  },
  {
    "month": "20220201",
    "country": "美国",
    "flight_count": "838196"
  },
  {
    "month": "20220201",
    "country": "北爱尔兰",
    "flight_count": "48483"
  },
  {
    "month": "20220201",
    "country": "德国",
    "flight_count": "45037"
  },
  {
    "month": "20220201",
    "country": "澳大利亚",
    "flight_count": "42283"
  },
  {
    "month": "20220201",
    "country": "加拿大",
    "flight_count": "36748"
  },
  {
    "month": "20220201",
    "country": "法国",
    "flight_count": "33434"
  },
  {
    "month": "20220201",
    "country": "西班牙",
    "flight_count": "31194"
  },
  {
    "month": "20220201",
    "country": "日本",
    "flight_count": "27293"
  },
  {
    "month": "20220201",
    "country": "意大利",
    "flight_count": "26645"
  },
  {
    "month": "20220201",
    "country": "印度",
    "flight_count": "25415"
  },
  {
    "month": "20220301",
    "country": "美国",
    "flight_count": "1004173"
  },
  {
    "month": "20220301",
    "country": "北爱尔兰",
    "flight_count": "65086"
  },
  {
    "month": "20220301",
    "country": "德国",
    "flight_count": "59447"
  },
  {
    "month": "20220301",
    "country": "澳大利亚",
    "flight_count": "53157"
  },
  {
    "month": "20220301",
    "country": "加拿大",
    "flight_count": "47495"
  },
  {
    "month": "20220301",
    "country": "法国",
    "flight_count": "43469"
  },
  {
    "month": "20220301",
    "country": "西班牙",
    "flight_count": "38458"
  },
  {
    "month": "20220301",
    "country": "意大利",
    "flight_count": "34179"
  },
  {
    "month": "20220301",
    "country": "印度",
    "flight_count": "34060"
  },
  {
    "month": "20220301",
    "country": "日本",
    "flight_count": "32740"
  },
  {
    "month": "20220401",
    "country": "美国",
    "flight_count": "1013905"
  },
  {
    "month": "20220401",
    "country": "北爱尔兰",
    "flight_count": "80138"
  },
  {
    "month": "20220401",
    "country": "德国",
    "flight_count": "72262"
  },
  {
    "month": "20220401",
    "country": "澳大利亚",
    "flight_count": "58209"
  },
  {
    "month": "20220401",
    "country": "西班牙",
    "flight_count": "52646"
  },
  {
    "month": "20220401",
    "country": "加拿大",
    "flight_count": "51825"
  },
  {
    "month": "20220401",
    "country": "法国",
    "flight_count": "47759"
  },
  {
    "month": "20220401",
    "country": "意大利",
    "flight_count": "43264"
  },
  {
    "month": "20220401",
    "country": "印度",
    "flight_count": "33912"
  },
  {
    "month": "20220401",
    "country": "日本",
    "flight_count": "32917"
  },
  {
    "month": "20220501",
    "country": "美国",
    "flight_count": "1018942"
  },
  {
    "month": "20220501",
    "country": "北爱尔兰",
    "flight_count": "88639"
  },
  {
    "month": "20220501",
    "country": "德国",
    "flight_count": "80230"
  },
  {
    "month": "20220501",
    "country": "加拿大",
    "flight_count": "59226"
  },
  {
    "month": "20220501",
    "country": "澳大利亚",
    "flight_count": "59191"
  },
  {
    "month": "20220501",
    "country": "法国",
    "flight_count": "54431"
  },
  {
    "month": "20220501",
    "country": "西班牙",
    "flight_count": "52551"
  },
  {
    "month": "20220501",
    "country": "意大利",
    "flight_count": "47311"
  },
  {
    "month": "20220501",
    "country": "印度",
    "flight_count": "35413"
  },
  {
    "month": "20220501",
    "country": "日本",
    "flight_count": "34805"
  }
];