function SucessMessage({ mensagem }) {
    return (
        <p className="sucess-snackbar" role="status" aria-live="polite">{mensagem}</p> 
    )
}

export default SucessMessage