/* ==========================================================
   SCRIPT.JS  -  Raihan Ariiq portfolio
   1. Image settings   2. Placeholder mockups
   3. Project content  4. Rendering + routing
   ========================================================== */

/* 1. IMAGE SETTINGS
   Photos are loaded automatically from:
   images/<project-key>/cover.jpg      (card + top of case study)
   images/<project-key>/wireframe.jpg  (wireframes section)
   images/<project-key>/final.jpg      (final design section)
   If a file is missing, the placeholder mockup stays visible. */
const IMG_DIR = "images/";
const IMG_EXT = "jpg"; // change to 'png' or 'webp' if needed
const img = (k, slot, alt) =>
  `<img class="photo" src="${IMG_DIR}${k}/${slot}.${IMG_EXT}" alt="${alt}" loading="lazy" onerror="this.remove()">`;

/* 2. PLACEHOLDER MOCKUPS (shown until your photo exists) */
const M = {
  karyaone: () =>
    `<div class="m"><div class="dash"><aside><b></b><b></b><b></b><b></b><b></b></aside><main><div class="stats"><div><span></span><em></em></div><div><span></span><em></em></div><div><span></span><em></em></div></div><div class="rows">${"<div><i></i><span></span><span></span><u></u></div>".repeat(5)}</div></main></div></div>`,
  jobly: () =>
    `<div class="phones">${[0, 1, 2].map((n) => `<div class="ph"><s class="f"></s><s></s>${'<div class="j"><i></i><i></i><u></u></div>'.repeat(n == 2 ? 2 : 3)}</div>`).join("")}</div>`,
  maticspeedshop: () =>
    `<div class="m"><div class="site"><div class="nv"><b></b><span></span></div><div class="hr"><i></i><i></i><u></u></div><div class="sv"><div></div><div></div><div></div></div><div class="mob"><i></i><i style="width:60%"></i><u></u><u style="border-top-color:#1d4ed8"></u></div></div></div>`,
  fixcar: () =>
    `<div class="ig">${["r", "w", "b", "b", "r", "w", "w", "b", "r"].map((c) => `<div class="${c}"><i></i><i></i></div>`).join("")}</div>`,
};
/* 3. PROJECT CONTENT - edit the text for each project here */
const P = [
  {
    k: 'karyaone',
    n: '01',
    name: 'KaryaOne',
    cat: 'Web Development · HRIS Application',
    t: 'Simplifying Employee Management',
    d: 'A web-based Human Resource Information System (HRIS) developed to streamline employee management, attendance tracking, leave requests, and payroll administration in one integrated platform.',
    bg: 'Managing employee information and HR activities can become complicated when data is spread across different systems. KaryaOne was developed to bring essential HR functions into one centralized workspace, making employee administration more organized and accessible.',
    
    goals: [
    'Centralize employee data and HR administration in one platform',
    'Streamline attendance tracking and leave request management',
    'Organize payroll information for easier access and management',
    'Provide a clear and consistent interface across HR modules'
  ],

    role: [
    'HRIS web application development',
    'Employee management and data handling',
    'Implementation of attendance and leave management modules',
    'Development of payroll management features',
    'User interface implementation and usability improvements'
  ],

    flow: [
    'Dashboard',
    'Employee Management',
    'Attendance Management',
    'Leave Requests',
    'Payroll Management'
  ],

  ref: 'This project strengthened my understanding of how web applications can address business and human resource management needs. I learned to translate operational requirements into functional features while considering usability, data organization, and workflow efficiency. Moving forward, I aim to improve the application’s functionality, strengthen data management and access control, and explore additional features that can make HR processes more efficient and reliable.'
},
  {
    k: "jobly",
    n: "02",
    name: "Jobly",
    cat: "UI/UX Design · Mobile App",
    t: "Find Opportunities That Fit You",
    d: "A job discovery app concept that helps users explore career opportunities based on work type, location, and salary preferences.",
    bg: "Job searching on mobile can feel noisy. This concept focuses on helping people narrow listings quickly by the preferences that matter most to them.",
    goals: [
      "Make filtering by work type, location, and salary fast",
      "Present job details clearly on a small screen",
      "Let users save and revisit opportunities",
    ],
    role: [
      "UI/UX design",
      "Mobile interaction and flow design",
      "Visual design and prototyping in Figma",
    ],
    flow: ["Search", "Filters", "Job list", "Job details", "Saved jobs"],
    ref: "Add your own reflection here: usability checks you would run and features you would explore next.",
  },
  {
    k: "maticspeedshop",
    n: "03",
    name: "MaticSpeedShop",
    cat: "Web Design · Development",
    t: "A Better Digital Experience for Automotive Services",
    d: "A service-focused website designed to present automatic transmission services clearly and help customers find the information they need.",
    bg: "Automotive service sites can be hard to navigate for people who just want to know what is offered. This project aims for a clear, trustworthy information structure.",
    goals: [
      "Explain services in plain language",
      "Make contact and booking paths obvious",
      "Work well on both desktop and mobile",
    ],
    role: [
      "Web design",
      "Front-end development with HTML, CSS, and JavaScript",
      "Responsive layout and content structure",
    ],
    flow: ["Home", "Services", "Service detail", "Contact"],
    ref: "Through this project, I learned how to develop a website that presents automotive services clearly while maintaining a consistent visual identity. The process helped me understand the importance of website performance, informative content, and accessible navigation in creating a better user experience. Moving forward, I aim to optimize loading speed, improve service descriptions and SEO, and enhance accessibility across devices. I also plan to refine the navigation and contact features to help users find relevant information and reach the workshop more easily.",
  },
  {
    k: "fixcar",
    n: "04",
    name: "FixCar Automotive",
    cat: "Visual Design · Social Media",
    t: "Creating a Consistent Visual Identity",
    d: "A collection of automotive social media designs focused on consistent branding, clear communication, and engaging promotional content.",
    bg: "Promotional posts work better when they feel like one brand. This project builds a repeatable visual system in red, blue, and white.",
    goals: [
      "Keep branding consistent across posts",
      "Communicate offers and services clearly",
      "Create layouts that are easy to reuse",
    ],
    role: [
      "Visual design",
      "Layout and template system",
      "Campaign content design",
    ],
    flow: null,
    ref: "Moving forward, I aim to explore more creative layouts, develop templates for Stories and carousels, and maintain a consistent visual identity across different content formats.",
  },
];
/* 4. RENDERING + ROUTING */
const $ = (s) => document.querySelector(s);
$("#grid").innerHTML = P.map(
  (p) =>
    `<a class="card" href="#${p.k}"><div class="thumb">${M[p.k]()}${img(p.k, "cover", p.name)}</div><div class="meta"><span class="eyebrow">${p.n} · ${p.cat}</span><h3>${p.t}</h3><p>${p.d}</p><span class="lnk">View Case Study →</span></div></a>`,
).join("");
const sec = (i, h, b, vis) =>
  `<div class="cs"><h2><span>${i}</span>${h}</h2><div>${b}</div></div>`;
