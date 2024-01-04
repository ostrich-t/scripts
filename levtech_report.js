const nowDate = new Date();
const year = nowDate.getFullYear();

function substituteHoliday(date) {
  if (date.getDay() === 0) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }
  return date;
}

const holidaysRaw = [
  new Date(year, 0, 1), // 元日
  new Date(year, 0, 8), // 成人の日（第2月曜日）
  new Date(year, 1, 11), // 建国記念の日
  new Date(year, 1, 23), // 天皇誕生日
  new Date(year, 2, 20), // 春分の日
  new Date(year, 3, 29), // 昭和の日
  new Date(year, 4, 3), // 憲法記念日
  new Date(year, 4, 4), // みどりの日
  new Date(year, 4, 5), // こどもの日
  new Date(year, 6, 15), // 海の日（第3月曜日）
  new Date(year, 7, 11), // 山の日
  new Date(year, 8, 16), // 敬老の日（第3月曜日）
  new Date(year, 8, 23), // 秋分の日
  new Date(year, 9, 14), // スポーツの日（第2月曜日）
  new Date(year, 10, 3), // 文化の日
  new Date(year, 10, 23), // 勤労感謝の日
];

function isHoliday(date) {
  return holidaysRaw.some((holiday) => holiday.getTime() === date.getTime());
}

const holidays = holidaysRaw.map((holiday) => substituteHoliday(holiday));

// 以下実行Script
const workInput = document.getElementsByClassName(
  "js-placeholder modalTable__detailWorkContents__input"
);

const monthForDate = nowDate.getMonth();
const month = monthForDate + 1;
const skipDay = [0, 6];
for (let i = 1; i < 32; i++) {
  const date = ("0" + i).slice(-2);
  const zeroPadMon = ("0" + month).slice(-2);
  const newDate = new Date(year, monthForDate, i);
  const day = newDate.getDay();

  let workText = "AGMSの開発";
  let startTime = "09:30";
  let endTime = "18:30";
  let relaxTime = "01:00";
  if (skipDay.includes(day) || isHoliday(newDate)) {
    continue;
  }

  workInput.item(i - 1).value = workText;
  document
    .getElementsByName(
      `data[DailyReport][${year}${zeroPadMon}${date}][start_time]`
    )
    .item(0).value = startTime;
  document
    .getElementsByName(
      `data[DailyReport][${year}${zeroPadMon}${date}][end_time]`
    )
    .item(0).value = endTime;
  document
    .getElementsByName(
      `data[DailyReport][${year}${zeroPadMon}${date}][relax_time]`
    )
    .item(0).value = relaxTime;
}
