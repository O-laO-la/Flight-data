// 嵌入的机场数据
const embeddedOriginData = [
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "6",
    "flight_count": "1463"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "7",
    "flight_count": "1799"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "8",
    "flight_count": "1926"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "9",
    "flight_count": "2008"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "10",
    "flight_count": "2210"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "11",
    "flight_count": "1985"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "12",
    "flight_count": "2134"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "1",
    "flight_count": "587"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "2",
    "flight_count": "1178"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "3",
    "flight_count": "1156"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "4",
    "flight_count": "627"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "5",
    "flight_count": "4412"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "6",
    "flight_count": "4280"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "7",
    "flight_count": "4594"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "8",
    "flight_count": "4554"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "9",
    "flight_count": "4441"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "10",
    "flight_count": "4277"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "11",
    "flight_count": "4970"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "12",
    "flight_count": "2664"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "1",
    "flight_count": "1659"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "2",
    "flight_count": "2343"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "3",
    "flight_count": "1112"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "4",
    "flight_count": "168"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "5",
    "flight_count": "626"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "6",
    "flight_count": "2941"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "7",
    "flight_count": "4489"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "8",
    "flight_count": "3316"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "9",
    "flight_count": "3592"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "10",
    "flight_count": "4539"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "11",
    "flight_count": "2418"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "12",
    "flight_count": "3801"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "1",
    "flight_count": "3582"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "2",
    "flight_count": "2738"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "3",
    "flight_count": "1853"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "4",
    "flight_count": "3120"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "5",
    "flight_count": "3258"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "6",
    "flight_count": "3213"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "7",
    "flight_count": "3403"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "8",
    "flight_count": "3861"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "9",
    "flight_count": "3334"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "10",
    "flight_count": "3742"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "11",
    "flight_count": "3477"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "12",
    "flight_count": "3166"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "1",
    "flight_count": "7255"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "2",
    "flight_count": "6485"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "3",
    "flight_count": "7173"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "4",
    "flight_count": "6745"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "5",
    "flight_count": "6307"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "6",
    "flight_count": "5526"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "7",
    "flight_count": "5353"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "8",
    "flight_count": "5347"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "9",
    "flight_count": "4449"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "10",
    "flight_count": "5224"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "11",
    "flight_count": "5655"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "12",
    "flight_count": "5669"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "1",
    "flight_count": "1431"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "2",
    "flight_count": "2061"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "3",
    "flight_count": "1643"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "4",
    "flight_count": "74"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "5",
    "flight_count": "75"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "6",
    "flight_count": "177"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "7",
    "flight_count": "268"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "8",
    "flight_count": "393"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "9",
    "flight_count": "547"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "10",
    "flight_count": "747"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "11",
    "flight_count": "797"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "12",
    "flight_count": "1396"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "1",
    "flight_count": "966"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "2",
    "flight_count": "579"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "3",
    "flight_count": "531"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "4",
    "flight_count": "105"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "5",
    "flight_count": "104"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "6",
    "flight_count": "157"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "7",
    "flight_count": "384"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "8",
    "flight_count": "650"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "9",
    "flight_count": "925"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "10",
    "flight_count": "1311"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "11",
    "flight_count": "1470"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "12",
    "flight_count": "2288"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "1",
    "flight_count": "4515"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "2",
    "flight_count": "3406"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "3",
    "flight_count": "1413"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "4",
    "flight_count": "499"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "5",
    "flight_count": "808"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "6",
    "flight_count": "823"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "7",
    "flight_count": "962"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "8",
    "flight_count": "950"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "9",
    "flight_count": "1255"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "10",
    "flight_count": "1585"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "11",
    "flight_count": "1408"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "12",
    "flight_count": "1615"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "1",
    "flight_count": "3237"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "2",
    "flight_count": "3239"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "3",
    "flight_count": "1710"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "4",
    "flight_count": "743"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "5",
    "flight_count": "734"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "6",
    "flight_count": "889"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "7",
    "flight_count": "954"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "8",
    "flight_count": "946"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "9",
    "flight_count": "986"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "10",
    "flight_count": "960"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "11",
    "flight_count": "1171"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "12",
    "flight_count": "1327"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "1",
    "flight_count": "5783"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "2",
    "flight_count": "5592"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "3",
    "flight_count": "3020"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "4",
    "flight_count": "457"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "5",
    "flight_count": "586"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "6",
    "flight_count": "1415"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "7",
    "flight_count": "1066"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "8",
    "flight_count": "211"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "9",
    "flight_count": "348"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "10",
    "flight_count": "393"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "11",
    "flight_count": "820"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "12",
    "flight_count": "685"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "1",
    "flight_count": "1018"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "2",
    "flight_count": "857"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "3",
    "flight_count": "1282"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "4",
    "flight_count": "1447"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "5",
    "flight_count": "1371"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "6",
    "flight_count": "1277"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "7",
    "flight_count": "714"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "8",
    "flight_count": "889"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "9",
    "flight_count": "1330"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "10",
    "flight_count": "1601"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "11",
    "flight_count": "1742"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "12",
    "flight_count": "2066"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "1",
    "flight_count": "1602"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "2",
    "flight_count": "1152"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "3",
    "flight_count": "1043"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "4",
    "flight_count": "2043"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "5",
    "flight_count": "2334"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "6",
    "flight_count": "2124"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "7",
    "flight_count": "1407"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "8",
    "flight_count": "1591"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "9",
    "flight_count": "2083"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "10",
    "flight_count": "2446"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "11",
    "flight_count": "2399"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "12",
    "flight_count": "2615"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "1",
    "flight_count": "1027"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "2",
    "flight_count": "767"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "3",
    "flight_count": "1354"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "4",
    "flight_count": "1876"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "5",
    "flight_count": "1959"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "6",
    "flight_count": "2969"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "7",
    "flight_count": "4204"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "8",
    "flight_count": "3400"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "9",
    "flight_count": "2893"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "10",
    "flight_count": "3213"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "11",
    "flight_count": "3638"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "12",
    "flight_count": "3716"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "1",
    "flight_count": "1257"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "2",
    "flight_count": "991"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "3",
    "flight_count": "1248"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "4",
    "flight_count": "1367"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "5",
    "flight_count": "1320"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "6",
    "flight_count": "1482"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "7",
    "flight_count": "1629"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "8",
    "flight_count": "1718"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "9",
    "flight_count": "1305"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "10",
    "flight_count": "1354"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "11",
    "flight_count": "1093"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "12",
    "flight_count": "1132"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "1",
    "flight_count": "938"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "2",
    "flight_count": "638"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "3",
    "flight_count": "691"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "4",
    "flight_count": "622"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "5",
    "flight_count": "755"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "6",
    "flight_count": "268"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "7",
    "flight_count": "492"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "8",
    "flight_count": "333"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "9",
    "flight_count": "172"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "10",
    "flight_count": "630"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "11",
    "flight_count": "676"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "12",
    "flight_count": "804"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "1",
    "flight_count": "1954"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "2",
    "flight_count": "1797"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "3",
    "flight_count": "1950"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "4",
    "flight_count": "2009"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "5",
    "flight_count": "1984"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "1",
    "flight_count": "2273"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "2",
    "flight_count": "2070"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "3",
    "flight_count": "1343"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "4",
    "flight_count": "2907"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "5",
    "flight_count": "3363"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "1",
    "flight_count": "2539"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "2",
    "flight_count": "2646"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "3",
    "flight_count": "4044"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "4",
    "flight_count": "5470"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "5",
    "flight_count": "5402"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "1",
    "flight_count": "1083"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "2",
    "flight_count": "1082"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "3",
    "flight_count": "1260"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "4",
    "flight_count": "1191"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "5",
    "flight_count": "1466"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "1",
    "flight_count": "689"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "2",
    "flight_count": "491"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "3",
    "flight_count": "905"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "4",
    "flight_count": "599"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "5",
    "flight_count": "599"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "1",
    "flight_count": "18121"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "2",
    "flight_count": "15998"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "3",
    "flight_count": "16589"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "4",
    "flight_count": "13076"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "5",
    "flight_count": "10622"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "6",
    "flight_count": "15283"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "7",
    "flight_count": "16171"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "8",
    "flight_count": "16379"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "9",
    "flight_count": "15016"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "10",
    "flight_count": "16514"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "11",
    "flight_count": "15996"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "12",
    "flight_count": "15584"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "1",
    "flight_count": "10505"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "2",
    "flight_count": "8742"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "3",
    "flight_count": "8754"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "4",
    "flight_count": "8164"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "5",
    "flight_count": "8487"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "6",
    "flight_count": "6601"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "7",
    "flight_count": "7829"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "8",
    "flight_count": "7983"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "9",
    "flight_count": "7280"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "10",
    "flight_count": "6598"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "11",
    "flight_count": "9534"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "12",
    "flight_count": "6421"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "1",
    "flight_count": "5586"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "2",
    "flight_count": "9468"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "3",
    "flight_count": "5021"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "4",
    "flight_count": "4764"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "5",
    "flight_count": "7728"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "6",
    "flight_count": "15524"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "7",
    "flight_count": "16531"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "8",
    "flight_count": "15451"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "9",
    "flight_count": "14340"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "10",
    "flight_count": "15584"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "11",
    "flight_count": "15057"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "12",
    "flight_count": "14735"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "1",
    "flight_count": "17493"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "2",
    "flight_count": "15087"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "3",
    "flight_count": "16069"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "4",
    "flight_count": "15277"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "5",
    "flight_count": "16300"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "6",
    "flight_count": "14937"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "7",
    "flight_count": "15227"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "8",
    "flight_count": "17448"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "9",
    "flight_count": "15013"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "10",
    "flight_count": "16597"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "11",
    "flight_count": "17646"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "12",
    "flight_count": "17300"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "1",
    "flight_count": "1"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "2",
    "flight_count": "4"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "3",
    "flight_count": "1212"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "4",
    "flight_count": "5378"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "5",
    "flight_count": "4746"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "6",
    "flight_count": "10923"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "7",
    "flight_count": "12573"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "8",
    "flight_count": "12494"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "9",
    "flight_count": "11395"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "10",
    "flight_count": "12138"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "11",
    "flight_count": "11977"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "12",
    "flight_count": "10114"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "1",
    "flight_count": "15374"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "2",
    "flight_count": "12019"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "3",
    "flight_count": "8421"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "4",
    "flight_count": "1862"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "5",
    "flight_count": "2771"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "6",
    "flight_count": "3409"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "7",
    "flight_count": "4496"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "8",
    "flight_count": "5285"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "9",
    "flight_count": "5728"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "10",
    "flight_count": "6995"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "11",
    "flight_count": "6839"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "12",
    "flight_count": "8025"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "1",
    "flight_count": "9488"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "2",
    "flight_count": "9374"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "3",
    "flight_count": "8974"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "4",
    "flight_count": "4195"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "5",
    "flight_count": "1942"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "6",
    "flight_count": "3700"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "7",
    "flight_count": "7082"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "8",
    "flight_count": "8376"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "9",
    "flight_count": "7636"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "10",
    "flight_count": "8232"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "11",
    "flight_count": "10436"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "12",
    "flight_count": "12499"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "1",
    "flight_count": "14209"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "2",
    "flight_count": "8603"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "3",
    "flight_count": "5857"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "4",
    "flight_count": "4841"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "5",
    "flight_count": "5736"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "6",
    "flight_count": "5081"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "7",
    "flight_count": "4883"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "8",
    "flight_count": "4939"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "9",
    "flight_count": "5288"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "10",
    "flight_count": "5515"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "11",
    "flight_count": "6304"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "12",
    "flight_count": "6317"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "1",
    "flight_count": "17430"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "2",
    "flight_count": "17927"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "3",
    "flight_count": "13169"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "4",
    "flight_count": "501"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "5",
    "flight_count": "1772"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "6",
    "flight_count": "5535"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "7",
    "flight_count": "5935"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "8",
    "flight_count": "6370"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "9",
    "flight_count": "5094"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "10",
    "flight_count": "9404"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "11",
    "flight_count": "9715"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "12",
    "flight_count": "11711"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "1",
    "flight_count": "10895"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "2",
    "flight_count": "3833"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "3",
    "flight_count": "6292"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "4",
    "flight_count": "6335"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "5",
    "flight_count": "9146"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "6",
    "flight_count": "10517"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "7",
    "flight_count": "12151"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "8",
    "flight_count": "12311"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "9",
    "flight_count": "11913"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "10",
    "flight_count": "11214"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "11",
    "flight_count": "10528"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "12",
    "flight_count": "9464"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "1",
    "flight_count": "7647"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "2",
    "flight_count": "5918"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "3",
    "flight_count": "7748"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "4",
    "flight_count": "7431"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "5",
    "flight_count": "6641"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "6",
    "flight_count": "6897"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "7",
    "flight_count": "6570"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "8",
    "flight_count": "7881"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "9",
    "flight_count": "7743"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "10",
    "flight_count": "9423"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "11",
    "flight_count": "1036"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "12",
    "flight_count": "612"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "1",
    "flight_count": "8890"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "2",
    "flight_count": "5908"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "3",
    "flight_count": "9197"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "4",
    "flight_count": "11026"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "5",
    "flight_count": "9820"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "6",
    "flight_count": "9804"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "7",
    "flight_count": "11174"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "8",
    "flight_count": "12043"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "9",
    "flight_count": "10147"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "10",
    "flight_count": "11706"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "11",
    "flight_count": "12972"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "12",
    "flight_count": "15668"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "1",
    "flight_count": "5632"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "2",
    "flight_count": "4283"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "3",
    "flight_count": "5295"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "4",
    "flight_count": "5215"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "5",
    "flight_count": "5285"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "6",
    "flight_count": "5401"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "7",
    "flight_count": "5654"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "8",
    "flight_count": "5387"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "9",
    "flight_count": "5916"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "10",
    "flight_count": "5134"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "11",
    "flight_count": "5464"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "12",
    "flight_count": "5608"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "1",
    "flight_count": "12825"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "2",
    "flight_count": "12400"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "3",
    "flight_count": "13417"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "4",
    "flight_count": "12047"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "5",
    "flight_count": "6258"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "6",
    "flight_count": "7170"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "7",
    "flight_count": "9748"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "8",
    "flight_count": "11794"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "9",
    "flight_count": "11780"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "10",
    "flight_count": "14751"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "11",
    "flight_count": "15717"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "12",
    "flight_count": "17636"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "1",
    "flight_count": "7996"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "2",
    "flight_count": "7863"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "3",
    "flight_count": "11875"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "4",
    "flight_count": "11941"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "5",
    "flight_count": "10887"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "6",
    "flight_count": "5381"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "7",
    "flight_count": "6241"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "8",
    "flight_count": "4800"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "9",
    "flight_count": "5662"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "10",
    "flight_count": "3445"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "11",
    "flight_count": "2704"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "12",
    "flight_count": "2926"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "1",
    "flight_count": "9847"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "2",
    "flight_count": "11121"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "3",
    "flight_count": "13077"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "4",
    "flight_count": "12048"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "5",
    "flight_count": "10156"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "1",
    "flight_count": "15519"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "2",
    "flight_count": "10342"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "3",
    "flight_count": "13574"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "4",
    "flight_count": "14084"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "5",
    "flight_count": "15288"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "1",
    "flight_count": "4752"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "2",
    "flight_count": "3125"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "3",
    "flight_count": "3610"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "4",
    "flight_count": "3142"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "5",
    "flight_count": "2829"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "1",
    "flight_count": "12708"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "2",
    "flight_count": "12227"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "3",
    "flight_count": "16192"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "4",
    "flight_count": "16128"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "5",
    "flight_count": "16407"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "1",
    "flight_count": "3030"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "2",
    "flight_count": "2546"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "3",
    "flight_count": "1673"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "4",
    "flight_count": "680"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "5",
    "flight_count": "1"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "1",
    "flight_count": "15592"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "2",
    "flight_count": "15606"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "3",
    "flight_count": "18182"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "4",
    "flight_count": "18772"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "5",
    "flight_count": "20111"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "6",
    "flight_count": "19892"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "7",
    "flight_count": "20604"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "8",
    "flight_count": "20376"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "9",
    "flight_count": "19711"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "10",
    "flight_count": "20779"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "11",
    "flight_count": "17904"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "12",
    "flight_count": "16183"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "1",
    "flight_count": "16749"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "2",
    "flight_count": "16403"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "3",
    "flight_count": "18569"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "4",
    "flight_count": "18788"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "5",
    "flight_count": "19241"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "6",
    "flight_count": "18658"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "7",
    "flight_count": "19545"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "8",
    "flight_count": "19305"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "9",
    "flight_count": "17030"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "10",
    "flight_count": "19352"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "11",
    "flight_count": "17817"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "12",
    "flight_count": "16694"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "1",
    "flight_count": "14334"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "2",
    "flight_count": "14429"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "3",
    "flight_count": "16290"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "4",
    "flight_count": "17218"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "5",
    "flight_count": "18363"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "6",
    "flight_count": "17654"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "7",
    "flight_count": "18370"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "8",
    "flight_count": "18194"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "9",
    "flight_count": "17195"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "10",
    "flight_count": "18365"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "11",
    "flight_count": "15587"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "12",
    "flight_count": "15197"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "1",
    "flight_count": "14190"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "2",
    "flight_count": "13147"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "3",
    "flight_count": "14701"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "4",
    "flight_count": "14621"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "5",
    "flight_count": "15995"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "6",
    "flight_count": "16151"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "7",
    "flight_count": "17058"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "8",
    "flight_count": "16257"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "9",
    "flight_count": "15653"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "10",
    "flight_count": "16533"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "11",
    "flight_count": "15078"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "12",
    "flight_count": "14543"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "1",
    "flight_count": "15133"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "2",
    "flight_count": "14438"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "3",
    "flight_count": "16550"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "4",
    "flight_count": "17962"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "5",
    "flight_count": "18402"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "6",
    "flight_count": "18109"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "7",
    "flight_count": "19710"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "8",
    "flight_count": "19908"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "9",
    "flight_count": "18309"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "10",
    "flight_count": "19327"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "11",
    "flight_count": "16736"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "12",
    "flight_count": "15944"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "1",
    "flight_count": "16329"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "2",
    "flight_count": "16907"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "3",
    "flight_count": "10731"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "4",
    "flight_count": "2882"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "5",
    "flight_count": "3469"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "6",
    "flight_count": "4285"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "7",
    "flight_count": "7133"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "8",
    "flight_count": "8319"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "9",
    "flight_count": "7928"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "10",
    "flight_count": "7990"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "11",
    "flight_count": "5857"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "12",
    "flight_count": "6194"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "1",
    "flight_count": "16664"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "2",
    "flight_count": "16623"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "3",
    "flight_count": "12413"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "4",
    "flight_count": "2357"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "5",
    "flight_count": "3017"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "6",
    "flight_count": "3318"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "7",
    "flight_count": "5629"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "8",
    "flight_count": "7357"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "9",
    "flight_count": "6978"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "10",
    "flight_count": "8730"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "11",
    "flight_count": "5415"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "12",
    "flight_count": "5939"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "1",
    "flight_count": "15121"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "2",
    "flight_count": "14768"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "3",
    "flight_count": "10945"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "4",
    "flight_count": "1801"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "5",
    "flight_count": "2653"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "6",
    "flight_count": "3830"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "7",
    "flight_count": "7313"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "8",
    "flight_count": "10142"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "9",
    "flight_count": "9453"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "10",
    "flight_count": "8669"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "11",
    "flight_count": "6537"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "12",
    "flight_count": "7189"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "1",
    "flight_count": "14336"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "2",
    "flight_count": "14291"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "3",
    "flight_count": "8989"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "4",
    "flight_count": "1046"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "5",
    "flight_count": "1169"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "6",
    "flight_count": "1590"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "7",
    "flight_count": "4702"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "8",
    "flight_count": "6921"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "9",
    "flight_count": "5610"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "10",
    "flight_count": "5281"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "11",
    "flight_count": "4525"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "12",
    "flight_count": "5576"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "1",
    "flight_count": "15503"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "2",
    "flight_count": "15581"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "3",
    "flight_count": "10508"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "4",
    "flight_count": "1774"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "5",
    "flight_count": "2447"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "6",
    "flight_count": "4243"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "7",
    "flight_count": "8494"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "8",
    "flight_count": "10292"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "9",
    "flight_count": "8251"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "10",
    "flight_count": "7433"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "11",
    "flight_count": "5050"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "12",
    "flight_count": "6144"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "1",
    "flight_count": "5976"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "2",
    "flight_count": "5034"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "3",
    "flight_count": "5993"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "4",
    "flight_count": "7112"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "5",
    "flight_count": "7451"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "6",
    "flight_count": "9341"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "7",
    "flight_count": "12993"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "8",
    "flight_count": "13691"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "9",
    "flight_count": "12362"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "10",
    "flight_count": "14124"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "11",
    "flight_count": "13197"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "12",
    "flight_count": "13314"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "1",
    "flight_count": "4551"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "2",
    "flight_count": "3723"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "3",
    "flight_count": "4280"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "4",
    "flight_count": "4734"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "5",
    "flight_count": "5161"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "6",
    "flight_count": "6330"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "7",
    "flight_count": "7791"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "8",
    "flight_count": "9129"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "9",
    "flight_count": "9542"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "10",
    "flight_count": "11538"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "11",
    "flight_count": "10877"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "12",
    "flight_count": "11873"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "1",
    "flight_count": "6637"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "2",
    "flight_count": "4980"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "3",
    "flight_count": "5654"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "4",
    "flight_count": "6575"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "5",
    "flight_count": "7369"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "6",
    "flight_count": "9440"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "7",
    "flight_count": "13888"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "8",
    "flight_count": "15196"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "9",
    "flight_count": "13760"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "10",
    "flight_count": "15350"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "11",
    "flight_count": "13308"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "12",
    "flight_count": "14635"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "1",
    "flight_count": "4457"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "2",
    "flight_count": "4326"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "3",
    "flight_count": "4967"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "4",
    "flight_count": "5568"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "5",
    "flight_count": "6253"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "6",
    "flight_count": "8253"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "7",
    "flight_count": "10934"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "8",
    "flight_count": "11095"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "9",
    "flight_count": "10024"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "10",
    "flight_count": "10807"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "11",
    "flight_count": "10968"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "12",
    "flight_count": "12092"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "1",
    "flight_count": "6194"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "2",
    "flight_count": "5412"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "3",
    "flight_count": "5881"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "4",
    "flight_count": "6204"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "5",
    "flight_count": "6393"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "6",
    "flight_count": "8416"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "7",
    "flight_count": "12487"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "8",
    "flight_count": "13617"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "9",
    "flight_count": "10910"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "10",
    "flight_count": "12144"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "11",
    "flight_count": "12335"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "12",
    "flight_count": "13831"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "1",
    "flight_count": "11549"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "2",
    "flight_count": "10278"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "3",
    "flight_count": "12294"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "4",
    "flight_count": "15247"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "5",
    "flight_count": "16770"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "1",
    "flight_count": "10374"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "2",
    "flight_count": "9335"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "3",
    "flight_count": "12963"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "4",
    "flight_count": "15649"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "5",
    "flight_count": "16321"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "1",
    "flight_count": "12764"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "2",
    "flight_count": "11668"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "3",
    "flight_count": "14670"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "4",
    "flight_count": "16883"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "5",
    "flight_count": "18756"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "1",
    "flight_count": "11202"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "2",
    "flight_count": "10220"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "3",
    "flight_count": "12158"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "4",
    "flight_count": "13445"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "5",
    "flight_count": "14020"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "1",
    "flight_count": "11592"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "2",
    "flight_count": "10679"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "3",
    "flight_count": "13456"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "4",
    "flight_count": "15744"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "5",
    "flight_count": "16859"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "1",
    "flight_count": "1"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "2",
    "flight_count": "3"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "3",
    "flight_count": "7"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "4",
    "flight_count": "5989"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "5",
    "flight_count": "28980"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "6",
    "flight_count": "30076"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "7",
    "flight_count": "33475"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "8",
    "flight_count": "30546"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "9",
    "flight_count": "24232"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "10",
    "flight_count": "26824"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "11",
    "flight_count": "23471"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "12",
    "flight_count": "34105"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "1",
    "flight_count": "15496"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "2",
    "flight_count": "15295"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "3",
    "flight_count": "18317"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "4",
    "flight_count": "18466"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "5",
    "flight_count": "20031"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "6",
    "flight_count": "20650"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "7",
    "flight_count": "23435"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "8",
    "flight_count": "23979"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "9",
    "flight_count": "22198"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "10",
    "flight_count": "24316"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "11",
    "flight_count": "22577"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2019",
    "month": "12",
    "flight_count": "23174"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "1",
    "flight_count": "21694"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "2",
    "flight_count": "19782"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "3",
    "flight_count": "23096"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "4",
    "flight_count": "22485"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "5",
    "flight_count": "24868"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "6",
    "flight_count": "24622"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "7",
    "flight_count": "26910"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "8",
    "flight_count": "27643"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "9",
    "flight_count": "25939"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "10",
    "flight_count": "28540"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "11",
    "flight_count": "27616"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "12",
    "flight_count": "27661"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "1",
    "flight_count": "22459"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "2",
    "flight_count": "20862"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "3",
    "flight_count": "24196"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "4",
    "flight_count": "24358"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "5",
    "flight_count": "25375"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "6",
    "flight_count": "25517"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "7",
    "flight_count": "27975"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "8",
    "flight_count": "28386"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "9",
    "flight_count": "24211"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "10",
    "flight_count": "26857"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "11",
    "flight_count": "25678"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "12",
    "flight_count": "25994"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "1",
    "flight_count": "20929"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "2",
    "flight_count": "21529"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "3",
    "flight_count": "27178"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "4",
    "flight_count": "27596"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "5",
    "flight_count": "30054"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "6",
    "flight_count": "29746"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "7",
    "flight_count": "32495"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "8",
    "flight_count": "35264"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "9",
    "flight_count": "32361"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "10",
    "flight_count": "37250"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "11",
    "flight_count": "34783"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "12",
    "flight_count": "35257"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "1",
    "flight_count": "34765"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "2",
    "flight_count": "33531"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "3",
    "flight_count": "30372"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "4",
    "flight_count": "10061"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "5",
    "flight_count": "9113"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "6",
    "flight_count": "11887"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "7",
    "flight_count": "19465"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "8",
    "flight_count": "23268"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "9",
    "flight_count": "21799"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "10",
    "flight_count": "23010"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "11",
    "flight_count": "23877"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "12",
    "flight_count": "25829"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "1",
    "flight_count": "23049"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "2",
    "flight_count": "22924"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "3",
    "flight_count": "21627"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "4",
    "flight_count": "9065"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "5",
    "flight_count": "9387"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "6",
    "flight_count": "11568"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "7",
    "flight_count": "16335"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "8",
    "flight_count": "19186"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "9",
    "flight_count": "17231"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "10",
    "flight_count": "19361"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "11",
    "flight_count": "19206"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2020",
    "month": "12",
    "flight_count": "20078"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "1",
    "flight_count": "26728"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "2",
    "flight_count": "26685"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "3",
    "flight_count": "25367"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "4",
    "flight_count": "11495"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "5",
    "flight_count": "13165"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "6",
    "flight_count": "14619"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "7",
    "flight_count": "21186"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "8",
    "flight_count": "21788"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "9",
    "flight_count": "20153"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "10",
    "flight_count": "22365"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "11",
    "flight_count": "21626"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "12",
    "flight_count": "23542"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "1",
    "flight_count": "25070"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "2",
    "flight_count": "24429"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "3",
    "flight_count": "22724"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "4",
    "flight_count": "7397"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "5",
    "flight_count": "7253"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "6",
    "flight_count": "8904"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "7",
    "flight_count": "12605"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "8",
    "flight_count": "13487"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "9",
    "flight_count": "12541"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "10",
    "flight_count": "13995"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "11",
    "flight_count": "14450"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "12",
    "flight_count": "15787"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "1",
    "flight_count": "33527"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "2",
    "flight_count": "33311"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "3",
    "flight_count": "32004"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "4",
    "flight_count": "11692"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "5",
    "flight_count": "10688"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "6",
    "flight_count": "11200"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "7",
    "flight_count": "18746"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "8",
    "flight_count": "21012"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "9",
    "flight_count": "19618"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "10",
    "flight_count": "19718"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "11",
    "flight_count": "18613"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "12",
    "flight_count": "18982"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "1",
    "flight_count": "24653"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "2",
    "flight_count": "22357"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "3",
    "flight_count": "27737"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "4",
    "flight_count": "28440"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "5",
    "flight_count": "29117"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "6",
    "flight_count": "30296"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "7",
    "flight_count": "31357"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "8",
    "flight_count": "30729"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "9",
    "flight_count": "27331"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "10",
    "flight_count": "30802"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "11",
    "flight_count": "28516"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "12",
    "flight_count": "29592"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "1",
    "flight_count": "18464"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "2",
    "flight_count": "16805"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "3",
    "flight_count": "20235"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "4",
    "flight_count": "21462"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "5",
    "flight_count": "22820"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "6",
    "flight_count": "25972"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "7",
    "flight_count": "27904"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "8",
    "flight_count": "28076"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "9",
    "flight_count": "24527"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "10",
    "flight_count": "24965"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "11",
    "flight_count": "23562"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2021",
    "month": "12",
    "flight_count": "24924"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "1",
    "flight_count": "22604"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "2",
    "flight_count": "17893"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "3",
    "flight_count": "25400"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "4",
    "flight_count": "25454"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "5",
    "flight_count": "26925"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "6",
    "flight_count": "28851"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "7",
    "flight_count": "30143"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "8",
    "flight_count": "28579"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "9",
    "flight_count": "25356"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "10",
    "flight_count": "27797"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "11",
    "flight_count": "25756"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "12",
    "flight_count": "28139"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "1",
    "flight_count": "14706"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "2",
    "flight_count": "13057"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "3",
    "flight_count": "15996"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "4",
    "flight_count": "16992"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "5",
    "flight_count": "18885"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "6",
    "flight_count": "21806"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "7",
    "flight_count": "23348"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "8",
    "flight_count": "23509"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "9",
    "flight_count": "20289"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "10",
    "flight_count": "23108"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "11",
    "flight_count": "21479"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "12",
    "flight_count": "23058"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "1",
    "flight_count": "16794"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "2",
    "flight_count": "15887"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "3",
    "flight_count": "20555"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "4",
    "flight_count": "22288"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "5",
    "flight_count": "25504"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "6",
    "flight_count": "30426"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "7",
    "flight_count": "34244"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "8",
    "flight_count": "33243"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "9",
    "flight_count": "30051"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "10",
    "flight_count": "32988"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "11",
    "flight_count": "28705"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "12",
    "flight_count": "30029"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "1",
    "flight_count": "27556"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "2",
    "flight_count": "24716"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "3",
    "flight_count": "28852"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "4",
    "flight_count": "28970"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "5",
    "flight_count": "29657"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2022",
    "month": "1",
    "flight_count": "21258"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2022",
    "month": "2",
    "flight_count": "20790"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2022",
    "month": "3",
    "flight_count": "23609"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2022",
    "month": "4",
    "flight_count": "23256"
  },
  {
    "continent": "North Americas",
    "airport": "KDEN",
    "year": "2022",
    "month": "5",
    "flight_count": "23931"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "1",
    "flight_count": "25771"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "2",
    "flight_count": "20315"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "3",
    "flight_count": "25424"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "4",
    "flight_count": "26150"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "5",
    "flight_count": "26588"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "1",
    "flight_count": "20894"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "2",
    "flight_count": "18892"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "3",
    "flight_count": "21498"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "4",
    "flight_count": "21547"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "5",
    "flight_count": "22245"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "1",
    "flight_count": "25911"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "2",
    "flight_count": "23615"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "3",
    "flight_count": "28311"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "4",
    "flight_count": "28472"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "5",
    "flight_count": "28917"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "1",
    "flight_count": "8562"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "2",
    "flight_count": "7913"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "3",
    "flight_count": "8647"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "4",
    "flight_count": "8558"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "5",
    "flight_count": "8573"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "6",
    "flight_count": "8344"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "7",
    "flight_count": "9187"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "8",
    "flight_count": "8821"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "9",
    "flight_count": "8416"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "10",
    "flight_count": "9084"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "11",
    "flight_count": "8622"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "12",
    "flight_count": "8368"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "1",
    "flight_count": "10291"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "2",
    "flight_count": "9242"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "3",
    "flight_count": "10130"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "4",
    "flight_count": "9957"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "5",
    "flight_count": "9699"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "6",
    "flight_count": "9263"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "7",
    "flight_count": "10414"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "8",
    "flight_count": "9804"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "9",
    "flight_count": "9486"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "10",
    "flight_count": "10365"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "11",
    "flight_count": "9976"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "12",
    "flight_count": "9871"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "1",
    "flight_count": "5354"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "2",
    "flight_count": "4839"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "3",
    "flight_count": "5201"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "4",
    "flight_count": "5269"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "5",
    "flight_count": "5385"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "6",
    "flight_count": "5030"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "7",
    "flight_count": "5650"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "8",
    "flight_count": "5294"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "9",
    "flight_count": "5109"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "10",
    "flight_count": "5671"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "11",
    "flight_count": "5296"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "12",
    "flight_count": "5268"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "1",
    "flight_count": "2729"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "2",
    "flight_count": "2940"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "3",
    "flight_count": "3166"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "4",
    "flight_count": "2892"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "5",
    "flight_count": "3188"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "6",
    "flight_count": "2769"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "7",
    "flight_count": "2906"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "8",
    "flight_count": "2740"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "9",
    "flight_count": "2892"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "10",
    "flight_count": "3083"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "11",
    "flight_count": "2755"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "12",
    "flight_count": "2177"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "1",
    "flight_count": "13622"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "2",
    "flight_count": "12933"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "3",
    "flight_count": "14042"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "4",
    "flight_count": "13846"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "5",
    "flight_count": "13838"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "6",
    "flight_count": "13191"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "7",
    "flight_count": "14390"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "8",
    "flight_count": "13826"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "9",
    "flight_count": "13407"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "10",
    "flight_count": "14856"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "11",
    "flight_count": "14002"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "12",
    "flight_count": "13353"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "1",
    "flight_count": "8111"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "2",
    "flight_count": "7911"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "3",
    "flight_count": "6960"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "4",
    "flight_count": "2092"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "5",
    "flight_count": "2011"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "6",
    "flight_count": "2405"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "7",
    "flight_count": "3316"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "8",
    "flight_count": "3438"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "9",
    "flight_count": "3482"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "10",
    "flight_count": "3543"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "11",
    "flight_count": "3812"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "12",
    "flight_count": "5409"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "1",
    "flight_count": "9620"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "2",
    "flight_count": "9118"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "3",
    "flight_count": "7662"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "4",
    "flight_count": "1165"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "5",
    "flight_count": "1200"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "6",
    "flight_count": "1443"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "7",
    "flight_count": "1369"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "8",
    "flight_count": "1000"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "9",
    "flight_count": "1090"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "10",
    "flight_count": "1123"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "11",
    "flight_count": "1549"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "12",
    "flight_count": "4154"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "1",
    "flight_count": "5097"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "2",
    "flight_count": "5064"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "3",
    "flight_count": "5130"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "4",
    "flight_count": "2719"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "5",
    "flight_count": "2490"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "6",
    "flight_count": "2821"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "7",
    "flight_count": "3316"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "8",
    "flight_count": "3342"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "9",
    "flight_count": "3595"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "10",
    "flight_count": "3711"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "11",
    "flight_count": "3668"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "12",
    "flight_count": "4277"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "1",
    "flight_count": "2412"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "2",
    "flight_count": "2672"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "3",
    "flight_count": "2444"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "4",
    "flight_count": "1564"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "5",
    "flight_count": "2082"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "6",
    "flight_count": "2775"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "7",
    "flight_count": "2723"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "8",
    "flight_count": "2669"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "9",
    "flight_count": "2945"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "10",
    "flight_count": "2792"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "11",
    "flight_count": "2999"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "12",
    "flight_count": "2249"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "1",
    "flight_count": "12952"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "2",
    "flight_count": "12673"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "3",
    "flight_count": "10684"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "4",
    "flight_count": "2001"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "5",
    "flight_count": "2137"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "6",
    "flight_count": "2509"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "7",
    "flight_count": "3245"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "8",
    "flight_count": "2731"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "9",
    "flight_count": "2794"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "10",
    "flight_count": "3323"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "11",
    "flight_count": "4110"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "12",
    "flight_count": "5962"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "1",
    "flight_count": "4539"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "2",
    "flight_count": "4481"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "3",
    "flight_count": "5609"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "4",
    "flight_count": "5686"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "5",
    "flight_count": "6140"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "6",
    "flight_count": "5971"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "7",
    "flight_count": "4694"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "8",
    "flight_count": "3214"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "9",
    "flight_count": "3609"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "10",
    "flight_count": "4164"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "11",
    "flight_count": "4139"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "12",
    "flight_count": "5887"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "1",
    "flight_count": "3671"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "2",
    "flight_count": "3047"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "3",
    "flight_count": "4942"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "4",
    "flight_count": "6818"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "5",
    "flight_count": "6698"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "6",
    "flight_count": "3476"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "7",
    "flight_count": "3580"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "8",
    "flight_count": "1728"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "9",
    "flight_count": "1401"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "10",
    "flight_count": "1556"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "11",
    "flight_count": "2658"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "12",
    "flight_count": "6128"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "1",
    "flight_count": "3857"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "2",
    "flight_count": "3556"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "3",
    "flight_count": "4517"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "4",
    "flight_count": "4466"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "5",
    "flight_count": "4482"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "6",
    "flight_count": "4442"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "7",
    "flight_count": "4121"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "8",
    "flight_count": "4142"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "9",
    "flight_count": "3959"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "10",
    "flight_count": "4152"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "11",
    "flight_count": "4072"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "12",
    "flight_count": "4176"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "1",
    "flight_count": "2527"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "2",
    "flight_count": "2776"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "3",
    "flight_count": "2939"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "4",
    "flight_count": "2996"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "5",
    "flight_count": "2688"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "6",
    "flight_count": "2237"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "7",
    "flight_count": "1324"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "8",
    "flight_count": "1310"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "9",
    "flight_count": "1150"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "10",
    "flight_count": "2349"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "11",
    "flight_count": "2484"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "12",
    "flight_count": "2684"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "1",
    "flight_count": "3676"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "2",
    "flight_count": "5057"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "3",
    "flight_count": "7582"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "4",
    "flight_count": "9360"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "5",
    "flight_count": "9291"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "6",
    "flight_count": "7586"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "7",
    "flight_count": "3158"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "8",
    "flight_count": "2472"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "9",
    "flight_count": "2276"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "10",
    "flight_count": "2847"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "11",
    "flight_count": "4715"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "12",
    "flight_count": "8483"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "1",
    "flight_count": "5413"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "2",
    "flight_count": "4658"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "3",
    "flight_count": "6270"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "4",
    "flight_count": "6961"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "5",
    "flight_count": "7178"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "1",
    "flight_count": "6083"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "2",
    "flight_count": "5047"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "3",
    "flight_count": "7041"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "4",
    "flight_count": "8439"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "5",
    "flight_count": "8257"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "1",
    "flight_count": "3513"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "2",
    "flight_count": "3542"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "3",
    "flight_count": "4435"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "4",
    "flight_count": "4506"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "5",
    "flight_count": "4941"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "1",
    "flight_count": "2454"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "2",
    "flight_count": "2495"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "3",
    "flight_count": "2649"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "4",
    "flight_count": "2890"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "5",
    "flight_count": "3324"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "1",
    "flight_count": "7854"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "2",
    "flight_count": "6990"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "3",
    "flight_count": "9408"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "4",
    "flight_count": "11470"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "5",
    "flight_count": "11603"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "1",
    "flight_count": "4095"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "2",
    "flight_count": "3782"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "3",
    "flight_count": "4041"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "4",
    "flight_count": "3517"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "5",
    "flight_count": "3654"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "6",
    "flight_count": "3321"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "7",
    "flight_count": "4057"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "8",
    "flight_count": "3586"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "9",
    "flight_count": "3131"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "10",
    "flight_count": "4004"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "11",
    "flight_count": "4167"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "12",
    "flight_count": "3940"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "1",
    "flight_count": "10271"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "2",
    "flight_count": "8952"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "3",
    "flight_count": "9517"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "4",
    "flight_count": "8735"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "5",
    "flight_count": "7743"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "6",
    "flight_count": "7501"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "7",
    "flight_count": "9149"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "8",
    "flight_count": "8987"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "9",
    "flight_count": "8170"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "10",
    "flight_count": "9150"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "11",
    "flight_count": "8853"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "12",
    "flight_count": "9494"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "1",
    "flight_count": "2714"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "2",
    "flight_count": "2569"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "3",
    "flight_count": "2679"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "4",
    "flight_count": "2690"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "5",
    "flight_count": "2891"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "6",
    "flight_count": "2648"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "7",
    "flight_count": "2461"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "8",
    "flight_count": "2496"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "9",
    "flight_count": "2459"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "10",
    "flight_count": "2956"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "11",
    "flight_count": "2999"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "12",
    "flight_count": "3077"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "1",
    "flight_count": "6078"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "2",
    "flight_count": "5406"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "3",
    "flight_count": "5761"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "4",
    "flight_count": "5540"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "5",
    "flight_count": "5553"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "6",
    "flight_count": "5264"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "7",
    "flight_count": "5708"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "8",
    "flight_count": "5540"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "9",
    "flight_count": "4893"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "10",
    "flight_count": "5960"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "11",
    "flight_count": "5726"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "12",
    "flight_count": "5339"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "1",
    "flight_count": "1828"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "10",
    "flight_count": "592"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "11",
    "flight_count": "4642"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "12",
    "flight_count": "8475"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "1",
    "flight_count": "3854"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "2",
    "flight_count": "3874"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "3",
    "flight_count": "3046"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "4",
    "flight_count": "347"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "5",
    "flight_count": "423"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "6",
    "flight_count": "630"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "7",
    "flight_count": "1146"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "8",
    "flight_count": "1583"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "9",
    "flight_count": "2139"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "10",
    "flight_count": "2756"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "11",
    "flight_count": "2779"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "12",
    "flight_count": "3314"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "1",
    "flight_count": "8295"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "2",
    "flight_count": "9524"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "3",
    "flight_count": "7607"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "4",
    "flight_count": "1076"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "5",
    "flight_count": "1428"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "6",
    "flight_count": "1775"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "7",
    "flight_count": "2792"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "8",
    "flight_count": "3562"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "9",
    "flight_count": "4366"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "10",
    "flight_count": "5465"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "11",
    "flight_count": "5936"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "12",
    "flight_count": "7080"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "1",
    "flight_count": "3208"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "2",
    "flight_count": "3237"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "3",
    "flight_count": "2601"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "4",
    "flight_count": "889"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "5",
    "flight_count": "1271"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "6",
    "flight_count": "1617"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "7",
    "flight_count": "1877"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "8",
    "flight_count": "2296"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "9",
    "flight_count": "2420"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "10",
    "flight_count": "2147"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "11",
    "flight_count": "2016"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "12",
    "flight_count": "1960"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "1",
    "flight_count": "5192"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "2",
    "flight_count": "5457"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "3",
    "flight_count": "4010"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "4",
    "flight_count": "282"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "5",
    "flight_count": "344"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "6",
    "flight_count": "659"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "7",
    "flight_count": "951"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "8",
    "flight_count": "801"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "9",
    "flight_count": "1200"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "10",
    "flight_count": "2161"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "11",
    "flight_count": "2501"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "12",
    "flight_count": "3147"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "1",
    "flight_count": "9353"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "2",
    "flight_count": "9037"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "3",
    "flight_count": "6376"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "4",
    "flight_count": "768"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "5",
    "flight_count": "1011"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "6",
    "flight_count": "930"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "7",
    "flight_count": "906"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "8",
    "flight_count": "894"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "9",
    "flight_count": "1879"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "10",
    "flight_count": "3063"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "11",
    "flight_count": "4299"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "12",
    "flight_count": "5201"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "1",
    "flight_count": "3331"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "2",
    "flight_count": "2593"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "3",
    "flight_count": "2096"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "4",
    "flight_count": "1542"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "5",
    "flight_count": "2242"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "6",
    "flight_count": "2598"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "7",
    "flight_count": "3230"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "8",
    "flight_count": "3198"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "9",
    "flight_count": "2795"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "10",
    "flight_count": "2957"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "11",
    "flight_count": "1862"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "12",
    "flight_count": "3151"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "1",
    "flight_count": "7215"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "2",
    "flight_count": "5699"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "3",
    "flight_count": "4780"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "4",
    "flight_count": "4009"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "5",
    "flight_count": "4832"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "6",
    "flight_count": "5661"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "7",
    "flight_count": "7275"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "8",
    "flight_count": "7004"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "9",
    "flight_count": "5054"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "10",
    "flight_count": "695"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "11",
    "flight_count": "6468"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "12",
    "flight_count": "7326"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "1",
    "flight_count": "1856"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "2",
    "flight_count": "1911"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "3",
    "flight_count": "2353"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "4",
    "flight_count": "2656"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "5",
    "flight_count": "3056"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "6",
    "flight_count": "3266"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "7",
    "flight_count": "3583"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "8",
    "flight_count": "3807"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "9",
    "flight_count": "3379"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "10",
    "flight_count": "3552"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "11",
    "flight_count": "3711"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "12",
    "flight_count": "3745"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "1",
    "flight_count": "3461"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "2",
    "flight_count": "2598"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "3",
    "flight_count": "2102"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "4",
    "flight_count": "1473"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "5",
    "flight_count": "2187"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "6",
    "flight_count": "2673"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "7",
    "flight_count": "3793"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "8",
    "flight_count": "3512"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "9",
    "flight_count": "2647"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "10",
    "flight_count": "692"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "11",
    "flight_count": "3616"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "12",
    "flight_count": "3872"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "1",
    "flight_count": "5947"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "2",
    "flight_count": "4929"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "3",
    "flight_count": "4694"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "4",
    "flight_count": "4988"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "5",
    "flight_count": "5026"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "6",
    "flight_count": "5723"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "7",
    "flight_count": "3675"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "8",
    "flight_count": "1197"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "11",
    "flight_count": "3149"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "12",
    "flight_count": "469"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "1",
    "flight_count": "3974"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "2",
    "flight_count": "3078"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "3",
    "flight_count": "3580"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "4",
    "flight_count": "3321"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "5",
    "flight_count": "2992"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "1",
    "flight_count": "950"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "2",
    "flight_count": "509"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "3",
    "flight_count": "710"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "4",
    "flight_count": "411"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "5",
    "flight_count": "1046"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "1",
    "flight_count": "3324"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "2",
    "flight_count": "3126"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "3",
    "flight_count": "3699"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "4",
    "flight_count": "3258"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "5",
    "flight_count": "3266"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "1",
    "flight_count": "2788"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "2",
    "flight_count": "1918"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "3",
    "flight_count": "2267"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "4",
    "flight_count": "2572"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "5",
    "flight_count": "2344"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "1",
    "flight_count": "1"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "2",
    "flight_count": "1653"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "3",
    "flight_count": "9340"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "4",
    "flight_count": "4668"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "5",
    "flight_count": "1844"
  }
];

