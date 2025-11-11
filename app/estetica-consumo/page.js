import React from "react";

// Componente de Tarjeta de Contenido base
const Card = ({ children }) => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 mb-12 border border-gray-100">
        {children}
    </div>
);

// Componente para mostrar un Testimonio con Audio (REINCORPORADO)
const TestimonioCard = ({ texto, autor, parte, claseFondo, claseBorde }) => (
    <blockquote
        className={`p-6 rounded-lg my-4 shadow-xl border-l-8 ${claseFondo} ${claseBorde} transition duration-300 hover:shadow-2xl flex flex-col justify-between h-full`}
    >
        <div>
            <p className="italic text-xl mb-4 leading-relaxed text-gray-900">
                "{texto}"
            </p>
            <footer className="text-right text-sm font-semibold text-gray-700 mb-4">
                — {autor}
            </footer>
        </div>
        <div className="mt-auto pt-4">
            <p className="text-xs font-semibold text-gray-500 mb-2">Sobre: {parte}</p>
        </div>
    </blockquote>
);

const EsteticaConsumoPage = () => {
    // Datos del entrevistado
    const entrevistado = "Juan Cespedes, 21 años en la época, Entrevistado";

    return (
        <main className="min-h-screen bg-gray-100">
            {/* HERO/HEADER (Color magenta para distinguirlo) */}
            <section className="py-14 mb-12 bg-fuchsia-600 shadow-2xl">
                <header className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
                        La Estética de Consumo y la Desconfianza
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto text-fuchsia-100">
                        La promesa de estabilidad del dólar y el trauma de la pesificación de los ahorros.
                    </p>
                </header>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-fuchsia-500 pb-2">El fin del Contrato Social del Trabajo</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                        La ilusión de un país próspero con el "1 a 1", inyectó en Argentina una estética de consumo que imitaba el modelo de Estados Unidos y Europa. La paridad cambiaria facilitó la importación, llenando los centros comerciales de artículos extranjeros y redefiniendo lo que significaba ser moderno y exitoso. La vestimenta, la tecnología y hasta la comida rápida se volvieron marcadores de una nueva "identidad aspiracional".
                    </p>
                    
                </section>

                {/* Sección 1: La Ilusión del Ahorro y el Corralito */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-fuchsia-500 pl-3">El Mito de Ahorrar en Dólares</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Durante la Convertibilidad, la Estética de Consumo estaba ligada al ahorro en la divisa estadounidense. Ahorrar dólares en el banco era sinónimo de planificación y seguridad, un pilar fundamental para la clase media y trabajadora que buscaba progreso. El "Corralito" fue la traición final a este pilar, convirtiendo los ahorros de toda una vida en un papel sin valor.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        El testimonio de Juan Cespedes ilustra perfectamente este colapso de la confianza:
                    </p>
                    <TestimonioCard
                        texto="cada semana me daban una plata. eran 70 mil dolares en el banco y con esa plata cuando pesificaron, comprando, comprando, 10 mil dolares habre sacado, cuanto habra sido la perdida... yo fui todavia al banco y estaban cerrados, ahora no hay no guardo nada en el banco, ya no, olvidate"
                        autor={entrevistado}
                        parte="La pérdida de ahorros y la desconfianza total"
                    />
                </Card>

                {/* Sección 2: El Quiebre de la Ley y el Orden de Consumo */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-fuchsia-500 pl-3">Monedas Alternativas: Trueque y Bonos</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Ante la crisis de liquidez y la devaluación, la estética de consumo basada en el dinero tradicional colapsó. El valor de los productos ya no se medía solo en pesos o dólares, sino en su utilidad directa. Esto dio origen a dos fenómenos opuestos a la moneda tradicional:
                    </p>
                    
                    {/* Trueque Masivo - Adaptado a texto corrido */}
                    <h3 className="font-bold text-xl mb-2 mt-6 text-gray-800">El Trueque Masivo</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Surgieron miles de clubes de trueque, donde la gente intercambiaba bienes y servicios sin usar efectivo. Este sistema creó una estética de consumo comunitaria y de subsistencia, redefiniendo el valor de los objetos por su utilidad inmediata. 
                    </p>

                    <TestimonioCard
                    texto={"Habia trueque, vos llebabas cosas tuyas y el otro traia otras cosas y te daban papelitos en ese salon ponele, un galpon, lo que venga, papelito te daban que te comprabas con 200, con 100 y te podias comprar una manzana, lo que venga. O puedes cambiar, vos le das una taza y ella te da sus frutas, ponele algo que nos sirva a cada uno... los papelitos tenian un cellito del local donde se podian usar, tipo tarjetitas... Tambien al trueque de vez en cuando nos ibamos si algo nos faltaba o solo ir a 'bichiarlo', a mirarlo"}
                    autor={entrevistado}
                    parte={"Los trueques"}
                    />
                    <img src="https://th.bing.com/th/id/OIP.HVVpDmQnYz-IyDk_GzOOKQHaD8?w=285&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Imagen representativa de un club de trueque en Argentina"
                className="w-full h-auto rounded-xl shadow-lg mb-6"/>
                    
                    {/* Bonos (Lecop/Patacón) - Adaptado a texto corrido */}
                    <h3 className="font-bold text-xl mb-2 mt-6 text-gray-800">La Circulación de Bonos (Lecop / Patacón)</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        El gobierno emitió bonos de emergencia (como el Lecop o el Patacón) que funcionaban como moneda paralela. Estos "papeles" tenían circulación limitada y eran aceptados solo en ciertos comercios, obligando a los ciudadanos a adaptar sus hábitos de compra a las restricciones de la nueva moneda. 
                    </p>
                    <TestimonioCard
                    texto={"sacaron una plata que digamos llamaban pesos lecop, creo que eso no habia en el banco, solamente esa plata recorria, el lecop era como un billete de 100 pesos que le dieron un valor de digamos 3 o 4 meses, con eso te comprabas. Eso si use"}
                    autor={entrevistado}
                    parte={"Sobre los clubes de trueque"} />
                    <img src="https://th.bing.com/th/id/OIP.ix93DOkEKypjDfIB70jGfgHaDQ?w=304&h=153&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Imagen representativa de la crisis de 2001 en Argentina"
                className="w-full h-auto rounded-xl shadow-lg mb-6"/>
                </Card>

                {/* Sección 3: Defensa de la Propiedad Empresarial */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-fuchsia-500 pl-3">Defender la Fuente de Consumo</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        En medio del caos y la desesperación, la preocupación pasó de consumir a defender lo que aún se tenía. El propio entrevistado relata cómo tuvo que participar en la defensa de su lugar de trabajo ante la ola de saqueos que amenazaba con llevarse la infraestructura que, al fin y al cabo, les daba sustento.
                    </p>
                    <TestimonioCard
                        texto="Cuando se pudrio todo, yo estaba trabajando, nos llamaron del celular y nos dijeron 'la gente esta viniendo, lleven las maquinas al galpon'... gente venia corriendo toda furia... eran capaces de agarrar todo lo que valga, lo que tenga valor o que le sirva a uno..."
                        autor={entrevistado}
                        parte="Defensa de la empresa ante los saqueos"
                    />
                </Card>

            </div>
        </main>
    );
};

export default EsteticaConsumoPage;