"use client";
import { useState, useEffect, useRef } from "react";

// ── COLORS ────────────────────────────────────────────────────────────────
const ACCENT = "#016342"; // dark green (kept as main accent)
const BG = "#fff9ed"; // very soft cream (instead of yellow)
const DARK = "#1a1614"; // deep brown / near‑black
const LIGHT = "#f0f0f0"; // soft light gray for backgrounds

// ── OPTIONS ───────────────────────────────────────────────────────────────
const HOTELS = [
  "Hotel Lungarno",
  "Portrait Firenze",
  "The St. Regis Florence",
  "The Excelsior, Florence",
  "Palazzo Ottaviani Apartments",
  "Other",
];

const DATES = [
  "17th September, 2026",
  "18th September, 2026",
  "19th September, 2026",
];

const SERVICES = ["Hair Style", "Make-Up", "Saree Draping"];

const SALON_GROUPS = [
  {
    label: "Near Auberge (Collegio alla Querce)",
    salons: [
      {
        name: "Giulia Papke Make-Up",
        // instagram: "https://www.instagram.com/giuliapapke_makeupartist/",
        website: "https://www.giuliapapke.it/",
        email: "giulia.papke@gmail.com",
      },
      {
        name: "Hairforce Firenze",
        note: "Multiple Outlets",
        website: "https://hairforce.it/it/",
        email: "info@hairforce.it",
      },
      {
        name: "Jojóstyle Hair & Beauty",
        instagram: "https://www.instagram.com/jojostyle_hairbeauty/",
        contact: "+39 3428391857",
        contactNote: "WhatsApp",
      },
    ],
  },
  {
    label: "Near The St. Regis Florence",
    salons: [
      {
        name: "Wave Salon Firenze",
        // instagram: "https://www.instagram.com/wave_parrucchierifirenze/",
        website: "https://www.parrucchieriwavefirenze.com/en-gb",
        contact: "+39 055 265 4650",
      },
      {
        name: "Elenora Gentile Luxury Hair Spa",
        website: "https://www.eleonoragentile.com/en/",
        contact: "+39 055 051 6047",
      },
      {
        name: "Pistolesi Group",
        // instagram: "https://www.instagram.com/pistolesigroupofficial/",
        website: "https://www.pistolesigroup.it/en/",
        contact: "334 2449019",
      },
    ],
  },
  {
    label: "near Hotel Excelsior, Florence: ",
    salons: [
      {
        name: "Fabio Colucci – The House of Hair",
        instagram: "https://www.instagram.com/fc_thehouseofhair_/?utm_source=chatgpt.com",
        // website: "https://www.parrucchieriwavefirenze.com/en-gb",
        contact: "+39 055 267 0519",
      },
      {
        name: "Platinum Beauty Studio",
        instagram: " https://www.instagram.com/studioplatinumbeauty",
        contact: " +39 344 340 0707",
      },
      {
        name: "Wave Salon Firenze ",
        website: "  https://www.parrucchieriwavefirenze.com/en-gb",
        contact: " +39 055 265 4650",
      },
    ],
  },
];

// Steps: 0=personal+stay, 1=services, 2=details, 3=review
const TOTAL_STEPS = 4;

