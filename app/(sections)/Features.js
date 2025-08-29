const items = [

];

export default function Features(){
  return (
    <section id="features" className="py-20">
      <div className="container">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((i)=> (
            <div key={i.title} className="card text-center group hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{i.icon}</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
