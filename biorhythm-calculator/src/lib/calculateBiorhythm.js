import dayjs from "dayjs";

export function calculateBiorythms(birth, target) {
  return {
    physical: calculateBiorythm(birth, target, 23),
    emotional: calculateBiorythm(birth, target, 28),
    intellectual: calculateBiorythm(birth, target, 33),
  };
}

function calculateTimeDifference(birth, target) {
  const birthDay = dayjs(birth);
  const targetDay = dayjs(target);
  return targetDay.diff(birthDay, "day");
}

function calculateBiorythm(birth, target, cycle) {
  const diff = calculateTimeDifference(birth, target);
  return Math.sin((2 * Math.PI * diff) / cycle);
}

export function calculateBioSeries(birthDate, initialDate, range) {
  const series = [];

  const centralDay = dayjs(initialDate);
  for (let diff = -range; diff <= range; diff++) {
    const targetDay = centralDay.add(diff, "day");
    const bios = calculateBiorythms(birthDate, targetDay);
    series.push({ date: targetDay.format("D MMM"), ...bios });
  }

  return series;
}