export default function SalonServicesPage() {
  const headerRef = useRef(null);
  const formRef = useRef(null);

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    hotel: "",
    dates: [],
    services: [],
    hairLength: "",
    hairExtensions: "",
    makeupBrief: "",
    makeupRefs: [],
    lashes: "",
    readyTime: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [dragOver, setDragOver] = useState(false);

  // GSAP intro animations
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll(".hdr-anim"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      }
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 },
        );
      }
    });
  }, []);

  // GSAP slide‑in for each step body
  useEffect(() => {
    if (formRef.current) {
      import("gsap").then(({ gsap }) => {
        gsap.fromTo(
          formRef.current.querySelector(".step-body"),
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        );
      });
    }
  }, [step]);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  const toggleArr = (key, val) => {
    setForm((f) => {
      const arr = f[key];
      return {
        ...f,
        [key]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val],
      };
    });
  };

  const needsHair = form.services.includes("Hair Style");
  const needsMakeup = form.services.includes("Make-Up");

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.fullName.trim()) e.fullName = "Required";
      if (!form.contact.trim()) e.contact = "Required";
      if (!form.hotel) e.hotel = "Please select a hotel";
      if (!form.dates.length) e.dates = "Select at least one date";
    }
    if (step === 1) {
      if (!form.services.length) e.services = "Select at least one service";
    }
    if (step === 2) {
      if (needsHair && !form.hairLength) e.hairLength = "Required";
      if (needsHair && !form.hairExtensions) e.hairExtensions = "Required";
      if (needsMakeup && !form.makeupBrief.trim()) e.makeupBrief = "Required";
      if (needsMakeup && !form.lashes) e.lashes = "Required";
      if (!form.readyTime.trim()) e.readyTime = "Required";
    }
    setErrors(e);
    return !Object.keys(e).length;
  };

  const next = () => {
    if (validate()) setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleFileChange = (files) => {
    set("makeupRefs", Array.from(files).slice(0, 5));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const stepLabels = [
    "1. Personal & Stay",
    "2. Services",
    "3. Details",
    "4. Review",
  ];

  return (
    <div
      className="pt-[15vh]"
      style={{
        backgroundColor: BG,
        minHeight: "100vh",
        fontFamily: "'Jost', sans-serif",
        color: ACCENT,
        overflowX: "hidden",
      }}
    >
      {/* ── DECORATIVE BACKGROUND PATTERN ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            radial-gradient(circle at 15% 50%, rgba(23,62,61,0.02) 0%, transparent 50%),
            radial-gradient(circle at 85% 20%, rgba(23,62,61,0.02) 0%, transparent 40%)
          `,
        }}
      />

      {/* ── HEADER ── */}
      <header
        ref={headerRef}
        style={{
          position: "relative",
          zIndex: 1,
          padding: "60px 20px 50px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          className="hdr-anim Font_Q uppercase"
          style={{
            color: ACCENT,
          }}
        >
          Salon Services
        </h2>
        
      </header>

     

      {/* ── SALON RECOMMENDATIONS ── */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto 72px",
          padding: "0 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Divider */}
        

        <header
          ref={headerRef}
          className="pb-[10vh] "
          style={{
            position: "relative",
            zIndex: 1,
            // padding: "60px 20px 50px",
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* <h2
          className="hdr-anim Font_Q uppercase"
          style={{
            color: ACCENT,
          }}
        >
          Salon Services
        </h2> */}
          <p
            className="hdr-anim Font_YV  mx-auto"
            style={{
              color: ACCENT,
              lineHeight: 1.6,
              maxWidth: 560,
              padding: "0 10px",
            }}
          >
            Whether you are looking for a quick blow-dry, professional makeup,
            hairstyling, grooming services, or an on-location appointment at
            your hotel, you will find a selection of trusted salons and beauty
            professionals near Auberge, St. Regis, and Excelsior.
          </p>
          <p
            className="hdr-anim Font_YV mx-auto mt-5 "
            style={{
              color: ACCENT,
              lineHeight: 1.6,
              maxWidth: 560,
              padding: "0 10px",
            }}
          >
            As appointment availability may be limited during the wedding
            celebrations, we encourage guests to contact providers and secure
            bookings in advance.
          </p>
        </header>

        {SALON_GROUPS.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 52 }}>
            {/* Group label */}
            <div
              style={{
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: ACCENT,
                  // opacity: 0.5,
                  flexShrink: 0,
                }}
              />
              <h3
                className="Font_YV"
                style={{
                  fontSize: "clamp(11px, 2vw, 13px)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                  // opacity: 0.55,
                  fontWeight: 400,
                }}
              >
                {group.label}
              </h3>
            </div>

            {/* Salon cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {group.salons.map((salon, si) => (
                <SalonCard key={si} salon={salon} />
              ))}
            </div>
          </div>
        ))}

        {/* Disclaimer */}
        <div
          style={{
            borderTop: `1px solid rgba(23,62,61,0.12)`,
            paddingTop: 20,
            marginTop: 8,
          }}
        >
          <p
            className="Font_YV text-center"
            style={{
              fontSize: "clamp(12px, 1.8vw, 16px)",
              color: ACCENT,
              // opacity: 0.5,
              lineHeight: 1.7,
              margin: 0,
              // fontStyle: "italic",
            }}
          >
            Please note that all appointments are arranged directly with the
            salon or artist and are subject to their availability, pricing, and
            booking policies.
          </p>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        input::placeholder,
        textarea::placeholder {
          opacity: 0.9;
        }
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: ${ACCENT} !important;
          box-shadow: 0 2px 6px rgba(23, 62, 61, 0.15);
        }
        button {
          outline: none;
        }
        @media (max-width: 600px) {
          .step-dots span {
            display: none;
          }
          body {
            overflow-x: hidden;
          }
          .step-indicator-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .step-indicator-scroll::-webkit-scrollbar {
            display: none;
          }
        }
        @media (max-width: 480px) {
          header {
            padding: 20px 16px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────

function SectionRule({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 0,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: 1,
          minHeight: "20px",
          height: 1,
          backgroundColor: ACCENT,
          opacity: 0.1,
        }}
      />
      <span
        className="Font_YV"
        style={{
          fontSize: "clamp(9px, 1.5vw, 10px)",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          opacity: 0.3,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          minHeight: "20px",
          height: 1,
          backgroundColor: ACCENT,
          opacity: 0.1,
        }}
      />
    </div>
  );
}

function StepHeading({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2
        className="Font_Q"
        style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 300,
          margin: "0 0 6px",
          color: ACCENT,
        }}
      >
        {num && (
          <span
            style={{
              fontSize: "clamp(16px, 3vw, 24px)",
              opacity: 0.4,
              marginRight: 8,
            }}
          >
            {num}.
          </span>
        )}
        {title}
      </h2>
      <p
        className="Font_YV"
        style={{
          fontSize: "clamp(13px, 2vw, 18px)",
          margin: 0,
          fontWeight: 300,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function Field({ label, children, note, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          marginBottom: 8,
          flexWrap: "wrap",
        }}
      >
        <label
          className="Font_YV"
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: ACCENT,
            fontWeight: 700,
          }}
        >
          {label}
        </label>
        {note && (
          <span
            style={{
              fontSize: "clamp(12px, 2vw, 13px)",
              color: ACCENT,
              opacity: 0.65,
              fontWeight: 300,
              fontStyle: "normal",
              letterSpacing: "0.05em",
            }}
          >
            {note}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            color: ACCENT,
            opacity: 0.7,
            marginTop: 6,
            fontStyle: "italic",
          }}
        >
          ↑ {error}
        </p>
      )}
    </div>
  );
}

function Input({ placeholder, value, onChange }) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="Font_YV"
      style={{
        width: "100%",
        padding: "14px 14px",
        borderBottom: `2px solid rgba(23,62,61,0.3)`,
        color: ACCENT,
        fontSize: "clamp(14px, 3vw, 16px)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        transition: "all 0.3s",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = ACCENT;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(23,62,61,0.3)";
      }}
    />
  );
}

function Textarea({ placeholder, value, onChange, rows = 4 }) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      className="Font_YV"
      style={{
        width: "100%",
        padding: "12px 0",
        resize: "vertical",
        backgroundColor: "transparent",
        borderBottom: `2px solid rgba(23,62,61,0.3)`,
        color: ACCENT,
        fontSize: "clamp(14px, 3vw, 16px)",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        transition: "all 0.3s",
        borderRadius: 0,
        minHeight: "80px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = ACCENT;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(23,62,61,0.3)";
      }}
    />
  );
}

function Select({ value, onChange, options, placeholder }) {
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="Font_YV"
        style={{
          width: "100%",
          padding: "12px 40px 12px 0",
          backgroundColor: "transparent",
          borderBottom: `2px solid rgba(23,62,61,0.3)`,
          color: value ? ACCENT : "rgba(23,62,61,0.35)",
          fontSize: "clamp(14px, 3vw, 16px)",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          appearance: "none",
          cursor: "pointer",
          transition: "all 0.3s",
          borderRadius: 0,
          minHeight: "46px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = ACCENT;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(23,62,61,0.3)";
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          opacity: 0.4,
        }}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2 4l4 4 4-4"
          stroke={ACCENT}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function RadioPill({ label, selected, onSelect, block }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="Font_YV"
      style={{
        padding: "10px 16px",
        width: block ? "100%" : "auto",
        textAlign: block ? "left" : "center",
        border: `1px solid ${ACCENT}`,
        borderRadius: 8,
        backgroundColor: selected
          ? ACCENT
          : hovered
            ? "rgba(23,62,61,0.04)"
            : "transparent",
        color: selected ? BG : ACCENT,
        fontSize: "clamp(13px, 2.5vw, 14px)",
        // fontFamily: "'Jost', sans-serif",
        cursor: "pointer",
        fontWeight: selected ? 400 : 300,
        transition: "all 0.25s ease",
        minHeight: "42px",
        boxShadow: hovered
          ? "0 2px 6px rgba(23,62,61,0.12)"
          : "0 1px 3px rgba(23,62,61,0.05)",
      }}
    >
      {label}
    </button>
  );
}

