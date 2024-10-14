import './Home.css';
import Contact from "../../components/Contact";

const Home = () => {
    return (
        <main>
            <section className="historia">
                Bem-vindo ao mundo Pokémon! Aqui você encontrará histórias épicas, personagens fascinantes e tudo sobre as lendárias criaturas que capturam os corações dos fãs há décadas.
                <div>
                    <img src="../../assets/pikachu.svg" />
                    Desde o início da jornada em Kanto até as descobertas em Paldea, o mundo Pokémon está sempre em expansão. A cada nova região, novas criaturas, lendas e desafios aguardam os treinadores. Ao longo da história, surgiram Pokémon lendários e míticos com poderes inimagináveis. Todo Pokémon tem o potencial de evoluir e se transformar em algo ainda mais poderoso. Conheça as linhas evolutivas que marcaram a franquia! Pronto para embarcar em sua própria jornada Pokémon? Explore todos os mistérios e personagens que fazem deste mundo um lugar mágico e repleto de aventuras! 
                </div>
            </section>
            <Contact />
        </main>
    )
}

export default Home;