// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

import './CommentList.css'


import { useState } from "react";

function CommentsList() {
    
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);


    

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id))
    }

    return (
        <ul>
            {comments.map(comment => <li key={comment.id}><span style={{marginRight: 10}}>{comment.text}</span>
            <button onClick={() => deleteComment(comment.id)}>delete</button> </li>)}
        </ul>
     );
}

export default CommentsList;