function ServiceCard({ label, selected, onToggle }) {
  const [hovered, setHovered] = useState(false);
  const icons = {
    "Hair Style": (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 2C8 2 5 5 5 9c0 3 1.5 5.5 4 7l1 6h4l1-6c2.5-1.5 4-4 4-7 0-4-3-7-7-7z" />
      </svg>
    ),
    "Make-Up": (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="1" />
        <line x1="12" y1="23" x2="12" y2="21" />
      </svg>
    ),
    "Saree Draping": (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M6 3c0 0 2 2 2 6s-2 6-2 9M18 3c0 0-2 2-2 6s2 6 2 9M9 3c0 3 3 5 3 9s-3 6-3 9M15 3c0 3-3 5-3 9s3 6 3 9" />
      </svg>
    ),
  };
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "20px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        border: `1px solid ${ACCENT}`,
        borderRadius: 10,
        backgroundColor: selected
          ? ACCENT
          : hovered
            ? "rgba(23,62,61,0.04)"
            : "transparent",
        color: selected ? BG : ACCENT,
        cursor: "pointer",
        transition: "all 0.3s ease",
        minHeight: "120px",
        boxShadow: hovered
          ? "0 3px 10px rgba(23,62,61,0.16)"
          : "0 1px 3px rgba(23,62,61,0.08)",
      }}
    >
      <div
        style={{
          // opacity: selected ? 0.9 : 0.5,
          transition: "opacity 0.3s",
        }}
      >
        {icons[label]}
      </div>
      <span
        className="Font_YV"
        style={{
          fontSize: "clamp(11px, 2vw, 16px)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
    </button>
  );
}

