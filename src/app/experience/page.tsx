import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';

export const metadata = {
  title: 'Experience',
  description: 'Professional experience, education, certifications, and achievements',
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
    </>
  );
}