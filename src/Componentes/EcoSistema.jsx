


function EcoSistema(props) {
    return(
        <>
            <h1>Lista de ecosistemas</h1>

            <ul>
                    <li>{ props.EcoSistema['CERRADO'] }</li>
                    <li>{ props.EcoSistema['MANGUEZAL'] }</li>
                    <li>{ props.EcoSistema['PANTANAL'] }</li>
            </ul>


        </>
    )
}

export default ListaEcoSistema;