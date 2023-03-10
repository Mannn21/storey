import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 160px;
    padding: 20px 70px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #c4dbe1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 120px;
`

export const FooterText = styled.div`
    padding: 10px;
`

export const FooterName = styled.h2`
    color: #2c365a;
    font-size: 26px;
    letter-spacing: 3px;
    font-weight: 800;
`

export const FooterSpan = styled.span`
    letter-spacing: 1.3px;
    font-size: 18px;
    fotn-weight: 600;
` 

export const SosmedWrapper = styled.div`
    padding: 10px;
`

export const WrapperItem = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center
`

export const SosmedItem = styled.li`
    list-style: none;
`

export const SosmedLink = styled.a`
    color: #434343;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1.3px;

    &:hover {
        color: #455db4;
    }
`