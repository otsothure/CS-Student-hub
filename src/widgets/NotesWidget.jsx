import { useStore } from '../store/useStore'

export default function NotesWidget() {
    const notes = useStore((s) => s.notes)
    const setNotes = useStore((s) => s.setNotes)
    return (
        <textarea
            aria-label="Muistio"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
        />
    )
}