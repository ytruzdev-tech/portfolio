/* ================= EMAILJS CONFIG =================
   Paste your values from https://dashboard.emailjs.com here.
   publicKey  -> Account > General > Public Key  (safe to expose; NEVER put a private key here)
   serviceId  -> Email Services > your service ID
   templateId -> Email Templates > your template ID
   Template variables must be {{from_name}}, {{reply_to}}, {{message}}. */
const EMAILJS_CONFIG = {
  publicKey:  "WRuDcUYyM9iTI2kyn",
  serviceId:  "service_k90nv9l",
  templateId: "template_4tuigis"
};
const MY_EMAIL = "work.ytruz@gmail.com";
const COOLDOWN_MS = 30000; // 30s between sends

/* ================= SKILLS DATA (edit me) =================
   level: "hands-on" or "learning". Set mini:true for a smaller card. */
const SKILLS = [
  { group: "Detection & Monitoring", items: [
    { n: "Log analysis (Windows Event Logs, Linux auth logs)", level: "hands-on" },
    { n: "SIEM basics (Wazuh)", level: "hands-on" },
    { n: "Alert triage", level: "learning" },
    { n: "False positive identification", level: "learning" } ]},
  { group: "Analysis & Triage", items: [
    { n: "Incident classification & severity rating", level: "hands-on" },
    { n: "Phishing email analysis", level: "hands-on" },
    { n: "Malware analysis basics", level: "learning" },
    { n: "IOC identification", level: "hands-on" },
    { n: "Threat intel lookup (VirusTotal, AbuseIPDB)", level: "hands-on" } ]},
  { group: "Containment & Response", items: [
    { n: "Host isolation", level: "hands-on" },
    { n: "Account lockout / password reset", level: "hands-on" },
    { n: "Basic containment steps", level: "hands-on" },
    { n: "Escalation procedures", level: "learning" } ]},
  { group: "Evidence & Documentation", items: [
    { n: "Evidence preservation", level: "hands-on" },
    { n: "Chain of custody", level: "hands-on" },
    { n: "Incident reports", level: "hands-on" },
    { n: "Timeline writing", level: "hands-on" },
    { n: "Ticketing & escalation notes", level: "learning" } ]},
  { group: "Frameworks", items: [
    { n: "NIST SP 800-61", level: "learning" },
    { n: "MITRE ATT&CK", level: "learning" },
    { n: "CIA triad", level: "hands-on" } ]},
  { group: "Tools", items: [
    { n: "Wazuh", level: "hands-on" },
    { n: "Wireshark", level: "hands-on" },
    { n: "Splunk Free / ELK", level: "learning" },
    { n: "VirtualBox / VMware", level: "hands-on" },
    { n: "Kali Linux", level: "hands-on" } ]},
  { group: "Foundations", items: [
    { n: "Networking (TCP/IP, DNS, HTTP, ports)", level: "hands-on" },
    { n: "Windows & Linux basics", level: "hands-on" },
    { n: "Python & Bash for log parsing", level: "learning" } ]},
  { group: "Supporting Dev Skills", mini: true, items: [
    { n: "JavaScript", level: "hands-on" }, { n: "Java", level: "learning" },
    { n: "C++", level: "learning" }, { n: "REST APIs", level: "hands-on" },
    { n: "Git/GitHub", level: "hands-on" } ]}
];

/* ================= PROJECTS DATA (edit me) =================
   type: "sec" or "dev"; featured:true makes a large card (keep to 2). */
const GH = "https://github.com/ytruzdev-tech/";
const PROJECTS = [
  { type:"sec", featured:true, name:"Python Log Analyzer", d:"Parses Windows/Linux auth logs to flag brute-force attempts and suspicious logins.", t:["Python","Logs","Detection"], u:GH+"python-log-analyzer" },
  { type:"sec", featured:true, name:"Wazuh Lab", d:"Home SIEM lab with agents, custom rules, and alert triage practice.", t:["Wazuh","VirtualBox","SIEM"], u:"wazuh-lab" },
  { type:"sec", name:"Phishing Email Analysis", d:"Header and URL analysis of sample phishing emails with IOC extraction.", t:["Phishing","VirusTotal","IOC"], u:"phishing-email-analysis" },
  { type:"sec", name:"Wireshark Write-up", d:"Packet capture walkthrough identifying suspicious traffic patterns.", t:["Wireshark","TCP/IP","DNS"], u:"wireshark-writeup" },
  { type:"sec", name:"IR Playbook", d:"Step-by-step incident response playbook based on NIST SP 800-61.", t:["NIST","Playbook","Docs"], u:"ir-playbook" },
  { type:"dev", name:"QR Code Based Attendance System for Maranatha Christian Academy of Manggahan Montalban", d:"Developed and implemented a QR code-based attendance system to streamline student attendance tracking, now used daily by over 1,100 students from Kindergarten to Grade 10 at Maranatha Christian Academy.", t:["C++","HTML, CSS, JS"], u: "https://github.com/ytruzdev-tech/QR-Code-Based-Attendance-System-For-Maranatha-Christian-Academy-of-Manggahan-Montalban-INC" },
  { type:"dev", name:"QR Code Based Loyalty System for Cuddle and-Bean Cafe Montalban", d:"Developed and deployed a QR code-based loyalty system for Cuddle & Bean Café in Rodriguez (Montalban), Rizal, enabling digital loyalty tracking and improving customer reward management. The system is currently used in the café's daily operations.", t:["C++","HTML, CSS, JS"], u:"https://github.com/ytruzdev-tech/QR-Code-Based-Loyalty-System-for-Cuddle-and-Bean-Cafe-Montalban" },
  { type:"dev", name:"CraftyPrint E-Commerce Template Marketplace", d:"Crafty Print is a Filipino-based online shop specializing in educational and learning materials. Built with modern web technologies, Firebase Firestore, and EmailJS, it offers a seamless shopping experience with features like product browsing, search, AI-powered suggestions, cart management, reviews, admin dashboard, and more. Features", t:["HTML, CSS, JS, Firebase Console"], u:"https://github.com/ytruzdev-tech/CraftyPrint-E-Commerce-Template-Marketplace" },
  { type:"dev", name:"FeelShare Emotional Sharing System for All Ages", d:"Developed an emotional sharing platform for all ages, enabling users to express their feelings and share personal experiences in a supportive digital space.", t:["HTML, CSS, JS", "Firebase Console"], u:"https://github.com/ytruzdev-tech/FeelShare-Emotional-Sharing-System-for-All-Ages" },
  { type:"dev", name:"Company Conversation System", d:"Developed a company communication system that streamlines internal conversations and facilitates efficient information sharing among team members.", d:"", t:["HTML, CSS, JS","Firebase Console"], u:"https://github.com/ytruzdev-tech/Company-Conversation-System" }
];

