export const scrollToSection = (path: string) => {
  const sectionId = path.toLowerCase();
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({ behavior: "smooth", top: section.offsetTop });
  }
};
