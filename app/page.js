import React from "react";

// Componente para mostrar un Testimonio con Audio (restaurado)
const TestimonioCard = ({ texto, autor, parte }) => (
  <section className="bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 mb-12 border border-gray-100">
    <div>
        <p className="italic text-xl mb-4 leading-relaxed text-gray-900">
          "{texto}"
        </p>
        <footer className="text-right text-sm font-semibold text-gray-700 mb-4">
          — {autor}
        </footer>
    </div>

    <div className="mt-auto pt-4">
        <p className="text-xs font-semibold text-gray-500 mb-2">{parte}</p>
    </div>
  </section>
);

// Componente de Tarjeta para contenido
const Card = ({ children }) => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 mb-12 border border-gray-100">
        {children}
    </div>
);

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* HERO/HEADER */}
      <section className="py-14 mb-12 bg-sky-600 shadow-2xl">
        <header className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Argentina 2001: una cicatriz en la historia reciente
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-sky-100">
            Un análisis de la crisis social, económica y política que culminó en
            diciembre, contrastando la vivencia general con un testimonio personal.
          </p>
        </header>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-sky-400 pb-2">Recordemos</h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                Como ciudadanos de la Argentina, todos hemos escuchado más de una vez las palabras de la crisis social, económica y política que culminó en aquel diciembre del 2001. Hoy, a más de dos décadas, profundizaremos en los inicios y en cómo fue la vivencia para quienes estuvieron presentes, sumergiéndonos en la historia que guarda nuestro país.
            </p>
            <img
                src="https://imgs.search.brave.com/qyIeapv-l77k2foWJldqKT0udgqJEeTQTYVoI2SCdV8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi8tREVXV0dX/QlNTSkhXUEdFT05G/QlBOWkxVUk0uZ2lm/P2F1dGg9Y2JhODRj/MTZiMjc1MjkzZjdi/YmIwNjlkMmJmMzUz/Nzg2MGVjYTk3NzU0/ZTE0Zjk1Njg2N2Ex/MDgzYzFhMTZmZCZ3/aWR0aD0zMjAmaGVp/Z2h0PTIxMyZxdWFs/aXR5PTcwJnNtYXJ0/PXRydWU.jpeg"
                alt="Imagen representativa de la crisis de 2001 en Argentina"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
            />
        </section>

        <Card>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-sky-500 pl-3">Fernando de la Rúa</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                Fernando de la Rúa asumió la presidencia de Argentina en diciembre de 1999, en un contexto económico ya complicado. Esto fue impulsado por la ley de convertibilidad impuesta por el expresidente Carlos Menem, la cual ataba el valor del peso al dólar (el famoso 1 a 1), generando una aparente estabilidad monetaria. A largo plazo, esta política resultó insostenible, generando una creciente deuda externa, un desempleo en aumento y, en consecuencia, un pueblo descontento.
            </p>
            <img
                src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBBTWknlV0iH_wyIMmB4Hnv3SKixMhEzVSA&s"
                }
                alt={"Imagen de asunción presidencial de De la Rúa"}
                className="w-full h-auto rounded-lg shadow-md"
            />
        </Card>

        <Card>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-sky-500 pl-3">El Corralito</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                A causa del desastre económico del momento, el ministro Domingo Cavallo, implementó en diciembre del 2001 una medida conocida como "el corralito". Esta medida limitaba la cantidad de dinero que los ciudadanos podían retirar de sus cuentas bancarias a un máximo de 250 pesos por semana, generando gran indignación y desesperación, ya que muchos no podían acceder a sus propios ahorros.
            </p>
            <img
                src={"/noticia_corralito.png"}
                alt={"Imagen de noticia sobre el corralito"}
                className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            <p className="mb-6 text-gray-700 leading-relaxed">
                Todo esto generó un estallido social en el que cientos de argentinos, sin importar la clase social, se unieron para protestar contra el gobierno y sus medidas económicas.
            </p>
            <img
                src={
                    "https://estadodealerta.com.ar/wp-content/uploads/2021/12/marchas.jpeg"
                }
                alt={"Imagen de protestas en 2001"}
                className="w-full h-auto rounded-lg shadow-md"
            />
        </Card>
        <Card>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-sky-500 pl-3">El Cacerolazo y la Tragedia</h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
                La noche del 19 de diciembre de 2001, De la Rúa, en un intento desesperado por calmar las protestas, declaró el estado de sitio. La medida tuvo el efecto contrario: decenas de miles de personas salieron a las calles con cacerolas, exigiendo la renuncia frente a la Casa Rosada y entonando el famoso grito "que se vayan todos", dando inicio a "El Cacerolazo".
            </p>
            <div className="flex space-x-4 mb-6">
                <img
                    src={"https://razonyrevolucion.org/wp-content/uploads/2018/10/argentinazo.jpg"}
                    alt={"Imagen de cacerolazo"}
                    className="w-1/2 h-auto rounded-lg shadow-md"
                />
                <img
                    src={"https://questiondigital.com/wp-content/uploads/2012/12/arg-cacerolazos-2001.jpg"}
                    alt={"Imagen de cacerolazo"}
                    className="w-1/2 h-auto rounded-lg shadow-md"
                />
            </div>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
                La protesta duró toda la noche y el día siguiente, donde finalmente se dio la orden de reprimir a los manifestantes, resultando en una tragedia: 39 personas perdieron la vida y cientos resultaron heridos.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
                <img
                    src={"https://www.elextremosur.com/files/image/14/14746/5fe883d282f4d_1180_664!.jpg?s=e9f4c33cb6935e099c83d91e3fe4d853&d=1754031157"}
                    alt={"Imagen de represión en las calles"}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <img
                    src={"https://www.unidiversidad.com.ar/upload/violencia-2001-101.jpg"}
                    alt={"Imagen de represión en las calles"}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <img
                    src={"https://www.lanacion.com.ar/resizer/v2/enfrentamientos-entre-los-manifestantes-y-la-6PACLUC7EZF4NOPQXRPVDB7APE.jpg?auth=9816d2d5760e2a960befef112a92bdccbb71d16a8254b46d3ad3bb58df96b45f&width=420&height=280&quality=70&smart=true"}
                    alt={"Imagen de enfrentamientos"}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <img
                    src={"https://resizer.glanacion.com/resizer/v2/un-joven-herido-pide-ayuda-despues-de-ser-2M3OMQJVEJFY3E7UFCU2P5OQUQ.jpg?auth=bbd939dd9017dfc45d0ff9f431bbbdc0b7bd6dbb0252479cca75186db879c5eb&width=1200&quality=70&smart=false&height=800"}
                    alt={"Imagen de joven herido"}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
            </div>
        </Card>

        <Card>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-sky-500 pl-3">La Renuncia</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                Finalmente, el 20 de diciembre de 2001, Fernando de la Rúa renunció a la presidencia y abandonó el país en helicóptero, dejando un vacío de poder y una crisis política que llevó a una serie de presidentes interinos en un corto período de tiempo. La crisis del 2001 dejó una profunda cicatriz en la sociedad argentina, marcando un antes y un después en la historia del país.
            </p>
            <img
                src={"/se_fue_de_la_rua.jpeg"}
                alt={"Helicóptero de De la Rúa sobre la Casa Rosada"}
                className="w-full h-auto rounded-lg shadow-md"
            />
        </Card>

        <Card>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-emerald-500 pl-3">El Día Después: Saqueos y Trueques</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
                La renuncia de De la Rúa no marcó el fin de la crisis social, sino una nueva fase de caos e ingenio popular. La desesperación económica generalizada dio lugar a oleadas de saqueos en supermercados y comercios, especialmente en los días posteriores a la renuncia, como una cruda manifestación de la falta de alimentos y recursos básicos. 
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
                En contraste, y como una respuesta creativa a la debacle monetaria, floreció el sistema del trueque. Barrios enteros organizaron ferias y "clubes del trueque" donde los ciudadanos intercambiaban bienes y servicios sin usar dinero, desde alimentos caseros hasta ropa y reparaciones. Este fenómeno de solidaridad y autogestión se convirtió en un símbolo de resiliencia ante el colapso estatal y la parálisis bancaria. 
            </p>
        </Card>

        <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-sky-400 pb-2">Las Voces del 2001</h2>
            <p className="mb-8 text-gray-700 leading-relaxed text-lg">
              A continuacion, presentamos una serie de comentarios de nuestro entrevitado sobre su vivencia en esos tiempos de crisis.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* Testimonio del Entrevistado (Cita 1: Corralito y Empresa) - REVISADO */}
                <TestimonioCard
                    texto="Cuando se pudrio todo, yo estaba trabajando, nos llamaron del celular y nos dijeron 'la gente esta viniendo, lleven las maquinas al galpon'... gente venia corriendo toda furia... eran capaces de agarrar todo lo que valga, lo que tenga valor o que le sirva a uno..."
                    autor="Juan Cespedes, 21 años en la epoca, Entrevistado"
                    parte="Sobre el estadillo social"
                />
                <TestimonioCard
                    texto="Siempre fui laburante, no sabia mucho de lo que pasaba, no tenia tele y trabajaba de 8 de la mañana a 10 de la noche, dificil que me entere de algo..."
                    autor="Juan Cespedes, 21 años en la epoca, Entrevistado"
                    parte="Sobre su conexion con el tema"
                />
                <TestimonioCard
                    texto="si, me agarro, me agarro, cada semana me daban una plata. eran 70 mil dolares en el banco y con esa plata cuando pesificaron, comprando, comprando, 10 mil dolares habre sacado, cuanto habra sido la perdida... me entere del corralito por que en las noticias dijeron que en un helicoptero salio De la rúa, yo fui todavia al banco y estaban cerrados, ahora no hay no guardo nada en el banco, ya no, olvidate"
                    autor="Juan Cespedes, 21 años en la epoca, Entrevistado"
                    parte="Sobre el corralito"
                />
                <TestimonioCard
                    texto="Luego de su renuncia, no paso una semana y nos pararon a todos, estuve 2 semanas sin trabajo o 3 semanas, despues de ahi fui a rosario... en esas 2 semanas como yo labure mucho continuo, tranquilo me quede, tenia mis ahorros"
                    autor="Juan Cespedes, 21 años en la epoca, Entrevistado"
                    parte="Sobre la renuncia de De la Rúa"
                />
                <TestimonioCard
                    texto="nunca me gusto eso de ser piquetero, si fui a una marcha obligado por el sindicalismo, trabajamos hasta medio dia, de ahi nos llevaron en colectivo, era una marcha pasifica, una protesta, unas 6-8 cuadras de gente seguro"
                    autor="Juan Cespedes, 21 años en la epoca, Entrevistado"
                    parte="Sobre el cacerolazo"
                />
                <TestimonioCard
                    texto="si, los saqueaban hasta a supermercados chinos, supermercados grandes, en la televicion lo vi pero nunca lo presencie, aparecia la policia pero no hacian nada, no tenian orden seguramente, me imagino... si salias a la calle te sentias perseguido, como si te fueran a robar en cualquier momento, algun personaje..."
                    autor="Juan Cespedes, 21 años en la epoca, Entrevistado"
                    parte="Sobre los saqueos y la policia"
                />
            </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;