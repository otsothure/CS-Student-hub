export default function WidgetFrame({ title, status = 'ready', children }) {
    return (
        <section aria-label={title} className="widget">
            <h2>{title}</h2>
            {status === 'loading' && <p role="status">Ladataan</p>}
            {status === 'error' && <p role="alert">Jokin meni pieleen.</p>}
            {status === 'empty' && <p>Ei vielä sisältöä</p>}
            {status === 'ready' && children}
        </section>
    )
}