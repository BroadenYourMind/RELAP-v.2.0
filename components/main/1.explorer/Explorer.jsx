import React from 'react';
import styled from 'styled-components';
import ExplorerContainer from './ExplorerContainer';

const StyledExplorer = styled.section`
background: linear-gradient(224.72deg, #3023AE -1%, #C86DD7 100.5%);
overflow: hidden;
`


const Explorer = () => {
    return (
        <StyledExplorer>
            <ExplorerContainer/>
        </StyledExplorer>
    )
}

export default Explorer