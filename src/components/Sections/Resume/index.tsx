import {FC, memo} from 'react';

import {useLanguage} from '../../../contexts/LanguageContext';
import {getData, SectionId} from '../../../data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {language} = useLanguage();
  const {education, experience, skills} = getData(language);

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={language === 'zh' ? '教育经历' : 'Education'}>
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={language === 'zh' ? '工作经历' : 'Work'}>
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={language === 'zh' ? '技能' : 'Skills'}>
          <p className="pb-8">
            {language === 'zh'
              ? '在这里你可以展示你的技能快照以向雇主展示'
              : 'Here you can show a snapshot of your skills to show off to employers'}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
