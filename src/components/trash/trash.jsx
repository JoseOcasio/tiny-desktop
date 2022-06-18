import './trash.css';

function Trash() {

    const filesInTrash = ["Document1", "Music1", "Document2", "Video2", "Application3", "Game2"];

    const files = filesInTrash.map(file => {
        return <div className='item item-margin'>{file}</div>;
    })
    return (
        <div className='item-container'>
            <div className="trash-container">
                {files}
            </div>
        </div>
        
    );
}

export default Trash;