import {
    ListItem,
    ListItemLogo,
    ListItemMainImg,
    ListItemCenterLine,
    ListItemAvatarWrapper,
    ListItemAvatar,
    ListItemInfo,
    ListItemText,
    LIstItemBtn } from "./CardsListItem.styled";
import logo from '../../images/logo.png';
import picture from '../../images/picture.png'

export const CardsListItem = ({item, handleBtnClicl, state}) => {
    const {id, tweets, followers, avatar} = item;

    const iFollow = state.includes(id);
    const followersR = iFollow ? followers + 1 : followers;

    return (
        <ListItem>
            <ListItemLogo src={logo} alt="GoIT logo"/>
            <ListItemMainImg src={picture} />
            <ListItemCenterLine />
            <ListItemAvatarWrapper>
                <ListItemAvatar src={avatar} />
            </ListItemAvatarWrapper>
            <ListItemInfo>
                <ListItemText>{tweets} tweets</ListItemText>
                <ListItemText>{followersR.toLocaleString('en-US')} followers</ListItemText>
            </ListItemInfo>
            <LIstItemBtn following={iFollow} onClick={() => handleBtnClicl(id)}>
                {iFollow ? ('following') : ('follow')}
            </LIstItemBtn>
        </ListItem>
    )
}