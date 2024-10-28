import { ResumeDrawer } from "@/components/drawers/resumeDrawer";
import { ContactDrawer } from "@/components/drawers/contactDrawer";
import { ExperiencesDrawer } from "@/components/drawers/experiencesDrawer";
import { EducationDrawer } from "@/components/drawers/educationDrawer";
import { SkillsDrawer } from "../drawers/skillsDrawer";
import { ResearchDrawer } from "@/components/drawers/researchDrawer";

export default function ActionsSection({ def, data }) {
  return (
    (data?.actions?.show || def.actions.show) && (
      <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
        <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 items-start -mx-4 transition-all">
          
          {(data?.actions?.resume?.show || def.actions.resume.show) && (
            <ResumeDrawer
              label={data?.actions?.resume?.label || def.actions.resume.label}
              src={data?.actions?.resume?.url || def.actions.resume.url}
              download_url={
                data?.actions?.resume?.download || def.actions.resume.download
              }
            />
          )}

          {(data?.actions?.contact?.show || def.actions.contact.show) && (
            <ContactDrawer
              label={data?.actions?.contact?.label || def.actions.contact.label}
              email={
                data?.actions?.contact?.address || def.actions.contact.address
              }
              showEmailMe={data?.actions?.emailMe?.show || def.actions.emailMe.show}
              showContactCard={data?.actions?.contactCard?.show || def.actions.contactCard.show}
            />
          )}

          {(data?.actions?.experiences?.show ||
            def.actions.experiences.show) && (
            <ExperiencesDrawer label="Experiences" data={data || def} />
          )}

          {(data?.actions?.skills?.show || def.actions.skills.show) && (
            <SkillsDrawer label="Skills" data={data || def} />
          )}

          {(data?.actions?.educations?.show || def.actions.educations.show) && (
            <EducationDrawer label="Education" data={data || def} />
          )}

          {(data?.actions?.research?.show || def.actions.research.show) && (
            <ResearchDrawer label="Research" data={data || def} />
          )}
        </div>
      </div>
    )
  );
}
