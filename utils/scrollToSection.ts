/**
 * Función para hacer scroll suave a una sección específica
 * @param sectionId - El ID de la sección a la que se quiere hacer scroll (sin el #)
 * @param offset - Offset adicional en píxeles (por defecto 80 para compensar el navbar)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

