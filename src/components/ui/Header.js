import React, {useContext, useEffect} from "react";
import styled, {css} from "styled-components";
import {Context as CryptoContext} from "../../context/CryptoContext";

const Logo = styled.div`
  font-size: 2.0rem;
  font-family: 'Rajdhani', sans-serif;
`
const Subheadings = styled.div`
  cursor:pointer;
  ${props => props.active && css`
      color: salmon;
  `}
`
const SubHeader = ({title,active}) => {

    const crypto = useContext(CryptoContext)
    //
    // useEffect(() => {
    //
    //     cryptoContext.setPage('Account')
    //
    // }, [])
    //
    console.log(crypto)
    return (
    <Subheadings onClick={()=>crypto.setPage(title)} active={crypto.state.page === title}>
        {title}
    </Subheadings>
    )
}

const Head = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px 100px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
`

const Header = () =>{
    return (
        <Head>
            <Logo>Cypto_</Logo>
            <div/>
            <SubHeader title="Dashboard"/>
            <SubHeader title="Account"/>
            <SubHeader title="Settings"/>
        </Head>
    )
}

export default Header;