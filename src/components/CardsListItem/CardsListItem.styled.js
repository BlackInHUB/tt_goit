import styled from "styled-components";

export const ListItem = styled.li`
    position: relative;
    /* padding: 20px; */
    text-align: center;
    width: 380px;
    height: 460px;
    background-image: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
`;

export const ListItemLogo = styled.img`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const ListItemMainImg = styled.img`
    position: absolute;
    top: 28px;
    left: 36px;
`

export const ListItemCenterLine = styled.div`
    margin-top: 214px;
    width: 100%;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`

export const ListItemAvatarWrapper = styled.div`
    position: absolute;
    top: 178px;
    left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`;

export const ListItemAvatar = styled.img`
    display: block;
    width: 62px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px -2.19582px 4.39163px #AE7BE3;
`;

export const ListItemInfo = styled.div`
    margin-top: 62px;
`;

export const ListItemText = styled.p`
    color: #EBD8FF;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase;

    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const LIstItemBtn = styled.button`
    width: 196px;
    padding: 14px 0 14px 0;
    font-family: inherit;
    font-size: 18px;
    line-height: 1.22;
    font-weight: 600;
    color: #373737;
    text-transform: uppercase;
    border: none;
    background-color: ${p => p.following ? '#5CD3A8' : '#EBD8FF'};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    margin-top: 26px;
    outline: none;
    transition: all 250ms linear;

    &:hover,
    :focus-visible {
        background-color: #5CD3A8;
    };

    &:active {
        box-shadow: none;
        transform: translate(2px, 2px);
    }
`;