function caseHTML(i) {
  const p = P[i],
    nx = P[(i + 1) % P.length],
    ul = (a) => "<ul>" + a.map((x) => `<li>${x}</li>`).join("") + "</ul>";
  return `<div class="wrap case"><a class="back" href="#work">← All projects</a><div style="margin-top:32px" class="eyebrow">${p.cat}</div><h1>${p.t}</h1><p class="lead">${p.d}</p>
<div class="cv">${M[p.k]()}${img(p.k, "cover", p.name)}</div>
${sec("01", "Project overview", `<p>${p.name} is a ${p.cat.split(" · ")[1].toLowerCase()} project within ${p.cat.split(" · ")[0]}. ${p.d}</p>`)}
${sec("02", "Background and challenge", `<p>${p.bg}</p>`)}
${sec("03", "Project goals", ul(p.goals))}
${sec("04", "My role", ul(p.role))}
${sec("05", "Design process", `<div class="steps"><div><b>01</b>Understand the problem</div><div><b>02</b>Structure and explore</div><div><b>03</b>Design and refine</div><div><b>04</b>Prototype and review</div></div>`)}
${p.flow ? sec("06", "Information architecture", `<div class="flow">${p.flow.map((f) => `<span>${f}</span>`).join("<i>→</i>")}</div>`) : sec("06", "Information architecture", "<p>Not applicable for this project. The work centers on a reusable post system rather than a navigable product.</p>")}
${sec("07", "Wireframes and explorations", `<div class="cv lofi">${M[p.k]()}${img(p.k, "wireframe", p.name + " wireframes")}</div>`)}
${sec("08", "Final design and mockups", `<div class="cv">${M[p.k]()}${img(p.k, "final", p.name + " final design")}</div>`)}
${sec("09", "Reflection and next steps", `<p>${p.ref}</p>`)}
<div class="next"><a href="#work">← Back to work</a><a href="#${nx.k}">Next: ${nx.name} →</a></div></div>`;
}
function route() {
  const h = location.hash.slice(1),
    i = P.findIndex((p) => p.k === h);
  $("#nav").classList.remove("open");
  $("#bg").setAttribute("aria-expanded", "false");
  if (i >= 0) {
    $("#home").hidden = true;
    $("#case").hidden = false;
    $("#case").innerHTML = caseHTML(i);
    document.title = P[i].name + " — Raihan Ariiq";
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    $("#home").hidden = false;
    $("#case").hidden = true;
    document.title = "Raihan Ariiq Portfolio";
    const e = h && document.getElementById(h);
    if (e) setTimeout(() => e.scrollIntoView(), 0);
    else window.scrollTo(0, 0);
  }
}
addEventListener("hashchange", route);
route();
$("#bg").onclick = () => {
  const o = $("#nav").classList.toggle("open");
  $("#bg").setAttribute("aria-expanded", o);
};
$("#up").onclick = (e) => {
  e.preventDefault();
  if (location.hash && P.some((p) => p.k === location.hash.slice(1))) {
    location.hash = "work";
  } else window.scrollTo({ top: 0, behavior: "smooth" });
};
document
  .querySelectorAll('a[href="#"]')
  .forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));

  const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));