import { calculateBiorythms } from "./calculateBiorhythm";

it('calculates physical biorhythm', () => {
    const bio = calculateBiorythms('1999-12-31', '2022-12-31');
    expect(bio.physical).toBeCloseTo(0.9977);
});

it('calculates emotional biorhythm', () => {
    const bio = calculateBiorythms('1999-12-31', '2022-12-31');
    expect(bio.emotional).toBeCloseTo(0.2225);
});

it('calculates iintellectual biorhythm', () => {
    const bio = calculateBiorythms('1999-12-31', '2022-12-31');
    expect(bio.intellectual).toBeCloseTo(-0.4582);
});