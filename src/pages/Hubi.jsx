import { widgets } from '../widgets/registry'
import WidgetFrame from '../widgets/WidgetFrame'

export default function Hubi() {
    return (
        <div>
            {Object.entries(widgets).map(([id, w]) => {
                const Component = w.component 
                return (
                    <WidgetFrame key={id} title={w.title}>
                        <Component />
                    </WidgetFrame>
                )
            })}
        </div>
    )
}