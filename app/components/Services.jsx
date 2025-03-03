import Image from "next/image";

const services = [
  { img: "/images/concrete-pump.gif", title: "Κατασκευή Καλουπιών", desc: "Αναλαμβάνουμε καλουπώματα για κάθε έργο." },
  { img: "/images/factory.gif", title: "Βιομηχανικά Έργα", desc: "Σταθερές και ανθεκτικές κατασκευές." },
  { img: "/images/home.gif", title: "Ανακαινίσεις", desc: "Αναλαμβάνουμε ειδικές κατασκευές και ανακαινίσεις." },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100 " id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Οι Υπηρεσίες μας</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              {/* Display GIF instead of icons */}
              <div className="w-24 h-24 mx-auto">
                <Image src={service.img} alt={service.title} width={96} height={96} />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-700">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
