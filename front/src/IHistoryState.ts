import MemoData from './MemoData';
import Session from './Session';
interface IHistoryState {
    memoData: MemoData;
    editMode: "insert" | "update";
    session: Session;
}

export default IHistoryState;