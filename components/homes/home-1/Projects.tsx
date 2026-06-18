"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects1 } from "@/data/projects.json";
import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards =
      sectionRef.current?.querySelectorAll<HTMLElement>(".pf-card");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("pf-card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const displayProjects = projects1.slice(0, 5);

  return (
    <div
      id="projects"
      className="mxd-section padding-hero-09 padding-grid-pre-mtext"
      ref={sectionRef}
    >
      <style>{`
        /* ─── Portfolio Projects: Case Files Grid ─── */

        .pf-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          padding-bottom: 2rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid rgba(128,128,128,0.18);
        }

        .pf-header__meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .pf-header__eyebrow {
          font-size: 0.625rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-family: 'Courier New', monospace;
          opacity: 0.45;
          margin: 0;
        }

        .pf-header__right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-shrink: 0;
        }

        .pf-header__count {
          font-size: 0.625rem;
          letter-spacing: 0.12em;
          font-family: 'Courier New', monospace;
          opacity: 0.35;
        }

        /* ─── Grid ─── */

        .pf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: auto;
          gap: 1rem;
        }

        /* First card: featured, full-width */
        .pf-card--featured {
          grid-column: 1 / -1;
        }

        /* ─── Card ─── */

        .pf-card {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
          background: #0d0d0d;
          opacity: 0;
          transform: translateY(56px) scale(0.97);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .pf-card--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ─── Inner link ─── */

        .pf-card__link {
          display: block;
          position: relative;
          width: 100%;
          min-height: 400px;
          text-decoration: none;
          overflow: hidden;
        }

        .pf-card--featured .pf-card__link {
          min-height: 560px;
        }

        /* ─── Background image layer ─── */

        .pf-card__bg {
          position: absolute;
          inset: -10px;
          background-size: cover;
          background-position: center;
          transition: transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pf-card:hover .pf-card__bg {
          transform: scale(1.08);
        }

        /* ─── Gradient vignette ─── */

        .pf-card__vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            170deg,
            rgba(0,0,0,0.0) 0%,
            rgba(0,0,0,0.25) 35%,
            rgba(0,0,0,0.82) 100%
          );
          transition: opacity 0.45s ease;
        }

        .pf-card:hover .pf-card__vignette {
          opacity: 0.9;
        }

        /* ─── Ghost ordinal ─── */

        .pf-card__ghost {
          position: absolute;
          top: 0.75rem;
          right: 1.25rem;
          font-size: clamp(5.5rem, 12vw, 11rem);
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -0.07em;
          color: rgba(255,255,255,0.04);
          pointer-events: none;
          user-select: none;
          z-index: 1;
          transition: color 0.6s ease, transform 0.6s ease;
        }

        .pf-card:hover .pf-card__ghost {
          color: rgba(255,255,255,0.1);
          transform: scale(1.04) translateX(-4px);
        }

        /* ─── Top badge ─── */

        .pf-card__badge {
          position: absolute;
          top: 1.625rem;
          left: 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 2;
        }

        .pf-card__index {
          font-size: 0.5625rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: 'Courier New', monospace;
          color: rgba(255,255,255,0.45);
        }

        .pf-card__industry {
          font-size: 0.5625rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: 'Courier New', monospace;
          color: rgba(255,255,255,0.3);
        }

        .pf-card__dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }

        /* ─── Bottom content ─── */

        .pf-card__body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.875rem 2rem;
          z-index: 2;
        }

        .pf-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-bottom: 0.8rem;
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 0.35s ease 0s,
            transform 0.35s ease 0s;
        }

        .pf-card:hover .pf-card__tags {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 0.4s ease 0.04s,
            transform 0.4s ease 0.04s;
        }

        .pf-tag {
          display: inline-block;
          padding: 0.175rem 0.55rem;
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: 'Courier New', monospace;
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 2px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(4px);
        }

        .pf-card__footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
        }

        .pf-card__title {
          font-size: clamp(0.9rem, 2vw, 1.35rem);
          font-weight: 600;
          color: #fff;
          margin: 0;
          line-height: 1.18;
          letter-spacing: -0.025em;
          flex: 1;
        }

        .pf-card--featured .pf-card__title {
          font-size: clamp(1.3rem, 3.2vw, 2.1rem);
        }

        .pf-card__arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 50%;
          color: #fff;
          font-size: 1rem;
          flex-shrink: 0;
          opacity: 0;
          transform: rotate(-42deg) scale(0.75);
          transition:
            opacity 0.32s ease 0.08s,
            transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) 0.08s,
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .pf-card:hover .pf-card__arrow {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        .pf-card__arrow:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.45);
        }

        /* ─── Thin accent line on featured card ─── */

        .pf-card--featured::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--accent, #ddf160);
          transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
          z-index: 3;
        }

        .pf-card--featured.pf-card--visible::after {
          width: 100%;
        }

        /* ─── Responsive ─── */

        @media (max-width: 768px) {
          .pf-grid {
            grid-template-columns: 1fr;
          }

          .pf-card--featured {
            grid-column: 1;
          }

          .pf-card__link {
            min-height: 300px;
          }

          .pf-card--featured .pf-card__link {
            min-height: 380px;
          }

          .pf-card__tags {
            opacity: 1;
            transform: none;
          }

          .pf-card__arrow {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }

          .pf-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .pf-card__body {
            padding: 1.375rem 1.5rem;
          }

          .pf-header__right {
            gap: 1rem;
          }
        }
      `}</style>

      <div className="mxd-container grid-container">
        <div className="mxd-block">

          {/* ── Section Header ── */}
          <div className="pf-header">
            <div className="pf-header__meta">
              <p className="pf-header__eyebrow">Selected Work</p>
              <RevealText as="h2" className="h2-large reveal-type">
                Projects
              </RevealText>
            </div>
            <div className="pf-header__right">
              <span className="pf-header__count">
                05 / {String(projects1.length).padStart(2, "0")}
              </span>
              <AnimatedButton
                text="See All"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="/projects"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
            </div>
          </div>

          {/* ── Projects Bento Grid ── */}
          <div className="pf-grid">
            {displayProjects.map((project, index) => (
              <div
                key={project.id}
                className={`pf-card${index === 0 ? " pf-card--featured" : ""}`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="pf-card__link"
                  aria-label={project.title}
                >
                  {/* Background image */}
                  <div className={`pf-card__bg ${project.previewClass}`} />

                  {/* Dark gradient vignette */}
                  <div className="pf-card__vignette" />

                  {/* Ghost large ordinal */}
                  <span className="pf-card__ghost" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Top badge: index + industry */}
                  <div className="pf-card__badge">
                    <span className="pf-card__index">
                      — {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.industries && (
                      <>
                        <span className="pf-card__dot" aria-hidden="true" />
                        <span className="pf-card__industry">
                          {project.industries}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Bottom content */}
                  <div className="pf-card__body">
                    <div className="pf-card__tags">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="pf-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pf-card__footer">
                      <h3 className="pf-card__title">{project.title}</h3>
                      <div className="pf-card__arrow" aria-hidden="true">
                        <i className="ph-bold ph-arrow-up-right" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
