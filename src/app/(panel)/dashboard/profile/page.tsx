export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold mb-6">Perfil</h1>
            <p className="text-gray-700 mb-4">
                Aqui você pode gerenciar as informações do seu perfil.
            </p>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Informações do Perfil</h2>
                {/* Formulário de edição de perfil será renderizado aqui */}
            </div>
        </div>
    );
}