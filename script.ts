const form = document.getElementById("cubicSolverForm") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const a: number = Number(formData.get("a-value"));
    const b: number = Number(formData.get("b-value"));
    const c: number = Number(formData.get("c-value"));
    const d: number = Number(formData.get("d-value"));

    const p = ((3 * a * c - b * b) / (3 * a * a))
    const q = ((27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a))
    const t = (-b/3*a)
    console.log(p)
    console.log(q)

    const discriminant = (q / 2) ** 2 + (p / 3) ** 3
    console.log(discriminant)

    if (discriminant < 0) {
        const theta = (1/3)*(Math.acos(q)
        const rootOne = Math.cbrt((-q / 2) + Math.sqrt(discriminant)) + Math.cbrt((-q / 2) - Math.sqrt(discriminant)) - (b / (3*a));
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        const rootThree = (-b - Math.sqrt(discriminant)) / (2 * a);
        (document.getElementById("root1") as HTMLInputElement).value = `x1=${rootOne}`;
        (document.getElementById("root2") as HTMLInputElement).value = `x2=${rootTwo}`;
        (document.getElementById("root3") as HTMLInputElement).value = `x3=${rootThree}`;
    } else if (discriminant > 0) {
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        (document.getElementById("root3") as HTMLInputElement).value = `x=${rootOne}`;
    }
})