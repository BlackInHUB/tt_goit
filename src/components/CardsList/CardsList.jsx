import users from '../../db.json';
import { List } from './CardsList.styled';
import { CardsListItem } from '../CardsListItem/CardsListItem';
import useLocalStorage from '../../hooks/useLocalStorage';

export const CardsList = () => {
    const [state, setState] = useLocalStorage('iFollow', []);

    const fallowToggle = (id) => {
        if (state.includes(id)) {
            setState(prevState => prevState.filter(item => item !== id));
            return;
        };
        setState([...state, id]);
    };

    return (
        <List>
            {users.map(item => <CardsListItem key={item.id} item={item} handleBtnClicl={fallowToggle} state={state} />)}
        </List>
    )
}