import './Modal.css';

export const Modal = ( {username, toggleFollowing, hiddenModal}) => {
    const stopFollowing = () => {
        toggleFollowing(),
        hiddenModal();
    }

    return (
        <section className='modal'>
            <div className='modal__content'>
                <h2 className='modal__title'>¿Queres dejar de seguir a {username}?</h2>
                <p className='modal__description'>Sus posts ya no aparecerán en tu Cronología de inicio. Podrás seguir viendo su perfil, a menos que sus posts estén protegidos.</p>
                <div className='modal__buttons'>
                    <button className='modal__button' onClick={stopFollowing}>Dejar de seguir</button>
                    <button className='modal__button modal__button--ghost' onClick={hiddenModal}>Cancelar</button>
                </div>
            </div>
        </section>
    );
}