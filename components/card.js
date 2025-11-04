// Componente de Tarjeta para contenido
export const Card = ({ children }) => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 mb-12 border border-gray-100">
        {children}
    </div>
);