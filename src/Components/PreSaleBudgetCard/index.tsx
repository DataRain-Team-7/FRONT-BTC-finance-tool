import * as Styled from "./style"

const PreSaleBudgetCard = () =>{

    return(
        <Styled.PreSaleBudgetContainer>
            <section className="client">
                <div>
                    <p>Cliente</p>
                    <h3>Jenny Wilson</h3>
                </div>
                <div>
                    <p>Empresa</p>
                    <h3>Jenny Wilson</h3>
                </div>
            </section>
            <section className="summary">
                <div className="questions">
                    <h2>Questões</h2>
                    <div>
                        <h4>1- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>
                    <div>
                        <h4>2- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>
                    <div>
                        <h4>3- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>    
                </div>
                <div className="hours">
                    <h2>Horas</h2>
                    <div>
                        <p>50hr</p>
                        <p>72hr</p>
                        <p>72hr</p>
                    </div>
                </div>
                <div className="value">
                    <h2>Valor/hr</h2>
                    <div>
                        <p>R$: 159,90</p>
                        <p>R$: 140,90</p>
                        <p>R$: 199,90</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Nota sobre o orçamento</h2>
                <input></input>
                <div>
                    <p>Horas Totais: 194hr</p>
                    <p>Valor Total - R$ 39.509,50</p>
                </div>
            </section>
            <button>Finalizar orçamento</button>   
        </Styled.PreSaleBudgetContainer>
    )
}

export default PreSaleBudgetCard