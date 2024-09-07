import './Button.css'

export default function Button ({children, onclick}) {
    return <button className="btn" onClick={onclick}>{children}</button>
}