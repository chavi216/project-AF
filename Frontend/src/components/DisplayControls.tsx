import { type DisplayMode } from '../types/flight';
import './Styles/DisplayControls.css';

interface DisplayControlsProps {
    mode: DisplayMode;
    onModeChange: (mode: DisplayMode) => void;
    onAddData: () => void;
}

export default function DisplayControls({ mode, onModeChange, onAddData }: DisplayControlsProps) {
    return (
        <div className="toolbar" aria-label="Display controls">
            <div className="mode-switch" role="tablist" aria-label="Display mode">
                <button
                    type="button"
                    className={mode === 'text' ? 'active' : ''}
                    onClick={() => onModeChange('text')}
                >
                    TEXT
                </button>
                <button
                    type="button"
                    className={mode === 'visual' ? 'active' : ''}
                    onClick={() => onModeChange('visual')}
                >
                    VISUAL
                </button>
            </div>
            <button
                type="button"
                className="add-button"
                aria-label="Add flight data"
                onClick={onAddData}
            >
                +
            </button>
        </div>
    );
}
