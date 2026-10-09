import pau from "../../assets/imatge_pau.png";
import marc from "../../assets/imatge_marc.png";
import marcCv from "../../assets/cvcat.pdf";

// Content supplied by cv_template.png. Add cvUrl when a PDF is available.
const teamMembers = [
  {
    id: "pau", name: "Pau Cereijo Darnaculleta", role: "President · Politòleg", image: pau,
    summary: "President de la cooperativa Principia, politòleg i jurista que impulsa la transformació social mitjançant recerca i participació ciutadana.",
    experience: [
      { title: "Principia · President de la cooperativa", period: "2027–Actualment", location: "Calonge" },
      { title: "Principia · Cofundador de la cooperativa", period: "2027", location: "Calonge" },
      { title: "Ajuntament de Calonge · Administrador, Mobilitat i Via Pública (Pràctiques)", period: "06/2025–09/2025", location: "Calonge" },
      { title: "Notaria de Palamós · Administrador de la notaria (Pràctiques)", period: "06/2025–09/2025", location: "Palamós" },
      { title: "Pam a Pam · Entrevistador i gestió administrativa (Pràctiques)", period: "03/2025–04/2025", location: "Barcelona" },
    ],
    education: [
      { title: "Universitat Pompeu Fabra · Grau en Ciències Polítiques i de l'Administració", period: "09/2022–06/2026", location: "Barcelona" },
      { title: "Universitat Pompeu Fabra · Grau en Dret", period: "09/2024–06/2028", location: "Barcelona" },
      { title: "Coòpolis · Formació per creació i constitució de cooperativa", period: "01/2027–06/2027", location: "Barcelona" },
      { title: "UNED · Màster en Problemes Socials", period: "09/2026–06/2027", location: "Madrid" },
    ],
    description: [
      "Sóc un jove politòleg i jurista compromès amb la transformació de l'arrel. La meva inquietud no neix d'un despatx, sinó de la voluntat de reconciliar la justícia social amb la realitat que vivim cada dia.",
      "Aquest projecte va començar a les aules de batxillerat, quan vaig sentir la necessitat de trobar una tasca que em permetés ajudar i impactar el màxim de persones possibles. No entenia per què el món real funcionava de manera tan diferent de com ens ensenyaven a l'escola: ens deien que compartíssim, però hi havia gent sense menjar.",
      "He encaminat tota la meva trajectòria estudiantil en aquest projecte, estudiant política per descobrir les palanques de canvi i dret per entendre les regles del joc. Per conèixer la realitat de prop, he treballat en entitats locals com ajuntaments, analitzant com fer les institucions més accessibles a través de la tecnologia.",
      "També he tingut l'oportunitat de treballar en xarxes d'economia solidària com Pam a Pam, el mapa de l'ESS, on vaig descobrir que les cooperatives són la via més viable per fabricar un futur que realment ens pertanyi.",
      "Després de treballar a Pam a Pam (el mapa de l'ESS), vaig decidir fer un pas més. Per fabricar Principia amb rigor, m'he format de la mà de JovESS i Coòpolis, aprenent a construir una organització realment democràtica i transformadora.",
      "Tinc ganes de canviar el món i deixar de ser un simple espectador que mira des de la grada. Principia és la meva aposta per fabricar les eines que ens permetin construir un futur més just, més viu i més nostre. Vols acompanyar-nos en aquest principi?",
    ],
    publications: [
      { title: "TFG — Política Pública per augmentar la democràcia directa a Barcelona" },
      { title: 'Autor del llibre "Reflexions: Una Utopia o un possible futur?"' },
      { title: "Autor del Llibre 1: Principia" }, { title: "Autor del Llibre 2: Demarquia" },
    ],
    languages: [{ name: "Català", level: "Natiu" }, { name: "Castellà", level: "Natiu" }, { name: "Alemany", level: "Avançat" }, { name: "Anglès", level: "Intermedi" }, { name: "Francès", level: "Bàsic" }],
    skills: [
      { title: "Professionals i administratives", items: ["Gestió administrativa integral", "Coordinació d'equips i projectes", "Excel i RStudio avançat", "Redacció institucional", "Pràctiques municipals i notarials", "Normativa pública (Llei 39/2015, ESS)"] },
      { title: "Anàlisi i polítiques públiques", items: ["Anàlisi de polítiques públiques", "Informes de democràcia directa", "Síntesi de propostes operatives", "Pensament crític", "Emprenedoria social"] },
      { title: "Socials i comunicatives", items: ["Comunicació pública empàtica", "Facilitació de tallers", "Comunicació comunitària", "Pensament socràtic", "Pedagogia Waldorf"] },
      { title: "Tècniques i digitals", items: ["Excel, RStudio, eines digitals", "Decidim i Demarquia", "Programació amb valors cooperatius", "Vot electrònic segur"] },
      { title: "Pràctiques i creatives", items: ["Costura i carpinteria", "Cultiu i tasques agrícoles", "Treball autònom", "Gestió cívica de proximitat"] },
      { title: "Adquirides construint Principia", items: ["Lideratge cooperatiu", "Economia Social i Solidària", "Estructures jurídiques cooperatives", "Intercooperació (Communia, JovESS, AccESS)"] },
      { title: "Adquirides amb estudis", items: ["Emprenedoria social", "Anàlisi política i jurídica", "Educació cívica", "Disseny participatiu digital"] },
    ],
  },
  { id: "antonio", name: "Antonio Garcia", role: "Tresorer · Economista", summary: "Assegura compliment normatiu i adapta processos participatius a marcs legals." },
  { id: "marti", name: "Martí Salvador", role: "Àrea laboral · Expert en relacions internacionals", summary: "Dissenya metodologies participatives i facilita dinàmiques de coproducció." },
  {
    id: "marc", name: "Marc Mas Palomares", role: "Secretari · Informàtic", image: marc,
    summary: "Secretari de la cooperativa Principia, un jove informàtic que posa la tecnologia al servei de la transformació social, programant eines que fan la democràcia accessible.",
    cvUrl: marcCv,
    experience: [
      { title: "Vermuteria Xarel·lo · Cambrer / Bartender, repartiment, inventari i venda al públic", period: "08/2025–09/2026; 06–09/2023 i 06–09/2024" },
      { title: "COMEXI Group · Programador Full-Stack amb Laravel, PHP, SQL, HTML, CSS i JavaScript (React/Vue)", period: "12/2024–07/2025" },
      { title: "Escola de Vall-llobrega · Tècnic informàtic: manteniment i reparació d'equips, instal·lació de canaletes, suport docent i inventari", period: "11/2021–05/2022", location: "Vall-llobrega" },
    ],
    education: [
      { title: "Institut Montilivi · Grau superior en Desenvolupament d'Aplicacions Web", period: "09/2026–Actualment" },
      { title: "Institut Montilivi · Grau superior en Desenvolupament d'Aplicacions Multiplataforma", period: "09/2022–05/2025" },
      { title: "Institut de Palamós · Grau mitjà en Sistemes Microinformàtics i Xarxes", period: "09/2020–05/2022", location: "Palamós" },
    ],
    description: [
      "Desenvolupador Full-Stack amb experiència en la creació de pàgines web amb Laravel, PHP i SQL, i en la maquetació amb HTML, CSS i JavaScript, incloent-hi React i Vue.",
      "Persona polivalent, organitzada i amb experiència laboral en informàtica, atenció al públic, inventari i repartiment. Amb capacitat de treballar en equip i de manera autònoma, i de treballar sota pressió.",
    ],
    publications: [{ title: "Portafoli web · Projectes", url: "https://portfolio-b64684.webflow.io/" }],
    languages: [{ name: "Català", level: "Natiu" }, { name: "Castellà", level: "Natiu" }, { name: "Anglès", level: "C1" }],
    skills: [
      { title: "Programació i desenvolupament web", items: ["C#", "JavaScript", "PHP", "HTML/CSS", "Python", "Laravel", "SQL", "React/Vue"] },
      { title: "Informàtica i eines digitals", items: ["Manteniment i reparació d'equips informàtics", "Inventari d'equips", "Domini del paquet Office"] },
      { title: "Competències personals", items: ["Bona comunicació", "Escolta activa", "Resolució de problemes", "Agilitat amb els resultats", "Treball en equip i autònom", "Organització i treball sota pressió"] },
      { title: "Mobilitat", items: ["Carnet de conduir", "Vehicle propi"] },
    ],
  },
  { id: "alexander", name: "Alexander Ros", role: "Responsable de màrqueting", summary: "Coordina col·laboracions i acords amb administracions i entitats." },
];

export default teamMembers;
