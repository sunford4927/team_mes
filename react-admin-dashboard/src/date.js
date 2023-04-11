Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days);
    return date;
 }


 function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate)
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  function isodate(date) {
    var fulliso = date.toISOString();
    return fulliso.split("T")[0]
}


function basicdate(date) {
    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    return date.getUTCFullYear() + "" + pad(date.getUTCMonth() + 1) + "" + pad(date.getUTCDate())
}


export function createDate (date1, date2){
    let dateArray = getDates(new Date(date1), new Date(date2));
    let array = [];
    for (let i=0; i< dateArray.length; i++){
        let currDate = dateArray[i];
        array.push(isodate(currDate))
    }
    return array
}
// for (i = 0; i < dateArray.length; i ++ ) {
//     var currDate = dateArray[i];

//     array.push(basicdate(currDate))
//     var cdateISO = isodate(currDate)

//     console.log(cdate)
//       console.log(cdateISO)
// }









//  // 변경사항이 있을때마다 원본 list에 필터를 새로 적용한다.
//  const filterData = () => {
   
//     //아무 필터도 없는 맨 처음은 원본 list가 나와야 함
//     if (
//       form.input1 &&
//       form.input2 &&
//       form.startdate &&
//       form.enddate === undefined
//     ) {
//       setDummyData(plan);
//     } else { // 실제 필터를 적용하는 부분
//       const filteredList = plan.reduce((acc, cur) => {
//         const payStatusKeywordCondition = form.input1
//           ? cur.lot_num === form.input1 
//           : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.
//         const payNumKeywordCondition =
//           form.input2 && form.input2.length > 0
//             ? cur.input2.includes(form.input2)
//             : true;
//         const startDateCondition = form.startdate
//           ? form.startdate.getTime() - new Date(cur.reg_date).getTime() <= 0
//           : true;
//         const endDateCondition = form.enddate
//           ? form.enddate.getTime() - new Date(cur.reg_date).getTime() >= 0
//           : true;
    
//         // 해당 조건이 있다면 그에 부합하는 교집합인 놈만 push 하겠다.
//         if (
//           payStatusKeywordCondition &&
//           payNumKeywordCondition &&
//           startDateCondition &&
//           endDateCondition
//         ) {
//           acc.push(cur);
//         }
  
//         return acc;
//       }, []);
  
//       setDummyData(filteredList);
//     }
//   };
  
//   // 원본이 갱신되거나, 검색조건이 변경되면 filterData를 실행한다.
//   useEffect(() => {
//     filterData();
//   }, [plan, form.input1, form.input2, form.startdate, form.enddate]);
  