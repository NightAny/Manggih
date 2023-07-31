import { Link } from "react-router-dom";
import imgpreview from "../../../assets/image-review.svg";

const CadastroCliente = () =>{
    return(
        <main>
            <article class="md:bg-purple-400">
                <div class="min-h-screen flex items-center justify-center">
                    <div class="lg:w-1/2 md:p-12 rounded-xl bg-white">
                        <h2 class="text-center text-xl">Cadastro Cliente</h2>
                        <div class="flex justify-between">
                            <div class="w-1/2 flex flex-col justify-end">
                                <h2 class="mt-8 mb-4">Nome</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 class="mt-8 mb-4">CPF</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 class="mt-8 mb-4">Telefone</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 class="mt-8 mb-4">E-mail</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="text" />
                            </div>
                            <div class="w-1/2 ml-8">
                                <div class="flex justify-center">
                                    <div class="w-32 h-32 rounded-full hover:border-4 border-purple-200 transition-colors flex flex-col items-center justify-center bg-purple-500">
                                        <img src={imgpreview} alt="img-preview" />
                                        <p>Faça upload</p>
                                        <input class="w-32 h-32 cursor-pointer absolute opacity-0" type="file" />
                                    </div>
                                </div>
                                <h2 class="mt-8 mb-4">Nascimento</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="date" />
                                <h2 class="mt-8 mb-4">Senha</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="password" />
                                <h2 class="mt-8 mb-4">Confirmar Senha</h2>
                                <input class="w-full px-2 py-1 border-2 border-black" type="password" />
                            </div>
                        </div>
                        <div class="flex justify-center mt-16">
                            <button class="w-64 py-2 text-white rounded-lg bg-purple-500"><Link to="/login">Cadastrar</Link></button>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroCliente;