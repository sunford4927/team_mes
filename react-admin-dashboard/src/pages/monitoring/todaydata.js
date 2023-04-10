const outdata = async () => {
    try {
      const logdata = await axios.get(
        "http://127.0.0.1:8000/mes/TbProductionLog/"
      );
      const result = await axios.get("http://127.0.0.1:8000/mes/plans/");
      // 원하는정보만 모아서 딕셔너리 구축
      setData(Make_ID(result.data));
      // 데이터 0라인별로 모아서 저장
      var data_list1 = [];
      for (var i = 324; i < 450; i += 3) {
        data_list1.push(logdata.data[i]);
      }
      // 데이터 1라인별로 모아서 저장
      var data_list2 = [];
      for (var i = 325; i < 451; i += 3) {
        data_list2.push(logdata.data[i]);
      }
      // 데이터 2라인별로 모아서 저장
      var data_list3 = [];
      for (var i = 326; i < 452; i += 3) {
        data_list3.push(logdata.data[i]);
      }
      setValuecount1(data_list1[data_list1.length - 1]["metalgoodcnt"]);
      setValuecount2(data_list2[data_list2.length - 1]["metalgoodcnt"]);
      setValuecount3(data_list3[data_list3.length - 1]["metalgoodcnt"]);
      // console.log(data_list3)
      var j = 0;
      var timer = setInterval(function () {
        if (j < 42) {
          setNum1(data_list1[j]["metalgoodcnt"]);
          setNum2(data_list2[j]["metalgoodcnt"]);
          setNum3(data_list3[j]["metalgoodcnt"]);
          j++;
        } else {
          clearInterval(timer);
        }
      }, 1000);
      // math(data_list)
    } catch (error) {
      console.error(error);
    }
  };
  outdata();