const embeddedDestinationData = [
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "6",
    "flight_count": "1499"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "7",
    "flight_count": "1814"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "8",
    "flight_count": "1992"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "9",
    "flight_count": "2062"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "10",
    "flight_count": "2359"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "11",
    "flight_count": "1968"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2019",
    "month": "12",
    "flight_count": "2425"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "1",
    "flight_count": "196"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "2",
    "flight_count": "99"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "3",
    "flight_count": "75"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "4",
    "flight_count": "212"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "5",
    "flight_count": "4574"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "6",
    "flight_count": "4514"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "7",
    "flight_count": "4742"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "8",
    "flight_count": "4415"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "9",
    "flight_count": "4453"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "10",
    "flight_count": "3533"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "11",
    "flight_count": "5107"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2019",
    "month": "12",
    "flight_count": "2357"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "1",
    "flight_count": "1720"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "2",
    "flight_count": "2418"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "3",
    "flight_count": "1256"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "4",
    "flight_count": "173"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "5",
    "flight_count": "1156"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "6",
    "flight_count": "4898"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "7",
    "flight_count": "5922"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "8",
    "flight_count": "4656"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "9",
    "flight_count": "5304"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "10",
    "flight_count": "6313"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "11",
    "flight_count": "2694"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2019",
    "month": "12",
    "flight_count": "2544"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "1",
    "flight_count": "3828"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "2",
    "flight_count": "2926"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "3",
    "flight_count": "2041"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "4",
    "flight_count": "3336"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "5",
    "flight_count": "3530"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "6",
    "flight_count": "3698"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "7",
    "flight_count": "3905"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "8",
    "flight_count": "4085"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "9",
    "flight_count": "3527"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "10",
    "flight_count": "3955"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "11",
    "flight_count": "3738"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2019",
    "month": "12",
    "flight_count": "3592"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "1",
    "flight_count": "3045"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "2",
    "flight_count": "3529"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "3",
    "flight_count": "3648"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "4",
    "flight_count": "3447"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "5",
    "flight_count": "3602"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "6",
    "flight_count": "5809"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "7",
    "flight_count": "7576"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "8",
    "flight_count": "6677"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "9",
    "flight_count": "3467"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "10",
    "flight_count": "2398"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "11",
    "flight_count": "1808"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2019",
    "month": "12",
    "flight_count": "3061"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "1",
    "flight_count": "1814"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "2",
    "flight_count": "2380"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "3",
    "flight_count": "1835"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "4",
    "flight_count": "71"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "5",
    "flight_count": "93"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "6",
    "flight_count": "188"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "7",
    "flight_count": "306"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "8",
    "flight_count": "402"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "9",
    "flight_count": "551"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "10",
    "flight_count": "787"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "11",
    "flight_count": "834"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2020",
    "month": "12",
    "flight_count": "1505"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "1",
    "flight_count": "123"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "2",
    "flight_count": "70"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "3",
    "flight_count": "151"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "4",
    "flight_count": "25"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "5",
    "flight_count": "70"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "6",
    "flight_count": "68"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "7",
    "flight_count": "198"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "8",
    "flight_count": "380"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "9",
    "flight_count": "439"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "10",
    "flight_count": "398"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "11",
    "flight_count": "221"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2020",
    "month": "12",
    "flight_count": "692"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "1",
    "flight_count": "2579"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "2",
    "flight_count": "2335"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "3",
    "flight_count": "669"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "4",
    "flight_count": "83"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "5",
    "flight_count": "547"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "6",
    "flight_count": "565"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "7",
    "flight_count": "789"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "8",
    "flight_count": "631"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "9",
    "flight_count": "1078"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "10",
    "flight_count": "1401"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "11",
    "flight_count": "1365"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2020",
    "month": "12",
    "flight_count": "1411"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "1",
    "flight_count": "3728"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "2",
    "flight_count": "3448"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "3",
    "flight_count": "1798"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "4",
    "flight_count": "781"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "5",
    "flight_count": "786"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "6",
    "flight_count": "949"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "7",
    "flight_count": "1020"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "8",
    "flight_count": "1023"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "9",
    "flight_count": "1073"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "10",
    "flight_count": "1188"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "11",
    "flight_count": "1241"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2020",
    "month": "12",
    "flight_count": "1413"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "1",
    "flight_count": "4329"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "2",
    "flight_count": "3297"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "3",
    "flight_count": "2257"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "4",
    "flight_count": "257"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "5",
    "flight_count": "612"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "6",
    "flight_count": "1461"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "7",
    "flight_count": "1081"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "8",
    "flight_count": "886"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "9",
    "flight_count": "1010"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "10",
    "flight_count": "1329"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "11",
    "flight_count": "712"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2020",
    "month": "12",
    "flight_count": "794"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "1",
    "flight_count": "1098"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "2",
    "flight_count": "911"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "3",
    "flight_count": "1337"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "4",
    "flight_count": "1569"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "5",
    "flight_count": "1463"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "6",
    "flight_count": "1335"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "7",
    "flight_count": "772"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "8",
    "flight_count": "946"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "9",
    "flight_count": "1398"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "10",
    "flight_count": "1704"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "11",
    "flight_count": "1879"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2021",
    "month": "12",
    "flight_count": "2196"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "1",
    "flight_count": "466"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "2",
    "flight_count": "722"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "3",
    "flight_count": "1396"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "4",
    "flight_count": "1841"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "5",
    "flight_count": "1995"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "6",
    "flight_count": "2212"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "7",
    "flight_count": "1016"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "8",
    "flight_count": "766"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "9",
    "flight_count": "2420"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "10",
    "flight_count": "2744"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "11",
    "flight_count": "2420"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2021",
    "month": "12",
    "flight_count": "2403"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "1",
    "flight_count": "893"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "2",
    "flight_count": "784"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "3",
    "flight_count": "1416"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "4",
    "flight_count": "1947"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "5",
    "flight_count": "1987"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "6",
    "flight_count": "3054"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "7",
    "flight_count": "4268"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "8",
    "flight_count": "3143"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "9",
    "flight_count": "1918"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "10",
    "flight_count": "2688"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "11",
    "flight_count": "3537"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2021",
    "month": "12",
    "flight_count": "3824"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "1",
    "flight_count": "1411"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "2",
    "flight_count": "1227"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "3",
    "flight_count": "1448"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "4",
    "flight_count": "1527"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "5",
    "flight_count": "1697"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "6",
    "flight_count": "1829"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "7",
    "flight_count": "1946"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "8",
    "flight_count": "2107"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "9",
    "flight_count": "2036"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "10",
    "flight_count": "2035"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "11",
    "flight_count": "2104"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2021",
    "month": "12",
    "flight_count": "2150"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "1",
    "flight_count": "982"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "2",
    "flight_count": "929"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "3",
    "flight_count": "1017"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "4",
    "flight_count": "1400"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "5",
    "flight_count": "1541"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "6",
    "flight_count": "2531"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "7",
    "flight_count": "2014"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "8",
    "flight_count": "2152"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "9",
    "flight_count": "2363"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "10",
    "flight_count": "1439"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "11",
    "flight_count": "1981"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2021",
    "month": "12",
    "flight_count": "2025"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "1",
    "flight_count": "2114"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "2",
    "flight_count": "1915"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "3",
    "flight_count": "2148"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "4",
    "flight_count": "2206"
  },
  {
    "continent": "Africa",
    "airport": "FACT",
    "year": "2022",
    "month": "5",
    "flight_count": "2132"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "1",
    "flight_count": "1369"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "2",
    "flight_count": "602"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "3",
    "flight_count": "2180"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "4",
    "flight_count": "3194"
  },
  {
    "continent": "Africa",
    "airport": "FAOR",
    "year": "2022",
    "month": "5",
    "flight_count": "3772"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "1",
    "flight_count": "2697"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "2",
    "flight_count": "2550"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "3",
    "flight_count": "4145"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "4",
    "flight_count": "5448"
  },
  {
    "continent": "Africa",
    "airport": "LLBG",
    "year": "2022",
    "month": "5",
    "flight_count": "5307"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "1",
    "flight_count": "2100"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "2",
    "flight_count": "1964"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "3",
    "flight_count": "2472"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "4",
    "flight_count": "2355"
  },
  {
    "continent": "Africa",
    "airport": "OBBI",
    "year": "2022",
    "month": "5",
    "flight_count": "2892"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "1",
    "flight_count": "1792"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "2",
    "flight_count": "1939"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "3",
    "flight_count": "1815"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "4",
    "flight_count": "1904"
  },
  {
    "continent": "Africa",
    "airport": "OERK",
    "year": "2022",
    "month": "5",
    "flight_count": "2588"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "1",
    "flight_count": "16622"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "2",
    "flight_count": "15519"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "3",
    "flight_count": "16626"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "4",
    "flight_count": "13419"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "5",
    "flight_count": "11219"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "6",
    "flight_count": "15754"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "7",
    "flight_count": "16481"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "8",
    "flight_count": "16500"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "9",
    "flight_count": "15215"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "10",
    "flight_count": "16294"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "11",
    "flight_count": "15668"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2019",
    "month": "12",
    "flight_count": "15991"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "1",
    "flight_count": "6287"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "2",
    "flight_count": "4756"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "3",
    "flight_count": "4722"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "4",
    "flight_count": "3554"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "5",
    "flight_count": "3200"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "6",
    "flight_count": "2945"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "7",
    "flight_count": "5713"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "8",
    "flight_count": "3699"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "9",
    "flight_count": "6265"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "10",
    "flight_count": "4260"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "11",
    "flight_count": "4157"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2019",
    "month": "12",
    "flight_count": "2327"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "1",
    "flight_count": "7339"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "2",
    "flight_count": "11535"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "3",
    "flight_count": "8500"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "4",
    "flight_count": "5591"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "5",
    "flight_count": "9499"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "6",
    "flight_count": "17026"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "7",
    "flight_count": "17871"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "8",
    "flight_count": "16359"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "9",
    "flight_count": "15436"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "10",
    "flight_count": "16919"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "11",
    "flight_count": "16088"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2019",
    "month": "12",
    "flight_count": "16276"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "1",
    "flight_count": "18214"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "2",
    "flight_count": "15706"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "3",
    "flight_count": "16867"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "4",
    "flight_count": "16102"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "5",
    "flight_count": "17153"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "6",
    "flight_count": "15402"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "7",
    "flight_count": "15722"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "8",
    "flight_count": "17977"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "9",
    "flight_count": "15638"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "10",
    "flight_count": "17522"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "11",
    "flight_count": "17968"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2019",
    "month": "12",
    "flight_count": "17747"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "1",
    "flight_count": "752"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "2",
    "flight_count": "1489"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "3",
    "flight_count": "1676"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "4",
    "flight_count": "4557"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "5",
    "flight_count": "5232"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "6",
    "flight_count": "8391"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "7",
    "flight_count": "9319"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "8",
    "flight_count": "12509"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "9",
    "flight_count": "12543"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "10",
    "flight_count": "13625"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "11",
    "flight_count": "13549"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2019",
    "month": "12",
    "flight_count": "12867"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "1",
    "flight_count": "16049"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "2",
    "flight_count": "12720"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "3",
    "flight_count": "8830"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "4",
    "flight_count": "1925"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "5",
    "flight_count": "2945"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "6",
    "flight_count": "3537"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "7",
    "flight_count": "4746"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "8",
    "flight_count": "5652"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "9",
    "flight_count": "6214"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "10",
    "flight_count": "7547"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "11",
    "flight_count": "7496"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2020",
    "month": "12",
    "flight_count": "8590"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "1",
    "flight_count": "13579"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "2",
    "flight_count": "11270"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "3",
    "flight_count": "9952"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "4",
    "flight_count": "4917"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "5",
    "flight_count": "1928"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "6",
    "flight_count": "3706"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "7",
    "flight_count": "5407"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "8",
    "flight_count": "8175"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "9",
    "flight_count": "7601"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "10",
    "flight_count": "8626"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "11",
    "flight_count": "10343"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2020",
    "month": "12",
    "flight_count": "10605"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "1",
    "flight_count": "15811"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "2",
    "flight_count": "9215"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "3",
    "flight_count": "6237"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "4",
    "flight_count": "4994"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "5",
    "flight_count": "5914"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "6",
    "flight_count": "5289"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "7",
    "flight_count": "5016"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "8",
    "flight_count": "5061"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "9",
    "flight_count": "5390"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "10",
    "flight_count": "5568"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "11",
    "flight_count": "6361"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2020",
    "month": "12",
    "flight_count": "6378"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "1",
    "flight_count": "17496"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "2",
    "flight_count": "16725"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "3",
    "flight_count": "13080"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "4",
    "flight_count": "538"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "5",
    "flight_count": "1862"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "6",
    "flight_count": "5739"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "7",
    "flight_count": "6254"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "8",
    "flight_count": "6768"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "9",
    "flight_count": "5254"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "10",
    "flight_count": "9672"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "11",
    "flight_count": "10012"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2020",
    "month": "12",
    "flight_count": "11941"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "1",
    "flight_count": "11728"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "2",
    "flight_count": "4583"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "3",
    "flight_count": "7010"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "4",
    "flight_count": "7852"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "5",
    "flight_count": "10953"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "6",
    "flight_count": "11732"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "7",
    "flight_count": "10885"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "8",
    "flight_count": "10215"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "9",
    "flight_count": "10694"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "10",
    "flight_count": "13069"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "11",
    "flight_count": "13389"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2020",
    "month": "12",
    "flight_count": "14259"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "1",
    "flight_count": "8096"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "2",
    "flight_count": "6206"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "3",
    "flight_count": "8196"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "4",
    "flight_count": "7978"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "5",
    "flight_count": "7187"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "6",
    "flight_count": "7569"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "7",
    "flight_count": "7207"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "8",
    "flight_count": "8663"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "9",
    "flight_count": "8659"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "10",
    "flight_count": "10526"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "11",
    "flight_count": "1599"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2021",
    "month": "12",
    "flight_count": "685"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "1",
    "flight_count": "8904"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "2",
    "flight_count": "5973"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "3",
    "flight_count": "9294"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "4",
    "flight_count": "11153"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "5",
    "flight_count": "9975"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "6",
    "flight_count": "9964"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "7",
    "flight_count": "11439"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "8",
    "flight_count": "12292"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "9",
    "flight_count": "10310"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "10",
    "flight_count": "11599"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "11",
    "flight_count": "13229"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2021",
    "month": "12",
    "flight_count": "15826"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "1",
    "flight_count": "5665"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "2",
    "flight_count": "4310"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "3",
    "flight_count": "5330"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "4",
    "flight_count": "5317"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "5",
    "flight_count": "5379"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "6",
    "flight_count": "5568"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "7",
    "flight_count": "5865"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "8",
    "flight_count": "5891"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "9",
    "flight_count": "6141"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "10",
    "flight_count": "2805"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "11",
    "flight_count": "3866"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2021",
    "month": "12",
    "flight_count": "3660"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "1",
    "flight_count": "13162"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "2",
    "flight_count": "12677"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "3",
    "flight_count": "13790"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "4",
    "flight_count": "12424"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "5",
    "flight_count": "6603"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "6",
    "flight_count": "7457"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "7",
    "flight_count": "10052"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "8",
    "flight_count": "12169"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "9",
    "flight_count": "12346"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "10",
    "flight_count": "14930"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "11",
    "flight_count": "16495"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2021",
    "month": "12",
    "flight_count": "18180"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "1",
    "flight_count": "10887"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "2",
    "flight_count": "7575"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "3",
    "flight_count": "10945"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "4",
    "flight_count": "8536"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "5",
    "flight_count": "6012"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "6",
    "flight_count": "3676"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "7",
    "flight_count": "4369"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "8",
    "flight_count": "4177"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "9",
    "flight_count": "6043"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "10",
    "flight_count": "4809"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "11",
    "flight_count": "4459"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2021",
    "month": "12",
    "flight_count": "5235"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "1",
    "flight_count": "10915"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "2",
    "flight_count": "11618"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "3",
    "flight_count": "13852"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "4",
    "flight_count": "12865"
  },
  {
    "continent": "Asia",
    "airport": "OMDB",
    "year": "2022",
    "month": "5",
    "flight_count": "10654"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "1",
    "flight_count": "15858"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "2",
    "flight_count": "10433"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "3",
    "flight_count": "13752"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "4",
    "flight_count": "14486"
  },
  {
    "continent": "Asia",
    "airport": "RJTT",
    "year": "2022",
    "month": "5",
    "flight_count": "15611"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "1",
    "flight_count": "3117"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "2",
    "flight_count": "2022"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "3",
    "flight_count": "2707"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "4",
    "flight_count": "2900"
  },
  {
    "continent": "Asia",
    "airport": "VHHH",
    "year": "2022",
    "month": "5",
    "flight_count": "2720"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "1",
    "flight_count": "13365"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "2",
    "flight_count": "12732"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "3",
    "flight_count": "16819"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "4",
    "flight_count": "17064"
  },
  {
    "continent": "Asia",
    "airport": "VIDP",
    "year": "2022",
    "month": "5",
    "flight_count": "17323"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "1",
    "flight_count": "3881"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "2",
    "flight_count": "4096"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "3",
    "flight_count": "1226"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "4",
    "flight_count": "599"
  },
  {
    "continent": "Asia",
    "airport": "ZGSZ",
    "year": "2022",
    "month": "5",
    "flight_count": "2"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "1",
    "flight_count": "15784"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "2",
    "flight_count": "15821"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "3",
    "flight_count": "16773"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "4",
    "flight_count": "16847"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "5",
    "flight_count": "18268"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "6",
    "flight_count": "18081"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "7",
    "flight_count": "18776"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "8",
    "flight_count": "18938"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "9",
    "flight_count": "18557"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "10",
    "flight_count": "19266"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "11",
    "flight_count": "16158"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2019",
    "month": "12",
    "flight_count": "15317"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "1",
    "flight_count": "15575"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "2",
    "flight_count": "17355"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "3",
    "flight_count": "19579"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "4",
    "flight_count": "19612"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "5",
    "flight_count": "20097"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "6",
    "flight_count": "19626"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "7",
    "flight_count": "20437"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "8",
    "flight_count": "20138"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "9",
    "flight_count": "17880"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "10",
    "flight_count": "20123"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "11",
    "flight_count": "18501"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2019",
    "month": "12",
    "flight_count": "18134"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "1",
    "flight_count": "12353"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "2",
    "flight_count": "12141"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "3",
    "flight_count": "14871"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "4",
    "flight_count": "16731"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "5",
    "flight_count": "17461"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "6",
    "flight_count": "15661"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "7",
    "flight_count": "17447"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "8",
    "flight_count": "16066"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "9",
    "flight_count": "16020"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "10",
    "flight_count": "18868"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "11",
    "flight_count": "15142"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2019",
    "month": "12",
    "flight_count": "13666"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "1",
    "flight_count": "14591"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "2",
    "flight_count": "13547"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "3",
    "flight_count": "15100"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "4",
    "flight_count": "15417"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "5",
    "flight_count": "16552"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "6",
    "flight_count": "13826"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "7",
    "flight_count": "17664"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "8",
    "flight_count": "16947"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "9",
    "flight_count": "16203"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "10",
    "flight_count": "17059"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "11",
    "flight_count": "15570"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2019",
    "month": "12",
    "flight_count": "12094"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "1",
    "flight_count": "15376"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "2",
    "flight_count": "15273"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "3",
    "flight_count": "17558"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "4",
    "flight_count": "18835"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "5",
    "flight_count": "19238"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "6",
    "flight_count": "19125"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "7",
    "flight_count": "20628"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "8",
    "flight_count": "20815"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "9",
    "flight_count": "19198"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "10",
    "flight_count": "20180"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "11",
    "flight_count": "17464"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2019",
    "month": "12",
    "flight_count": "17227"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "1",
    "flight_count": "15904"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "2",
    "flight_count": "16437"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "3",
    "flight_count": "10551"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "4",
    "flight_count": "3120"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "5",
    "flight_count": "3790"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "6",
    "flight_count": "4508"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "7",
    "flight_count": "7261"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "8",
    "flight_count": "8333"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "9",
    "flight_count": "8121"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "10",
    "flight_count": "8212"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "11",
    "flight_count": "6115"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2020",
    "month": "12",
    "flight_count": "6534"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "1",
    "flight_count": "18340"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "2",
    "flight_count": "17321"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "3",
    "flight_count": "12920"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "4",
    "flight_count": "2590"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "5",
    "flight_count": "3389"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "6",
    "flight_count": "3731"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "7",
    "flight_count": "5982"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "8",
    "flight_count": "7632"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "9",
    "flight_count": "7282"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "10",
    "flight_count": "9007"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "11",
    "flight_count": "5764"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2020",
    "month": "12",
    "flight_count": "6382"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "1",
    "flight_count": "13554"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "2",
    "flight_count": "13767"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "3",
    "flight_count": "10169"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "4",
    "flight_count": "1935"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "5",
    "flight_count": "2889"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "6",
    "flight_count": "3863"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "7",
    "flight_count": "6821"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "8",
    "flight_count": "9650"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "9",
    "flight_count": "9422"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "10",
    "flight_count": "8852"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "11",
    "flight_count": "6793"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2020",
    "month": "12",
    "flight_count": "7455"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "1",
    "flight_count": "12903"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "2",
    "flight_count": "14662"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "3",
    "flight_count": "8600"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "4",
    "flight_count": "979"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "5",
    "flight_count": "997"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "6",
    "flight_count": "1640"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "7",
    "flight_count": "4829"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "8",
    "flight_count": "7080"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "9",
    "flight_count": "5805"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "10",
    "flight_count": "5482"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "11",
    "flight_count": "4511"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2020",
    "month": "12",
    "flight_count": "5189"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "1",
    "flight_count": "16889"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "2",
    "flight_count": "16349"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "3",
    "flight_count": "11027"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "4",
    "flight_count": "2017"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "5",
    "flight_count": "2819"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "6",
    "flight_count": "4695"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "7",
    "flight_count": "8904"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "8",
    "flight_count": "10778"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "9",
    "flight_count": "8645"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "10",
    "flight_count": "7816"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "11",
    "flight_count": "5512"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2020",
    "month": "12",
    "flight_count": "6563"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "1",
    "flight_count": "6355"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "2",
    "flight_count": "5385"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "3",
    "flight_count": "6356"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "4",
    "flight_count": "7457"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "5",
    "flight_count": "7956"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "6",
    "flight_count": "9594"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "7",
    "flight_count": "13260"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "8",
    "flight_count": "13862"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "9",
    "flight_count": "12587"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "10",
    "flight_count": "13795"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "11",
    "flight_count": "13489"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2021",
    "month": "12",
    "flight_count": "13606"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "1",
    "flight_count": "4945"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "2",
    "flight_count": "4023"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "3",
    "flight_count": "4671"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "4",
    "flight_count": "5080"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "5",
    "flight_count": "5482"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "6",
    "flight_count": "6700"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "7",
    "flight_count": "8239"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "8",
    "flight_count": "9571"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "9",
    "flight_count": "10007"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "10",
    "flight_count": "11603"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "11",
    "flight_count": "11565"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2021",
    "month": "12",
    "flight_count": "12467"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "1",
    "flight_count": "6965"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "2",
    "flight_count": "5224"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "3",
    "flight_count": "5956"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "4",
    "flight_count": "6845"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "5",
    "flight_count": "7598"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "6",
    "flight_count": "9661"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "7",
    "flight_count": "14187"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "8",
    "flight_count": "15563"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "9",
    "flight_count": "14066"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "10",
    "flight_count": "15183"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "11",
    "flight_count": "13711"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2021",
    "month": "12",
    "flight_count": "14959"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "1",
    "flight_count": "4789"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "2",
    "flight_count": "4573"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "3",
    "flight_count": "5261"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "4",
    "flight_count": "5833"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "5",
    "flight_count": "6523"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "6",
    "flight_count": "8543"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "7",
    "flight_count": "11328"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "8",
    "flight_count": "11450"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "9",
    "flight_count": "10454"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "10",
    "flight_count": "10991"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "11",
    "flight_count": "11314"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2021",
    "month": "12",
    "flight_count": "12304"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "1",
    "flight_count": "6647"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "2",
    "flight_count": "5792"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "3",
    "flight_count": "6370"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "4",
    "flight_count": "6604"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "5",
    "flight_count": "6794"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "6",
    "flight_count": "8858"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "7",
    "flight_count": "13117"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "8",
    "flight_count": "14260"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "9",
    "flight_count": "11458"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "10",
    "flight_count": "12073"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "11",
    "flight_count": "13038"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2021",
    "month": "12",
    "flight_count": "14405"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "1",
    "flight_count": "12061"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "2",
    "flight_count": "10572"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "3",
    "flight_count": "12703"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "4",
    "flight_count": "15843"
  },
  {
    "continent": "Europe",
    "airport": "EDDF",
    "year": "2022",
    "month": "5",
    "flight_count": "17443"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "1",
    "flight_count": "11051"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "2",
    "flight_count": "9749"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "3",
    "flight_count": "13515"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "4",
    "flight_count": "16291"
  },
  {
    "continent": "Europe",
    "airport": "EGLL",
    "year": "2022",
    "month": "5",
    "flight_count": "17043"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "1",
    "flight_count": "13201"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "2",
    "flight_count": "11581"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "3",
    "flight_count": "14421"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "4",
    "flight_count": "17138"
  },
  {
    "continent": "Europe",
    "airport": "EHAM",
    "year": "2022",
    "month": "5",
    "flight_count": "18804"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "1",
    "flight_count": "11612"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "2",
    "flight_count": "10468"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "3",
    "flight_count": "12517"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "4",
    "flight_count": "13942"
  },
  {
    "continent": "Europe",
    "airport": "LEMD",
    "year": "2022",
    "month": "5",
    "flight_count": "14475"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "1",
    "flight_count": "12312"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "2",
    "flight_count": "11037"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "3",
    "flight_count": "14015"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "4",
    "flight_count": "16481"
  },
  {
    "continent": "Europe",
    "airport": "LFPG",
    "year": "2022",
    "month": "5",
    "flight_count": "17564"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "1",
    "flight_count": "126"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "2",
    "flight_count": "124"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "3",
    "flight_count": "220"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "4",
    "flight_count": "1090"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "5",
    "flight_count": "14514"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "6",
    "flight_count": "22255"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "7",
    "flight_count": "27610"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "8",
    "flight_count": "21838"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "9",
    "flight_count": "8528"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "10",
    "flight_count": "10114"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "11",
    "flight_count": "17486"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2019",
    "month": "12",
    "flight_count": "33945"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "1",
    "flight_count": "21676"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "2",
    "flight_count": "19765"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "3",
    "flight_count": "23030"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "4",
    "flight_count": "22264"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "5",
    "flight_count": "24592"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "6",
    "flight_count": "24563"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "7",
    "flight_count": "26573"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "8",
    "flight_count": "26773"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "9",
    "flight_count": "24835"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "10",
    "flight_count": "27901"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "11",
    "flight_count": "27317"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2019",
    "month": "12",
    "flight_count": "27995"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "1",
    "flight_count": "16033"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "2",
    "flight_count": "14717"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "3",
    "flight_count": "17751"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "4",
    "flight_count": "18140"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "5",
    "flight_count": "20209"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "6",
    "flight_count": "18945"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "7",
    "flight_count": "19782"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "8",
    "flight_count": "20801"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "9",
    "flight_count": "20054"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "10",
    "flight_count": "22303"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "11",
    "flight_count": "20095"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2019",
    "month": "12",
    "flight_count": "19505"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "1",
    "flight_count": "16360"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "2",
    "flight_count": "11181"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "3",
    "flight_count": "9993"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "4",
    "flight_count": "12085"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "5",
    "flight_count": "8060"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "6",
    "flight_count": "10164"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "7",
    "flight_count": "20758"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "8",
    "flight_count": "26835"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "9",
    "flight_count": "22049"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "10",
    "flight_count": "24395"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "11",
    "flight_count": "23428"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2019",
    "month": "12",
    "flight_count": "24745"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "1",
    "flight_count": "19883"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "2",
    "flight_count": "21499"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "3",
    "flight_count": "27603"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "4",
    "flight_count": "26937"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "5",
    "flight_count": "23596"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "6",
    "flight_count": "15851"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "7",
    "flight_count": "26730"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "8",
    "flight_count": "30950"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "9",
    "flight_count": "29129"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "10",
    "flight_count": "37969"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "11",
    "flight_count": "35430"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2019",
    "month": "12",
    "flight_count": "36406"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "1",
    "flight_count": "35770"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "2",
    "flight_count": "33976"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "3",
    "flight_count": "30610"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "4",
    "flight_count": "10106"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "5",
    "flight_count": "9202"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "6",
    "flight_count": "12077"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "7",
    "flight_count": "19569"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "8",
    "flight_count": "23390"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "9",
    "flight_count": "21930"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "10",
    "flight_count": "23246"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "11",
    "flight_count": "24024"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2020",
    "month": "12",
    "flight_count": "26076"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "1",
    "flight_count": "27534"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "2",
    "flight_count": "26830"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "3",
    "flight_count": "25121"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "4",
    "flight_count": "11794"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "5",
    "flight_count": "13368"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "6",
    "flight_count": "14252"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "7",
    "flight_count": "19238"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "8",
    "flight_count": "19794"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "9",
    "flight_count": "19185"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "10",
    "flight_count": "20573"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "11",
    "flight_count": "19902"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2020",
    "month": "12",
    "flight_count": "21954"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "1",
    "flight_count": "21195"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "2",
    "flight_count": "19480"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "3",
    "flight_count": "14547"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "4",
    "flight_count": "4628"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "5",
    "flight_count": "5340"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "6",
    "flight_count": "8846"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "7",
    "flight_count": "11764"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "8",
    "flight_count": "12462"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "9",
    "flight_count": "11281"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "10",
    "flight_count": "12973"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "11",
    "flight_count": "12437"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2020",
    "month": "12",
    "flight_count": "11591"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "1",
    "flight_count": "23659"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "2",
    "flight_count": "22600"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "3",
    "flight_count": "20718"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "4",
    "flight_count": "7097"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "5",
    "flight_count": "6748"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "6",
    "flight_count": "8198"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "7",
    "flight_count": "12198"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "8",
    "flight_count": "13235"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "9",
    "flight_count": "12262"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "10",
    "flight_count": "13141"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "11",
    "flight_count": "14019"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2020",
    "month": "12",
    "flight_count": "14466"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "1",
    "flight_count": "34480"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "2",
    "flight_count": "33538"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "3",
    "flight_count": "32048"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "4",
    "flight_count": "12046"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "5",
    "flight_count": "10900"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "6",
    "flight_count": "11522"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "7",
    "flight_count": "18956"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "8",
    "flight_count": "21363"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "9",
    "flight_count": "20059"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "10",
    "flight_count": "20103"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "11",
    "flight_count": "19167"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2020",
    "month": "12",
    "flight_count": "19376"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "1",
    "flight_count": "25028"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "2",
    "flight_count": "22590"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "3",
    "flight_count": "28000"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "4",
    "flight_count": "28726"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "5",
    "flight_count": "29358"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "6",
    "flight_count": "30652"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "7",
    "flight_count": "31457"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "8",
    "flight_count": "31216"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "9",
    "flight_count": "27902"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "10",
    "flight_count": "30505"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "11",
    "flight_count": "28934"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2021",
    "month": "12",
    "flight_count": "29872"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "1",
    "flight_count": "21871"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "2",
    "flight_count": "16833"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "3",
    "flight_count": "22932"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "4",
    "flight_count": "23423"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "5",
    "flight_count": "25330"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "6",
    "flight_count": "28127"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "7",
    "flight_count": "29366"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "8",
    "flight_count": "26785"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "9",
    "flight_count": "24278"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "10",
    "flight_count": "26378"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "11",
    "flight_count": "25035"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2021",
    "month": "12",
    "flight_count": "26482"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "1",
    "flight_count": "10792"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "2",
    "flight_count": "10565"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "3",
    "flight_count": "14138"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "4",
    "flight_count": "15346"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "5",
    "flight_count": "16881"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "6",
    "flight_count": "18455"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "7",
    "flight_count": "19980"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "8",
    "flight_count": "19816"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "9",
    "flight_count": "19394"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "10",
    "flight_count": "21964"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "11",
    "flight_count": "19419"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2021",
    "month": "12",
    "flight_count": "19656"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "1",
    "flight_count": "14011"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "2",
    "flight_count": "12427"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "3",
    "flight_count": "15627"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "4",
    "flight_count": "16761"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "5",
    "flight_count": "17962"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "6",
    "flight_count": "21402"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "7",
    "flight_count": "23381"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "8",
    "flight_count": "23443"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "9",
    "flight_count": "20488"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "10",
    "flight_count": "21512"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "11",
    "flight_count": "21220"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2021",
    "month": "12",
    "flight_count": "22669"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "1",
    "flight_count": "17382"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "2",
    "flight_count": "16415"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "3",
    "flight_count": "21057"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "4",
    "flight_count": "22836"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "5",
    "flight_count": "26002"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "6",
    "flight_count": "31025"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "7",
    "flight_count": "35206"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "8",
    "flight_count": "34126"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "9",
    "flight_count": "30611"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "10",
    "flight_count": "32550"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "11",
    "flight_count": "29357"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2021",
    "month": "12",
    "flight_count": "30551"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "1",
    "flight_count": "27969"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "2",
    "flight_count": "24873"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "3",
    "flight_count": "29191"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "4",
    "flight_count": "29037"
  },
  {
    "continent": "North Americas",
    "airport": "KATL",
    "year": "2022",
    "month": "5",
    "flight_count": "30048"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "1",
    "flight_count": "25339"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "2",
    "flight_count": "19569"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "3",
    "flight_count": "21235"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "4",
    "flight_count": "22649"
  },
  {
    "continent": "North Americas",
    "airport": "KDFW",
    "year": "2022",
    "month": "5",
    "flight_count": "24960"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2022",
    "month": "1",
    "flight_count": "18293"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2022",
    "month": "2",
    "flight_count": "17058"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2022",
    "month": "3",
    "flight_count": "20764"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2022",
    "month": "4",
    "flight_count": "20671"
  },
  {
    "continent": "North Americas",
    "airport": "KLAS",
    "year": "2022",
    "month": "5",
    "flight_count": "21998"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "1",
    "flight_count": "21209"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "2",
    "flight_count": "18224"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "3",
    "flight_count": "21057"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "4",
    "flight_count": "21468"
  },
  {
    "continent": "North Americas",
    "airport": "KLAX",
    "year": "2022",
    "month": "5",
    "flight_count": "21842"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "1",
    "flight_count": "26756"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "2",
    "flight_count": "23977"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "3",
    "flight_count": "28972"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "4",
    "flight_count": "29291"
  },
  {
    "continent": "North Americas",
    "airport": "KORD",
    "year": "2022",
    "month": "5",
    "flight_count": "29715"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "1",
    "flight_count": "8710"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "2",
    "flight_count": "8093"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "3",
    "flight_count": "8822"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "4",
    "flight_count": "8825"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "5",
    "flight_count": "8936"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "6",
    "flight_count": "8514"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "7",
    "flight_count": "9470"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "8",
    "flight_count": "9143"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "9",
    "flight_count": "8671"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "10",
    "flight_count": "9348"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "11",
    "flight_count": "8804"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2019",
    "month": "12",
    "flight_count": "8800"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "1",
    "flight_count": "10506"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "2",
    "flight_count": "9388"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "3",
    "flight_count": "10244"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "4",
    "flight_count": "10104"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "5",
    "flight_count": "9845"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "6",
    "flight_count": "9591"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "7",
    "flight_count": "10552"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "8",
    "flight_count": "9952"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "9",
    "flight_count": "9641"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "10",
    "flight_count": "10537"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "11",
    "flight_count": "10048"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2019",
    "month": "12",
    "flight_count": "10303"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "1",
    "flight_count": "5495"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "2",
    "flight_count": "4949"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "3",
    "flight_count": "5372"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "4",
    "flight_count": "5375"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "5",
    "flight_count": "5543"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "6",
    "flight_count": "5227"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "7",
    "flight_count": "5763"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "8",
    "flight_count": "5461"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "9",
    "flight_count": "5219"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "10",
    "flight_count": "5883"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "11",
    "flight_count": "5412"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2019",
    "month": "12",
    "flight_count": "5552"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "1",
    "flight_count": "2767"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "2",
    "flight_count": "2964"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "3",
    "flight_count": "3227"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "4",
    "flight_count": "2913"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "5",
    "flight_count": "3259"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "6",
    "flight_count": "2797"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "7",
    "flight_count": "2969"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "8",
    "flight_count": "2788"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "9",
    "flight_count": "2919"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "10",
    "flight_count": "3120"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "11",
    "flight_count": "2777"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2019",
    "month": "12",
    "flight_count": "2205"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "1",
    "flight_count": "13992"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "2",
    "flight_count": "13270"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "3",
    "flight_count": "14572"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "4",
    "flight_count": "14251"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "5",
    "flight_count": "14311"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "6",
    "flight_count": "13582"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "7",
    "flight_count": "14669"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "8",
    "flight_count": "14137"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "9",
    "flight_count": "13648"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "10",
    "flight_count": "15129"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "11",
    "flight_count": "14263"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2019",
    "month": "12",
    "flight_count": "13945"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "1",
    "flight_count": "8697"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "2",
    "flight_count": "8124"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "3",
    "flight_count": "7181"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "4",
    "flight_count": "2233"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "5",
    "flight_count": "2149"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "6",
    "flight_count": "2563"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "7",
    "flight_count": "3485"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "8",
    "flight_count": "3556"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "9",
    "flight_count": "3631"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "10",
    "flight_count": "3708"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "11",
    "flight_count": "3961"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2020",
    "month": "12",
    "flight_count": "5600"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "1",
    "flight_count": "10174"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "2",
    "flight_count": "9302"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "3",
    "flight_count": "7771"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "4",
    "flight_count": "1203"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "5",
    "flight_count": "1244"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "6",
    "flight_count": "1479"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "7",
    "flight_count": "1405"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "8",
    "flight_count": "1044"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "9",
    "flight_count": "1125"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "10",
    "flight_count": "1162"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "11",
    "flight_count": "1589"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2020",
    "month": "12",
    "flight_count": "4185"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "1",
    "flight_count": "5686"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "2",
    "flight_count": "5191"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "3",
    "flight_count": "5165"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "4",
    "flight_count": "2847"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "5",
    "flight_count": "2538"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "6",
    "flight_count": "2921"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "7",
    "flight_count": "3485"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "8",
    "flight_count": "3368"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "9",
    "flight_count": "3660"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "10",
    "flight_count": "3837"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "11",
    "flight_count": "3728"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2020",
    "month": "12",
    "flight_count": "4416"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "1",
    "flight_count": "2492"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "2",
    "flight_count": "2701"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "3",
    "flight_count": "2420"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "4",
    "flight_count": "1605"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "5",
    "flight_count": "2061"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "6",
    "flight_count": "2765"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "7",
    "flight_count": "2690"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "8",
    "flight_count": "2664"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "9",
    "flight_count": "2916"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "10",
    "flight_count": "2816"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "11",
    "flight_count": "2981"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2020",
    "month": "12",
    "flight_count": "2273"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "1",
    "flight_count": "13671"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "2",
    "flight_count": "12931"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "3",
    "flight_count": "10784"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "4",
    "flight_count": "2108"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "5",
    "flight_count": "2280"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "6",
    "flight_count": "2609"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "7",
    "flight_count": "3364"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "8",
    "flight_count": "2850"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "9",
    "flight_count": "2924"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "10",
    "flight_count": "3501"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "11",
    "flight_count": "4285"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2020",
    "month": "12",
    "flight_count": "6073"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "1",
    "flight_count": "4726"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "2",
    "flight_count": "4617"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "3",
    "flight_count": "5852"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "4",
    "flight_count": "5914"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "5",
    "flight_count": "6332"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "6",
    "flight_count": "6185"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "7",
    "flight_count": "5002"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "8",
    "flight_count": "3417"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "9",
    "flight_count": "3873"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "10",
    "flight_count": "4319"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "11",
    "flight_count": "4387"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2021",
    "month": "12",
    "flight_count": "6073"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "1",
    "flight_count": "3740"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "2",
    "flight_count": "3067"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "3",
    "flight_count": "5016"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "4",
    "flight_count": "6885"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "5",
    "flight_count": "6749"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "6",
    "flight_count": "3557"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "7",
    "flight_count": "3698"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "8",
    "flight_count": "1809"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "9",
    "flight_count": "1479"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "10",
    "flight_count": "1625"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "11",
    "flight_count": "2763"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2021",
    "month": "12",
    "flight_count": "6220"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "1",
    "flight_count": "3993"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "2",
    "flight_count": "3662"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "3",
    "flight_count": "4638"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "4",
    "flight_count": "4652"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "5",
    "flight_count": "4581"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "6",
    "flight_count": "4550"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "7",
    "flight_count": "4349"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "8",
    "flight_count": "4267"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "9",
    "flight_count": "4251"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "10",
    "flight_count": "4254"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "11",
    "flight_count": "4294"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2021",
    "month": "12",
    "flight_count": "4349"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "1",
    "flight_count": "2510"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "2",
    "flight_count": "2781"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "3",
    "flight_count": "2970"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "4",
    "flight_count": "2994"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "5",
    "flight_count": "2697"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "6",
    "flight_count": "2282"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "7",
    "flight_count": "1314"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "8",
    "flight_count": "1309"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "9",
    "flight_count": "1163"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "10",
    "flight_count": "2368"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "11",
    "flight_count": "2519"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2021",
    "month": "12",
    "flight_count": "2735"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "1",
    "flight_count": "3820"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "2",
    "flight_count": "5209"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "3",
    "flight_count": "7762"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "4",
    "flight_count": "9578"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "5",
    "flight_count": "9441"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "6",
    "flight_count": "7774"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "7",
    "flight_count": "3347"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "8",
    "flight_count": "2637"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "9",
    "flight_count": "2469"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "10",
    "flight_count": "3057"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "11",
    "flight_count": "4955"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2021",
    "month": "12",
    "flight_count": "8730"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "1",
    "flight_count": "5639"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "2",
    "flight_count": "4843"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "3",
    "flight_count": "6456"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "4",
    "flight_count": "7334"
  },
  {
    "continent": "Oceania",
    "airport": "YBBN",
    "year": "2022",
    "month": "5",
    "flight_count": "7496"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "1",
    "flight_count": "6277"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "2",
    "flight_count": "5209"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "3",
    "flight_count": "7242"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "4",
    "flight_count": "8768"
  },
  {
    "continent": "Oceania",
    "airport": "YMML",
    "year": "2022",
    "month": "5",
    "flight_count": "8495"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "1",
    "flight_count": "3676"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "2",
    "flight_count": "3659"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "3",
    "flight_count": "4641"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "4",
    "flight_count": "4917"
  },
  {
    "continent": "Oceania",
    "airport": "YPPH",
    "year": "2022",
    "month": "5",
    "flight_count": "5185"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "1",
    "flight_count": "2450"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "2",
    "flight_count": "2537"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "3",
    "flight_count": "2685"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "4",
    "flight_count": "2994"
  },
  {
    "continent": "Oceania",
    "airport": "YSBK",
    "year": "2022",
    "month": "5",
    "flight_count": "3388"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "1",
    "flight_count": "8188"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "2",
    "flight_count": "7273"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "3",
    "flight_count": "9772"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "4",
    "flight_count": "11974"
  },
  {
    "continent": "Oceania",
    "airport": "YSSY",
    "year": "2022",
    "month": "5",
    "flight_count": "11956"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "1",
    "flight_count": "4177"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "2",
    "flight_count": "3882"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "3",
    "flight_count": "4215"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "4",
    "flight_count": "3675"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "5",
    "flight_count": "3730"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "6",
    "flight_count": "3361"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "7",
    "flight_count": "4041"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "8",
    "flight_count": "3570"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "9",
    "flight_count": "3185"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "10",
    "flight_count": "3969"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "11",
    "flight_count": "4348"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2019",
    "month": "12",
    "flight_count": "4365"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "1",
    "flight_count": "10715"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "2",
    "flight_count": "9362"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "3",
    "flight_count": "10011"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "4",
    "flight_count": "9151"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "5",
    "flight_count": "8108"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "6",
    "flight_count": "7949"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "7",
    "flight_count": "9277"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "8",
    "flight_count": "7774"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "9",
    "flight_count": "7482"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "10",
    "flight_count": "9114"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "11",
    "flight_count": "8170"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2019",
    "month": "12",
    "flight_count": "9440"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "1",
    "flight_count": "2796"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "2",
    "flight_count": "2605"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "3",
    "flight_count": "2789"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "4",
    "flight_count": "2867"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "5",
    "flight_count": "3037"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "6",
    "flight_count": "2714"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "7",
    "flight_count": "2067"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "8",
    "flight_count": "2636"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "9",
    "flight_count": "2713"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "10",
    "flight_count": "3182"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "11",
    "flight_count": "3222"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2019",
    "month": "12",
    "flight_count": "3252"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "1",
    "flight_count": "6467"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "2",
    "flight_count": "5805"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "3",
    "flight_count": "6232"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "4",
    "flight_count": "5960"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "5",
    "flight_count": "5979"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "6",
    "flight_count": "5624"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "7",
    "flight_count": "6028"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "8",
    "flight_count": "5885"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "9",
    "flight_count": "5436"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "10",
    "flight_count": "6367"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "11",
    "flight_count": "6131"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2019",
    "month": "12",
    "flight_count": "5725"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "1",
    "flight_count": "1219"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "10",
    "flight_count": "171"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "11",
    "flight_count": "2814"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2019",
    "month": "12",
    "flight_count": "6139"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "1",
    "flight_count": "4147"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "2",
    "flight_count": "3985"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "3",
    "flight_count": "3105"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "4",
    "flight_count": "367"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "5",
    "flight_count": "453"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "6",
    "flight_count": "716"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "7",
    "flight_count": "1235"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "8",
    "flight_count": "1628"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "9",
    "flight_count": "2136"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "10",
    "flight_count": "2719"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "11",
    "flight_count": "2817"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2020",
    "month": "12",
    "flight_count": "3317"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "1",
    "flight_count": "8800"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "2",
    "flight_count": "9928"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "3",
    "flight_count": "7876"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "4",
    "flight_count": "1174"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "5",
    "flight_count": "1570"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "6",
    "flight_count": "1913"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "7",
    "flight_count": "2960"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "8",
    "flight_count": "3734"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "9",
    "flight_count": "4545"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "10",
    "flight_count": "5760"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "11",
    "flight_count": "6272"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2020",
    "month": "12",
    "flight_count": "7475"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "1",
    "flight_count": "3448"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "2",
    "flight_count": "3366"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "3",
    "flight_count": "2720"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "4",
    "flight_count": "940"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "5",
    "flight_count": "1337"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "6",
    "flight_count": "1695"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "7",
    "flight_count": "1952"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "8",
    "flight_count": "2332"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "9",
    "flight_count": "2379"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "10",
    "flight_count": "1412"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "11",
    "flight_count": "147"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2020",
    "month": "12",
    "flight_count": "166"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "1",
    "flight_count": "5540"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "2",
    "flight_count": "5753"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "3",
    "flight_count": "4247"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "4",
    "flight_count": "358"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "5",
    "flight_count": "455"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "6",
    "flight_count": "792"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "7",
    "flight_count": "1090"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "8",
    "flight_count": "968"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "9",
    "flight_count": "1386"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "10",
    "flight_count": "2396"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "11",
    "flight_count": "2803"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2020",
    "month": "12",
    "flight_count": "3411"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "1",
    "flight_count": "6963"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "2",
    "flight_count": "6740"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "3",
    "flight_count": "5983"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "4",
    "flight_count": "441"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "5",
    "flight_count": "324"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "6",
    "flight_count": "442"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "7",
    "flight_count": "535"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "8",
    "flight_count": "413"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "9",
    "flight_count": "1733"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "10",
    "flight_count": "2983"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "11",
    "flight_count": "2473"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2020",
    "month": "12",
    "flight_count": "2664"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "1",
    "flight_count": "3322"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "2",
    "flight_count": "2664"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "3",
    "flight_count": "2136"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "4",
    "flight_count": "1598"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "5",
    "flight_count": "2277"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "6",
    "flight_count": "2656"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "7",
    "flight_count": "3194"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "8",
    "flight_count": "3212"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "9",
    "flight_count": "2944"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "10",
    "flight_count": "3130"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "11",
    "flight_count": "1943"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2021",
    "month": "12",
    "flight_count": "3089"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "1",
    "flight_count": "7554"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "2",
    "flight_count": "5922"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "3",
    "flight_count": "5011"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "4",
    "flight_count": "4173"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "5",
    "flight_count": "5064"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "6",
    "flight_count": "5902"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "7",
    "flight_count": "7541"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "8",
    "flight_count": "7287"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "9",
    "flight_count": "5123"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "10",
    "flight_count": "367"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "11",
    "flight_count": "2205"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2021",
    "month": "12",
    "flight_count": "1425"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "1",
    "flight_count": "213"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "2",
    "flight_count": "515"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "3",
    "flight_count": "1253"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "4",
    "flight_count": "2381"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "5",
    "flight_count": "3101"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "6",
    "flight_count": "3373"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "7",
    "flight_count": "3720"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "8",
    "flight_count": "3960"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "9",
    "flight_count": "3461"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "10",
    "flight_count": "3660"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "11",
    "flight_count": "3915"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2021",
    "month": "12",
    "flight_count": "3996"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "1",
    "flight_count": "3738"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "2",
    "flight_count": "2867"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "3",
    "flight_count": "2308"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "4",
    "flight_count": "1683"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "5",
    "flight_count": "2348"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "6",
    "flight_count": "2857"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "7",
    "flight_count": "4014"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "8",
    "flight_count": "3830"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "9",
    "flight_count": "3211"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "10",
    "flight_count": "3482"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "11",
    "flight_count": "4748"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2021",
    "month": "12",
    "flight_count": "5584"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "1",
    "flight_count": "3947"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "2",
    "flight_count": "3367"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "3",
    "flight_count": "3376"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "4",
    "flight_count": "3782"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "5",
    "flight_count": "3799"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "6",
    "flight_count": "4317"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "7",
    "flight_count": "1364"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "8",
    "flight_count": "28"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "11",
    "flight_count": "2769"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2021",
    "month": "12",
    "flight_count": "120"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "1",
    "flight_count": "4225"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "2",
    "flight_count": "3216"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "3",
    "flight_count": "3727"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "4",
    "flight_count": "3568"
  },
  {
    "continent": "South Americas",
    "airport": "SBBR",
    "year": "2022",
    "month": "5",
    "flight_count": "3151"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "1",
    "flight_count": "713"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "2",
    "flight_count": "400"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "3",
    "flight_count": "503"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "4",
    "flight_count": "53"
  },
  {
    "continent": "South Americas",
    "airport": "SBGR",
    "year": "2022",
    "month": "5",
    "flight_count": "637"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "1",
    "flight_count": "3518"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "2",
    "flight_count": "3316"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "3",
    "flight_count": "3880"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "4",
    "flight_count": "3476"
  },
  {
    "continent": "South Americas",
    "airport": "SBKP",
    "year": "2022",
    "month": "5",
    "flight_count": "2879"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "1",
    "flight_count": "4224"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "2",
    "flight_count": "1859"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "3",
    "flight_count": "2177"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "4",
    "flight_count": "4756"
  },
  {
    "continent": "South Americas",
    "airport": "SBSP",
    "year": "2022",
    "month": "5",
    "flight_count": "4027"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "2",
    "flight_count": "1495"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "3",
    "flight_count": "9926"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "4",
    "flight_count": "4932"
  },
  {
    "continent": "South Americas",
    "airport": "SKBO",
    "year": "2022",
    "month": "5",
    "flight_count": "1762"
  }
];