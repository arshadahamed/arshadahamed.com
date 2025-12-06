import Link from "next/link";

import AnimatedButton from "../animation/AnimatedButton";

export default function NextPrevNavigation({ projectId, total }: { projectId: string | number; total: number }) {
  // Convert projectId to number if it's a string
  const currentId = typeof projectId === 'string' ? parseInt(projectId) : projectId;
  
  const prev = currentId > 1 ? currentId - 1 : null;
  const next = currentId < total ? currentId + 1 : null;
  
  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project__nav">
        <div className="mxd-project__divider anim-uni-in-up" />
        <div className="container-fluid p-0">
          <div className="row g-0">
            
            {/* Previous Button */}
            <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
              {prev ? (
                <Link href={`/projects/${prev}`}>
                  <AnimatedButton
                    text="Prev"
                    as="span"
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left"
                  >
                    <i className="ph ph-arrow-left" />
                  </AnimatedButton>
                </Link>
              ) : (
                <Link href="/projects">
                  <AnimatedButton
                    text="Back to Projects"
                    as="span"
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left"
                  >
                    <i className="ph ph-arrow-left" />
                  </AnimatedButton>
                </Link>
              )}
            </div>

            {/* Next Button */}
            <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
              {next ? (
                <Link href={`/projects/${next}`}>
                  <AnimatedButton
                    text="Next"
                    as="span"
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right"
                  >
                    <i className="ph ph-arrow-right" />
                  </AnimatedButton>
                </Link>
              ) : (
                <Link href="/projects">
                  <AnimatedButton
                    text="Back to Projects"
                    as="span"
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right"
                  >
                    <i className="ph ph-arrow-right" />
                  </AnimatedButton>
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}