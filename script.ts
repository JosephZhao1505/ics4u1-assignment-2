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
    const discriminantDisplay = document.getElementById("discriminant-display") as HTMLInputElement;

    const p = ((3 * a * c - b * b) / (3 * a * a));
    const q = ((27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a));
    const t = b / (3 * a);

    if (a === 0) {
        if (b != 0) {
            const discriminant = c * c - 4 * b * d;
            discriminantDisplay.value = `${discriminant}`;

            if (discriminant < 0) {
                result1.value = "No Roots";
                result2.value = "No Roots";
                result3.value = "No Roots";
            } else if (discriminant > 0) {
                const rootOne = (-c + Math.sqrt(discriminant)) / (2 * b);
                const rootTwo = (-c - Math.sqrt(discriminant)) / (2 * b);
                result1.value = `Root 1 = ${rootOne}`;
                result2.value = `Root 2 = ${rootTwo}`;
                result3.value = ``;
            } else {
                const rootOne = (-c + Math.sqrt(discriminant)) / (2 * b);
                result1.value = `Root 1 = ${rootOne}`;
                result2.value = ``;
                result3.value = ``;
            }
        } else if (b === 0) {
            const rootOne = (-d / c);
            result1.value = `Root 1 = ${rootOne}`;
            result2.value = ``;
            result3.value = ``;
        } else {
            result1.value = "No Roots";
            result2.value = "No Roots";
            result3.value = "No Roots";
        }
    } else {
        const discriminant = (q / 2) ** 2 + (p / 3) ** 3
        discriminantDisplay.value = `${discriminant}`

        if (discriminant < 0) {
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
        } else if (discriminant > 0) {
            const u = Math.cbrt(-q/2+Math.sqrt(discriminant));
            const v = Math.cbrt(-q/2-Math.sqrt(discriminant));
            const n = (-(u+v)/2)
            const m = (Math.cbrt(3)*(u-v))/2

            const rootOneReal = u + v - t
            const rootTwo = n + m - t
            const rootThree = n - m - t
            
            result1.value = `Root 1 = ${rootOneReal.toFixed(6)}`;
            result2.value = `Root 2 = ${rootTwo.toFixed(6)}`;
            result3.value = `Root 3 = ${rootThree.toFixed(6)}`;
        } else {
            /* work in progress */
            result1.value = `Root 1 = ${3}`;
            result3.value = `Root 3 = ${3}`;
            result2.value = `Root 2 = ${3}`;
        }
    }
})