const form = document.getElementById("cubicSolverForm") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const a: number = Number(formData.get("a-value"));
    const b: number = Number(formData.get("b-value"));
    const c: number = Number(formData.get("c-value"));
    const d: number = Number(formData.get("d-value"));
    
    const p = ((3 * a * c - b * b) / (3 * a * a))
    const q = ((27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a *a))

    const discriminant = (q / 2) ** 2 + (p / 3) ** 3

    if (discriminant < 0) {
        (document.getElementById("root1") as HTMLInputElement).value = "No Roots";
    } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        (document.getElementById("root2") as HTMLInputElement).value = `x1=${rootOne}, x2=${rootTwo}`;
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        (document.getElementById("root3") as HTMLInputElement).value = `x=${rootOne}`;
    }
})