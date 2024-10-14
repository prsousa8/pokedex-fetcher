import './Contact.css';

const Contact = () => {
    return (
        <div className="campo">
            <h2>Paulo Ricardo dos Santos Sousa</h2>
            Graduando em Engenharia de Computação
            <div id="contatos">
                <div className="contato" id="linkedin"><a href="https://www.linkedin.com/in/pauloricardo8/" target="blank">Linkedin</a></div>
                <div className="contato" id="github"><a href="https://github.com/prsousa8/" target="blank">Github</a></div>
                <div className="contato" id="instagram"><a href="https://www.instagram.com/pauloricardo_176/" target="blank">Instagram</a></div>
            </div>
        </div>
    )
}

export default Contact;