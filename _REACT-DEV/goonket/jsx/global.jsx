export function PageButton({text, destination}) {
    return (
        <button onClick={() => {window.location.href = destination}}>{text}</button>
    );
};