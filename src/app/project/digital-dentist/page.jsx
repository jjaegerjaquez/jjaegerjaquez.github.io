import ProjectTitle from '@/components/Project/ProjectTitle';
import ProjectBanner from '@/components/project/ProjectBanner';
import ProjectTechStack from '@/components/project/ProjectTechStack';

const page = () => {
  return (
    <>
      <ProjectTitle>Digital Dentist</ProjectTitle>
      <ProjectBanner imgSrc="/projects/digitaldentist.PNG" />
      <ProjectTechStack />
      <div className="flex flex-col gap-y-3 mt-10 text-lg text-justify">
        <p>Digital Dentist is an online management information system for dental clinics that can be used for managing patient records, transactions and other dental information.</p>
        <p className="font-semibold">Key Features:</p>
        <ul className="list-decimal list-inside space-y-5">
          <li className="space-y-3">
            <span className="font-semibold">Patient Management: </span>Records patient's personal information, medical history, treatment plans, dental certificates and prescriptions.
            <img src="/projects/dd-patient.jpg" alt="" />
          </li>
          <li className="space-y-3">
            <span className="font-semibold">Appointment Schedulling: </span>Schedules patients appointments.
            <img src="/projects/dd-appointment.jpg" alt="" />
          </li>
          <li className="space-y-3">
            <span className="font-semibold">Billing and Invoicing: </span>Records and generates payment invoices.
            <img src="/projects/dd-payments.jpg" alt="" />
            <img src="/projects/dd-payment-2.jpg" alt="" />
            <img src="/projects/dd-payment-3.jpg" alt="" />
          </li>
          <li className="space-y-3">
            <span className="font-semibold">Reporting and Analytics: </span>Reports to monitor clinic performance, key metrics and revenue trends.
            <img src="/projects/dd-report.jpg" alt="" />
            <img src="/projects/dd-report-2.png" alt="" />
            <img src="/projects/dd-report-3.jpg" alt="" />
          </li>
          <li className="space-y-3">
            <span className="font-semibold">Procedure Management: </span>Records all procedures performed in the clinic with it's corresponding price which streamlines the billing process.
            <img src="/projects/dd-procedure.png" alt="" />
          </li>
          <li className="space-y-3">
            <span className="font-semibold">Doctor Management: </span>Records doctor personal information, patients, cash advance and schedule.
            <img src="/projects/dd-doctor.jpg" alt="" />
            <img src="/projects/dd-doctor-2.jpg" alt="" />
            <img src="/projects/dd-doctor-3.jpg" alt="" />
            <img src="/projects/dd-doctor-4.jpg" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
 
export default page;