function SuccessScreen({ name }) {
  const ref = useRef(null);
  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      gsap.fromTo(
        ref.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
      );
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        maxWidth: 560,
        margin: "40px auto 80px",
        padding: "0 20px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: "clamp(50px, 10vw, 64px)",
          height: "clamp(50px, 10vw, 64px)",
          border: `1px solid ${ACCENT}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 28px",
        }}
      >
        <svg
          width="clamp(20px, 4vw, 24px)"
          height="clamp(20px, 4vw, 24px)"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12l5 5L19 7"
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2
        className="Font_Q"
        style={{
          fontSize: "clamp(26px, 7vw, 56px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: ACCENT,
          margin: "0 0 14px",
          lineHeight: 1.2,
        }}
      >
        All set,
        <br />
        {name || "dear guest"}.
      </h2>
      <p
        className="Font_YV"
        style={{
          fontSize: "clamp(16px, 2.5vw, 18px)",
          color: ACCENT,
          // opacity: 0.55,
          lineHeight: 1.8,
          fontWeight: 300,
          padding: "0 10px",
        }}
      >
        Your salon booking request has been received. Our team will be in touch
        to confirm your appointments.
      </p>
      {/* <div
        style={{
          marginTop: 32,
          width: 1,
          height: "clamp(40px, 8vw, 60px)",
          backgroundColor: ACCENT,
          opacity: 0.2,
          margin: "32px auto 0",
        }}
      /> */}
    </div>
  );
}

const solidBtnStyle = {
  padding: "12px 24px",
  backgroundColor: ACCENT,
  color: BG,
  border: `1px solid ${ACCENT}`,
  borderRadius: 8,
  fontSize: "clamp(12px, 2vw, 14px)",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  cursor: "pointer",
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  transition: "all 0.3s ease",
  boxShadow: "0 2px 6px rgba(23,62,61,0.12)",
};

const ghostBtnStyle = {
  padding: "12px 20px",
  backgroundColor: "transparent",
  color: ACCENT,
  border: `1px solid ${ACCENT}`,
  borderRadius: 8,
  fontSize: "clamp(12px, 2vw, 14px)",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  cursor: "pointer",
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  transition: "all 0.3s ease",
  boxShadow: "0 1px 3px rgba(23,62,61,0.08)",
};

function SalonCard({ salon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid rgba(23,62,61,${hovered ? "0.3" : "0.12"})`,
        borderRadius: 10,
        padding: "20px 18px",
        transition: "all 0.25s ease",
        backgroundColor: hovered ? "rgba(23,62,61,0.025)" : "transparent",
        boxShadow: hovered
          ? "0 3px 12px rgba(23,62,61,0.1)"
          : "0 1px 3px rgba(23,62,61,0.05)",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <h4
          className="Font_Q"
          style={{
            margin: "0 0 2px",
            fontSize: "clamp(16px, 2.5vw, 19px)",
            fontWeight: 300,
            // fontStyle: "italic",
            color: ACCENT,
            lineHeight: 1.3,
          }}
        >
          {salon.name}
        </h4>
        {salon.note && (
          <span
            className="Font_YV"
            style={{
              fontSize: "clamp(10px, 1.5vw, 11px)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              // opacity: 0.4,
            }}
          >
            {salon.note}
          </span>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {salon.website && (
          <SalonLink
            href={salon.website}
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            }
            label="Website"
          />
        )}
        {salon.instagram && (
          <SalonLink
            href={salon.instagram}
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            }
            label="Instagram"
          />
        )}
        {salon.email && (
          <SalonLink
            href={`mailto:${salon.email}`}
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
            label={salon.email}
          />
        )}
        {salon.contact && (
          <SalonLink
            href={`tel:${salon.contact.replace(/\s/g, "")}`}
            icon={
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
            label={`${salon.contact}${salon.contactNote ? ` (${salon.contactNote})` : ""}`}
          />
        )}
      </div>
    </div>
  );
}

function SalonLink({ href, icon, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        color: ACCENT,
        // opacity: hovered ? 1 : 0.55,
        textDecoration: "none",
        transition: "opacity 0.2s",
        fontSize: "clamp(12px, 1.8vw, 13px)",
        // fontFamily: "'Jost', sans-serif",
        letterSpacing: "0.04em",
      }}
    >
      <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>
      <span
        className="Font_YV"
        style={{
          textDecoration: hovered ? "underline" : "none",
          textUnderlineOffset: 3,
          wordBreak: "break-all",
        }}
      >
        {label}
      </span>
    </a>
  );
}
