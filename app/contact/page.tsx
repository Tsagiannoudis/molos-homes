import HeroSection from "@/components/contact/HeroSection";
import ContactWithUs from "@/components/contact/ContactWithUs";
import FormContact from "@/components/contact/FormContact";

export default function contact() {
    return (
    <>
        <HeroSection />
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Αριστερή Στήλη: Πληροφορίες Επικοινωνίας */}
                <ContactWithUs />
                {/* Δεξιά Στήλη: Φόρμα Επικοινωνίας */}
                <FormContact />
            </div>
        </section>
    </>
  );

}