/* ================= RENDER ================= */
const $ = (s, r = document) => r.querySelector(s);
const tagHTML = t => `<span class="tag">${t}</span>`;

$("#skillGrid").innerHTML = SKILLS.map(g => `
  <div class="card reveal${g.mini ? " mini" : ""}">
    <h3>${g.group}</h3>
    <div class="tags">${g.items.map(i => `<span class="tag">${i.n}<span class="badge ${i.level === "hands-on" ? "hands" : "learn"}">${i.level === "hands-on" ? "Hands-on" : "Learning"}</span></span>`).join("")}</div>
  </div>`).join("");

const projCard = p => `
  <article class="card reveal${p.featured ? " big" : ""}">
    <h3>${p.name}</h3><p>${p.d}</p>
    <div class="tags">${p.t.map(tagHTML).join("")}</div>
    <p><a href="${p.u}" target="_blank" rel="noopener">GitHub &rarr;</a></p>
  </article>`;
$("#secProjects").innerHTML = PROJECTS.filter(p => p.type === "sec").map(projCard).join("");
$("#devProjects").innerHTML = PROJECTS.filter(p => p.type === "dev").map(projCard).join("");
$("#yr").textContent = new Date().getFullYear();

/* ================= NAV ================= */
const burger = $(".burger"), menu = $("#menu");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") menu.classList.remove("open"); });

/* Active-section highlight */
const links = [...menu.querySelectorAll("a")];
const secObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => secObs.observe(s));

/* Scroll reveal */
const revObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => revObs.observe(el));

/* ================= PROFILE PHOTO HOVER / TAP EFFECT ================= */
const card = $("#photoCard");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
const MAX_TILT = 12; // degrees

card.addEventListener("mouseenter", () => card.classList.add("flipped"));
card.addEventListener("mousemove", e => {
  if (reduce.matches) return;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  card.style.transition = "box-shadow .35s, border-color .35s"; // follow cursor without lag
  card.style.transform = `translateY(-10px) rotateX(${-y * MAX_TILT * 2}deg) rotateY(${x * MAX_TILT * 2}deg)`;
});
card.addEventListener("mouseleave", () => {
  card.style.transition = ""; card.style.transform = ""; // smooth return
  card.classList.remove("flipped");
});
/* Touch devices (and keyboard Enter/Space): toggle on tap */
card.addEventListener("click", () => { if (window.matchMedia("(hover: none)").matches) card.classList.toggle("flipped"); });
card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.classList.toggle("flipped"); } });

/* ================= CONTACT FORM (EmailJS v4) ================= */
try { emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey }); } catch (e) { console.warn("EmailJS not loaded", e); }

const form = $("#contactForm"), btn = $("#sendBtn"), status = $("#formStatus");
const setStatus = (msg, cls) => { status.textContent = msg; status.className = "status " + (cls || ""); };
let lastSent = 0;

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (form.website.value) return; // honeypot filled: silently block

  form.querySelectorAll("input,textarea").forEach(f => f.classList.add("touched"));
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.reply_to.value.trim());
  if (!form.from_name.value.trim() || !form.message.value.trim() || !emailOk) {
    return setStatus("Please fill in all fields with a valid email.", "err");
  }
  const wait = Math.ceil((COOLDOWN_MS - (Date.now() - lastSent)) / 1000);
  if (wait > 0) return setStatus(`Please wait ${wait}s before sending again.`, "err");

  btn.disabled = true; btn.textContent = "Sending..."; setStatus("");
  try {
    await emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form);
    lastSent = Date.now();
    setStatus("Message sent! I'll reply soon.", "ok");
    form.reset(); form.querySelectorAll(".touched").forEach(f => f.classList.remove("touched"));
  } catch (err) {
    console.error(err);
    setStatus(`Failed to send. Please email me directly at ${MY_EMAIL}.`, "err");
  } finally { btn.disabled = false; btn.textContent = "Send"; }
});