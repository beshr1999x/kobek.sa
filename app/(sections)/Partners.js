const partners = ["Roasters", "Brew Lab", "Daily Cup", "Bean House", "Arabica"];
export default function Partners(){
  return (
    <section id="partners" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-extrabold">المقاهي المشاركة (نموذج)</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {partners.map(p => (
            <div key={p} className="card text-center">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
