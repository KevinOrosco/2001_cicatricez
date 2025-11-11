import React from "react";

// Componente de Tarjeta de Contenido base
const Card = ({ children }) => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 mb-12 border border-gray-100">
        {children}
    </div>
);

// Componente para mostrar un Testimonio con Audio (REINCORPORADO)
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

const EticaTrabajoPage = () => {
    // Datos del entrevistado
    const entrevistado = "Juan Cespedes, 21 años en la época";

    return (
        <main className="min-h-screen bg-gray-100">
            {/* HERO/HEADER (Color verde más oscuro para la seriedad del tema) */}
            <section className="py-14 mb-12 bg-lime-700 shadow-2xl">
                <header className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
                        La Ética del Esfuerzo: Colapso en 2001
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto text-lime-100">
                        La crisis que no solo destruyó el peso, sino también la promesa de que la dedicación y el trabajo duro serían recompensados.
                    </p>
                </header>
            </section>
            
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* INTRODUCCIÓN - La promesa rota */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-lime-500 pb-2">El fin del Contrato Social del Trabajo</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                        Durante la década del '90, la ética del trabajo en argentina se alineó con la estabilidad del 'uno a uno', donde la dedicación total, lealtad a la empresa y ahorro eran la fórmula para el ascenso social. El ciudadano debía ser un 'laburante' incansable para acceder a la modernidad y el consumo. El 2001 no solo terminó con la paridad cambiaria, sino que pulverizó la confianza en esta fórmula, demostrando que el esfuerzo de una vida podía desaparecer por una decisión política o un decreto.
                    </p>
                    
                </section>

                {/* Sección 1: La Ética de la Dedicación Absoluta (Antes de la crisis) */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-lime-500 pl-3">Dedicación total: la desconexión social</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        En la cima de la Convertibilidad, el ideal era trabajar sin descanso. La jornada laboral extensa se consideraba una virtud, aunque esto significara desatender la vida social o, crucialmente, la realidad política que se gestaba. La promesa de progreso mantenía a muchos enfocados únicamente en la producción personal.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                            Esta desconexión, impulsada por la necesidad de generar el ingreso en un sistema económico frágil, generó una burbuja social donde la mayoría de la población solo percibió la crisis cuando ya era inminente y afectaba directamente su bolsillo o su empleo.
                    </p>
                    <div className="gap-4">
                        <TestimonioCard
                            texto="Siempre fui laburante, no sabia mucho de lo que pasaba, no tenia tele y trabajaba de 8 de la mañana a 10 de la noche, dificil que me entere de algo..."
                            autor={entrevistado}
                            parte="La desconexión por la jornada laboral"
                        />
                    </div>
                </Card>

                {/* Sección 2: El Quiebre de la Confianza (El Castigo al Ahorro) */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-lime-500 pl-3">El Corralito: el esfuerzo confiscado</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        El golpe más duro a la ética del trabajo fue el Corralito. Si la ética se basa en que el esfuerzo produce ahorro y el ahorro asegura el futuro, la restricción bancaria demostró que el Estado podía confiscar el fruto de años de sacrificio. El trabajador no solo perdió su fuente de ingresos (por desempleo), sino también su respaldo económico.
                    </p>
                    <div className="gap-4">
                        <TestimonioCard
                            texto="Eran 70 mil dolares en el banco y con esa plata cuando pesificaron, comprando, comprando, 10 mil dolares habre sacado, cuanto habra sido la perdida... me entere del corralito por que en las noticias dijeron que en un helicoptero salio De la rúa..."
                            autor={entrevistado}
                            parte="La pérdida de ahorros por el Corralito y Pesificación"
                        />
                    </div>
                    <p className="mb-6 text-gray-700 leading-relaxed mt-6">
                        El sentimiento de traición fue generalizado. La experiencia del Corralito no solo dejó pérdidas materiales, sino una cicatriz cultural que destruyó la confianza en la seguridad financiera y en las instituciones, generando lo que conocemos como "ahorros bajo el colchón".
                    </p>
                    <div className="gap-4">
                        <TestimonioCard
                            texto="ahora no hay no guardo nada en el banco, ya no, olvidate."
                            autor={entrevistado}
                            parte="La desconfianza permanente"
                        />
                    </div>
                </Card>

                {/* Sección 3: La Nueva Ética de la Supervivencia */}
                <Card>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-lime-500 pl-3">De la Fábrica al Piquete: la protesta como trabajo</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        Ante el desempleo masivo, el trabajo se fragmentó en formas de supervivencia. La informalidad (changas, cartoneros) se convirtió en la norma. Para quienes perdieron todo, la única forma de conseguir un 'trabajo' o un subsidio era a través de la organización popular y la protesta. La ética del esfuerzo se transformó en la ética de la "lucha social".
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                         Aunque la participación del entrevistado fue más bien forzada, refleja cómo incluso la clase trabajadora con empleo se vio arrastrada a la protesta ante el colapso.
                    </p>
                    <div className=" gap-4 my-8">
                        <TestimonioCard
                            texto="nunca me gusto eso de ser piquetero, si fui a una marcha obligado por el sindicalismo, trabajamos hasta medio dia, de ahi nos llevaron en colectivo, era una marcha pasifica, una protesta, unas 6-8 cuadras de gente seguro"
                            autor={entrevistado}
                            parte="Participación forzada en la marcha"
                        />
                    </div>
                    
                </Card>

            </div>
        </main>
    );
};

export default EticaTrabajoPage;