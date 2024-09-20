import { ResumeDrawer } from "@/components/drawers/resumeDrawer";
import { ContactDrawer } from "@/components/drawers/contactDrawer";
import { ExperiencesDrawer } from "@/components/drawers/experiencesDrawer";
import { EducationDrawer } from "@/components/drawers/educationDrawer";

export default function ActionsSection({ data }) {
  return (
    (data?.actions?.show || def.actions.show) && (
      <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
        <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 items-start -mx-4 transition-all">
          {(data?.actions?.resume?.show || def.actions.resume.show) && (
            <ResumeDrawer
              label={data?.actions?.resume?.label || def.actions.resume.label}
              src={data?.actions?.resume?.url || def.actions.resume.url}
            />
          )}

          {(data?.actions?.contact?.show || def.actions.contact.show) && (
            <ContactDrawer
              label={data?.actions?.contact?.label || def.actions.contact.label}
              email={
                data?.actions?.contact?.address || def.actions.contact.address
              }
            />
          )}

          {(data?.actions?.experiences?.show ||
            def.actions.experiences.show) && (
              <ExperiencesDrawer label="Experiences" data={data || def} />
            )}

          {(data?.actions?.educations?.show || def.actions.educations.show) && (
            <EducationDrawer label="Education" data={data || def} />
          )}
        </div>
      </div>
    )
  );
}