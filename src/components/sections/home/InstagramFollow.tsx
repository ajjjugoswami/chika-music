import { FaInstagram } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { siteConfig } from "@/content/site";

export function InstagramFollow() {
  const { instagram } = siteConfig.social;

  return (
    <section className="container-x py-section">
      <Reveal className="relative overflow-hidden rounded-panel bg-linear-120 from-[#feda75] via-[#d62976] to-[#4f5bd5] p-px">
        <div className="flex flex-col gap-6 rounded-[calc(var(--radius-panel)-1px)] bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-center gap-4">
            <FounderAvatar className="size-16 ring-[#d62976]" />
            <div>
              <p className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#d62976]">
                <FaInstagram className="size-4" />
                {instagram.handle}
              </p>
              <h2 className="mt-1 text-[1.375rem] leading-snug tracking-[-0.03em] sm:text-[1.625rem]">
                Follow along on Instagram
              </h2>
              <p className="mt-1 text-[14.5px] text-muted">Class moments, student performances and new batch updates.</p>
            </div>
          </div>
          <ButtonLink href={instagram.url} external icon={<FaInstagram className="size-4" />} className="shrink-0">
            Follow us
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
