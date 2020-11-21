import IHistoryState from './IHistoryState';
interface IHistory {
    pathname: string;
    state: IHistoryState;
}

export default IHistory;