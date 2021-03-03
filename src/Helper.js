// Obtener diferencia de años
export function getDifference(year) {
    return new Date().getFullYear() - year;
}

// Calcula el total a pagar según la marca de coche
export function calcBrand(brand) {
    let increment;

    switch (brand) {
        case 'europeo':
            increment = 1.3;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment
}

// Calcular el tipo de seguro
export function getPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.5;
}

// Primera letra mayúscula
export function firstUppercase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}