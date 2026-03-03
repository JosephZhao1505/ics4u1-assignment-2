const form = document.getElementById("cubicSolverForm") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const a: number = Number(formData.get("a-value"));
    const b: number = Number(formData.get("b-value"));
    const c: number = Number(formData.get("c-value"));
    const d: number = Number(formData.get("d-value"));

    const root1 = document.getElementById("root1") as HTMLInputElement;
    const root2 = document.getElementById("root2") as HTMLInputElement;
    const root3 = document.getElementById("root3") as HTMLInputElement;

    const p = ((3 * a * c - b * b) / (3 * a * a));
    const q = ((27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a));
    const t = b / (3 * a);

    if (a === 0) {

        const discriminant = c * c - 4 * b * d;

        if (discriminant < 0) {
            root1.value = "No Roots";
            root2.value = "No Roots";
            root3.value = "No Roots";
        } else if (discriminant > 0) {
            const rootOne = (-c + Math.sqrt(discriminant)) / (2 * b);
            const rootTwo = (-c - Math.sqrt(discriminant)) / (2 * b);
            root1.value = `Root 1 = ${rootOne}`;
            root2.value = `Root 2 = ${rootTwo}`;
            root3.value = ``;
        } else {
            const rootOne = (-c + Math.sqrt(discriminant)) / (2 * b);
            root1.value = `Root 1 = ${rootOne}`;
            root2.value = ``;
            root3.value = ``;
        }

    } else {
        const discriminant = (q / 2) ** 2 + (p / 3) ** 3

        if (discriminant < 0) {
            const acosX = -q / (2 * Math.sqrt(-((p / 3) ** 3)));
            const limiter = Math.max(-1, Math.min(1, acosX));
            const theta = (1 / 3) * Math.acos(limiter);
            const r = 2 * Math.sqrt(-p / 3);
            const rootOne = r * Math.cos(theta) - t;
            const rootTwo = r * Math.cos(theta + (2 * Math.PI) / 3) - t;
            const rootThree = r * Math.cos(theta + (4 * Math.PI) / 3) - t;
            root1.value = `Root 1 = ${rootOne.toFixed(6)}`;
            root2.value = `Root 2 = ${rootTwo.toFixed(6)}`;
            root3.value = `Root 3 = ${rootThree.toFixed(6)}`;
        } else if (discriminant > 0) {
            /* work in progress */
            root1.value = `Root 1 = ${2}`;
            root2.value = `Root 2 = ${2}`;
            root3.value = `Root 3 = ${2}`;
        } else {
            /* work in progress */
            root1.value = `Root 1 = ${3}`;
            root3.value = `Root 3 = ${3}`;
            root2.value = `Root 2 = ${3}`;
        }
    }
})