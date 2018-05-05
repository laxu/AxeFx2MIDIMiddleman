import * as React from 'react';
import * as classNames from 'classnames';
  
import { BoardObject } from '../../api/board-object';
import './_sidebar.scss';

interface Props {
    boards: BoardObject[];
    currentBoardId: string;
    addNewBoard: () => void;
    editBoard: (board: BoardObject) => void;
    selectBoard: (board: BoardObject) => void;
}

const Sidebar: React.SFC<Props> = (props) => {
    const { addNewBoard, boards, currentBoardId, editBoard, selectBoard } = props;

    return (
        <div className="sidebar">
            <ul className="boards">
                <li>
                    <button className="btn btn--primary add-board" onClick={() => addNewBoard()}>
                        <i className="fa fa-plus" aria-hidden="true"></i>Add pedalboard
                    </button>
                </li>
                {boards && boards.length > 0 && boards.map((board, i) => (
                    <li key={`board-${i}`} className={classNames('board', {'active': board.id === currentBoardId})}>
                        <div className="board-action" onClick={() => editBoard(board)} title="Edit pedalboard">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </div>
                        <div className="board-label" onClick={() => selectBoard(board)}>{board.label || `Board ${board.id}`}</div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default Sidebar;