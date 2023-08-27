const workInput = document.getElementsByClassName('js-placeholder modalTable__detailWorkContents__input')

const nowDate = new Date();
const year = nowDate.getFullYear();
const monthForDate = nowDate.getMonth();
const month = monthForDate + 1;
const skipDay = [0, 6];
for(let i = 1; i < 32; i++) {
  const date = ( '0' + i ).slice( -2 );
  const zeroPadMon = ( '0' + month).slice( -2 );
  const newDate = new Date(year, monthForDate, i);
  const day = newDate.getDay();

  let workText = 'AGMSの開発';
  let startTime = '09:30';
  let endTime = '18:30';
  let relaxTime = '01:00'; 
  if (skipDay.includes(day)) {
    continue;
  }

  workInput.item(i - 1).value = workText;
  document.getElementsByName(`data[DailyReport][${year}${zeroPadMon}${date}][start_time]`).item(0).value = startTime;
  document.getElementsByName(`data[DailyReport][${year}${zeroPadMon}${date}][end_time]`).item(0).value = endTime;
  document.getElementsByName(`data[DailyReport][${year}${zeroPadMon}${date}][relax_time]`).item(0).value = relaxTime;
}

