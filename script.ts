const form = document.getElementById("cubicSolverForm") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const a: number = Number(formData.get("a-value"));
  const b: number = Number(formData.get("b-value"));
  const c: number = Number(formData.get("c-value"));
  const d: number = Number(formData.get("d-value"));

  const result1 = document.getElementById("result1") as HTMLInputElement;
  const result2 = document.getElementById("result2") as HTMLInputElement;
  const result3 = document.getElementById("result3") as HTMLInputElement;
  const discriminantDisplay = document.getElementById(
    "discriminantDisplay",
  ) as HTMLInputElement;
  const pDisplay = document.getElementById("pDisplay") as HTMLInputElement;
  const qDisplay = document.getElementById("qDisplay") as HTMLInputElement;

  if (a === 0) {
    /* Guarding against quadratics and linear equations */

    pDisplay.value = ``;
    qDisplay.value = ``;
    if (b != 0) {
      /* Quadratic solver */

      const discriminant = c * c - 4 * b * d;
      discriminantDisplay.value = `${discriminant}`;

      if (discriminant < 0) {
        result1.value = "No Roots";
        result2.value = "No Roots";
        result3.value = "No Roots";
      } else if (discriminant > 0) {
        const rootOne = (-c + Math.sqrt(discriminant)) / (2 * b);
        const rootTwo = (-c - Math.sqrt(discriminant)) / (2 * b);
        result1.value = `Root 1 = ${rootOne.toFixed(6)}`;
        result2.value = `Root 2 = ${rootTwo.toFixed(6)}`;
        result3.value = ``;
      } else {
        const rootOne = (-c + Math.sqrt(discriminant)) / (2 * b);
        result1.value = `Root 1 = ${rootOne.toFixed(6)}`;
        result2.value = ``;
        result3.value = ``;
      }
    } else if (c != 0) {
      /* Linear Solver */

        discriminantDisplay.value = ``;
        const rootOne = -d / c;
        result1.value = `Root 1 = ${rootOne.toFixed(6)}`;
        result2.value = ``;
        result3.value = ``;
    } else {
      if (d === 0) {
        discriminantDisplay.value = ``;
        result1.value = "Infinite solutions";
        result2.value = "Infinite solutions";
        result3.value = "Infinite solutions";
      } else {
        discriminantDisplay.value = ``;
        result1.value = "No solutions";
        result2.value = "No solutions";
        result3.value = "No solutions";
      }
    }
  } else {
    /* Cubic solver */

    const p = (3 * a * c - b * b) / (3 * a * a);
    const q =
      (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
    const t = b / (3 * a);
    const discriminant = (q / 2) ** 2 + (p / 3) ** 3;
    discriminantDisplay.value = `${discriminant.toFixed(6)}`;
    pDisplay.value = `${p.toFixed(6)}`;
    qDisplay.value = `${q.toFixed(6)}`;

    if (discriminant < 0) {
      /* Trigonometric Method */

      const acosX = -q / (2 * Math.sqrt(-((p / 3) ** 3)));
      const limiter = Math.max(-1, Math.min(1, acosX));
      const theta = (1 / 3) * Math.acos(limiter);

      const g = 2 * Math.sqrt(-p / 3);

      const rootOne = g * Math.cos(theta) - t;
      const rootTwo = g * Math.cos(theta + (2 * Math.PI) / 3) - t;
      const rootThree = g * Math.cos(theta + (4 * Math.PI) / 3) - t;

      result1.value = `Root 1 = ${rootOne.toFixed(6)}`;
      result2.value = `Root 2 = ${rootTwo.toFixed(6)}`;
      result3.value = `Root 3 = ${rootThree.toFixed(6)}`;
    } else {
      const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
      const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
      const n = -((u + v) / 2);
      const m = (Math.sqrt(3) * (u - v)) / 2;

      if (discriminant > 0) {
        /* Cardano's method */

        const rootOne = u + v - t;
        const cbrtOfUnity1 = n - t;
        const cbrtOfUnity2 = m;

        result1.value = `Root 1 = ${rootOne.toFixed(6)}`;
        result2.value = `Root 2 = ${cbrtOfUnity1.toFixed(6)} + ${cbrtOfUnity2.toFixed(6)}i`;
        result3.value = `Root 3 = ${cbrtOfUnity1.toFixed(6)} - ${cbrtOfUnity2.toFixed(6)}i`;
      } else {
        /* Cardano's Method */

        if (p === 0 && q === 0) {
          result1.value = `Root 1 = ${(-t).toFixed(6)}`;
          result2.value = `Root 2 = ${(-t).toFixed(6)}`;
          result3.value = `Root 3 = ${(-t).toFixed(6)}`;
        } else if (p != 0) {
          result1.value = `Root 1 = ${(u + v - t).toFixed(6)}`;
          result2.value = `Double Root 1 = ${(n - t).toFixed(6)}`;
          result3.value = `Double Root 2 = ${(n - t).toFixed(6)}`;
        }
      }
    }
  }
});